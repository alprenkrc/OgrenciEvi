import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";

const index = () => {
  return (
    <View style={styles.container}>
      {/** <Redirect href="/register/register" /> */ }
      <Text style={{ fontSize: 24 }}>WELCOME SCREEN</Text>

      <View style={{justifyContent: "center", alignItems: "center", width: "100%"}}>
        <Link style={styles.login} href="/register/register">
          <Text style={styles.text}>Hesap Oluştur</Text>
        </Link>

        <Link style={styles.login} href="/login">
          <Text style={styles.text}>Giriş Yap</Text>
        </Link>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginRight: 20,
    marginLeft: 20,
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
    alignItems: "center",
  },
});
