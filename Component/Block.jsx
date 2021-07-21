import React from "react";
import { TouchableOpacity, Button, StyleSheet, View, Text } from "react-native";

export default function Block({ value, submitItem, flexIndex }) {
  const handlePress = () => {
    if (submitItem) {
      submitItem(value);
    }
  };
  return (
    <View style={{ flex: `${flexIndex}` }}>
      <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
        <Text style={styles.text}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "rgba(222, 244, 252,1)",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
  },
});
