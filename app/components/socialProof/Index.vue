<script setup>
const stats = [
  { value: "500+", label: "Undangan Dibuat" },
  { value: "97%", label: "Kepuasan Pengguna" },
  { value: "4.9", label: "Rating Rata-rata", star: true },
  { value: "7.000+", label: "Tamu Diundang" },
];
</script>

<template>
  <section class="py-20 bg-light dark:bg-dark">
    <div class="mx-auto max-w-7xl px-4 lg:px-6">
      <!-- Section Header -->
      <div class="text-center mb-10">
        <!-- Main Title -->
        <h2
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="text-4xl/12 sm:text-5xl/15 lg:text-6xl/19 font-bold mb-6 text-black dark:text-white tracking-wide"
        >
          Mengapa EA Invitation?
        </h2>

        <!-- Description -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="text-xl lg:text-2xl text-black/60 dark:text-white/60 max-w-4xl mx-auto leading-relaxed"
        >
          EA Invitation telah dipercaya oleh ribuan pasangan untuk membuat
          undangan pernikahan digital yang indah dan berkesan.
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :delay="index * 200"
          :duration="1000"
          class="rounded-2xl border border-black/20 dark:border-white/20 bg-white dark:bg-white/3 p-8 text-center shadow-xl"
        >
          <div class="flex items-center justify-center gap-1">
            <span
              class="text-2xl sm:text-3xl font-bold text-black dark:text-white"
            >
              {{ stat.value }}
            </span>
            <!-- Star icon for rating -->
            <svg
              v-if="stat.star"
              class="size-5 text-amber-400 shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
          <p class="mt-1 text-sm text-black/60 dark:text-white/60">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
