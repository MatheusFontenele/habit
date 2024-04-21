import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface InputCheckboxProps {
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
}

export function InputCheckbox({ label, checked, onChange, disabled }: InputCheckboxProps) {
  return (
    <View className="flex-row items-center mt-3">
      <TouchableOpacity onPress={onChange} activeOpacity={0.6} disabled={disabled}>
        <View
          className={` h-7 w-7 rounded-lg items-center justify-center ${
            checked ? "bg-green-500" : "bg-zinc-300"
          }`}
        >
          {checked && (
            <Feather name="check" size={20} color="white" className="mt-1 ml-1" />
          )}
        </View>
      </TouchableOpacity>
      <Text className="text-black ml-3 font-semibold text-base">{label}</Text>
    </View>
  )
}