import { View, Text, StyleSheet } from "react-native";
import { appName } from "../config/constants";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>{appName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    fontSize: 24,
  },
});

export default Home;
