<script setup>
import Icon from "../common/Icon.vue";
import SectionTitle from "../common/SectionTitle.vue";

defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section id="event" class="py-20 px-6 bg-[#F7F5F0]">
    <SectionTitle
      title="Wedding Event"
      subtitle="Momen bahagia yang akan kami kenang selamanya."
      class-name="mb-12"
    />

    <div class="space-y-6">
      <div class="bg-white p-8 rounded-2xl shadow-sm border border-[#E8DCC4]/50 text-center relative overflow-hidden">
        <div class="absolute top-0 right-0 w-24 h-24 bg-[#F7F5F0] rounded-bl-full -mr-4 -mt-4 opacity-50" />
        <h3 class="font-heading text-2xl text-[#4A4A4A] mb-4">{{ event.akad.title }}</h3>
        <div class="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-2">
          <Icon name="CalendarHeart" :size="16" class="text-[#8C7A6B]" />
          <span>{{ event.dateText }}</span>
        </div>
        <div class="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-6">
          <Icon name="Clock" :size="16" class="text-[#8C7A6B]" />
          <span>{{ event.akad.time }}</span>
        </div>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-sm border border-[#E8DCC4]/50 text-center relative overflow-hidden">
        <div class="absolute top-0 left-0 w-24 h-24 bg-[#F7F5F0] rounded-br-full -ml-4 -mt-4 opacity-50" />
        <h3 class="font-heading text-2xl text-[#4A4A4A] mb-4">{{ event.resepsi.title }}</h3>
        <div class="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-2">
          <Icon name="CalendarHeart" :size="16" class="text-[#8C7A6B]" />
          <span>{{ event.dateText }}</span>
        </div>
        <div class="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-6">
          <Icon name="Clock" :size="16" class="text-[#8C7A6B]" />
          <span>{{ event.resepsi.time }}</span>
        </div>
      </div>

      <div class="bg-[#8C7A6B] text-white p-8 rounded-2xl text-center shadow-lg mt-8">
        <Icon name="MapPin" :size="32" class="mx-auto mb-4 opacity-80" />
        <h4 class="font-bold text-lg mb-2">{{ event.location }}</h4>
        <p class="text-sm opacity-90 mb-6 leading-relaxed">{{ event.address }}</p>
        <a
          :href="event.mapUrl"
          target="_blank"
          rel="noreferrer"
          class="inline-block bg-white text-[#8C7A6B] px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition"
        >
          Buka Google Maps
        </a>
      </div>
    </div>
  </section>
</template>
