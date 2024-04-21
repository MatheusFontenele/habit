import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Habit from '../habit';
import { HabitCard } from '@/components/elements/habit-card';
import { Feather } from '@expo/vector-icons';

const fakeHabits = [
  { title: "Ler 1 capítulo de um livro",  streak: 9, recurrence: 7},
  { title: "Correr 5km", streak: 3, recurrence: 7},
  { title: "Estudar inglês",  streak: 4, recurrence: 7},
  { title: "Meditar", streak: 3, recurrence: 7},
  { title: "Estudar React Native", streak: 1, recurrence: 7},
  { title: "Estudar Next.js",  streak: 7, recurrence: 7},
];

export default function TabTwoScreen() {
  return (
    <SafeAreaView className='flex-1'>
      <View className='px-4 py-2 flex-row justify-between items-center'>
        <Text className='text-2xl font-semibold'>Hábitos</Text>
        <View className='flex-row justify-between items-center gap-2'>
          <Feather name='search' size={24} color='black' />
          <Feather name='plus-circle' size={24} color='black' />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
      >
        <View className='px-4'>
          {fakeHabits.map((habit) => (
            <HabitCard 
              habit={habit} 
              key={habit.title}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}