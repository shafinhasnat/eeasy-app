import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView } from "react-native";
import CardContent from "../common/card";
import axios from "axios";
const BrowseLanding = () => {
  const [infoState, setInfoState] = useState([]);

  useEffect(() => {
    const promise = axios.get("http://192.168.0.100:5000/");
    promise.then((items) => {
      setInfoState(items.data.products);
    });
  }, []);
  return (
    <SafeAreaView>
      <FlatList
        data={infoState}
        renderItem={({ item }) => <CardContent cardInfo={item} />}
        keyExtractor={(item) => item.key}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  );
};

export default BrowseLanding;
