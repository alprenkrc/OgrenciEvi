import React from "react";
import { AntDesign, FontAwesome, FontAwesome5  } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false, tabBarShowLabel: false, tabBarStyle: {
      height: 70,
      margin: 20,
      borderRadius: 20,

      
    }  }}>
      <Tabs.Screen
        name="main"
        
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={32} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="expense"
        options={{
          title: "Giderler",
          tabBarIcon: ({ color }) => (
            <AntDesign size={32} name="areachart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: "Görevler",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="tasks" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Hesap",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-friends" size={32} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
