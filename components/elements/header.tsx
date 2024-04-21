import { Feather } from "@expo/vector-icons";
import { Link, useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";
import Logo from "../../assets/logo-dark.svg";

export function Header() {

  const { navigate } = useNavigation();
  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />
      <Link to="/create-habit">
        <View
          className="flex-row h-11 px-4 border border-violet-500 items-center rounded-lg"
        >
            <Feather
              name="plus"
              size={20}
              color={colors.violet["500"]}
            />
            <Text className="text-violet-500 ml-2 font-semibold text-base">
              Novo
            </Text>
        </View>
      </Link>
    </View>
  );
}