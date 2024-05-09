import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from 'react';
import { Link, useLocalSearchParams, router } from "expo-router";

const homeCreateOrJoin = () => {
  const {uid} = useLocalSearchParams();
  console.log("uidyi alabildik", uid);

  const transferUIDHomeInfo = () => {
    router.push({pathname: "/register/homeinfo", params: {uid}});
  }

  const transferUIDQr = () => {
    router.push({pathname: "/register/qrScreen", params: {uid}});
  }
  
  return (
    <View style={styles.container}>
      {/* Ev Oluştur butonu */}
      <Button title="ev oluştur" onPress={transferUIDHomeInfo}/>
      <Button title="eve katıl" onPress={transferUIDQr}/>
      <Link style={styles.login} href="/register/homeinfo" onPress={transferUIDHomeInfo}>
        <Text style={styles.text}>Ev Oluştur</Text>
      </Link>
      {/* Eve Katıl butonu */}
      <Link style={styles.login} href="/register/qrScreen" onPress={transferUIDQr}>
        <Text style={styles.text}>Eve Katıl</Text>
      </Link>
    </View>
  );
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