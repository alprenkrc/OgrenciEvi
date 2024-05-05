import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const login = () => {
  return (
    <View style={styles.container}>
      <Text>LOGIN SCREEN</Text>
      <TextInput
        placeholder='Emailini gir'
        style={styles.input}
      />
      <TextInput
        placeholder='Parolanı gir'
        style={styles.input}
        
      />

      <Link style={styles.login} href="/home/main">
        <Text style={styles.text}>Giriş Yap</Text>
      </Link>
      <Link href="/register/register">
          Hesabın Yok mu Kayıt Ol
      </Link>


    </View>
  )
}

export default login

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