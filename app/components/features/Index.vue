<template>
  <section
    id="features"
    class="relative py-20 overflow-hidden bg-light dark:bg-dark"
  >
    <div class="relative z-10 max-w-7xl mx-auto px-4 lg:px-6">
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
          Everything You Need
          <br />In One Platform
        </h2>

        <!-- Description -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="text-xl lg:text-2xl text-black/60 dark:text-white/60 max-w-4xl mx-auto leading-relaxed"
        >
          Berbagai macam fitur lengkap dan modern yang akan membuat undangan
          pernikahan digital Anda tampil memukau dan berkesan
        </p>
      </div>

      <!-- Features Grid -->
      <FeaturesList />
    </div>
  </section>
</template>
