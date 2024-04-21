import { BackButton } from "@/components/elements/back-button";
import { InputCheckbox } from "@/components/elements/input-checkbox";
import { ProgressBar } from "@/components/elements/progress-bar";
import AuthContext from "@/context/auth";
import { generateProgressPercentage } from "@/utils/generate-progress-percentage";
import { useRoute } from "@react-navigation/native";
import { Link } from "expo-router";
import { useContext, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import dayjs from "dayjs";
import clsx from "clsx";
import { api } from "@/lib/api";

interface Params {
    date: string;
}

interface DayInfoProps {
    completedHabits: string[];
    habits: {
        id: string;
        name: string;
    }[];
}

const fakeHabits = [
    { name: "Ler 1 capítulo de um livro", completed: false },
    { name: "Correr 5km", completed: true },
    { name: "Estudar inglês", completed: false },
    { name: "Meditar", completed: true },
    { name: "Estudar React Native", completed: true },
    { name: "Estudar Next.js", completed: false },
];

export default function Habit() {
    
    const route = useRoute();
    const { user } = useContext(AuthContext);
    const { date } = route.params as Params;
    const [loading, setLoading] = useState(false);
    const [dayInfo, setDayInfo] = useState<DayInfoProps | null>({
        completedHabits: [],
        habits: fakeHabits.map((habit) => ({
            id: habit.name,
            name: habit.name
        }))
    });
    const [completedHabits, setCompletedHabits] = useState<string[]>([]);

    const parsedDate = dayjs(date)
    const isDateInPast = parsedDate.isBefore(dayjs(), "day");
    const dayOfWeek = parsedDate.format("dddd");
    const dayAndMonth = parsedDate.format("MMMM DD");

    const habitProgress = dayInfo?.habits.length 
        ? generateProgressPercentage(dayInfo.habits.length, completedHabits.length) 
        : 0;

    async function handleToggleHabit(habitId: string) {
        try {
            if (completedHabits.includes(habitId)) {
                // await api.patch(`/habits/${habitId}/toggle`);
                // setCompletedHabits((prevState) => prevState.filter((id) => id !== habitId));
            } else {
                setCompletedHabits((prevState) => [...prevState, habitId]);
            }
    
        } catch (error) {
            console.log(error);
            return Alert.alert("Erro ao completar hábito");
        }
    }

    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="px-8 ">
                <BackButton />
        
                <Text className="mt-6 text-zinc-500 text-base font-semibold">
                    {dayOfWeek}
                </Text>
                <Text className="text-zinc-900 text-3xl font-extrabold">
                    {dayAndMonth}
                </Text>
        
                <ProgressBar progress={habitProgress}/>
        
                <Text className="mt-6 text-zinc-900 text-xl font-semibold">
                    Habits
                </Text>
        
                <View className={clsx(
                    "mt-2",
                    ['opacity-50', isDateInPast]  
                )}>
                    {dayInfo && dayInfo.habits.map((habit) => (
                        <InputCheckbox
                        key={habit.id}
                        label={habit.name}
                        checked={completedHabits.includes(habit.id)}
                        onChange={() => handleToggleHabit(habit.id)}
                        disabled={isDateInPast}
                        />
                    ))}
                </View>
        
        
                {isDateInPast && (
                    <Text className="mt-6 text-zinc-400 text-base font-semibold">
                        Você não pode completar hábitos passados
                    </Text>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}