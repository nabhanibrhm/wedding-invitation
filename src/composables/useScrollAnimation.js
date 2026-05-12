import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";

export function useScrollAnimation(sectionIds, enabled) {
  const ids = Array.isArray(sectionIds) ? sectionIds : [];
  const activeSection = ref(ids[0] ?? "");
  let observer = null;

  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  };

  const setupObserver = async () => {
    cleanup();

    const isEnabled = typeof enabled === "function" ? enabled() : enabled?.value ?? enabled;

    if (!isEnabled || ids.length === 0) {
      return;
    }

    await nextTick();

    const sections = ids.map((sectionId) => document.getElementById(sectionId)).filter(Boolean);

    if (sections.length === 0) {
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          activeSection.value = visibleEntry.target.id;
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
  };

  onMounted(() => {
    void setupObserver();
  });

  if (enabled && typeof enabled === "object" && "value" in enabled) {
    watch(
      enabled,
      () => {
        void setupObserver();
      },
      { flush: "post" },
    );
  }

  onBeforeUnmount(() => {
    cleanup();
  });

  return {
    activeSection,
  };
}
