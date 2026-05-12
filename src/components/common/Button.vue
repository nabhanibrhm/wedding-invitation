<script setup>
defineProps({
  type: {
    type: String,
    default: "button",
  },
  className: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <button :type="type" :class="className">
    <slot />
  </button>
</template>
