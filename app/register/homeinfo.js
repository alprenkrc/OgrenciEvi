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
          placeholder='Eve bir isim ver'
        />
        <Text>Ev Kira Mı Açılır Menü</Text>
        <Text>Ev Kira ise Kaç Para</Text>
        <Text>Evde Kaç Kişi Yaşıyor</Text>
        <Text>Kira Günü Ayın Kaçında </Text>
        <Text>Eve Bir Fotoğraf Ekle</Text>
        <Link href="/register/qrScreen">Evi Oluştur</Link>
      </View>

  )
}

export default homeinfo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})