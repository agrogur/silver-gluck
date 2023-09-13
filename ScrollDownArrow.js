/*Component to render a scroll down arrow*/
import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ScrollDownArrow = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.arrow} source={require("../../images/down-arrow.svg")} />
      </TouchableOpacity>
    </View>
  );
};
