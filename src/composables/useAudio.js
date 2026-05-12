import { ref } from "vue";

export function useAudio() {
  const audioRef = ref(null);
  const isPlaying = ref(false);

  const playAudio = async () => {
    if (!audioRef.value) {
      return;
    }

    try {
      await audioRef.value.play();
      isPlaying.value = true;
    } catch (error) {
      console.log("Audio autoplay prevented", error);
    }
  };

  const pauseAudio = () => {
    if (!audioRef.value) {
      return;
    }

    audioRef.value.pause();
    isPlaying.value = false;
  };

  const toggleAudio = async () => {
    if (isPlaying.value) {
      pauseAudio();
      return;
    }

    await playAudio();
  };

  return {
    audioRef,
    isPlaying,
    playAudio,
    pauseAudio,
    toggleAudio,
  };
}
