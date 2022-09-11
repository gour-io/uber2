import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeArea } from "../components/utils/SafeArea";
import Map from "../components/Map";
import NavigateCard from "./NavigateCard";
import RideOptionsCard from "./RideOptionsCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import Entypo from "@expo/vector-icons/Entypo";
const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style="absolute top-16 left-8 bg-gray-100 z-50 p-3 rounded-full shadow-lg"
      >
        <Entypo name="menu" size={20} />
      </TouchableOpacity>

      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2 bg-blue-900">
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
