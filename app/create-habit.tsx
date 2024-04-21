import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { useLocalSearchParams } from 'expo-router';
import { BackButton } from '@/components/elements/back-button';
import { InputText } from '@/components/elements/input-text';
import { InputCheckbox } from '@/components/elements/input-checkbox';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';

const availableWeekDays = [
  { label: "Domingo", value: 0 },
  { label: "Segunda", value: 1 },
  { label: "Terça", value: 2 },
  { label: "Quarta", value: 3 },
  { label: "Quinta", value: 4 },
  { label: "Sexta", value: 5 },
  { label: "Sábado", value: 6 },
];

export default function CreateHabit() {

  const [selectedWeekDays, setSelectedWeekDays] = useState<number[]>([]);
  const [habitName, setHabitName] = useState<string>("");
  const params = useLocalSearchParams();
  const { id , other } = params;
  console.log(id, other)

  function handleToggleWeekDay(weekDayIndex: number) {
    if (selectedWeekDays.includes(weekDayIndex)) {
      setSelectedWeekDays(selectedWeekDays.filter((day) => day !== weekDayIndex));
    } else {
      setSelectedWeekDays([...selectedWeekDays, weekDayIndex]);
    }
  }
    
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
          paddingHorizontal: 32,
        }} 
      >
        <View>
          <BackButton />
        </View>

        <View className='flex-1'>
          <Text className="mt-6 text-black text-3xl font-extrabold">
            Criar hábito
          </Text>
          <Text className="mt-6 text-black text-xl font-semibold">
            Qual é seu comprometimento?
          </Text>
          <InputText 
            placeholder="Nome do hábito"
            // onChangeText={setHabitName}
            // value={habitName}
          />
          <Text className="mt-6 text-black text-xl font-semibold">
            Em quais dias da semana?
          </Text>

          {availableWeekDays.map((weekDay) => (
            <InputCheckbox
              key={weekDay.value}
              label={weekDay.label}
              checked={true}
              onChange={() => handleToggleWeekDay(weekDay.value)}
            />
          ))}

          <TouchableOpacity
            className="mt-6 bg-green-500  py-4 rounded-lg flex-row justify-center items-center"
            // onPress={handleCreateHabit}
          >
            <Feather name="check" size={20} color="white" className="text-center" />
            <Text className="text-center text-white font-semibold text-lg ml-2">
              Confirmar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
