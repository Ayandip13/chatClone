import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Redirect, Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();

const RootNavigation = () => {
  const [islogIn, setIsLogin] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);

  return (
    <>
      <Stack screenOptions={{headerShown:false}}/>
    {
       islogIn ? <Redirect href={"/(main)_layout"}/> : <Redirect href={"/(auth)_layout"}/>
    }
    </>
  );
};

export default RootNavigation;