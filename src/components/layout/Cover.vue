<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../common/Button.vue";
import Icon from "../common/Icon.vue";
import Modal from "../common/Modal.vue";

gsap.registerPlugin(ScrollTrigger);

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
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
});

const emit = defineEmits(["open"]);
const coverRoot = ref(null);
let animationContext;

onMounted(async () => {
  await nextTick();

  if (!coverRoot.value) {
    return;
  }

  animationContext = gsap.context(() => {
    ScrollTrigger.create({
      trigger: coverRoot.value,
      start: "top top",
      end: "bottom top",
    });
  }, coverRoot.value);
});

onBeforeUnmount(() => {
  animationContext?.revert();
});
</script>

<template>
  <Modal
    :class-name="`fixed inset-0 z-50 flex items-center justify-center transition-transform duration-1000 ease-in-out ${isOpen ? '-translate-y-full' : 'translate-y-0'}`"
  >
    <div ref="coverRoot" class="absolute inset-0 mx-auto h-full w-full max-w-[480px] overflow-hidden">
      <img :src="backgroundImage" alt="Cover Background" class="h-full w-full object-cover" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,244,229,0.08),_rgba(32,18,12,0.62)_60%,_rgba(14,8,6,0.76)_100%)]" />
      <div class="absolute inset-0 bg-gradient-to-b from-[#f3ddc0]/20 via-black/20 to-[#1f120d]/58" />

      <div class="absolute inset-0 z-30 flex flex-col items-center justify-center p-8 text-center text-white animate-fade-up">
        <p class="mb-4 text-sm uppercase tracking-[0.45em] opacity-80">The Wedding Of</p>
        <h1 class="font-cursive text-6xl text-[#E8DCC4] drop-shadow-md md:text-7xl">
          {{ bride.nickname }} <br />
          & <br />
          {{ groom.nickname }}
        </h1>
        <p class="mt-8 border-y border-white/30 py-2 text-lg font-light tracking-wider">
          {{ dateText }}
        </p>

        <div class="glass-panel mt-12 w-full max-w-[300px] rounded-2xl p-6 text-[#4A4A4A]">
          <p class="mb-1 text-sm">Kepada Yth.</p>
          <p class="mb-4 text-lg font-bold">Tamu Undangan</p>
          <Button
            class-name="w-full bg-[#8C7A6B] text-white py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-[#706256] transition shadow-lg"
            @click="emit('open')"
          >
            <Icon name="Heart" :size="18" class="animate-pulse" />
            <span>Buka Undangan</span>
          </Button>
        </div>
      </div>
    </div>
  </Modal>
</template>
