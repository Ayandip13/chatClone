import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import ImagePath from "@/src/constants/ImagePath";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { useState } from "react";
import { useEffect } from "react";

const Auth = () => {
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setisLoading(true);
      setTimeout(() => {
        router.push("/(auth)/terms_agree");
      }, 4000);
    }, 3000);

    return () => {                    //this return is used to run when component has unmount and move to new screen
      clearTimeout(timeout)         //this clear function is used to clear the timeout function, so that it will not run on background
    };


  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image
          resizeMode="contain"
          style={styles.logo_style}
          source={ImagePath.react_logo}
        />
        {/*resizeMode: 'contain' ensures an image scales properly within a defined frame. */}
        <Text style={styles.whatsapp_text}>Whatsapp</Text>
      </View>

      <View style={styles.footer}>
        {isLoading ? (
          <>
            <ActivityIndicator size={moderateScale(30)} color={"black"} />
            <Text
              style={{
                textAlign: "center",
                marginTop: 7,
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              Loading...
            </Text>
          </>
        ) : (
          <>
            <Text style={styles.fromText}>From</Text>
            <Text style={styles.facebookText}>Facebook</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(40),
  },
  header: {
    height: 40,
    width: 40,
    backgroundColor: "",
  },
  logo_style: {
    height: verticalScale(55), //verticalScale: Scales size proportionally based on screen height for responsive vertical sizing.
    width: scale(55), //scale: Scales size proportionally based on screen width for responsive horizontal sizing.
    borderRadius: moderateScale(8),
  },
  whatsapp_text: {
    fontSize: moderateScale(25),
    fontWeight: "bold",
    color: "#000000",
  },
  body: {
    alignItems: "center",
    gap: verticalScale(7),
  },
  footer: {
    alignItems: "center",
    height: verticalScale(70),
  },
  fromText: {
    fontSize: moderateScale(12), //moderateScale: Scales size proportionally based on screen dimensions with an optional factor for balanced responsiveness.
    color: "#867373",
  },
  facebookText: {
    fontSize: moderateScale(15),
    fontWeight: "600",
    color: "#000000",
  },
});

export default Auth;
