import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from 'react';
import { Link, useLocalSearchParams } from "expo-router";
import { database } from '../../config/firebase';
import { ref, update, get } from 'firebase/database';

const qrScreen = () => {
  const {uid, fullName} = useLocalSearchParams();
  console.log("uidyi alabildik",uid);
  
  const [houseId, setHouseId] = useState('');
  const [errorState, setErrorState] = useState('');
  // Kullanıcının eve katılmasını sağlayan fonksiyon

  const handleJoinHouse = async () => {
    try {
      const houseRef = ref(database, `houses/${houseId}`);
      const houseSnapshot = await get(houseRef);

      if (houseSnapshot.exists()) {
        // Kullanıcıyı evin üyeleri listesine ekle ve fullName'i kaydet
        const userRef = ref(database, `houses/${houseId}/members/${uid}`);
        await update(userRef, { joined: true, fullName: fullName });

        // Kullanıcının profilinde ev ID'sini ve fullName'ini güncelle
        const userProfileRef = ref(database, `users/${uid}`);
        await update(userProfileRef, { houseId: houseId, fullName: fullName });

        console.log(`Kullanıcı ${uid}, ev ${houseId} 'e başarıyla katıldı ve ismi kaydedildi.`);
      } else {
        setErrorState('Ev bulunamadı.');
      }
    } catch (error) {
      setErrorState('Eve katılma işlemi sırasında bir hata oluştu.');
      console.error(error);
    }
  };


  return (
    <View style={styles.container}>
      <Text>Dışarıdan eve katılma testi</Text>
      <TextInput
        placeholder='evin benzersiz idsini gir'
        style={styles.input}
        value={houseId}
        onChangeText={setHouseId}
      />

      <Link style={styles.login} href="/home/main" onPress={handleJoinHouse}>
        <Text style={styles.text}>Eve geç</Text>
      </Link>
      {errorState ? <Text style={styles.error}>{errorState}</Text> : null}
      
    </View>
  );
};

export default qrScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  login: {
    width: "100%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#c7c70b",
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  input: {
    width: "100%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "white",
    margin: 10,
    fontSize: 16,
  },
});
