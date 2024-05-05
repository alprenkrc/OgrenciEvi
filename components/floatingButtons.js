import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

const floatingButtons = ({bgColor, onPress, title}) => {

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, {backgroundColor: bgColor || "#EF5350"}]}>
          <FontAwesome5 name="plus" size={28} color="black" />
        </View>
      </TouchableOpacity>
      <Text style={{marginTop: 5}}>{title}</Text>
    </View>
  );
};

export default floatingButtons;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#EF5350",

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity:  0.25,
    shadowRadius: 20.00,
    elevation: 24
  },
});
