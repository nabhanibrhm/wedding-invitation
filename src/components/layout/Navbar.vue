<script setup>
import Icon from "../common/Icon.vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
  activeTab: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["select"]);
</script>

<template>
  <div class="fixed bottom-0 left-0 w-full z-40 flex justify-center pb-4 px-4 pointer-events-none">
    <div class="glass-panel w-full max-w-[400px] rounded-full flex justify-around items-center py-3 px-6 shadow-2xl pointer-events-auto">
      <a
        v-for="item in items"
        :key="item.id"
        :href="`#${item.id}`"
        :class="`flex flex-col items-center space-y-1 transition-colors ${activeTab === item.id ? 'text-[#8C7A6B]' : 'text-gray-400 hover:text-gray-600'}`"
        @click="emit('select', item.id)"
      >
        <Icon :name="item.icon" :size="20" :class="activeTab === item.id ? 'fill-current opacity-20' : ''" />
      </a>
    </div>
  </div>
</template>
