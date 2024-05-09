import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { router } from 'expo-router'



const account = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
        setUserId(user.uid);
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
      <Text>{userId}</Text>
      <Text>{userEmail}</Text>
      <Button
        title='çıkış yap'
        onPress={handleLogout}
      />
    </View>
  )
}

export default account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})