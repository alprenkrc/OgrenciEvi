import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const login = () => {
  return (
    <View style={styles.container}>
      <Text>LOGIN SCREEN</Text>
      <TextInput
        placeholder='Emailini gir'
      />
      <TextInput
        placeholder='Parolanı gir'
      />
      <Button
        title='Giriş Yap'
      />
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
    alignItems: "center"
  }
})