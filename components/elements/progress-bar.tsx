import { View } from "react-native";

interface ProgressBarProps {
  progress: number;
}
export function ProgressBar( { progress = 0 }: ProgressBarProps) {
  return (
    <View className="w-full h-2 bg-zinc-300 mt-4 rounded-full">
      <View className="h-full bg-violet-600 rounded-full" style={{ width: `${progress}%` }} />
    </View>
  );
}