import { Image, View, Text } from "react-native";
import React from "react";

const Category = ({ title, image, icon, id, selected }) => {
  const BoxShadow = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  };
  return (
    <View
      style={{
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 10 },
        elevation: 10,
      }}
      className={
        selected
          ? "w-[100px] h-[180px] ml-6 rounded-2xl bg-[#F5CA48] flex-1 flex-row justify-center items-center"
          : "w-[100px] h-[180px] ml-6 rounded-2xl bg-white flex-1 flex-row justify-center items-center"
      }
    >
      <View className="w-auto h-[70%] flex justify-between items-center">
        <Image
          style={{ width: 40, height: 40, borderRadius: 20 }}
          className="w-[10px] h-[20px]  rounded-full"
          source={image}
        />
        <Text>{title}</Text>
        <View>
          <View
            size={4}
            className={
              selected
                ? "w-7 h-7  text-black bg-white  flex justify-center items-center rounded-full "
                : "w-7 h-7  text-[#ffffff] bg-[#d47e85] flex justify-center items-center rounded-full "
            }
          >
            {icon}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Category;
