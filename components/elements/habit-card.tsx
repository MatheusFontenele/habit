import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { generateDatesFromYearBeginning } from "@/utils/generate-days-from-year-beginning";
import Heatmap from "./heatmap";

interface HabitCardProps extends TouchableOpacityProps {
    habit: {
        title: string;
        recurrence: number;
        streak: number;
    };
}

const daysFromYearStart = generateDatesFromYearBeginning();

export function HabitCard({ habit, ...props }: HabitCardProps) {
    return (
        <View
            className="my-2 p-2 bg-slate-800 rounded-lg overflow-hidden"
        >
            <View className=" flex-row justify-between items-center">
                <View className="flex-row gap-2 items-center">
                    <View className="p-2 bg-slate-700 rounded-md">
                        <Feather name="activity" size={24} color="white" />
                    </View>
                    <Text className="font-semibold text-white text-lg">{habit.title}</Text>
                </View>
                <View className="bg-slate-700 p-2 flex-row justify-center items-center rounded-md">
                    <Feather name="zap" size={16} color="white" />
                    <Text className="text-zinc-200 font-semibold text-lg ml-1">
                        {habit.streak}
                    </Text>
                </View>
            </View>
            <Heatmap />
        </View>
    );
}