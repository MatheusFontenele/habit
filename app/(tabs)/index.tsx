import { DAY_SIZE, HabitDay } from "@/components/elements/habit-day";
import { Header } from "@/components/elements/header";
import AuthContext from "@/context/auth";
import { api } from "@/lib/api";
import { generateDatesFromYearBeginning } from "@/utils/generate-days-from-year-beginning";
import { Link, useNavigation } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Alert, SafeAreaView, ScrollView, Text, View } from "react-native";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S' ];
const daysFromYearStart = generateDatesFromYearBeginning();

type SummaryHabit = Array<{
  id: string;
  date: string;
  amount: number;
  completed: number;
}>;

export default function TabOneScreen() {

  const { navigate } = useNavigation();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [summaryHabits, setSummaryHabits] = useState<SummaryHabit | null>(null);

  // async function featchData(){
  //   try {
  //     setLoading(true);      
  //     const response = await api.get('/habits/summary', {
  //       headers: {
  //         Authorization: `Bearer ${user?.token}`
  //       }
  //     });
  //     setSummaryHabits(response.data);
  //   } catch (error: any) {
  //     Alert.alert('Erro ao buscar dados', error.message);
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   featchData();
  // }, []);

  return (
    <SafeAreaView className="flex-1">
      <View className="px-8 pt-2">
        <Header />

        <View className="flex-row mt-6 mb-1">
          {weekDays.map((day, index) => (
            <Text 
              key={`${day}-${index}`} 
              className="text-zinc-400 text-xl text-center font-bold mx-1"
              style={{width: DAY_SIZE}}
            >
              {day}
            </Text>
          ))}
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          className="pt-2"
        >
          <View className="flex flex-row flex-wrap">
            {daysFromYearStart.map((day) => {
              const daySummaryHabit = summaryHabits?.find((summary) => summary.date === day.toISOString());
              return(
                <HabitDay 
                  key={day.toISOString()}
                  date={day}
                  amount={daySummaryHabit?.amount}
                  completed={daySummaryHabit?.completed}
                  onPress={() => navigate('habit', { date: day.toISOString() })}
                />
              )
            })}
          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}
