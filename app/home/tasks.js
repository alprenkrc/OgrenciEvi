import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FloatingButtons from "../../components/floatingButtons";
import AddModal from '../../components/addModal';
import Tasks from "../../components/tasks";
import React, {useState} from "react";

const tasks = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onModalOpen = () => {
    setIsModalVisible(true)
  }

  const onModalClose = () => {
    setIsModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Görev Listesi</Text>
      </View>
      <ScrollView>
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
      </ScrollView>
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
