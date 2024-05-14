import { FlatList, ScrollView, StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FloatingButtons from "../../components/floatingButtons";
import AddModal from '../../components/addModal';
import TaskBox from "../../components/TaskBox";
import React, {useState, useEffect} from "react";
import useHouseData from "../../use/useHouseData";
import { onValue, ref, remove } from "firebase/database";
import { database } from "../../config/firebase";

const tasks = () => {
  const {houseId} = useHouseData();
  const [tasks, setTasks] = useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onModalOpen = () => {
    setIsModalVisible(true)
  }

  const onModalClose = () => {
    setIsModalVisible(false)
  }

  useEffect(() => {
    const tasksRef = ref(database, `houses/${houseId}/tasks`)

    const unsbscribe = onValue(tasksRef, (snapshot) => {
      const taskData = snapshot.val();
      const loadedTasks = [];

      for (const id in taskData) {
        loadedTasks.push({
          id,
          ...taskData[id]
        });
      }
      loadedTasks.reverse();
      setTasks(loadedTasks);
    })

    return () => unsbscribe();
  }, [houseId])

  const handleDeleteTask = (taskId) => {
    const taskRef = ref(database, `houses/${houseId}/tasks/${taskId}`);
  
    remove(taskRef)
      .then(() => {
        console.log('Görev başarıyla silindi.');
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
      })
      .catch((error) => {
        console.error('Görev silinirken bir hata oluştu:', error);
      });
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Görev Listesi</Text>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Pressable onLongPress={() => {
              Alert.alert(
                'Görevi Sil',
                `${item.taskName} görevini silmek istediğinize emin misiniz?`,
                [
                  {
                    text: 'İptal',
                    onPress: () => console.log('Silme iptal edildi'),
                    style: 'cancel',
                  },
                  {
                    text: 'Sil',
                    onPress: () => handleDeleteTask(item.id),
                    style: 'destructive'
                  },
                ],
                { cancelable: false }
              );
            }}>
              <TaskBox taskName={item.taskName} assignedMembers={item.assignedMembers}/>
            </Pressable>
          </View>
        )}
      />
      <View style={{position: "absolute", bottom: 0, right: 0}}>
        <FloatingButtons onPress={onModalOpen} bgColor="#DEDF21"/>
      </View>
      <AddModal isVisible={isModalVisible} onclose={onModalClose} bgColor="#DEDF21"/>
    </SafeAreaView>
  );
};

export default tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
});
