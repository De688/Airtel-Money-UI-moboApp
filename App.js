import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import "react-native-gesture-handler";
import Home from "./components/Home";
import Details from "./components/Details";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// const CustomDrawerContent = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         drawerType: "slide",
//         headerShown: false,
//       }}
//     >
//       <Drawer.Screen name="Home" component={Home} />
//     </Drawer.Navigator>
//   );
// };

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         drawerContent={(props) => <CustomDrawerContent {...props} />}
//       >
//         <Stack.Screen
//           name="CustomDrawerContent"
//           component={CustomDrawerContent}
//           options={{
//
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

function App() {
  return (
    <View className="flex justify-center items-center">
      <Text className="text-red-600">hel kjhk jh kjh jh</Text>
    </View>
  );
}
export default App;
