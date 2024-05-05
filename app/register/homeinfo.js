import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const homeinfo = () => {
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
    />
    <TextInput
      placeholder='Ev Kira İse Kira Kaç Para'
      style={styles.input}
    />
    <TextInput
      placeholder='Kira Günü Ayın Kaçında'
      style={styles.input}
    />
    <TextInput
      placeholder='Evde Kaç Kişi Yaşıyor'
      style={styles.input}
    />
    <TextInput
      placeholder='Eve Bir Fotoğraf Ekle'
      style={styles.input}
    />

    <Link style={styles.login} href="/register/qrScreen">
      <Text style={styles.text}>Evi Oluştur</Text>
        
    </Link>


  </View>

  )
}

export default homeinfo

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