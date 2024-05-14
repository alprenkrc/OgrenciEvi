import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { database } from '../../config/firebase'; // 'storage' nesnesi şu anda kullanılmıyor
import { Link, router, useLocalSearchParams } from 'expo-router';
import { ref, push, set } from 'firebase/database';

const homeinfo = () => {
  const {uid, fullName} = useLocalSearchParams();
  console.log("uidyi alabildik",uid, fullName);
  
  const [houseName, setHouseName] = useState('');
  const [rent, setRent] = useState('');
  const [people, setPeople] = useState('');

  const handleCreateHouse = async () => {
    // Firebase database'e ev bilgilerini kaydet
    const houseRef = push(ref(database, 'houses'));
    const houseId = houseRef.key;
    await set(houseRef, {
      houseName,
      rent,
      people,
      members: {[uid]: {fullName: fullName}}
    });
    router.push({pathname: "/home/main", params: {houseId}})
    console.log("Ev oluşturuldu, ID:", houseId);
  };

  return (
    // ev kira mı
    // kira ise kira kaç para 
    // evde kaç kişi yaşıyor
    // evin ismini gir
    // eve fotoğra ekle

    <View style={styles.container}>

    <TextInput
      placeholder='Eve Bir İsim Gir'
      style={styles.input}
      value={houseName}
      onChangeText={setHouseName}
    />
    <TextInput
      placeholder='Ev Kira İse Kira Kaç Para'
      style={styles.input}
      value={rent}
      onChangeText={setRent}
      keyboardType='numeric'
    />
  {/**
    
       <TextInput
      placeholder='Kira Günü Ayın Kaçında'
      style={styles.input}
    />

        <TextInput
      placeholder='Eve Bir Fotoğraf Ekle'
      style={styles.input}
    />
   */
    
  }

    <TextInput
      placeholder='Evde Kaç Kişi Yaşıyor'
      style={styles.input}
      value={people}
      onChangeText={setPeople}
      keyboardType='numeric'
    />


    <Link style={styles.login} href="/register/qrScreen" onPress={handleCreateHouse}>
        <Text style={styles.text}>Evi Oluştur</Text>
      </Link>


  </View>

  )
}

export default homeinfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20
  },
  input: {
    width: "100%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "white",
    margin: 10,
    fontSize: 16
  },
  login: {
    width: "100%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#c7c70b",
    marginBottom: 10,
    textAlign: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
})