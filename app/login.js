import { StyleSheet, Text, TextInput, View, Button, Pressable, TouchableOpacity } from 'react-native'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';
import React, { useState } from 'react'
import { Link, router } from 'expo-router'

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorState, setErrorState] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("giriş yapıldı");
      router.replace("/home/main"); // Başarılı kayıttan sonra sayfayı değiştir
    } catch (error) {
      setErrorState(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text>LOGIN SCREEN</Text>
      <TextInput
        placeholder='Emailini gir'
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType='email-address'
      />
      <TextInput
        placeholder='Parolanı gir'
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}

      />

  
      <TouchableOpacity style={styles.login} onPress={handleLogin}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

      {errorState ? <Text style={styles.error}>{errorState}</Text> : null}

                
      <Link style={styles.login} href="/home/main">
        <Text style={styles.text}>Giriş Yap</Text>
      </Link>
      <Link href="/register/register">
          Hesabın Yok mu Kayıt Ol
      </Link>


    </View>
  )
}

export default login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20
  },
  input: {
    width: "100%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "white",
    margin: 10,
    fontSize: 16
  },
  login: {
    width: "100%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#c7c70b",
    marginBottom: 10,
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
})