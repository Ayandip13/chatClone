import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import ButtonComp from "../../components/atoms/ButtonComp"; // Custom button component
import AntDesign from "@expo/vector-icons/AntDesign"; // Icon library for using AntDesign icons
import { router } from "expo-router"; // Expo-router for navigation
import CountryPicker from "react-native-country-picker-modal"; // Country picker modal
import { useState } from "react"; // useState hook for state management

const Login = () => {
  // State to manage the visibility of the CountryPicker modal
  const [visible, setVisible] = useState(false);
  // State to store the selected country name
  const [countryName, setCountryName] = useState("India");
  // State to store the selected country code
  const [countryCode, setCountryCode] = useState("+ 91");

  // Function to handle the "Next" button click, navigating to the OTP verification screen
  const onNextButtonClick = () => {
    router.push("/(auth)/verify_otp");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.heading_container}>
          <Text style={styles.heading}>Enter your phone number</Text>
          <Text style={styles.description}>
            Whatsapp will need to verify your phone number.
            {/* Link-like text for additional context */}
            <Text style={styles.link_description}> What's your number?</Text>
          </Text>
        </View>

        {/* Input Section */}
        <View style={styles.input_main_container}>
          {/* Dropdown for selecting country */}
          <TouchableOpacity
            onPress={() => setVisible(true)} // Open the CountryPicker modal
            style={styles.dropdown_container}
          >
            <View /> {/* Empty View to align components */}
            <Text style={styles.dropdown_title}>{countryName}</Text>
            <AntDesign name="caretdown" size={14} color="black" />
          </TouchableOpacity>

          {/* Horizontal line below the dropdown */}
          <View style={styles.horizontal_Line} />

          {/* Phone number input section */}
          <View style={styles.input_container}>
            {/* Country code display */}
            <View style={styles.country_code}>
              <Text style={styles.country_code_text}>{countryCode}</Text>
              <View style={styles.horizontal_Line} />
            </View>

            {/* TextInput for entering phone number */}
            <View style={{ gap: verticalScale(10), flex: 1 }}>
              <TextInput
                style={styles.input}
                placeholder="Enter your phone number" // Placeholder text
              />
              {/* Horizontal line below the TextInput */}
              <View
                style={{
                  width: "100%",
                  height: verticalScale(1),
                  backgroundColor: "#697565",
                }}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Footer Section with "Next" button */}
      <View style={styles.footer}>
        <ButtonComp
          onPress={onNextButtonClick} // Navigate to OTP verification screen
          title="Next"
          style={{ paddingHorizontal: 29 }}
        />
      </View>

      {/* CountryPicker Modal */}
      {visible && (
        <CountryPicker
          visible={true}
          onSelect={(e) => {
            // Update state with selected country name and code
            setCountryCode("+" + e.callingCode[0]);
            setCountryName(e.name);
          }}
          onClose={() => setVisible(false)} // Close the modal
        />
      )}
    </SafeAreaView>
  );
};

// Styles for the Login component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    paddingVertical: verticalScale(60),
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 0,
  },
  country_code: {
    gap: 12,
    fontWeight: "600",
    color: "black",
  },
  input_container: {
    flexDirection: "row", // Align country code and phone input side by side
    gap: scale(20),
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  country_code_text: {
    fontSize: 15,
    fontWeight: "600",
    color: "black",
  },
  dropdown_container: {
    flexDirection: "row", // Align dropdown title and icon side by side
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  link_description: {
    color: "#697565", // Custom color for link-like text
  },
  dropdown_title: {
    fontSize: 17,
    fontWeight: "500",
    color: "black",
  },
  horizontal_Line: {
    width: "100%",
    height: verticalScale(1), // Thin horizontal line
    backgroundColor: "#697565",
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
