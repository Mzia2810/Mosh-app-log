/** @format */

import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import React from "react";
import Color from "../components/Color";
////responsive width height code ///
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
////responsive width height code ///
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const textInput = ({
  numLines,
  placeholder,
  key,
  text,
  value,
  onChangeText,
  height,
  width,
  textAlignVertical,
  backgroundColor,
  borderBottomWidth,
  borderRadius,
  keyboardType,
  padding,
  secureTextEntry,
  multiline,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.secondView}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
      <TextInput
        placeholder={placeholder}
        key={key}
        multiline={multiline}
        numberOfLines={numLines ? numLines : 2}
        placeholderTextColor={Color.lightText}
        style={[
          styles.textInput,
          { height: height ? height : hp("7%") },
          { width: width ? width : wp("85%") },
          {
            backgroundColor: backgroundColor
              ? backgroundColor
              : Color.background,
          },
          { borderBottomWidth: borderBottomWidth ? borderBottomWidth : null },
          { borderRadius: borderRadius ? borderRadius : 7 },
          { padding: padding ? padding : 0 },
        ]}
        secureTextEntry={secureTextEntry}
        //    secureTextEntry={SecureTextEntry}
        value={value}
        onChangeText={onChangeText}
        textAlignVertical={textAlignVertical}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default textInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: Color.transparent,
  },
  secondView: {
    bottom: hp("1%"),
  },
  textInput: {
    paddingLeft: wp("5%"),
    borderColor: Color.placeholder,
    backgroundColor: Color.secondary,
    // borderRadius: 7,
  },
  textStyle: {
    fontSize: 15,
    color: Color.blackText,
    fontWeight: "bold",
  },
});
