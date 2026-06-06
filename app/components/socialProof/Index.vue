<!-- components/stats/SocialProof.vue -->
<script setup>
import { ref, computed } from "vue";
import { useIntersectionObserver, useTransition } from "@vueuse/core";

// Parse stat value into numeric + suffix
function parseStatValue(raw) {
  const match = String(raw).match(/^([\d.]+)(\D*)$/);
  if (!match) return { numeric: 0, suffix: raw };
  return { numeric: parseFloat(match[1]), suffix: match[2] };
}

const stats = [
  { value: "1000+", label: "Pasangan Bahagia yang Sudah Rilis" },
  { value: "15000+", label: "Undangan Sukses Terkirim & Diakses" },
];

// Setup per-stat animation state
const sectionRef = ref(null);
const hasAnimated = ref(false);

const animatedStats = stats.map((stat) => {
  const parsed = parseStatValue(stat.value);
  const source = ref(0);
  const output = useTransition(source, {
    duration: 2500, // Sedikit dipercepat dari 3000ms agar ritme terasa lebih dinamis
    transition: [0.16, 1, 0.3, 1], // Kurva ultra-smooth kustom (easeOutExpo)
  });

  const display = computed(() => {
    const val = output.value;
    const formatted =
      parsed.numeric % 1 !== 0
        ? val.toFixed(1)
        : Math.floor(val).toLocaleString("id-ID");
    return formatted + parsed.suffix;
  });

  return { ...stat, source, display, target: parsed.numeric };
});

// Trigger semua animasi sekaligus saat section masuk viewport
useIntersectionObserver(
  sectionRef,
  ([entry]) => {
    if (entry.isIntersecting && !hasAnimated.value) {
      hasAnimated.value = true;
      animatedStats.forEach((stat) => {
        stat.source.value = stat.target;
      });
    }
  },
  { threshold: 0.2 }, // Ambang batas diturunkan agar animasi terpicu lebih awal di mobile
);

const premiumSpring = {
  type: "spring",
  stiffness: 50,
  damping: 18,
};
</script>

<template>
  <section
    ref="sectionRef"
    class="py-16 bg-light dark:bg-dark relative overflow-hidden"
  >
    <!-- Header Section -->
    <div class="px-4 max-w-7xl mx-auto">
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-primary text-sm font-bold uppercase tracking-widest mb-4"
      >
        Bukti Nyata Kami
      </p>

      <h2
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 800, delay: 100 },
        }"
        class="text-black dark:text-white text-4xl font-semibold tracking-tighter mb-4"
      >
        Dipercaya untuk Menjaga Momen Paling Berharga
      </h2>

      <p
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 800, delay: 200 },
        }"
        class="max-w-3xl text-black/60 dark:text-white/60 md:text-lg font-medium leading-relaxed mb-14"
      >
        EA Invitation bukan cuma sekadar platform pembuat undangan. Kami bangga
        bisa membantu ribuan pasangan membagikan kabar bahagia mereka dengan
        cara yang modern, aman, dan bebas ribet.
      </p>
    </div>

    <!-- Stats Cards Grid -->
    <div class="grid grid-cols-2 gap-2 p-2">
      <div
        v-for="(stat, index) in animatedStats"
        :key="index"
        v-motion
        :initial="{ opacity: 0, y: 40, scale: 0.97 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { ...premiumSpring, delay: index * 120 },
        }"
        class="relative flex flex-col items-center text-center p-6 md:p-8"
      >
        <!-- High-End Typography Value Display -->
        <div class="flex items-center justify-center gap-1.5 h-12 md:h-16">
          <span
            class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black dark:text-white font-mono"
          >
            {{ stat.display }}
          </span>

          <!-- Animated Star Icon for Google Review (triggers smooth spring reveal) -->
          <i
            v-if="stat.star"
            v-motion
            :initial="{ opacity: 0, scale: 0, rotate: -30 }"
            :visible-once="{
              opacity: 1,
              scale: 1,
              rotate: 0,
              transition: {
                type: 'spring',
                stiffness: 60,
                damping: 12,
                delay: index * 120 + 600,
              },
            }"
            class="bi bi-star-fill text-amber-500 text-xl sm:text-2xl lg:text-3xl"
          ></i>
        </div>

        <!-- Refined Minimalist Label -->
        <p
          class="mt-3 text-xs sm:text-sm font-medium tracking-wide text-black/60 dark:text-white/60 max-w-[160px] sm:max-w-none text-balance leading-snug"
        >
          {{ stat.label }}
        </p>
      </div>
    </div>
  </section>
</template>
