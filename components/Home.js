import {
  Image,
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Iconn from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import Data from "../assets/data/Popular";
import Data2 from "../assets/data/Categories";
import Category from "./Category";
import { useFonts } from "expo-font";
import Popular from "./Popular";

const Home = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Bold: require("../assets/fonts/Montserrat-Bold.ttf"),
    Medium: require("../assets/fonts/Montserrat-Medium.ttf"),
    Regular: require("../assets/fonts/Montserrat-Regular.ttf"),
    SemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 h-screen bg-[#CDCDCD] ">
      <ScrollView>
        <View className="w-full flex flex-row justify-between items-center px-4 pt-6">
          <Image
            style={{ width: 40, height: 40, borderRadius: 20 }}
            className="w-[10px] h-[20px]  rounded-full"
            source={require("../assets/img/profile.png")}
          />
          <Iconn
            name="bar-chart-2"
            size={35}
            style={{ transform: [{ rotate: "270deg" }] }}
            className="text-[#74777c]"
          />
        </View>
        <View className=" px-4 pt-6">
          <Text
            style={{ fontFamily: "Regular", fontSize: 20 }}
            className="font-Bold text-[#74777c]"
          >
            Food
          </Text>
          <Text
            style={{ fontFamily: "Bold", fontSize: 30 }}
            className="text-[25px] font-Bold"
          >
            Delivery
          </Text>
        </View>
        <View className="px-4 pt-6">
          <View className="mr-6 flex flex-row items-center">
            <Icon name="search1" size={20} className="text-[#313234] " />
            <TextInput
              placeholder="search.."
              className="border-b-2 ml-2  border-[#76787a] w-full"
            />
          </View>
        </View>
        <View className="w-full pt-6">
          <Text
            className="pl-6"
            style={{ fontFamily: "SemiBold", fontSize: 18 }}
          >
            Categories
          </Text>
          <View className="w-full flex flex-row justify-around items-center pt-6">
            <FlatList
              className="h-[200px] "
              data={Data}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Category
                  key={item.id}
                  title={item.text}
                  image={item.pic}
                  id={item.id}
                  icon={item.icon}
                  selected={item.selected}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>

        <View className=" w-full  flex justify-center items-start">
          <Text
            style={{ fontFamily: "SemiBold", fontSize: 18 }}
            className="pl-6"
          >
            Popular
          </Text>
          <View className=" w-[100%] mb-6 overflow-hidden flex justify-center items-center">
            {Data2.map((item) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Details", { item: item })}
                style={{
                  shadowColor: "black",
                  shadowOpacity: 0.5,
                  shadowRadius: 10,
                  shadowOffset: { width: 0, height: 10 },
                  elevation: 10,
                }}
                className="w-[92%] flex mt-4 overflow-hidden rounded-2xl flex-row  bg-white"
              >
                <View className="w-[60%]">
                  <View className="w-full pl-6 pt-5 flex flex-row ">
                    <View className="text-[#F5CA48]">{item.crown}</View>
                    <Text
                      style={{ fontFamily: "SemiBold" }}
                      className="w-full pl-2 flex  justify-center items-center"
                    >
                      {item.textheader}
                    </Text>
                  </View>
                  <View className="pl-6 pt-2">
                    <Text style={{ fontFamily: "SemiBold" }}>{item.name}</Text>
                    <Text className="text-[#6576]">{item.weight}</Text>
                  </View>
                  <View className="lex flex-row mt-2 items-center">
                    <View className="w-[80px] mr-2 rounded-bl-2xl rounded-tr-2xl flex justify-center items-center bg-[#F5CA48] h-[40px]">
                      <Text>+</Text>
                    </View>
                    <View>
                      <Text className="font-bold">{item.star}5.0</Text>
                    </View>
                  </View>
                </View>
                <View className="flex justify-center items-center">
                  <Image
                    style={{ width: 160, height: 80, borderRadius: 20 }}
                    className=""
                    source={item.pic}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
