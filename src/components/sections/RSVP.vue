<script setup>
import Button from "../common/Button.vue";
import Icon from "../common/Icon.vue";
import SectionTitle from "../common/SectionTitle.vue";
import Wishes from "./Wishes.vue";

defineProps({
  wishes: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["submit"]);
</script>

<template>
  <section
    id="rsvp"
    class="py-20 px-6 bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.03)] -mt-6 relative z-10"
  >
    <SectionTitle title="RSVP & Wishes" subtitle="Berikan doa dan konfirmasi kehadiran Anda." class-name="mb-10" />

    <form
      class="bg-[#F7F5F0] p-6 rounded-2xl mb-10 shadow-inner border border-[#E8DCC4]/50"
      @submit="emit('submit', $event)"
    >
      <div class="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            required
            placeholder="Nama Lengkap"
            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#8C7A6B] bg-white text-sm"
          />
        </div>
        <div>
          <select
            name="attendance"
            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#8C7A6B] bg-white text-sm text-gray-700"
          >
            <option value="Hadir">Ya, Saya akan hadir</option>
            <option value="Tidak Hadir">Maaf, saya tidak bisa hadir</option>
          </select>
        </div>
        <div>
          <textarea
            name="message"
            required
            rows="3"
            placeholder="Berikan ucapan atau doa..."
            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#8C7A6B] bg-white text-sm resize-none"
          />
        </div>
        <Button
          type="submit"
          class-name="w-full bg-[#8C7A6B] text-white py-3 rounded-xl flex items-center justify-center space-x-2 hover:bg-[#706256] transition"
        >
          <Icon name="Send" :size="16" />
          <span>Kirim Ucapan</span>
        </Button>
      </div>
    </form>

    <Wishes :wishes="wishes" />
  </section>
</template>
