import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Navbar from "./common/navbar";
import LoginFacebook from "./landing/loginFacebook";
import BottomNavigator from "./common/bottomNavigator";
import { connect } from "react-redux";
import { fetchUserInfo } from "./../actions/authAction";

class Landing extends Component {
  componentDidMount = () => {
    this.props.fetchUserInfo();
  };

  render() {
    const { loginStatus } = this.props;
    return (
      <View style={styles.container}>
        <Navbar />
        <View style={styles.body}>
          {loginStatus === true ? <BottomNavigator /> : <LoginFacebook />}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  body: { flex: 1 },
});
const mapStateToProps = (state) => {
  return {
    loginStatus: state.loginStatus,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: () => dispatch(fetchUserInfo()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
