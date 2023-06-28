import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const NAME = "Courtney";
  return (
    <View>
      <Text style={styles.header}>Getting started with React Native!</Text>
      <Text style={styles.subheader}>My name is {NAME}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 45,
  },
  subheader: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
