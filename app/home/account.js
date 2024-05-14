import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { router } from 'expo-router'
import useHouseData from '../../use/useHouseData'


const account = () => {
  const {rent, houseId, memberFullNames} = useHouseData();
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
    <View style={styles.container}>
      <Text>Home ID: {houseId}</Text>
      <Text>Kira: {rent}</Text>
      <Text>User ID: {userId}</Text>
      <Text>User Email: {userEmail}</Text>
      <Text>User Name: {userName}</Text>
      <Text></Text>
      <Text>Evdeki Kişiler:</Text>
      {memberFullNames.map((name, index) => (
      <Text key={index}>{name}</Text>
      ))}


      <Button
        title='çıkış yapp'
        onPress={handleLogout}
      />
    </View>
  )
}

export default account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
