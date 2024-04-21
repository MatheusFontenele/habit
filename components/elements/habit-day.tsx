import { generateProgressPercentage } from "@/utils/generate-progress-percentage";
import { Link } from "@react-navigation/native";
import clsx from "clsx";
import dayjs from "dayjs";
import { Dimensions, TouchableOpacity, TouchableOpacityProps } from "react-native";

const WEEK_DAYS = 7;

const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5);

interface HabitDayProps extends TouchableOpacityProps {
  completed?: number;
  amount?: number;
  date: Date;
}

export function HabitDay({
  date,
  completed = 0,
  amount = 0,
  ...props
}: HabitDayProps){
  const amountAcompletishedPercentage = amount > 0 ? generateProgressPercentage(amount, completed) : 0;
  const today = dayjs().startOf('day');
  const isToday = dayjs(date).isSame(today, 'day');
  return(
      <TouchableOpacity
        className={clsx(
          "rounded-lg border-2 m-1",
          {
            ['bg-zinc-900 border-zinc-800']: amountAcompletishedPercentage === 0,
            ['bg-violet-900 border-violet-700']: amountAcompletishedPercentage > 0 && amountAcompletishedPercentage < 20,
            ['bg-violet-800 border-violet-600']: amountAcompletishedPercentage > 20 && amountAcompletishedPercentage < 40,
            ['bg-violet-700 border-violet-500']: amountAcompletishedPercentage > 40 && amountAcompletishedPercentage < 60,
            ['bg-violet-600 border-violet-500']: amountAcompletishedPercentage > 60 && amountAcompletishedPercentage < 80,
            ['bg-violet-500 border-violet-400']: amountAcompletishedPercentage > 80,
            ['border-white border-4']: isToday,
          }
        )}
        style={{width: DAY_SIZE, height: DAY_SIZE}}
        activeOpacity={0.7}
        {...props}
      >
      </TouchableOpacity>
  )
}