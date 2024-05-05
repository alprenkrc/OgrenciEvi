import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const register = () => {
  return (
    <View style={styles.container}>
      <Text>REGISTER SCREEN</Text>
      <TextInput
        placeholder='Emailini gir'
        style={styles.input}
      />
      <TextInput
        placeholder='Parolanı gir'
        style={styles.input}
      />
      <TextInput
        placeholder='Kullanıcı Adını Gir'
        style={styles.input}
      />
      <TextInput
        placeholder='Doğum Tarihini Gir'
        style={styles.input}
      />
      <TextInput
        placeholder='Telefon Numarası'
        style={styles.input}
      />
      <TextInput
        placeholder='Hangi Şehirdesin'
        style={styles.input}
      />

      <Link style={styles.login} href="/register/homeCreateOrJoin">
        <Text style={styles.text}>Devam Et(ev bilgilerini almak için)</Text>
          
      </Link>


    </View>
  )
}

export default register

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