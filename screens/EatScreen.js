import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeArea } from "../components/utils/SafeArea";

const EatScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeArea>
      <View>
        <Text>EatScreen</Text>
      </View>
    </SafeArea>
  );
};

export default EatScreen;
