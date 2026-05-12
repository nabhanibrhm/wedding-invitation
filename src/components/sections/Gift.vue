<script setup>
import Button from "../common/Button.vue";
import Icon from "../common/Icon.vue";
import SectionTitle from "../common/SectionTitle.vue";

defineProps({
  banks: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["copy"]);
</script>

<template>
  <section class="py-20 px-6 bg-[#F7F5F0]">
    <div class="text-center mb-12">
      <div class="w-12 h-12 bg-[#8C7A6B] rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon name="Gift" :size="20" class="text-white" />
      </div>
      <SectionTitle
        title="Wedding Gift"
        subtitle="Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi kado secara cashless."
        class-name="max-w-[280px] mx-auto"
      />
    </div>

    <div class="space-y-4">
      <div
        v-for="bank in banks"
        :key="`${bank.name}-${bank.account}`"
        class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center"
      >
        <p class="font-bold text-lg text-gray-800 mb-1">{{ bank.name }}</p>
        <p class="text-xl tracking-widest text-[#8C7A6B] font-mono mb-2">{{ bank.account }}</p>
        <p class="text-sm text-gray-500 mb-4">a.n {{ bank.owner }}</p>
        <Button
          class-name="flex items-center space-x-2 text-sm bg-gray-50 text-gray-700 px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-100 transition"
          @click="emit('copy', bank.account)"
        >
          <Icon name="Copy" :size="14" />
          <span>Salin Nomor Rekening</span>
        </Button>
      </div>
    </div>
  </section>
</template>
