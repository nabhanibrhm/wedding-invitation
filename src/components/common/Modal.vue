<script setup>
defineProps({
  className: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div :class="className">
    <slot />
  </div>
</template>
