import { Stack } from 'expo-router';
import React, {useEffect} from "react";
import { Link, Redirect, router } from "expo-router";
import { auth } from "../config/firebase";

export default function StackLayout() {

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Kullanıcı oturum açmışsa anasayfaya yönlendir
        router.navigate("/home/main")
      }
    });
    return () => unsubscribe();
  }, []);


  return(
    <Stack screenOptions={{
      headerShown: false,
      
    }}>

    </Stack>
  )
}
