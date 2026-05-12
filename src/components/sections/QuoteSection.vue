<script setup>
import Icon from "../common/Icon.vue";

defineProps({
  quote: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="py-16 px-8 text-center bg-[#F7F5F0]">
    <div class="max-w-xs mx-auto">
      <Icon name="Heart" :size="32" class="text-[#8C7A6B] mx-auto mb-6 opacity-50" />
      <p class="text-sm leading-relaxed italic text-gray-600 mb-4">{{ quote.text }}</p>
      <p class="font-bold text-[#8C7A6B]">{{ quote.source }}</p>
    </div>
  </section>
</template>
