import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const account = () => {
  return (
    <View style={styles.container}>
      <Text>account</Text>
    </View>
  )
}

export default account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})