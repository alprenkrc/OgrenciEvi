import { Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react'
import useHouseData from '../use/useHouseData';
import { database , } from '../config/firebase';
import { push, ref } from 'firebase/database';


const addModal = ({isVisible, onclose, bgColor }) => {
    const { houseId } = useHouseData();

    const [expenseName, setExpenseName] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [isChecked, setChecked] = useState(false);

    const handleAddExpense = () => {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('tr-TR');
      const formattedTime = currentDate.toLocaleTimeString('tr-TR');
        
      const expenseData = {
        name: expenseName,
        description: description,
        amount: amount,
        date: `${formattedDate} ${formattedTime}`
      };
      console.log("gider eklendi", houseId)
      onAddExpense(houseId, expenseData)
      setExpenseName("");
      setDescription("");
      setAmount("");
      onclose();
    }

    const onAddExpense = (houseId, expenseData) => {
        const expensesRef = ref(database, `houses/${houseId}/expenses`);
        push(expensesRef, expenseData);
    };

    let modalContent = null;

    if (bgColor === "#EF5350") {
        modalContent =(
        <View style={{        alignItems: "center", width: "100%", padding: 20}}>
        <TextInput 
            style={styles.input} 
            placeholder='Gider Adı'
            value={expenseName}
            onChangeText={setExpenseName}
        />
        <TextInput 
            style={styles.input} 
            placeholder='Açıklama'
            value={description}
            onChangeText={setDescription}
        />
        <TextInput 
            style={styles.input} 
            placeholder='₺ Gider Miktarı' 
            keyboardType='numeric' 
            value={amount}
            onChangeText={setAmount}
            />
        <TouchableOpacity style={styles.button} onPress={handleAddExpense}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Gider Ekle</Text>
        </TouchableOpacity>
        </View>
        )
    } 
    if(bgColor === "#DEDF21") {
        modalContent = (
            <View style={{        alignItems: "center", width: "100%", padding: 20}}>
            <TextInput style={styles.input} placeholder='Görev Adı'/>
            <Text>Görev Alacak Kişileri Seç</Text>
            <View style={styles.taskBox}>
                <Text>Alperen</Text>
                <Checkbox value={isChecked} onValueChange={setChecked}/>

            </View>
            <TouchableOpacity style={[styles.button, {backgroundColor: "#DEDF21"}]} onPress={onclose}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Görev Ekle</Text>
            </TouchableOpacity>
            </View>
        )

    }
  return (
    <Modal
        animationType='slide'
        transparent={true}
        visible={isVisible}
    >
        <View style={styles.modalContent}>
            <Pressable onPress={onclose} style={{width: "35%", height:10, borderRadius: 50, backgroundColor: "#8C8A8A", marginTop: 7}}/>
            {modalContent}
        </View>
    </Modal>
  )
}


const styles = StyleSheet.create({
    modalContent: {
        height: '60%',
        width: '100%',
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: "#D9D9D9",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        position: 'absolute',
        bottom: 0,
        alignItems: "center"
    },
    input: {
        backgroundColor: "white",
        width: "100%",
        height: 50,
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#EF5350",
        width: "100%",
        height: 50,
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    taskBox: {
        width: "100%",
        padding: 20,
        backgroundColor: "white",
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-between"

    }
})

export default addModal;