import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import Explore from "./Explore";
import Profile from "./Profile";
import Home from "./Home";

function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/home" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Home</Text>
          </Link>
          <Link to="/profile" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Profile</Text>
          </Link>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Explore</Text>
          </Link>
        </View>

        <Route exact path="/" component={Explore} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default App;
