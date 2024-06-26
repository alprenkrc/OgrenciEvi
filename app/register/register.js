import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../config/firebase';
import React, { useState } from 'react'
import { Link, router } from 'expo-router'

const register = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [errorState, setErrorState] = useState("");

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: fullName
      })
      console.log("Kullanıcı kayıt oldu, uid:", uid, user.displayName);
      router.push({pathname: "/register/homeCreateOrJoin", params: {uid, fullName}})

    } catch (error) {
      setErrorState(error.message);
    }
  };


  return (
    <View style={styles.container}>
      <Text>REGISTER SCREEN</Text>
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
       <TextInput
         placeholder='İsmini Gir'
         style={styles.input}
         value={fullName}
         onChangeText={(text) => setFullName(text)}
       />
{/*        <TextInput
         placeholder='Doğum Tarihini Gir'
         style={styles.input}
       />
       <TextInput
         placeholder='Telefon Numarası'
         style={styles.input}
       />
       <TextInput
         placeholder='Hangi Şehirdesin'
         style={styles.input}
       /> */}

      <TouchableOpacity style={styles.login} onPress={handleSignup}>
        <Text style={styles.text}>Kayıt Ol</Text>
      </TouchableOpacity>
      {errorState ? <Text style={styles.error}>{errorState}</Text> : null}

{/*       <Button title="Kayıt Ol" onPress={handleSignup}/>
      {errorState ? <Text style={styles.error}>{errorState}</Text> : null} */}

      <Link style={styles.login} href="/register/homeCreateOrJoin">
        <Text style={styles.text}>Devam Et(ev bilgilerini almak için)</Text>
          
      </Link>


    </View>
  )
}

export default register;

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