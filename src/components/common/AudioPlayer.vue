<script setup>
import { onMounted, ref } from "vue";

defineProps({
  src: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["ready"]);
const audioElement = ref(null);

onMounted(() => {
  emit("ready", audioElement.value);
});
</script>

<template>
  <audio ref="audioElement" :src="src" loop />
</template>
