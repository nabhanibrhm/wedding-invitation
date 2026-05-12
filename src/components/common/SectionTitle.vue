<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: "",
  },
  align: {
    type: String,
    default: "center",
  },
  className: {
    type: String,
    default: "",
  },
});

const alignmentClass = computed(() => (props.align === "center" ? "text-center" : ""));
</script>

<template>
  <div :class="[alignmentClass, className]">
    <h2 class="font-heading text-3xl text-[#8C7A6B] mb-2">{{ title }}</h2>
    <p v-if="subtitle" class="text-sm text-gray-500">{{ subtitle }}</p>
  </div>
</template>
