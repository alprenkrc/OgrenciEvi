import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const qrScreen = () => {
  return (
    <View style={styles.container}>
      <Text>qrScreen testsss</Text>
      <Link style={styles.login} href="/home/main">
      <Text style={styles.text}>Eve geç</Text>
    </Link>
    </View>
  )
}

export default qrScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20,
        marginRight: 20
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