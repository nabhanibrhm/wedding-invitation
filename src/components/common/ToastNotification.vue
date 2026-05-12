<script setup>
import Icon from "./Icon.vue";

defineProps({
  message: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div v-if="message" class="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-fade-up">
    <div class="bg-green-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 text-sm">
      <Icon name="CheckCircle2" :size="16" />
      <span>{{ message }}</span>
    </div>
  </div>
</template>
