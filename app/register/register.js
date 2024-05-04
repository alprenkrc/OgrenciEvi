import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const register = () => {
  return (
    <View style={styles.container}>
      <Text>REGISTER SCREEN</Text>
      <TextInput
        placeholder='Emailini gir'
      />
      <TextInput
        placeholder='Parolanı gir'
      />
      <TextInput
        placeholder='Parolanı gir'
      />
      <Link href="/register/homeinfo">
          Devam Et(ev bilgilerini almak için)
      </Link>


    </View>
  )
}

export default register

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  })