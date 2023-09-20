export const formatTime = (time: number) => {
  if (time <= 60) {
    return `${time}min`;
  }

  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}min`;
};
