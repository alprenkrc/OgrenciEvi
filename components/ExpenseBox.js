import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExpenseBox = ({name, amount, description, date, fullName}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 18, fontWeight:"bold"}}>{name}</Text>
        <Text>Kimden: {fullName}</Text>
        <Text>{description}</Text>
      </View>

      <View>
        <Text>{date}</Text>
        <Text style={{fontSize: 32, fontWeight: "500", color: "#EF5350"}}>₺ {amount}</Text>
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