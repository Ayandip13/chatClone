import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const ButtonComp = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      activeOpacity={0.7}
    >
      <Text style={styles.button_text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#040036",
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 45,
    marginTop: 10,
  },
  button_text: {
    color: "#c8c4ff",
  },
});

export default ButtonComp;
