<script setup>
import { computed, useAttrs } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 24,
  },
});

const attrs = useAttrs();

const iconDefinitions = {
  Music: {
    type: "path",
    nodes: [
      { d: "M9 18V5l12-2v13" },
      { d: "M9 9l12-2" },
      { d: "M6 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" },
      { d: "M18 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" },
    ],
  },
  Pause: {
    type: "path",
    nodes: [{ d: "M10 4H6v16h4V4Zm8 0h-4v16h4V4Z" }],
  },
  MapPin: {
    type: "path",
    nodes: [
      { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" },
      { d: "M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" },
    ],
  },
  CalendarHeart: {
    type: "path",
    nodes: [
      { d: "M11 14.01a3.44 3.44 0 0 1 2.39-1.02 3.47 3.47 0 0 1 2.39 5.95L11 23l-4.78-4.06A3.47 3.47 0 0 1 8.61 13 3.44 3.44 0 0 1 11 14.01Z" },
      { d: "M16 2v4" },
      { d: "M8 2v4" },
      { d: "M3 10h18" },
      { d: "M21 8v10a2 2 0 0 1-2 2h-1" },
      { d: "M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" },
      { d: "M3 8v10a2 2 0 0 0 2 2h1" },
    ],
  },
  Clock: {
    type: "path",
    nodes: [
      { d: "M12 6v6l4 2" },
      { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" },
    ],
  },
  Heart: {
    type: "path",
    nodes: [
      { d: "m12 21-1.9-1.7C5 14.7 2 12 2 8.5 2 5.4 4.4 3 7.5 3c1.7 0 3.4.8 4.5 2.1C13.1 3.8 14.8 3 16.5 3 19.6 3 22 5.4 22 8.5c0 3.5-3 6.2-8.1 10.8L12 21Z" },
    ],
  },
  Gift: {
    type: "path",
    nodes: [
      { d: "M20 12v10H4V12" },
      { d: "M2 7h20v5H2z" },
      { d: "M12 22V7" },
      { d: "M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7Z" },
      { d: "M12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7Z" },
    ],
  },
  Camera: {
    type: "path",
    nodes: [
      { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z" },
      { d: "M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" },
    ],
  },
  MessageCircle: {
    type: "path",
    nodes: [
      { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" },
    ],
  },
  Send: {
    type: "path",
    nodes: [
      { d: "m22 2-7 20-4-9-9-4Z" },
      { d: "M22 2 11 13" },
    ],
  },
  Copy: {
    type: "path",
    nodes: [
      { d: "M8 8h11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2Z" },
      { d: "M4 16H3a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h11a1 1 0 0 1 1 1v1" },
    ],
  },
  CheckCircle2: {
    type: "path",
    nodes: [
      { d: "m9 12 2 2 4-4" },
      { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" },
    ],
  },
};

const icon = computed(() => iconDefinitions[props.name] ?? iconDefinitions.Heart);
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    v-bind="attrs"
  >
    <template v-for="(node, index) in icon.nodes" :key="`${name}-${index}`">
      <path v-if="icon.type === 'path'" :d="node.d" />
      <circle v-else-if="icon.type === 'circle'" :cx="node.cx" :cy="node.cy" :r="node.r" />
    </template>
  </svg>
</template>
