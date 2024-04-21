import { TextInput, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";

export function InputText({ placeholder, ...props }: TextInputProps) {
  return (
    <TextInput
      className="h-12 pl-4 rounded-lg bg-zinc-200 text-white mt-3 focus:border-2 focus:border-violet-700 font-semibold"
      placeholder={placeholder}
      placeholderTextColor={colors.zinc[400]}
      {...props}
    />
  );
}