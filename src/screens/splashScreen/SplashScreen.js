import { useNavigation } from "@react-navigation/native";
import React, { useEffect,useState } from "react";
import { View, Text, Image, Animated, StyleSheet , Easing} from "react-native";
import Color from "../../components/Color";

const SplashScreen = () => {
  const navigation = useNavigation();

  const logoScale = new Animated.Value(20);
  const textOpacity = new Animated.Value(0);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(() => {
      navigation.navigate("OTPVerification");
    }, 3000);
  }, []);


  const [rotateValue] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(rotateValue, {
      toValue: 360,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      rotateValue.setValue(0);
    });
  }, []);

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });


  return (
   
      <View style={styles.container}>
        <Animated.Image
          source={require("../../../assets/react.jpg")}
          style={[
            styles.logo,
            {
              transform: [
                {
                  scale: logoScale,
                },
              ],
              width: 150,
              height: 150,
              justifyContent: "center",
              borderRadius:100,
              alignSelf: "center",
              bottom: 25,
            },
          ]}
        />
        <Animated.Text style={[styles.text, { opacity: textOpacity }]}>
          Welcome to my app!
        </Animated.Text>

        <View style={{ alignItems: 'center' }}>
      <Animated.Text
        style={{
            marginTop:30,
            color:'white',
          fontSize: 30,
          transform: [{ rotate: rotateInterpolate }],
        }}>
        Hello World!
      </Animated.Text>
    </View>

      </View>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.skyBlue,
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    color: "white",
  },
});

export default SplashScreen;
