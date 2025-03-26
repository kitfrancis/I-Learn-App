import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/MaterialIcons";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();

  const handleSignup = () => {
    if (
      username.trim() === "" ||
      password.trim() === "" ||
      email.trim() === ""
    ) {
      Alert.alert("Error", "Please enter all fields.");
      return;
    }

    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    Alert.alert("Success", "Signed up successfully!");
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{
          width: "85%",
          height: 100,
          marginBottom: 20,
          marginTop: 20,
          alignSelf: "center",
          borderRadius: 5,
        }}
      ></Image>

      <TextInput
        style={{
          width: "90%",
          height: 50,
          borderBottomColor: "gray",
          borderBottomWidth: 2,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginTop: 20,
          marginBottom: 20,
          alignSelf: "center",
        }}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={{
          width: "90%",
          height: 50,
          borderBottomColor: "gray",
          borderBottomWidth: 2,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginTop: 20,
          marginBottom: 20,
          alignSelf: "center",
        }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={{
          width: "90%",
          height: 50,
          borderBottomColor: "gray",
          borderBottomWidth: 2,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginTop: 20,
          marginBottom: 20,
          alignSelf: "center",
        }}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={{
          width: "80%",
          height: 50,
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
          marginTop: 20,
          alignSelf: "center",
        }}
        onPress={handleSignup}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Sign Up
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          marginLeft: 35,
        }}
        onPress={() => setRememberMe(!rememberMe)}
      >
        <Icon
          name={rememberMe ? "check-box" : "check-box-outline-blank"}
          size={24}
          color="blue"
        />
        <Text style={{ fontSize: 16, color: "black", marginLeft: 10 }}>
          Remember Me
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 13,
          color: "#666",
          marginVertical: 30,
          alignSelf: "center",
        }}
      >
        OR ACCESS QUICKLY WITH
      </Text>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "80%",
          height: 50,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          justifyContent: "center",
          marginBottom: 20,
          alignSelf: "center",
        }}
      >
        <Image
          source={require("../assets/Logo-Search-Google--on-transparent-background-PNG.png")}
          style={{ width: 24, height: 24, marginRight: 10 }}
        />
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Google</Text>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 16,
          color: "black",
          alignSelf: "center",
        }}
      >
        Already have an account?{" "}
        <Text
          style={{
            color: "#007bff",
            fontWeight: "bold",
            textDecorationStyle: "underline",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          Log in
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: { fontSize: 24, fontWeight: "bold" },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
  orText: {
    fontSize: 16,
    color: "#666",
    marginVertical: 30,
    alignSelf: "center",
  },
});

export default Signup;
