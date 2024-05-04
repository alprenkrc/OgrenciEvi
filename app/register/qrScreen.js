import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const qrScreen = () => {
  return (
    <View style={styles.container}>
      <Text>qrScreen testsss</Text>
      <Link href="/home/main">Home Screene Geç</Link>
    </View>
  )
}

export default qrScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})