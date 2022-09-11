import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import NavOptions from "../components/NavOptions";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../redux/slices/navSlice";
import NavFavourite from "../components/NavFavourite";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="h-full">
      <View className="p-5 mt-6 mb-2">
        <Image
          source={{
            uri: "https://pngimg.com/uploads/uber/uber_PNG24.png",
          }}
          className="h-20 w-20"
        />
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          query={{
            key: GOOGLE_API_KEY,
            language: "en",
          }}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          minLength={2}
          enablePoweredByContainer={false}
        />
        <NavOptions />
        <NavFavourite />
      </View>
    </View>
  );
};

export default HomeScreen;
