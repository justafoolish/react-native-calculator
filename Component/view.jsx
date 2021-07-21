import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Block from "./Block";
export default function view() {
  const [firstNumber, setFirstNumber] = React.useState("0");
  const [secondNumber, setSecondNumber] = React.useState("0");
  const [operator, setOperator] = React.useState("");

  const items = ["AC", "DEL", "/", "1", "2", "3", "x", "4", "5", "6", "+", "7", "8", "9", "-", ".", "0", "="];
  const getItem = (item) => {
    if (item === "=") {
      switch (operator) {
        case "+":
          setFirstNumber(parseInt(firstNumber) + parseInt(secondNumber));
          setOperator("");
          break;
        case "-":
          setFirstNumber(parseInt(firstNumber) - parseInt(secondNumber));
          setOperator("");
          break;
        case "x":
          setFirstNumber(parseInt(firstNumber) * parseInt(secondNumber));
          setOperator("");
          break;
        case "/":
          setFirstNumber(parseInt(firstNumber) / parseInt(secondNumber));
          setOperator("");
          break;
      }
    } else if (item === "+" || item === "-" || item === "x" || item === "/") {
      setOperator(item);
      setSecondNumber(firstNumber);
      setFirstNumber("0");
    } else if (item === "AC") {
      setSecondNumber("");
      setFirstNumber("");
    } else {
      setFirstNumber(parseInt(firstNumber + item).toString());
    }
  };
  const getRowItems = (start, end) => {
    let rowItems = [];
    items.slice(start, end).map((item) => {
      rowItems.push(<Block value={item} key={item} submitItem={getItem} flexIndex={item === "AC" || item === "=" ? 2 : 1} />);
    });
    return rowItems;
  };
  return (
    <>
      <View style={{ width: "80%", height: "80%" }}>
        <View style={styles.resultPanel}>
          <Text style={{ color: "#fff", padding: 5, fontSize: 70, margin: 10 }}>{firstNumber}</Text>
        </View>
        <View style={styles.row}>{getRowItems(0, 3)}</View>
        <View style={styles.row}>{getRowItems(3, 7)}</View>
        <View style={styles.row}>{getRowItems(7, 11)}</View>
        <View style={styles.row}>{getRowItems(11, 15)}</View>
        <View style={styles.row}>{getRowItems(15, 18)}</View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    height: "15%",
  },
  resultPanel: {
    margin: 5,
    height: "25%",
    backgroundColor: "#1d2f3f",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
