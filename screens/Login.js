import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Please enter both username and password.");
      return;
    }

    console.log("Username:", username);
    console.log("Password:", password);
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Log in</Text>

      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text
        style={{
          ontSize: 18,
          color: "5C5C5C",
          textDecorationLine: "underline",
          marginTop: 10,
          marginLeft: 35,
        }}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        Forgotten password?{" "}
      </Text>

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require("../assets/Logo-Search-Google--on-transparent-background-PNG.png")}
          style={{ width: 24, height: 24, marginRight: 10 }}
        />
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Google</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Don't have an account?{" "}
        <Text
          style={{
            color: "#007bff",
            fontWeight: "bold",
            textDecorationStyle: "underline",
          }}
          onPress={() => navigation.navigate("Signup")}
        >
          Sign up
        </Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    paddingTop: 30,
    backgroundColor: "blue",
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 30,
    height: 75,
    marginBottom: 20,
    color: "white",
  },
  logo: {
    width: "85%",
    height: 100,
    marginBottom: 20,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 5,
  },
  input: {
    width: "90%",
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center",
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
    alignSelf: "center",
  },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
  orText: {
    fontSize: 16,
    color: "#666",
    marginVertical: 30,
    alignSelf: "center",
  },
  googleButton: {
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
  },
  signupText: {
    fontSize: 16,
    color: "black",
    marginTop: 10,
    alignSelf: "center",
  },
});

export default Login;
