<script setup>
const props = defineProps({
  bride: {
    type: Object,
    required: true,
  },
  groom: {
    type: Object,
    required: true,
  },
  dateText: {
    type: String,
    required: true,
  },
  backgroundImage: {
    type: String,
    required: true,
  },
  flowerPetal: {
    type: String,
    required: true,
  },
});

function createFlower(seed) {
  return {
    id: seed,
    left: (seed * 17.37) % 100,
    size: 15 + ((seed * 11.19) % 15),
    duration: 8 + ((seed * 5.73) % 7),
    delay: (seed * 1.91) % 10,
  };
}

const flowers = Array.from({ length: 15 }, (_, index) => createFlower(index + 1));
</script>

<template>
  <section id="home" class="relative h-[80vh] flex items-center justify-center overflow-hidden">
    <img :src="backgroundImage" class="absolute inset-0 w-full h-full object-cover opacity-60" alt="Hero" />
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#F7F5F0]" />

    <div class="absolute inset-0 overflow-hidden pointer-events-none z-10">
      <img
        v-for="flower in flowers"
        :key="flower.id"
        :src="props.flowerPetal"
        class="falling-flower opacity-50 filter sepia-[.3] hue-rotate-[-30deg]"
        :style="{
          left: `${flower.left}%`,
          width: `${flower.size}px`,
          height: `${flower.size}px`,
          animationDuration: `${flower.duration}s`,
          animationDelay: `${flower.delay}s`,
        }"
        alt="flower petal"
      />
    </div>

    <div class="relative z-20 text-center px-6 mt-32 animate-fade-up">
      <p class="font-heading italic text-xl text-[#8C7A6B] mb-2">We Are Getting Married</p>
      <h2 class="font-cursive text-7xl text-[#4A4A4A] leading-tight mb-4">
        {{ bride.nickname }} <span class="text-4xl mx-2">&</span> {{ groom.nickname }}
      </h2>
      <p class="text-sm uppercase tracking-widest text-[#8C7A6B]">{{ dateText }}</p>
    </div>
  </section>
</template>
