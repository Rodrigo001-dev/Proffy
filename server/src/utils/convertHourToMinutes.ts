export default function convertHourToMinutes(time: string) {
  // 8:00
  const [hour, minutes] = time.split(':').map(Number); // Vai retornar um array[8, 0] Não é dois 0 pq virou numérico
  const timeInMinutes = (hour * 60) + minutes;

  return timeInMinutes;
};