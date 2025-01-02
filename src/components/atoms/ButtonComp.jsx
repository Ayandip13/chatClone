import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const ButtonComp = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button} activeOpacity={0.7}>
      <Text style={styles.button_text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button:{
        backgroundColor:"#040036",
        borderRadius:5,
        paddingVertical:15,
        paddingHorizontal:45,
        marginTop:10
    },
    button_text:{
        color:"#c8c4ff"
    }
})

export default ButtonComp;
