import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import ForgotPassword from "../screens/ForgotPassword";
import VerifiedPassword from "../screens/VerifiedPassword";
import Allset from "../screens/Allset";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          title: "Forgotten Password",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            paddingBottom: 10,
          },
          headerStyle: {
            backgroundColor: "blue",
            height: 80,
          },
        }}
      ></Stack.Screen>

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: "Sign Up",
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",
            color: "white",
            paddingBottom: 10,
          },
          headerStyle: {
            backgroundColor: "blue",
            height: 80,
          },
        }}
      />

      <Stack.Screen
        name="VerifiedPassword"
        component={VerifiedPassword}
        options={{
          title: "Verify Password",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            paddingBottom: 10,
          },
          headerStyle: {
            backgroundColor: "blue",
            height: 80,
          },
        }}
      />
      <Stack.Screen
        name="Allset"
        component={Allset}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

//
