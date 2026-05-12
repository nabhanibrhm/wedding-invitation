<script setup>
import SectionTitle from "../common/SectionTitle.vue";

defineProps({
  bride: {
    type: Object,
    required: true,
  },
  groom: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section id="couple" class="py-16 px-6 bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
    <SectionTitle
      title="Groom & Bride"
      subtitle="Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri pernikahan kami."
      class-name="mb-12"
    />

    <div class="flex flex-col items-center text-center mb-16 animate-fade-up">
      <div class="w-48 h-56 rounded-t-full rounded-b-xl overflow-hidden mb-6 p-2 border border-[#E8DCC4]">
        <img :src="bride.image" class="w-full h-full object-cover rounded-t-full rounded-b-lg" alt="Bride" />
      </div>
      <h3 class="font-cursive text-4xl text-[#4A4A4A] mb-2">{{ bride.name }}</h3>
      <p class="text-sm text-gray-600 mb-3">{{ bride.parents }}</p>
      <a href="#" class="text-xs text-[#8C7A6B] border border-[#8C7A6B] px-4 py-1 rounded-full hover:bg-[#8C7A6B] hover:text-white transition">
        {{ bride.instagram }}
      </a>
    </div>

    <div class="text-center text-4xl font-cursive text-[#8C7A6B] mb-16">&</div>

    <div class="flex flex-col items-center text-center animate-fade-up">
      <div class="w-48 h-56 rounded-t-full rounded-b-xl overflow-hidden mb-6 p-2 border border-[#E8DCC4]">
        <img :src="groom.image" class="w-full h-full object-cover rounded-t-full rounded-b-lg" alt="Groom" />
      </div>
      <h3 class="font-cursive text-4xl text-[#4A4A4A] mb-2">{{ groom.name }}</h3>
      <p class="text-sm text-gray-600 mb-3">{{ groom.parents }}</p>
      <a href="#" class="text-xs text-[#8C7A6B] border border-[#8C7A6B] px-4 py-1 rounded-full hover:bg-[#8C7A6B] hover:text-white transition">
        {{ groom.instagram }}
      </a>
    </div>
  </section>
</template>
