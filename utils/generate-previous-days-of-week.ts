import dayjs from 'dayjs';

export default function generatePreviousDaysOfWeek() {
    const today = dayjs(); // Obtemos a data de hoje
    const daysOfWeek = []; // Array para armazenar os últimos 7 dias da semana
  
    // Iteramos de 0 a 6 para os últimos 7 dias
    for (let i = 0; i < 7; i++) {
      // Subtrai i dias da data atual para obter os dias anteriores
      const day = today.subtract(i, 'day');
      // Adiciona o dia ao array de dias da semana
      daysOfWeek.unshift(day);
    }
  
    return daysOfWeek;
}