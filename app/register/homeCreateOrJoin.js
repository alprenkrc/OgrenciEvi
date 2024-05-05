import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const homeCreateOrJoin = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.login} href="/register/homeinfo">
        <Text style={styles.text}>Ev Oluştur</Text>
      </Link>
      <Link style={styles.login} href="/register/qrScreen">
        <Text style={styles.text}>Eve Katıl</Text>
      </Link>
    </View>
  )
}

export default homeCreateOrJoin

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