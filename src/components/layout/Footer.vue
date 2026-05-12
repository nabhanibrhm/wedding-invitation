<script setup>
defineProps({
  bride: {
    type: Object,
    required: true,
  },
  groom: {
    type: Object,
    required: true,
  },
  footer: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <footer class="py-12 px-6 bg-[#2A2B2A] text-center text-[#E8DCC4]">
    <h2 class="font-cursive text-4xl mb-4">{{ bride.nickname }} & {{ groom.nickname }}</h2>
    <p class="text-xs opacity-70">
      {{ footer.note }}
      <br />
      {{ footer.subnote }}
    </p>
    <div class="mt-8 text-[10px] opacity-50 border-t border-[#E8DCC4]/20 pt-4">
      {{ footer.credit }}
    </div>
  </footer>
</template>
