import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeArea } from "../components/utils/SafeArea";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGGLE_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../redux/slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavourite from "../components/NavFavourite";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeArea>
      <Text className="text-center py-5 text-xl">Good morning, Deepak</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            fetchDetails={true}
            enablePoweredByContainer={false}
            query={{
              key: GOOGGLE_API_KEY,
              language: "en",
            }}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            styles={{
              container: {
                flex: 0,
                paddingTop: 20,
                backgroundColor: "white",
              },
              textInput: {
                fontSize: 18,
                borderRadius: 0,
                backgroundColor: "#DDDDDF",
              },
              textInputContainer: {
                paddingHorizontal: 20,
                paddingBottom: 0,
              },
            }}
          />
        </View>
        <NavFavourite />
      </View>
      <View className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100">
        <TouchableOpacity
          onPress={() => navigation.navigate("RideOptionsCard")}
          className="flex flex-row items-center bg-black space-x-2 px-4 py-3 rounded-full"
        >
          <Entypo name="car" color="white" size={20} />
          <Text className="text-white text-center">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row items-center space-x-2 px-4 py-3 rounded-full">
          <Ionicons name="fast-food" color="black" size={20} />
          <Text className="text-black text-center">Rides</Text>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
};

export default NavigateCard;
