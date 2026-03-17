<script setup>
const additionalInfo = [
  {
    icon: "bi-people",
    label: "Tamu Personal dan Grup",
  },
  {
    icon: "bi-hourglass-split",
    label: "Timer Countdown",
  },
  {
    icon: "bi-person-check",
    label: "RSVP",
  },
  {
    icon: "bi-hdd-stack",
    label: "Akses Dashboard",
  },
  {
    icon: "bi-pencil-square",
    label: "Edit Tanpa Batas",
  },
  {
    icon: "bi-chevron-double-up",
    label: "Upgrage Paket",
  },
];
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visible-once="{ opacity: 1, y: 0 }"
    :duration="1000"
    class="text-center"
  >
    <div
      class="bg-white dark:bg-black border border-dark/20 dark:border-light/20 rounded-2xl p-6 lg:p-8 max-w-4xl mx-auto"
    >
      <h3 class="text-2xl lg:text-3xl font-bold text-dark dark:text-light mb-6 md:mb-8">
        Semua Paket Termasuk
      </h3>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div
          v-for="(item, index) in additionalInfo"
          :key="index"
          class="flex items-center text-black/80 dark:text-white/80"
        >
          <div
            class="w-8 h-8 bg-primary rounded-md flex items-center justify-center mr-3 flex-shrink-0"
          >
            <i class="bi text-white" :class="item.icon"></i>
          </div>
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
