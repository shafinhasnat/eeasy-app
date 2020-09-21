import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import UserDashboard from "../landing/userDashboard";
import ChatTest from "../landing/chatTest";
import BrowseLanding from "../landing/browseLanding";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const Tab = createMaterialBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#34495e"
        inactiveColor="#ababab"
        barStyle={{ backgroundColor: "#ffff", elevation: 20 }}
      >
        <Tab.Screen
          name="Browse"
          component={BrowseLanding}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="apps" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatTest}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="chat-bubble" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={UserDashboard}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user-circle" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigator;
