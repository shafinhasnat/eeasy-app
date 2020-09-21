import React, { useEffect } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Landing from "./components/landing";
import settingThingsUp from "./settings";
import store from "./store/index";
import { Provider } from "react-redux";
settingThingsUp();
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.statusbar}></View>
      <Provider store={store}>
        <Landing />
      </Provider>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusbar: { height: StatusBar.currentHeight, backgroundColor: "white" },
});
