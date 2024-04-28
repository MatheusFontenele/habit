import { TextInput, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";

interface InputTextProps extends TextInputProps {
  placeholder: string;
  reference?: React.RefObject<TextInput>;
}

export function InputText({ placeholder, reference, ...props }: InputTextProps) {
  return (
    <TextInput
      className="pl-4 mb-2 rounded-lg text-white text-lg font-semibold"
      placeholder={placeholder}
      placeholderTextColor={colors.zinc[200]}
      ref={reference}
      {...props}
    />
  );
}