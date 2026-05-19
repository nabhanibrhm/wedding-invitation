<script setup>
import { nextTick, onBeforeUnmount, ref, watch } from "vue";
import AudioPlayer from "./components/common/AudioPlayer.vue";
import ToastNotification from "./components/common/ToastNotification.vue";
import Cover from "./components/layout/Cover.vue";
import Footer from "./components/layout/Footer.vue";
import Hero from "./components/layout/Hero.vue";
import MusicToggle from "./components/layout/MusicToggle.vue";
import Navbar from "./components/layout/Navbar.vue";
import BrideGroom from "./components/sections/BrideGroom.vue";
import EventDetail from "./components/sections/EventDetail.vue";
import Gallery from "./components/sections/Gallery.vue";
import Gift from "./components/sections/Gift.vue";
import QuoteSection from "./components/sections/QuoteSection.vue";
import RSVP from "./components/sections/RSVP.vue";
import { navigationItems, weddingData } from "./constants/weddingData";
import { useAudio } from "./composables/useAudio";
import { useCountdown } from "./composables/useCountdown";
import { useScrollAnimation } from "./composables/useScrollAnimation";
import "./styles/global.css";
import { copyText } from "./utils/clipboard";

const isOpen = ref(false);
const toastMessage = ref("");
const wishes = ref([...weddingData.initialWishes]);
const { audioRef, isPlaying, playAudio, toggleAudio } = useAudio();
const sectionIds = navigationItems.map((item) => item.id);
const { activeSection } = useScrollAnimation(sectionIds, isOpen);

useCountdown(() => weddingData.event.dateIso);

let toastTimeoutId = null;

watch(
  isOpen,
  (value) => {
    document.body.style.overflow = value ? "auto" : "hidden";
  },
  { immediate: true },
);

const showToast = (message) => {
  toastMessage.value = message;

  if (toastTimeoutId) {
    window.clearTimeout(toastTimeoutId);
  }

  toastTimeoutId = window.setTimeout(() => {
    toastMessage.value = "";
  }, 3000);
};

const handleOpenInvitation = async () => {
  isOpen.value = true;
  await nextTick();
  await playAudio();
};

const handleCopyAccount = async (accountNumber) => {
  try {
    await copyText(accountNumber);
    showToast("Berhasil disalin!");
  } catch (error) {
    console.error("Failed to copy", error);
  }
};

const handleRsvpSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const newWish = {
    name: formData.get("name"),
    attendance: formData.get("attendance"),
    message: formData.get("message"),
  };

  wishes.value = [newWish, ...wishes.value];
  event.target.reset();
  showToast("Pesan berhasil dikirim!");
};

const handleSelectTab = (sectionId) => {
  activeSection.value = sectionId;
};

const handleAudioReady = (element) => {
  audioRef.value = element;
};

onBeforeUnmount(() => {
  document.body.style.overflow = "auto";

  if (toastTimeoutId) {
    window.clearTimeout(toastTimeoutId);
  }
});
</script>

<template>
  <div class="min-h-screen bg-[#2A2B2A] flex justify-center font-body text-[#4A4A4A]">
    <AudioPlayer :src="weddingData.assets.music" @ready="handleAudioReady" />

    <div class="w-full max-w-[480px] bg-[#F7F5F0] relative shadow-2xl overflow-x-hidden min-h-screen">
      <Cover
        :is-open="isOpen"
        :bride="weddingData.bride"
        :groom="weddingData.groom"
        :date-text="weddingData.event.dateText"
        :cover-image="weddingData.assets.coverFlower"
        @open="handleOpenInvitation"
      />

      <div v-if="isOpen" class="pb-24">
        <Hero
          :bride="weddingData.bride"
          :groom="weddingData.groom"
          :date-text="weddingData.event.dateText"
          :background-image="weddingData.assets.heroBackground"
          :flower-petal="weddingData.assets.flowerPetal"
        />
        <QuoteSection :quote="weddingData.quote" />
        <BrideGroom :bride="weddingData.bride" :groom="weddingData.groom" />
        <EventDetail :event="weddingData.event" />
        <Gallery :images="weddingData.gallery" />
        <Gift :banks="weddingData.banks" @copy="handleCopyAccount" />
        <RSVP :wishes="wishes" @submit="handleRsvpSubmit" />
        <Footer :bride="weddingData.bride" :groom="weddingData.groom" :footer="weddingData.footer" />
      </div>

      <ToastNotification :message="toastMessage" />

      <MusicToggle v-if="isOpen" :is-playing="isPlaying" @toggle="toggleAudio" />

      <Navbar
        v-if="isOpen"
        :items="navigationItems"
        :active-tab="activeSection"
        @select="handleSelectTab"
      />
    </div>
  </div>
</template>
