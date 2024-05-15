import { StyleSheet, Text, View } from "react-native";
import React, {useEffect} from "react";
import { Link, Redirect, router } from "expo-router";
import { auth } from "../config/firebase";

const index = () => {

/*   useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Kullanıcı oturum açmışsa anasayfaya yönlendir
        router.navigate("/home/main")
      }
    });
    return () => unsubscribe();
  }, []); */


  return (
    <View style={styles.container}>
 {/*       <Redirect href="/home/account" />  */}
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
