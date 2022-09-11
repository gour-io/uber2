import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../redux/slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image:
      "https://us.123rf.com/450wm/smartha/smartha2002/smartha200200064/140394625-car-sharing-vector-city-micro-black-car-eco-vehicle-cartoon-icon-isolated-on-white-background-cartoo.jpg?ver=6",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image:
      "https://s1.1zoom.me/big0/106/The_second_dishes_Potato_Meat_products_Vegetables_566163_1280x853.jpg",
    screen: "EatScreen", // Change in future
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  let opacity = !origin && "opacity-20";
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          className="p-2 py-4 bg-white mx-2 my-8 w-40 rounded-sm"
          disabled={!origin}
        >
          <View className={opacity}>
            <Image
              className="h-36 w-36 object-fill "
              source={{
                uri: item.image,
              }}
              style={{
                resizeMode: "contain",
              }}
            />

            <Text className="pl-2 mt-2 text-2xl font-semibold">
              {item.title}
            </Text>

            <FontAwesome5
              name="arrow-circle-right"
              size={30}
              color="black"
              className="p-2"
              style={{ marginTop: 10, paddingLeft: 7 }}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
