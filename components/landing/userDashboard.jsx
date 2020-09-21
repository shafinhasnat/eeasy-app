import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { userLogout } from "./../../actions/authAction";
const UserDashboard = (props) => {
  const handleLogout = () => {
    props.logoutRequest();
  };
  const { userInfo } = props;
  const {
    dpStyle,
    dpStyleView,
    userInfoStyle,
    commonStyle,
    logoutButton,
  } = styles;

  return (
    <SafeAreaView>
      <View style={dpStyleView}>
        <Image
          style={dpStyle}
          source={{ uri: userInfo.photoURL + "?height=500" }}
        />
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={[userInfoStyle, { fontWeight: "bold" }]}>
            {userInfo.displayName}
          </Text>
          <View style={commonStyle}>
            <Entypo
              name="email"
              size={18}
              color="black"
              style={{ paddingRight: 5 }}
            />
            <Text style={userInfoStyle}>{userInfo.email}</Text>
          </View>
          <View style={commonStyle}>
            <Entypo
              name="phone"
              size={20}
              color="black"
              style={{ paddingRight: 5 }}
            />
            <Text style={userInfoStyle}>empty</Text>
          </View>
          <TouchableOpacity
            style={[logoutButton, commonStyle]}
            onPress={handleLogout}
          >
            <MaterialCommunityIcons name="logout" size={20} color="white" />
            <Text style={{ color: "white" }}>logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  commonStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  dpStyleView: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
  },
  dpStyle: {
    height: 120,
    width: 120,
    borderRadius: 120,
    borderWidth: 2,
    borderColor: "#34495e",
  },
  userInfoStyle: {
    fontSize: 15,
  },
  logoutButton: {
    backgroundColor: "#c0392b",
    height: 30,
    width: 80,
    borderRadius: 5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logoutRequest: () => dispatch(userLogout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
