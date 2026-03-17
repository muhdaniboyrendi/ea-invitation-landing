<template>
  <div class="text-center mb-10">
    <!-- Main Title -->
    <h2
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible-once="{ opacity: 1, y: 0 }"
      :duration="1000"
      class="text-4xl/12 sm:text-5xl/15 lg:text-6xl/19 font-bold mb-6 text-black dark:text-white tracking-wide"
    >
      Choose Your Plan
    </h2>

    <!-- Description -->
    <p
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible-once="{ opacity: 1, y: 0 }"
      :duration="1000"
      class="text-xl lg:text-2xl text-black/60 dark:text-white/60 max-w-4xl mx-auto leading-relaxed"
    >
      Pilih paket yang sesuai dengan kebutuhan dan upgrade paket kapan saja
    </p>
  </div>
</template>
