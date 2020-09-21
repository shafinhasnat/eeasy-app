import React, { Component } from "react";
import fire from "./../fire";
class Functions extends Component {
  addToFirebase = (uid, userData) => {
    fire.database().ref(uid).set(userData);
  };
}

export default Functions;
