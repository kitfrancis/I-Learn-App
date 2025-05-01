import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

import Icon from "react-native-vector-icons/MaterialIcons";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  // const [gradelevel, setGradeLevel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();

  const handleSignup = () => {
    if (
      fullname.trim() === "" ||
      password.trim() === "" ||
      email.trim() === "" ||
      gradelevel.trim() === ""
    ) {
      Alert.alert("Error", "Please enter all fields.");
      return;
    }

    console.log("Fullname:", fullname);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    Alert.alert("Success", "Signed up successfully!");
  };

  const [role, setRole] = useState("student");

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../assets/i-learn.png")}
        style={{
          width: "90%",
          height: 240,
          marginTop: 20,
          alignSelf: "center",
          borderRadius: 10,
        }}
        resizeMode="contain"
      ></Image>

      <TextInput
        style={{
          width: "90%",
          height: 50,
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginTop: 30,
          marginBottom: 20,
          fontSize: 18,
          alignSelf: "center",
          backgroundColor: "#f9f9f9",
        }}
        placeholder="Full Name"
        value={fullname}
        onChangeText={setFullname}
      />

      <TextInput
        style={{
          width: "90%",
          height: 50,
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginTop: 20,
          marginBottom: 20,
          fontSize: 18,
          alignSelf: "center",
          backgroundColor: "#f9f9f9",
        }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={{
          width: "90%",
          height: 50,
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginTop: 20,
          marginBottom: 20,
          fontSize: 18,
          alignSelf: "center",
          backgroundColor: "#f9f9f9",
        }}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* <Text
        style={{
          width: "90%",
          paddingLeft: 30,
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        Grade Level:
      </Text>
      <Picker
        selectedValue={role}
        onValueChange={(itemValue) => setRole(itemValue)}
        style={{
          alignSelf: "center",
          height: 50,
          width: "90%",
          backgroundColor: "white",
          marginBottom: 20,
        }}
      >
        <Picker.Item label="Grade 7" value="grade7" />
        <Picker.Item label="Grade 8" value="grade8" />
        <Picker.Item label="Grade 9" value="grade9" />
        <Picker.Item label="Grade 10" value="grade10" />
        <Picker.Item label="Grade 11" value="grade11" />
        <Picker.Item label="Grade 12" value="grade12" />
      </Picker> */}

      <TouchableOpacity
        style={{
          width: "90%",
          height: 50,
          backgroundColor: "#4CAF50",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
          marginTop: 20,
          alignSelf: "center",
        }}
        onPress={handleSignup}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Enroll now
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
          color="#4CAF50"
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
          width: "90%",
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
          marginBottom: 50,
        }}
      >
        Already have an account?{" "}
        <Text
          style={{
            color: "#4CAF50",
            fontWeight: "bold",
            textDecorationStyle: "underline",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          Log in
        </Text>
      </Text>
    </ScrollView>
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
