import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import BrowseLanding from "./../components/landing/browseLanding";
import ChatTest from "./../components/landing/chatTest";
import UserDashboard from "./../components/landing/userDashboard";

const routes = {
  browse: {
    screen: BrowseLanding,
  },
  chat: {
    screen: ChatTest,
  },
  profile: {
    screen: UserDashboard,
  },
};
const tabNavigator = createMaterialBottomTabNavigator({
  browse: {
    screen: BrowseLanding,
  },
  chat: {
    screen: ChatTest,
  },
  profile: {
    screen: UserDashboard,
  },
});
export default createAppContainer(tabNavigator);
