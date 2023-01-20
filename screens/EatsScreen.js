import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import tw from "twrnc";

const EatsScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full items-center`}>
      <Text style={{ fontSize: 50, color: "red" }}>ЖРАТ</Text>
    </SafeAreaView>
  );
};

export default EatsScreen;
