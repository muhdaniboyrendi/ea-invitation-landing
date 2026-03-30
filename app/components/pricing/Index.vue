<script setup>
const { packages } = storeToRefs(usePackageStore());
</script>

<template>
  <section id="themes" class="pt-28 md:pt-40 pb-20 bg-light dark:bg-dark">
    <div class="max-w-7xl mx-auto px-4 lg:px-6">
      <!-- Section Header -->
      <div class="text-center mb-10 md:mb-30">
        <!-- Main Title -->
        <h1
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="text-4xl/12 sm:text-5xl/15 lg:text-6xl/19 font-bold mb-6 text-black dark:text-white tracking-wide"
        >
          <span class="text-primary"> Daftar Harga </span>
          <br />dan Paket Undangan
        </h1>

        <!-- Description -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="text-xl lg:text-2xl text-black/60 dark:text-white/60 max-w-4xl mx-auto leading-relaxed"
        >
          Daftar harga dan paket undangan pernikahan digital yang tersedia di EA
          Invitation. Pilih paket yang sesuai dengan kebutuhan Anda.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-4 mb-10">
        <PackageCard
          v-for="pkg in packages"
          :key="pkg.id"
          :package="pkg"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :delay="pkg.id * 200"
          :duration="1000"
        />
      </div>

      <PackageAdditionalInfo />
    </div>
  </section>
</template>
