import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as Facebook from "expo-facebook";
import * as firebase from "firebase";
import fire from "./../../fire";
const LoginFacebook = (props) => {
  const handleLogin = async () => {
    console.log("login button pressed");
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      "320708535657468",
      {
        permission: "public_profile",
      }
    );
    if (type == "success") {
      const credentials = firebase.auth.FacebookAuthProvider.credential(token);
      fire
        .auth()
        .signInWithCredential(credentials)
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <View style={styles.conteiner}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>Welcome to E-easy</Text>
      </View>
      <View style={styles.loginButtonView}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <View style={styles.btnTextView}>
            <AntDesign name="facebook-square" size={40} color="white" />
            <Text style={{ color: "white", fontSize: 20 }}>
              Login with Facebook
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  conteiner: { flex: 1, justifyContent: "center" },
  loginButtonView: {
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  loginBtn: {
    backgroundColor: "#3b5998",
    height: 60,
    borderRadius: 5,
    justifyContent: "center",
  },
  btnTextView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default LoginFacebook;
