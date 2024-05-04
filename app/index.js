import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router';


const index = () => {
  return (

    <View style={styles.container}>
          <Redirect href="/home/tasks" />
      <Text style={{fontSize: 24}}>WELCOME SCREEN</Text>
      <Link href="/register/register">Hesap Oluştur</Link>
      <Link href="/login">Hesabın Var mı Giriş Yap</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  }
})