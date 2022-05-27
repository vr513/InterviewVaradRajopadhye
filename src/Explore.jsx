import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";
import { Link } from "react-router-native";

export default function Explore() {
  const [text, setText] = useState("");
  return (
    <>
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40, backgroundColor: "azure", fontSize: 20 }}
          placeholder="Type here To show in Home screen"
          onChangeText={(t) => setText(t)}
        />
      </View>
      <Link to="/home" state={{ from: { text } }}>
        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </Link>
    </>
  );
}
