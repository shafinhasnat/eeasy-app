import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
const CardContent = (props) => {
  const [descState, setDescState] = useState(2);
  const [widthPic, SetwidthPic] = useState(200);
  const toggleNumberOfLines = () => {
    descState == 2 ? setDescState(undefined) : setDescState(2);
  };
  const styles = StyleSheet.create({
    cardView: { paddingHorizontal: 20, paddingVertical: 20 },
    cardItems: { borderWidth: 0.7, borderRadius: 5 },
    cardImgView: {
      borderBottomWidth: 0.5,
      flexDirection: "column",
      alignItems: "center",
    },
    cardImage: {
      width: widthPic,
      height: 300,
      resizeMode: "contain",
    },
    cardInfo: { paddingHorizontal: 10 },
    cardTitleView: { flexDirection: "row", justifyContent: "flex-start" },
    careTitle: { fontSize: 25, fontWeight: "bold", paddingTop: 5 },
    itemInfo: { flexDirection: "row", alignItems: "center" },
    descText: { marginBottom: 10, textAlign: "justify", paddingVertical: 10 },
    buttonStyle: {
      backgroundColor: "#34495e",
      height: 40,
      borderBottomRightRadius: 5,
      borderBottomLeftRadius: 5,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
    },
    imageIndexView: {
      flexDirection: "row-reverse",
    },
    imageIndexCap: {
      position: "absolute",
      width: 35,
      height: 25,
      backgroundColor: "#474747",
      borderRadius: 10,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: 10,
    },
  });

  const { cardInfo } = props;
  return (
    <View style={styles.cardView}>
      <View style={styles.cardItems}>
        <View
          style={styles.cardImgView}
          onLayout={(event) => {
            SetwidthPic(event.nativeEvent.layout.width);
          }}
        >
          <ScrollView snapToInterval={0} horizontal>
            {cardInfo.images.map((source, index) => {
              return (
                <View key={source}>
                  <View style={styles.imageIndexView}>
                    <Image
                      style={styles.cardImage}
                      resizeMode="contain"
                      source={{ uri: source }}
                    />
                    <View style={styles.imageIndexCap}>
                      <Text style={{ color: "white" }}>
                        {index + 1}/{cardInfo.images.length}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.cardInfo}>
          <View style={styles.cardTitleView}>
            <Text style={styles.careTitle}>{cardInfo.title}</Text>
          </View>
          <View style={styles.itemInfo}>
            <AntDesign name="creditcard" size={20} />
            <Text> {cardInfo.price} tk</Text>
          </View>
          <View style={styles.itemInfo}>
            <Fontisto name="shopping-store" size={20} />
            <Text> {cardInfo.seller}</Text>
          </View>
          <Text
            style={styles.descText}
            numberOfLines={descState}
            onPress={toggleNumberOfLines}
          >
            {cardInfo.details}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <TouchableOpacity style={styles.buttonStyle}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {/* <Icon name="shop" color="white" /> */}
              <Entypo name="shopping-cart" size={24} color="white" />
              <Text style={{ color: "white" }}> Shop</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardContent;
