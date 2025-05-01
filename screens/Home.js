import React from "react";
import { View, Button, StyleSheet, ScrollView, Text } from "react-native";

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 24, margin: 20 }}>
        Welcome, <Text> </Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Home;
