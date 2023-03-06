import { Image, View, Text } from "react-native";
import React from "react";

const Ingredients = ({ image }) => {
  return (
    <View
      style={{
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 10 },
        elevation: 4,
      }}
      className="mx-4 flex justify-center items-center  bg-white w-[100px] h-[80px] rounded-xl"
    >
      <Image style={{ width: 70, height: 50 }} source={image} />
    </View>
  );
};

export default Ingredients;
