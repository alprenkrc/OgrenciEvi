import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { router } from 'expo-router'
import useHouseData from '../../use/useHouseData'


const account = () => {
  const {rent, houseId, memberFullNames, houseName} = useHouseData();
  //console.log(memberFullNames[0])
  

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");

  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
        setUserId(user.uid);
        setUserName(user.displayName);
      }
    })
    return () => unsubscribe();
  }, [])
  
  const handleLogout = async () => {
    try {
      await signOut(auth); // signOut fonksiyonunu async olarak çağırıyoruz
      console.log("Çıkış yapıldı");
      router.navigate("/") // Başarılı çıkış sonrası Login ekranına yönlendirme
    } catch (error) {
      console.error("Çıkış yapılırken hata oluştu: ", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{width:150, height: 150, borderRadius: 100, backgroundColor: "black"}}/>
      <Text>Home ID: {houseId}</Text>
      <Text>User ID: {userId}</Text>

      <Text></Text>

      <View style={styles.homeInfo}>

        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <Text style={{fontWeight: "bold", fontSize: 18}}>Ev Bilgileri</Text>
          <Feather name="edit" size={24} color="black" />
        </View>


        <Text style={{fontSize: 16}}>• Ev Adı: {houseName}</Text>
        <Text style={{fontSize: 16}}>• Kira: {rent}</Text>
        <Text style={{fontSize: 16}}>• Kira Günü: </Text>
      </View>
      <View style={styles.members}>
        <Text style={{fontWeight: "bold", fontSize: 18}}>Evdeki Kişiler:</Text>
        {memberFullNames.map((name, index) => (
          <Text key={index} style={{fontSize: 16}}>• {name}</Text>
        ))}
      </View>

      <View style={styles.userInfo}>
        <Text style={{fontSize: 18, fontWeight: "bold"}}>Hesap Bilgilerin</Text>
        <Text style={{fontSize: 16}}>• Eposta: {userEmail}</Text>
        <Text style={{fontSize: 16}}>• Kullanıcı Adı: {userName}</Text>
      </View>

      <TouchableOpacity style={styles.logout} onPress={handleLogout}>
        <Text style={{color: "white", fontSize: 16, fontWeight: "bold"}}>Çıkış Yap</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  members: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    marginBottom: 10
  },
  homeInfo: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    marginBottom: 10
  },
  userInfo: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    marginBottom: 10
  },
  logout: {
    width: "90%",
    backgroundColor: "#EF5350",
    borderRadius: 20,
    padding: 10,
    borderColor: "#530807",
    borderWidth: 1,
    alignItems: "center"
  }
})
