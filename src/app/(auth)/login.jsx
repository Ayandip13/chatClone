import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import ButtonComp from "../../components/atoms/ButtonComp";
import AntDesign from "@expo/vector-icons/AntDesign";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading_container}>
          <Text style={styles.heading}>Enter your phone number</Text>
          <Text style={styles.description}>
            Whatsapp will need to verify your phone number.
            <Text style={styles.link_description}>What's your number?</Text>
          </Text>
        </View>
        <View style={styles.input_main_container}>
          <View style={styles.dropdown_container}>
            <View />
            <Text style={styles.dropdown_title}>India</Text>
            <AntDesign name="caretdown" size={14} color="black" />
          </View>
          <View style={styles.horizontal_Line} />
          <View style={styles.input_container}>
            <View style={styles.country_code}>
              <Text style={styles.country_code_text}>+ 91</Text>
              <View style={styles.horizontal_Line} />
            </View>
            <View style={{ gap: verticalScale(10), flex: 1 }}>
              <TextInput
                style={styles.input}
                placeholder="Enter your phone numnber"
              />
              <View
                style={{
                  width: "100%",
                  height: verticalScale(0.8),
                  backgroundColor: "blue",
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonComp title="Next" style={{ paddingHorizontal: 29 }} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    paddingVertical: verticalScale(70),
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    fontSize: 13,
  },
  country_code: {
    gap: 12,
  },
  input_container: {
    flexDirection: "row",
    gap: scale(20),
    alignItems: "center",
    paddingVertical: 12,
  },
  country_code_text: {
    fontSize: 15,
    fontWeight: "600",
    color: "black",
  },
  dropdown_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  link_description: {
    color: "blue",
  },
  dropdown_title: {
    fontSize: 17,
    fontWeight: "500",
    color: "black",
  },
  horizontal_Line: {
    width: "100%",
    height: verticalScale(1),
    backgroundColor: "blue",
  },
  header: {
    gap: verticalScale(40),
  },
  description: {
    textAlign: "center",
    fontSize: moderateScale(13),
    fontWeight: "400",
    color: "black",
  },
  footer: {},
  heading: {
    fontSize: moderateScale(20),
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  heading_container: {
    gap: moderateScale(14),
  },
  input_main_container: {},
});

export default Login;
