import { Image, View, Text } from "react-native";
import React from "react";

const Popular = ({
  title,
  textheader,
  weight,
  star,
  crown,
  image,
  id,
  selected,
}) => {
  return (
    <View
      style={{
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 10 },
        elevation: 10,
      }}
      className="flex mt-4 overflow-hidden rounded-2xl flex-row  bg-white"
    >
      <View className="w-[60%]">
        <View className="w-full pl-6 pt-5 flex flex-row ">
          <View className="text-[#F5CA48]">{crown}</View>
          <Text
            style={{ fontFamily: "SemiBold" }}
            className="w-full pl-2 flex  justify-center items-center"
          >
            {textheader}
          </Text>
        </View>
        <View className="pl-6 pt-2">
          <Text style={{ fontFamily: "SemiBold" }}>{title}</Text>
          <Text className="text-[#6576]">{weight}</Text>
        </View>
        <View className="lex flex-row mt-2 items-center">
          <View className="w-[80px] mr-2 rounded-bl-2xl rounded-tr-2xl flex justify-center items-center bg-[#F5CA48] h-[40px]">
            <Text>+</Text>
          </View>
          <View>
            <Text className="font-bold">{star}5.0</Text>
          </View>
        </View>
      </View>
      <View className="flex justify-center items-center">
        <Image
          style={{ width: 160, height: 80, borderRadius: 20 }}
          className=""
          source={image}
        />
      </View>
    </View>
  );
};

export default Popular;
