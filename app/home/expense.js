import { Alert, FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FloatingButtons from "../../components/floatingButtons";
import AddModal from '../../components/addModal';
import ExpenseBox from "../../components/ExpenseBox";
import React, {useState, useEffect} from "react";
import { database } from "../../config/firebase";
import { ref, onValue, remove } from "firebase/database";
import useHouseData from "../../use/useHouseData";



const expense = () => {
  const {houseId} = useHouseData();

  const [expenses, setExpenses] = useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onModalOpen = () => {
    setIsModalVisible(true)
  }

  const onModalClose = () => {
    setIsModalVisible(false)
  }

  useEffect(() => {
    // Giderlerin olduğu yola referans oluştur
    const expensesRef = ref(database, `houses/${houseId}/expenses`);

    // Veritabanındaki değişiklikleri dinle
    const unsubscribe = onValue(expensesRef, (snapshot) => {
      const expensesData = snapshot.val();
      const loadedExpenses = [];

      // Gelen veriyi işle ve bir liste haline getir
      for (const id in expensesData) {
        loadedExpenses.push({
          id,
          ...expensesData[id]
        });
      }
      loadedExpenses.reverse();

      // State'i güncelle
      setExpenses(loadedExpenses);
    });

    // Temizleme fonksiyonu
    return () => unsubscribe();
  }, [houseId]);

  const handleDeleteExpense = (expenseId) => {
    // Giderin bulunduğu yola referans oluştur
    const expenseRef = ref(database, `houses/${houseId}/expenses/${expenseId}`);
  
    // Gideri veritabanından kaldır
    remove(expenseRef)
      .then(() => {
        console.log('Gider başarıyla silindi.');
        // Gider listesini güncelle
        setExpenses(prevExpenses => prevExpenses.filter(expense => expense.id !== expenseId));
      })
      .catch((error) => {
        console.error('Gider silinirken bir hata oluştu:', error);
      });
  };




  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Ortak Giderler</Text>
      </View>
      <View style={{flex: 0.5}}>

      </View>

        {/*  */}
        <FlatList
        style={{flex: 1}}
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View>
            <Pressable onLongPress={() => {
                  Alert.alert(
                    'Gideri Sil', 
                    `${item.name} giderini silmek istediğinize emin misiniz?`, 
                    [
                      {
                        text: 'İptal',
                        onPress: () => console.log('Silme iptal edildi'),
                        style: 'cancel',
                      },
                      {
                        text: 'Sil', 
                        onPress: () => handleDeleteExpense(item.id), // Burada item.id expenseId olarak kullanılıyor
                        style: 'destructive'
                      },
                    ],
                    { cancelable: false }
                  );
            }} >
              <ExpenseBox name={item.name} amount={item.amount} description={item.description} date={item.date} fullName={item.fullName}/>

            </Pressable>
          </View>
        )}
      />


      <View style={{position: "absolute", bottom: 0, right: 0}}>
        <FloatingButtons onPress={onModalOpen} bgColor={"#EF5350"}/>
      </View>
      <AddModal isVisible={isModalVisible} onclose={onModalClose} bgColor="#EF5350"/>
    </SafeAreaView>
  );
};

export default expense

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
})