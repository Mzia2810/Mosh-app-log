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
  
  const SelectBusiness = () => {
    const navigation = useNavigation();
    // const SignUp = async () => {
    //   if (
    //     name != "" &&
    //     email != "" &&
    //     phoneNumber != "" &&
    //     bloodGroup != "" &&
    //     city != "" &&
    //     neighborhood != "" &&
    //     userId != "" &&
    //     bloodDonation != "" &&
    //     medicalCondition != "" &&
    //     password != ""
    //   ) {
    //     createUserWithEmailAndPassword(auth, email, password)
    //       .then((userCredential) => {
    //         sendEmailVerification(auth.currentUser).then(() => {
    //           // Email verification sent!
    //           // ...
    //         });
    //         // signOut(auth)
    //         //   .then(() => {
    //         //     // Sign-out successful.
    //         //   })
    //         // .catch((error) => {
    //         //   // An error happened.
    //         // });
    //         setDoc(doc(db, "users", userCredential.user.uid), {
    //           uid: userCredential.user.uid,
    //           name,
    //           email,
    //           phoneNumber,
    //           bloodGroup,
    //           city,
    //           neighborhood,
    //           userId,
    //           bloodDonation,
    //           medicalCondition,
    //         });
    //         {
    //           Platform.OS === "ios"
    //             ? Alert.alert("Your Account Successfully Created")
    //             : ToastAndroid.show(
    //                 "Your Account Successfully Created",
    //                 ToastAndroid.SHORT
    //               );
    //         }
  
    //         navigation.navigate("LoginScreen");
    //       })
    //       .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         {
    //           Platform.OS === "ios"
    //             ? Alert.alert(errorMessage, ToastAndroid.SHORT)
    //             : ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
    //         }
    //       });
    //   } else {
    //     Alert.alert("Sorry, Please Enter All Data");
    //   }
    // };
  

    const [businessType, setBusinessType] = useState("");
    const [category, setCategory] = useState("");
    const [businessKYC, setBusinessKYC] = useState("");
 
  
    return (
      <SafeAreaView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "position"}
        >
          <View style={styles.container}>
           
            <View style={styles.HeadingTextStyleView}>
              <Text style={styles.HeadingTextStyle}>Sign Up</Text>
              <Text style={{color:Color.placeholder}}>Please Fill the Business Information for next step</Text>
              <Text style={{color:Color.skyBlue,fontWeight:'600',marginTop:10}}>Firm Contact Information</Text>
            </View>
  
            <View style={styles.textInputMaiView}>
             
              <View style={[styles.textInputSubViews, { width: wp("88%") }]}>
                {/* <Text style={styles.textStyle}>Business Type</Text> */}
                <View style={styles.pickerStyle}>
                  <Picker
                    selectedValue={businessType}
                    onValueChange={(value) => setBusinessType(value)}
                    style={{ width: wp("78%"), alignSelf: "center" }}
                    mode="dropdown"
                  >
                    <Picker.Item label="Business Type" value="" />
                    <Picker.Item label="Software House" value="Software House" />
                    <Picker.Item label="Grocery Shop" value="Grocery Shop" />
                  
                  </Picker>
                </View>
              </View>
              <View style={[styles.textInputSubViews, { width: wp("88%") }]}>
                {/* <Text style={styles.textStyle}>Category</Text> */}
                <View style={styles.pickerStyle}>
                  <Picker
                    selectedValue={category}
                    onValueChange={(value) => setCategory(value)}
                    style={{ width: wp("78%"), alignSelf: "center" }}
                    mode="dropdown"
                  >
                    <Picker.Item label="Category" value="" />
                    <Picker.Item label="food" value="food" />
                    <Picker.Item label="A-" value="A-" />
                 
                  </Picker>
                </View>
              </View>
              <View style={[styles.textInputSubViews, { width: wp("88%") }]}>
                {/* <Text style={styles.textStyle}>Business KYC</Text> */}
                <View style={styles.pickerStyle}>
                  <Picker
                    selectedValue={businessKYC}
                    onValueChange={(value) => setBusinessKYC(value)}
                    style={{ width: wp("78%"), alignSelf: "center" }}
                    mode="dropdown"
                  >
                    <Picker.Item label="Business KYC" value="" />
                    <Picker.Item label="Hotel" value="hotel" />
                    <Picker.Item label="A-" value="A-" />
                    <Picker.Item label="B+" value="B+" />
                  
                  </Picker>
                </View>
              </View>
            
  
            
             
           
             
             
            
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default SelectBusiness;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Color.background,
      padding: 10,
      height: screenHeight,
    },
    HeadingTextStyleView: {
      width: screenWidth * 0.8,
      height: screenHeight * 0.1,
      marginHorizontal:10,
      // justifyContent: "center",
      // alignSelf: "start",
      // marginTop: 20,
    },
    pickerStyle: {
      width: wp("83%"),
      overflow: "hidden",
    //   borderBottomWidth: 2,
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
      width: screenWidth * 0.3,
      height: screenHeight * 0.15,
      alignSelf: "center",
      borderWidth: 5,
      borderRadius: 100,
      borderColor: Color.secondary,
      top: hp("3%"),
    },
    imageStyle: {
      width: screenWidth * 0.4,
      height: screenHeight * 0.18,
      justifyContent: "center",
  
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
  