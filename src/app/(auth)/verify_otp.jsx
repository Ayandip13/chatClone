import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComp from "../../components/atoms/ButtonComp";
import { AntDesign } from "@expo/vector-icons";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import OTPInput from "@codsod/react-native-otp-input";

const Verify_OTP = () => {
  const [otp, setOTP] = useState("");

  const onPress = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <AntDesign name="arrowleft" style={styles.backButton} />
        <Text style={styles.headTitle}>Enter OTP Code</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.otpSendText}>
          Code has been send to +91 933*****61
        </Text>

        <OTPInput
          length={4}
          style={styles.otpContainerStyle}
          inputStyle={styles.input_Style}
          onOtpComplete={(txt) => setOTP(txt)}
        />

        <Text style={styles.otpSendText}>
          Resend Code in <Text style={styles.counterText}>59</Text> s
        </Text>
      </View>

      <View style={styles.footer}>
        <ButtonComp
          style={styles.verifyButton}
          title="Verify"
          onPress={onPress}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(20),
    flex: 1,
    justifyContent: "space-between",
    paddingTop: verticalScale(15),
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    Gap: scale(13),
  },
  backButton: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
  },
  headTitle: {
    marginLeft: 10,
    fontSize: 16,
  },
  body: {
    alignItems: "center",
    gap: 25,
  },
  counterText: {
    color: "#697565",
  },
  otpSendText: {
    fontSize: 15,
    fontWeight: "400",
  },
  footer: {
    textAlign: "center",
  },
  verifyButton: {
    borderRadius: 25,
  },
  input_Style: {
    borderColor: "#3C3D37",
    borderRadius: 15,
    height: 50,
    width: 60,
  },
  otpContainerStyle: {
    gap: 11,
  },
});

export default Verify_OTP;
