import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const tasks = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>Çöp Çıkarma</Text>
      <View style={{marginBottom: 10}}>
        <Text>Alperen</Text>
        <Text>Selim</Text>
        <Text>Yusuf</Text>
      </View>
      <View style={{flexDirection: "row"}}>
      <Text style={{padding: 10, paddingRight:40, backgroundColor: "#DEDF21", borderRadius: 50, fontSize: 18}}>Sıradaki: </Text>

      <Text style={{padding: 10, backgroundColor: "white", borderRadius: 50, fontSize: 18, left:-30}}>Selim</Text>

      </View>
    </View>
  )
}

export default tasks

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#e6d1d1",
        borderRadius: 40,
        marginBottom: 30,
//        shadowColor: "black",
//        elevation: 5
    }
})