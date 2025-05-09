import React, { useEffect } from "react";
import {
  View,
  Button,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const courses = [
  { id: "1", name: "Mathematics" },
  { id: "2", name: "English" },
  { id: "3", name: "Science" },
  { id: "4", name: "History" },
  { id: "5", name: "Biology" },
  { id: "6", name: "Physics" },
  { id: "7", name: "Chemistry" },
  { id: "8", name: "Geography" },
];

const Home = () => {
  const [userName, setUserName] = React.useState("User");

  async function getData() {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) return;

      const response = await axios.post("http://192.168.1.2:3000/userdata", {
        token: token,
      });

      console.log("User Data Response:", response.data);

      if (response.data.status === "ok") {
        setUserName(response.data.data.name);
      } else {
        console.log("Error fetching user data", response.data.message);
      }
    } catch (error) {
      console.log("Error in getData:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const renderCourseItem = ({ item }) => (
    <TouchableOpacity
      style={{
        backgroundColor: "#4CAF50",
        marginBottom: 20,
        flex: 1,
        marginHorizontal: 10,
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 20,
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderGradeLevelItem = ({ item }) => (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        marginBottom: 20,
        flex: 1,
        marginHorizontal: 5,
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 10,
      }}
    >
      <Text
        style={{
          color: "black",
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 24, margin: 20 }}>
        Welcome,{"\n"}
        <Text style={{ fontSize: 40, color: "#4CAF50" }}>{userName}!</Text>
      </Text>
      <Text style={{ marginLeft: 20, fontSize: 15 }}>
        Study Smart with I-Learn.
      </Text>

      <Text style={{ fontSize: 25, marginTop: 100, marginLeft: 20 }}>
        Subjects
      </Text>
      <FlatList
        data={courses}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ justifyContent: "space-between" }}
      />
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
