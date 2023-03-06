import Icon from "react-native-vector-icons/EvilIcons";
import Icun from "react-native-vector-icons/AntDesign";
import Icen from "react-native-vector-icons/MaterialCommunityIcons";

const Data2 = [
  {
    id: 1,
    textheader: "top of the week",
    name: "Primervera Pizza ",
    weight: "Weight 540 gr",
    pic: require("../img/pizza1.png"),
    star: (
      <Icun
        name="star"
        size={15}
        className="text-[#444649]  flex justify-center items-center"
      />
    ),
    crown: (
      <Icen
        name="crown"
        size={20}
        style={{ color: "#F5CA48" }}
        className="bg-[#F5CA48] flex justify-center items-center"
      />
    ),

    price: "$5.99",
    size: 'Medium 14"',
    crust: "Thin Crust",
    derivery: "30 min",
    ingredients: [
      { id: 1, image: require("../img/ham.png") },
      { id: 2, image: require("../img/garlic.png") },
      { id: 3, image: require("../img/tomato.png") },
      { id: 4, image: require("../img/cheese.png") },
    ],
  },
  {
    id: 2,
    textheader: "top of the week",
    name: "Primervera Pizza ",
    weight: "Weight 540 gr",
    pic: require("../img/pizza2.png"),

    star: (
      <Icun
        name="star"
        size={20}
        className="text-[#313234] flex justify-center items-center"
      />
    ),
    crown: (
      <Icen
        name="crown"
        size={20}
        style={{ color: "#F5CA48" }}
        className="text-[#313234] flex justify-center items-center"
      />
    ),
    price: "$5.99",
    size: 'Medium 14"',
    crust: "Thin Crust",
    derivery: "30 min",
    ingredients: [
      { id: 1, image: require("../img/ham.png") },
      { id: 2, image: require("../img/garlic.png") },
      { id: 3, image: require("../img/tomato.png") },
      { id: 4, image: require("../img/cheese.png") },
    ],
  },
  {
    id: 3,
    textheader: "top of the week",
    name: "Primervera Pizza ",
    weight: "Weight 540 gr",
    pic: require("../img/pizza3.png"),

    star: (
      <Icun
        name="star"
        size={20}
        className="text-[#313234] flex justify-center items-center"
      />
    ),
    crown: (
      <Icen
        name="crown"
        size={20}
        style={{ color: "#F5CA48" }}
        className="text-[#313234] flex justify-center items-center"
      />
    ),
    price: "$5.99",
    size: 'Medium 14"',
    crust: "Thin Crust",
    derivery: "10 min",
    ingredients: [
      { id: 1, image: require("../img/ham.png") },
      { id: 2, image: require("../img/garlic.png") },
      { id: 3, image: require("../img/tomato.png") },
      { id: 4, image: require("../img/cheese.png") },
    ],
  },
];

export default Data2;
