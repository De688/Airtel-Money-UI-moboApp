import Icon from "react-native-vector-icons/EvilIcons";

const Data = [
  {
    id: 5,
    text: "Dizza",
    pic: require("../img/pizza-icon.png"),
    icon: (
      <Icon
        name="chevron-right"
        size={29}
        className=" flex justify-center items-center"
      />
    ),
    selected: true,
  },
  {
    id: 2,
    text: "Sea Food",
    pic: require("../img/shrimp-icon.png"),
    icon: (
      <Icon
        name="chevron-right"
        size={29}
        className=" flex justify-center items-center"
      />
    ),
    selected: false,
  },
  {
    id: 4,
    text: "Dizza",
    pic: require("../img/pizza-icon.png"),
    icon: (
      <Icon
        name="chevron-right"
        size={29}
        className=" flex justify-center items-center"
      />
    ),
    selected: false,
  },
  {
    id: 3,
    text: "Soft Drinks",
    pic: require("../img/soda-icon.png"),
    icon: (
      <Icon
        name="chevron-right"
        size={29}
        className=" flex justify-center items-center"
      />
    ),
    selected: false,
  },
];

export default Data;
