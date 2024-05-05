import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExpenseBox = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 18, fontWeight:"bold"}}>Market</Text>
        <Text>Kimden: Alperen</Text>
        <Text>Yumurta + kola</Text>
      </View>

      <View>
        <Text>Tarih-Saat</Text>
        <Text style={{fontSize: 32, fontWeight: "500", color: "#EF5350"}}>₺120</Text>
      </View>
    </View>
  )
}

export default ExpenseBox

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    borderRadius: 40,
    padding: 20,
    margin: 10,
    justifyContent: "space-between"
  }
})