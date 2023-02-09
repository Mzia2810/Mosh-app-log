/** @format */
/////firebase///

// import {
//   sendEmailVerification,
//   createUserWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
// import { auth, db } from "../../firebase.config";
// import { collection, addDoc, setDoc, doc } from "firebase/firestore";
/////firebase///////
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    SafeAreaView,
    ScrollView,
    ToastAndroid,
    KeyboardAvoidingView,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import Color from "../../components/Color";
  import { Picker } from "@react-native-picker/picker";
  import SwitchSelector from "react-native-switch-selector";
  import { useNavigation } from "@react-navigation/native";
  ////components//////
  import PrimaryButton from "../../components/ButtonCom";
  import TextInputCom from "../../components/TextInputCom";
  ////components//////
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import { Platform } from "react-native";
  import { Alert } from "react-native";
  ////responsive width height code ///
  ////responsive width height code ///
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  ////responsive width height code ///
  
  const OTPVerification = () => {
    const navigation = useNavigation();
  
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [city, setCity] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [userId, setUserId] = useState("");
    const [bloodDonation, setBloodDonation] = useState("yes");
    const [medicalCondition, setMedicalCondition] = useState("");
    const [password, setPassword] = useState("");
  
    return (
      <SafeAreaView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "position"}
        >
          <ScrollView style={styles.container}>
            <View style={styles.imageViewStyle}>
              <Image
                source={require("../../../assets/react.jpg")}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.HeadingTextStyleView}>
              <Text style={styles.HeadingTextStyle}>Verify your Phone</Text>
              <Text style={{color:Color.placeholder}}>Please Fill the Business Information for next step</Text>
              <Text style={{color:Color.skyBlue,fontWeight:'600',marginTop:10}}>Firm Contact Information</Text>
            </View>
  
            <View style={styles.textInputMaiView}>
              
              <View style={styles.textInputSubViews}>
                <TextInputCom
                  text={"Mobile Number"}
                  placeholder={"Please Enter Your Phone Number"}
                  borderBottomWidth={2}
                  borderRadius={16}
                  keyboardType={"phone-pad"}
                  onChangeText={(value) => setPhoneNumber(value)}
                />
              </View>
           
            
             
             
            
             
              <View style={styles.textInputSubViews}>
                <PrimaryButton
                  title={"Submit"}
                  onPress={() => navigation.navigate('Registration') }
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default OTPVerification;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Color.background,
      padding: 10,
      height: screenHeight,
    },
    HeadingTextStyleView: {
      width: screenWidth * 0.8,
      height: screenHeight * 0.1,
    //   marginHorizontal:10,
      justifyContent: "center",
    //   alignSelf: "center
    marginHorizontal:15,
      marginTop: 20,
    },
    pickerStyle: {
      width: wp("83%"),
      overflow: "hidden",
      borderBottomWidth: 2,
      borderColor: Color.secondary,
      borderRadius: 12,
      height: hp("7%"),
    },
    HeadingTextStyle: {
      color: Color.blackText,
      fontSize: 30,
      fontWeight: "bold",
      // alignSelf: "center",
    },
    textInputMaiView: {
      width: screenWidth * 0.9,
      height: screenHeight * 1.65,
      marginTop:20,
    },
    imageViewStyle: {
        marginTop:20,
      width: 160,
      height: 160,
      alignSelf: "center",
    
      top: hp("3%"),
    },
    imageStyle: {
      width: 150,
      height: 150,
      justifyContent: "center",
      borderRadius:100,
      alignSelf: "center",
      bottom: 25,
    },
    textInputSubViews: { alignSelf: "center", padding: 15 ,marginTop:10},
    textStyle: {
      fontSize: 15,
      color: Color.secondary,
      fontWeight: "bold",
      paddingBottom: 10,
    },
  });
  