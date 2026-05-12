<script setup>
import SectionTitle from "../common/SectionTitle.vue";

defineProps({
  images: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section id="gallery" class="py-20 px-2 bg-white">
    <SectionTitle title="Our Gallery" subtitle="Kumpulan momen bahagia kami." class-name="mb-10" />
    <div class="grid grid-cols-2 gap-2">
      <div
        v-for="(image, index) in images"
        :key="image"
        :class="`rounded-xl overflow-hidden shadow-sm ${index === 0 || index === 3 ? 'col-span-2 aspect-video' : 'aspect-square'}`"
      >
        <img :src="image" class="w-full h-full object-cover hover:scale-105 transition duration-500" :alt="`Gallery ${index}`" />
      </div>
    </div>
  </section>
</template>
