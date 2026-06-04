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
  { value: "96%", label: "Tingkat Kepuasan & Rekomendasi" },
  { value: "4.9", label: "Rating Kepuasan di Google Review", star: true },
  { value: "15000+", label: "Undangan Sukses Terkirim & Diakses" },
];

// Setup per-stat animation state
const sectionRef = ref(null);
const hasAnimated = ref(false);

const animatedStats = stats.map((stat) => {
  const parsed = parseStatValue(stat.value);
  const source = ref(0);
  const output = useTransition(source, {
    duration: 3000,
    transition: [0.05, 0.9, 0.1, 1.0],
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
  { threshold: 0.3 },
);
</script>

<template>
  <section
    ref="sectionRef"
    class="py-16 bg-light dark:bg-dark relative overflow-hidden"
  >
    <div class="px-4">
      <p class="text-primary text-sm font-bold uppercase tracking-widest mb-4">
        Bukti Nyata Kami
      </p>

      <h2
        class="text-black dark:text-white text-4xl font-semibold tracking-tighter mb-4"
      >
        Dipercaya untuk Menjaga Momen Paling Berharga
      </h2>

      <p
        class="max-w-3xl text-black/60 dark:text-white/60 md:text-lg font-medium leading-relaxed mb-14"
      >
        EA Invitation bukan cuma sekadar platform pembuat undangan. Kami bangga
        bisa membantu ribuan pasangan membagikan kabar bahagia mereka dengan
        cara yang modern, aman, dan bebas ribet.
      </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 md:px-4">
      <div
        v-for="(stat, index) in animatedStats"
        :key="index"
        class="relative flex flex-col items-center text-center p-4 rounded-xl hover:bg-black/3 dark:hover:bg-white/3 transition duration-300"
      >
        <!-- High-End Typography Value Display -->
        <div class="flex items-baseline justify-center gap-1.5">
          <span
            class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black dark:text-white"
          >
            {{ stat.display }}
          </span>
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
