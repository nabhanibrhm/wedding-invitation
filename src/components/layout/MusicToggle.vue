<script setup>
import Icon from "../common/Icon.vue";

defineProps({
  isPlaying: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["toggle"]);
</script>

<template>
  <button
    :class="`fixed bottom-24 right-4 z-40 w-12 h-12 bg-[#8C7A6B] rounded-full shadow-xl flex items-center justify-center text-white transition-transform ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`"
    @click="emit('toggle')"
  >
    <Icon :name="isPlaying ? 'Music' : 'Pause'" :size="20" />
  </button>
</template>
