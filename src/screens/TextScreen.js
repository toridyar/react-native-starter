import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text>Enter name:</Text>
      <TextInput
        value={name}
        onChangeText={(input) => {
          setName(input);
        }}
        style={styles.input}
        autoCapitalize="none" // NOTE: ios auto capitalizes
        autoCorrect={false}
      />
      <Text>Your name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
