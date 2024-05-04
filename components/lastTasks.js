import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const lastTasks = () => {
  return (
    <View style={styles.container}>

        <View style={{backgroundColor: "#DEDF21", width: 30, height: 30, borderRadius: 50}}/>
        <Text>5 Yeni</Text>
        <Text>Çöp Çıkarma</Text>
        <View>
            <Text>9/24</Text>
        </View>
    

    </View>
  )
}

export default lastTasks

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: "#D9D9D9",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    }
})