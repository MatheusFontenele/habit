import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { useLocalSearchParams } from 'expo-router';
import { BackButton } from '@/components/elements/back-button';
import { InputText } from '@/components/elements/input-text';
import { InputCheckbox } from '@/components/elements/input-checkbox';
import { useEffect, useRef, useState } from 'react';
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
  // console.log(id, other)

  const textInputRef = useRef<TextInput>(null);

  useEffect(() => {
    // Quando a view é montada, foca no TextInput
    textInputRef.current?.focus();
  }, []);

  function handleToggleWeekDay(weekDayIndex: number) {
    if (selectedWeekDays.includes(weekDayIndex)) {
      setSelectedWeekDays(selectedWeekDays.filter((day) => day !== weekDayIndex));
    } else {
      setSelectedWeekDays([...selectedWeekDays, weekDayIndex]);
    }
  }
    
  return (
    <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={34} enabled>
      <View className='pb-8 bg-zinc-900 rounded-t-2xl pt-4'>
        <InputText 
          placeholder="Quest name"
          // onChangeText={setHabitName}
          // value={habitName}]
          className='text-2xl'
          reference={textInputRef}
        />
        <InputText 
          placeholder="Quest description"
          // onChangeText={setHabitName}
          // value={habitName}
        />
        {/* {availableWeekDays.map((weekDay) => (
          <InputCheckbox
            key={weekDay.value}
            label={weekDay.label}
            checked={selectedWeekDays.includes(weekDay.value)}
            onChange={() => handleToggleWeekDay(weekDay.value)}
          />
        ))} */}
        <View className='h-[1px] my-2 bg-zinc-800' />
        <View className=''>
            <TouchableOpacity
              className="mx-4 bg-green-500 w-8 h-8 rounded-lg flex-row justify-center items-center self-end"
              // onPress={handleCreateHabit} 
            >
              <Feather name="check" size={20} color="white" className="text-center" />
            </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
