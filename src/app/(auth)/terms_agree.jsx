import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import ImagePath from "@/src/constants/ImagePath";
import ButtonComp from "../../components/atoms/ButtonComp";
import { router } from "expo-router";
const TermsAgree = () => {

  const onAgree = () => {
    router.push("/(auth)/login")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome_text}>Welcome to WhatsApp</Text>
        <Image resizeMode="contain" style={styles.logo_style} source={ImagePath.splash}/>
        <Text style={styles.description_text}>Read our <Text style={styles.link_text}>Privacy Policy</Text>. Tap "Agree and Continue" to accept the <Text style={styles.link_text}>Terms of Service</Text>.</Text>
        <ButtonComp onPress={onAgree} title="AGREE AND CONTINUE"/>
      </View>
      <View style={styles.footer}>
        <Text style={styles.from_text}>From</Text>
        <Text style={styles.facebook_text}>facebook</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal:scale(25),
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingVertical: verticalScale(80),
  },
  link_text:{
    color:"#0f02a3",
    fontWeight:"500"
  },
  description_text:{
    textAlign:"center",
    fontSize:moderateScale(13),
    color:'black'
  },
  logo_style:{
    height:verticalScale(250),
    width:scale(250),
    borderRadius:moderateScale(250)
  },
  header: {
    alignItems:"center",
    rowGap:30,
    paddingTop:20
  },
  footer: {
    alignItems:'center',
    marginTop:30
  },
  from_text: {
    color: "#867373",
    fontSize: moderateScale(12)
  },
  welcome_text:{
    fontSize: moderateScale(30),
    fontWeight: "bold",
    color: "#000",
  },
  facebook_text: {
    fontSize: moderateScale(15),
    fontWeight: "600",
    textTransform:"uppercase",
    color: "#000",
  },
});

export default TermsAgree;
