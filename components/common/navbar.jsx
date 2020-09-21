import React from "react";
import { View, StyleSheet, Text, Platform, StatusBar } from "react-native";
const Navbar = () => {
  return (
    <View>
      <View style={styles.navbar}>
        <Text style={styles.navbarContent}>E-easy</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  navbar: {
    height: 45,
    backgroundColor: "#34495e",
    elevation: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  navbarContent: {
    color: "#ecf0f1",
    fontSize: 30,
  },
});
export default Navbar;
