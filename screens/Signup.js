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
import axios from "axios";
// import useAuthStore from "../store/useAuthStore";

import Icon from "react-native-vector-icons/MaterialIcons";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [fullnameverified, setFullnameVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [emailverified, setEmailVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordverified, setPasswordVerified] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();

  function handleName(e) {
    const nameVar = e.nativeEvent.text;
    setFullname(nameVar);
    setNameVerify(false);

    if (nameVar.length > 1) {
      setFullnameVerified(true);
    }
  }

  const handleSignup = async () => {
    let errors = [];

    if (!fullname.trim()) {
      errors.push("Full name is required.");
    }

    if (!email.trim()) {
      errors.push("Email is required.");
    } else if (!/^[\w-\.]+@gmail\.com$/.test(email)) {
      errors.push("Email must be a valid Gmail address.");
    }

    if (!password.trim()) {
      errors.push("Password is required.");
    } else if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }

    if (errors.length > 0) {
      Alert.alert("Validation Error", errors.join("\n"));
      return;
    }

    const userData = {
      name: fullname,
      email,
      password,
    };

    // if (fullnameverified && emailverified && passwordverified) {
    //   axios.post("http://192.168.1.2:3000/signup", userData).then((res) => {
    //     console.log(res.data);
    //     if (res.data.status === "ok") {
    //       Alert.alert("Registered successfully!");
    //     } else {
    //       Alert.alert(JSON.stringify(res.data));
    //     }
    //   });
    // }

    try {
      const res = await axios.post("http://192.168.1.2:3000/signup", userData);
      console.log(res.data);

      if (res.data.status === "ok") {
        Alert.alert("Registered successfully!");
        navigation.navigate("Login");
      } else {
        Alert.alert("Registration failed", res.data.data || "Try again.");
      }
    } catch (error) {
      Alert.alert("Signup Failed", "Something went wrong.");
    }
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
