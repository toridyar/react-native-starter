import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change, setter) => {
    color + change > 255 || color + change < 0 ? null : setter(color + change);
  };

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setColor(red, COLOR_INCREMENT, setRed)}
        onDecrease={() => setColor(red, -1 * COLOR_INCREMENT, setRed)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor(red, COLOR_INCREMENT, setGreen)}
        onDecrease={() => setColor(red, -1 * COLOR_INCREMENT, setGreen)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor(red, COLOR_INCREMENT, setBlue)}
        onDecrease={() => setColor(red, -1 * COLOR_INCREMENT, setBlue)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
