<script setup>
defineProps({
  wishes: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="space-y-4 max-h-[400px] overflow-y-auto hide-scrollbar pb-10">
    <div
      v-for="(wish, index) in wishes"
      :key="`${wish.name}-${index}`"
      class="bg-gray-50 p-4 rounded-2xl border border-gray-100"
    >
      <div class="flex items-center justify-between mb-2">
        <h4 class="font-bold text-[#4A4A4A] text-sm">{{ wish.name }}</h4>
        <span
          :class="`text-[10px] px-2 py-1 rounded-full ${wish.attendance === 'Hadir' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`"
        >
          {{ wish.attendance }}
        </span>
      </div>
      <p class="text-sm text-gray-600 leading-relaxed">{{ wish.message }}</p>
    </div>
  </div>
</template>
