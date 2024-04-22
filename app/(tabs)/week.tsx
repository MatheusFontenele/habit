import WeekDays from "@/components/elements/week-days";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView, Text, View } from "react-native";

const fakeHabits = [
    { title: "Ler 1 capítulo de um livro", goal: 9, completed: 7 },
    { title: "Correr 5km", goal: 9, completed: 7 },
    { title: "Estudar inglês", goal: 9, completed: 7 },
    { title: "Meditar", goal: 9, completed: 7 },
    { title: "Estudar React Native", goal: 9, completed: 7 },
    { title: "Estudar Next.js", goal: 7, completed: 7 },
];

export default function Week() {
    return (
        <SafeAreaView>
            <View className='px-4 py-2 flex-row justify-between items-center'>
                <Text className='text-2xl text-white font-semibold'>Today</Text>
                <View className='flex-row justify-between items-center gap-2'>
                <Feather name='search' size={24} color='white' />
                <Feather name='plus-circle' size={24} color='white' />
                </View>
            </View>
            <View className="pt-2">
                <WeekDays />
                <View className="px-4 pt-4">
                    <Text className="text-white font-semibold text-lg mb-2">Daily Quests</Text>
                    { fakeHabits.map((habit) => (
                        <View key={habit.title} className="my-1 p-2 border-2 border-slate-800 rounded-lg overflow-hidden">
                            <View className="flex-row justify-between items-center">
                                <View className="flex-row gap-2 items-center">
                                    <View className="p-2 bg-zinc-800 rounded-md">
                                        <Feather name="activity" size={24} color="white" />
                                    </View>
                                    <Text className="font-semibold text-zinc-200 text-lg">{habit.title}</Text>
                                </View>
                                <View className="bg-zinc-800 p-2 justify-center items-center rounded-md">
                                    <Text className="text-zinc-200 font-semibold text-lg">
                                        {habit.completed}/{habit.goal}
                                    </Text>
                                    <Text className="text-zinc-200 font-semibold text-lg">min</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
}