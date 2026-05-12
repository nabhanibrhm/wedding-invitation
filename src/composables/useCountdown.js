import { onBeforeUnmount, onMounted, ref, watch } from "vue";

function getTimeLeft(targetDate) {
  const distance = new Date(targetDate).getTime() - Date.now();

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / 1000 / 60) % 60),
    seconds: Math.floor((distance / 1000) % 60),
    isComplete: false,
  };
}

export function useCountdown(targetDate) {
  const resolveTargetDate = () =>
    typeof targetDate === "function" ? targetDate() : targetDate;

  const timeLeft = ref(getTimeLeft(resolveTargetDate()));
  let intervalId = null;

  const start = () => {
    if (intervalId) {
      window.clearInterval(intervalId);
    }

    timeLeft.value = getTimeLeft(resolveTargetDate());
    intervalId = window.setInterval(() => {
      timeLeft.value = getTimeLeft(resolveTargetDate());
    }, 1000);
  };

  onMounted(start);

  watch(resolveTargetDate, () => {
    start();
  });

  onBeforeUnmount(() => {
    if (intervalId) {
      window.clearInterval(intervalId);
    }
  });

  return timeLeft;
}
