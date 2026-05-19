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
  coverImage: {
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
    <div ref="coverRoot" class="absolute inset-0 mx-auto h-full w-full max-w-[480px] overflow-hidden bg-[linear-gradient(180deg,_#FFF8F0_0%,_#F2E4D8_45%,_#E0C2A2_100%)]">
      <img :src="coverImage" alt="" class="absolute inset-0 h-full w-full object-cover" />

      <div class="absolute inset-0 z-30 flex flex-col items-center justify-center p-8 text-center text-[#5A3727] animate-fade-up">
        <p class="mb-3 text-sm uppercase tracking-[0.22em] opacity-80">The Wedding Of</p>
        <h1 class="font-cursive text-6xl leading-[0.9] text-[#7A3F2A] md:text-7xl">
          {{ bride.nickname }} <br />
          & <br />
          {{ groom.nickname }}
        </h1>
        <p class="mt-6 border-y border-[#7A3F2A]/30 py-2 text-lg font-light tracking-wide text-[#6A3D2B]">
          {{ dateText }}
        </p>

        <div class="mt-4 w-full max-w-[300px] p-6 text-[#5A3727]">
          <p class="mb-1 text-sm">Kepada Yth.</p>
          <p class="mb-4 text-lg font-bold">Tamu Undangan</p>
          <Button
            class-name="w-full bg-[#7A3F2A] text-[#FFF8F0] py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-[#633321] transition shadow-lg"
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
