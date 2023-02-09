import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "@expo/vector-icons/AntDesign";
import Registration from "./src/screens/resgister/Registration";
import AntDesign from "@expo/vector-icons/AntDesign";

import OTPVerification from "./src/screens/otp/OtpVerification";
import SelectBusiness from "./src/screens/businessType/SelectBusiness";
import SplashScreen from "./src/screens/splashScreen/SplashScreen";

const Stack = createNativeStackNavigator();

const BackIcon = ({ props }) => {
  const { navigation } = props;
  const canGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return (
    <TouchableOpacity
      onPress={canGoBack}
      style={{ marginRight: 20, marginTop: 2 }}
    >
      <AntDesign name="left" size={20} />
    </TouchableOpacity>
  );
};

export default function App() {
  // const navigation = useNavigation()
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={(props) => {
              return {
                headerShown:false,
                title:'Verify Phone',
                headerLeft: () => <BackIcon props={props} />,
              };
            }}
          />
          <Stack.Screen
            name="OTPVerification"
            component={OTPVerification}
            options={(props) => {
              return {
                title:'Verify Phone',
                headerLeft: () => <BackIcon props={props} />,
              };
            }}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={(props) => {
              return {
                headerLeft: () => <BackIcon props={props} />,
              };
            }}
          />
          <Stack.Screen
            name="SelectBusiness"
            component={SelectBusiness}
            options={(props) => {
              return {
                headerShown: true,
                title: "Registration",
                headerLeft: () => <BackIcon props={props} />,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
