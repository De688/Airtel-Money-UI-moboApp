import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import Icun from "react-native-vector-icons/AntDesign";
import Ingredients from "./Ingredients";

const Details = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <SafeAreaView>
      <View className="flex flex-row px-4 mt-10 justify-between items-center">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="border-[1px] border-[#6576] font-bold  rounded-md w-8 h-8 flex justify-center items-center"
        >
          <Icon
            name="angle-left"
            size={14}
            style={{ fontWeight: "bold" }}
            className=" flex justify-center items-center"
          />
        </TouchableOpacity>
        <View className="border-[1px] border-[#F5CA48] bg-[#F5CA48] rounded-md w-8 h-8 flex justify-center items-center">
          <Icun
            name="star"
            size={12}
            style={{ color: "#F9F9FB" }}
            className="text-[#444649]  flex justify-center items-center"
          />
        </View>
      </View>
      <View className="px-4 pt-6">
        <Text style={{ fontFamily: "Bold" }} className="text-[30px] w-[200px]">
          {item.name}
        </Text>
        <Text
          style={{ fontFamily: "Bold" }}
          className="text-[30px] font-bold pt-4 text-[#E4723C]"
        >
          {item.price}
        </Text>
      </View>
      <View className="pl-4 flex flex-row justify-between items-center">
        <View>
          <View className="pt-6 ">
            <Text style={{ fontFamily: "Regular" }} className="text-[#6576]">
              Size
            </Text>
            <Text style={{ fontFamily: "Bold" }}>{item.size}</Text>
          </View>
          <View className="pt-6 ">
            <Text style={{ fontFamily: "Regular" }} className="text-[#6576]">
              Crust
            </Text>
            <Text style={{ fontFamily: "Bold" }}>{item.crust}</Text>
          </View>
          <View className="pt-6 ">
            <Text style={{ fontFamily: "Regular" }} className="text-[#6576]">
              Derivery in
            </Text>
            <Text style={{ fontFamily: "Bold" }}>{item.derivery}</Text>
          </View>
        </View>
        <View className="flex pt-6 justify-center items-center ">
          <Image
            style={{ width: 300, height: 150, borderRadius: 20 }}
            className="mr-[-50px] pt-6"
            source={item.pic}
          />
        </View>
      </View>
      <View className="pt-6">
        <Text className="pl-4 pt-6" style={{ fontFamily: "Bold" }}>
          Ingredients
        </Text>
        <View className="w-full pt-6 flex justify-center items-center">
          <FlatList
            key={item.id}
            showsHorizontalScrollIndicator={false}
            className="w-full h-[100px] rounded-xl"
            horizontal={true}
            data={item.ingredients}
            renderItem={({ item }) => <Ingredients image={item.image} />}
          />
        </View>
      </View>
      <View className="w-full pt-6 flex justify-center items-center">
        <TouchableOpacity className="bg-[#F5CA48] w-[90%] rounded-full h-14 flex flex-row justify-center items-center">
          <Text style={{ fontWeight: "bold" }} className="pr-2">
            Place an order
          </Text>
          <Icon
            iconStyle={{ fontWeight: "bold" }}
            name="angle-right"
            size={14}
            style={{ fontWeight: "bold" }}
            className=" flex justify-center items-center"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Details;
