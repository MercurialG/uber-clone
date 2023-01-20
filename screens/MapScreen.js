import { View, Text, SafeAreaView } from "react-native";
import tw from "twrnc";
import React from "react";

const MapScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full items-center`}>
      <Text style={{ fontSize: 50, color: "fuchsia" }}>ЕХАТЬ</Text>
    </SafeAreaView>
  );
};

export default MapScreen;
