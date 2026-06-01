<script setup>
const stats = [
  { value: "100+", label: "Undangan Eksklusif Dibuat" },
  { value: "96%", label: "Tingkat Kepuasan Pasangan" },
  { value: "4.9", label: "Rating Rata-rata Platform", star: true },
  { value: "700+", label: "Tamu Undangan Terhubung" }, // Diubah ke 'k' agar skala marketing terasa lebih masif & premium
];
</script>

<template>
  <section class="py-20 bg-light dark:bg-dark relative overflow-hidden">
    <!-- Subtle Background Line Divider to anchor the premium design -->
    <div
      class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-black/[0.06] to-transparent dark:via-white/[0.06]"
    ></div>

    <div class="mx-auto max-w-7xl px-6 relative z-10">
      <!-- Premium Frameless Stats Layout -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 md:gap-x-8">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :delay="index * 150"
          :duration="800"
          class="relative flex flex-col items-center text-center group"
        >
          <!-- Elegant Vertical Divider for Desktop (Except Last Item) -->
          <div
            v-if="index !== stats.length - 1"
            class="hidden lg:block absolute right-[-10%] top-1/4 h-1/2 w-[1px] bg-black/[0.08] dark:bg-white/[0.08]"
          ></div>

          <!-- High-End Typography Value Display -->
          <div class="flex items-baseline justify-center gap-1.5">
            <span
              class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black dark:text-white transition-all duration-300 group-hover:text-primary"
            >
              {{ stat.value }}
            </span>

            <!-- Premium Minimalist Star Icon -->
            <svg
              v-if="stat.star"
              class="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 shrink-0 transform translate-y-[-4px] sm:translate-y-[-8px]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>

          <!-- Refined Minimalist Label -->
          <p
            class="mt-3 text-xs sm:text-sm font-medium tracking-wide text-black/50 dark:text-white/40 max-w-[160px] sm:max-w-none text-balance"
          >
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom Border Line -->
    <div
      class="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-black/[0.06] to-transparent dark:via-white/[0.06]"
    ></div>
  </section>
</template>
