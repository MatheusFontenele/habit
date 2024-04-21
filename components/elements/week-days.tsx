import React from 'react';
import { View, Text } from 'react-native';
import dayjs from 'dayjs';
import clsx from 'clsx';

const getDaysOfWeek = () => {
  const daysOfWeek = [];
  let currentDate = dayjs().startOf('week'); // Domingo

  // Adiciona os próximos 7 dias da semana
  for (let i = 0; i < 7; i++) {
    daysOfWeek.push({
      month: currentDate.format('MMM'),
      date: currentDate.format('DD'),
      day: currentDate.format('ddd'),
    });
    currentDate = currentDate.add(1, 'day'); // Avança para o próximo dia
  }

  return daysOfWeek;
};

const WeekDays = () => {
  const daysOfWeek = getDaysOfWeek();

  return (
    <View className='flex-row justify-evenly'>
      {daysOfWeek.map((day, index) => {
        const isToday = day.date === dayjs().format('DD');
        return (
          <View className={clsx(
            'rounded-lg items-center p-3',
            { [`border-2 border-violet-500`]: isToday,
              [`border-slate-700 border-2 bg-slate-800`]: !isToday,
             }
          )} key={index}>
            <Text className='text-white font-semibold uppercase'>{day.month}</Text>
            <Text className='text-white my-2 font-bold' >{day.date}</Text>
            <Text className='text-white font-semibold'>{day.day}</Text>
          </View>
        )
      })}
    </View>
  );
};

export default WeekDays;
