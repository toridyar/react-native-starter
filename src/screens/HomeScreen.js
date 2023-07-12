import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View>
      <Text style={styles.text}>Courtney's App</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigate("Components")}
      />
      <Button title="Go to List Demo" onPress={() => navigate("List")} />
      <Button title="Go to Images Demo" onPress={() => navigate("Images")} />
      <Button title="Go to Counter Demo" onPress={() => navigate("Counter")} />
      <Button title="Go to Color Demo" onPress={() => navigate("Color")} />
      <Button title="Go to Square Demo" onPress={() => navigate("Square")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
