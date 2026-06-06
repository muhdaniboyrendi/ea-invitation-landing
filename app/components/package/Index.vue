<!-- components/packages/PricingSection.vue -->
<script setup>
const { packages } = storeToRefs(usePackageStore());

const premiumSpring = {
  type: "spring",
  stiffness: 55,
  damping: 18,
  mass: 1,
};
</script>

<template>
  <section id="packages" class="py-16 overflow-hidden bg-light dark:bg-dark">
    <!-- Header Section -->
    <div class="px-4 max-w-7xl mx-auto">
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-primary text-sm font-bold uppercase tracking-widest mb-4"
      >
        Pilihan Paket Harga
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
        Pilih Paket yang Paling Pas untuk Hari Bahagiamu
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
        Temukan kombinasi fitur terbaik yang sesuai dengan kebutuhan acaramu.
        Tenang saja, kamu punya kebebasan penuh buat upgrade paket kapan saja
        kamu butuhkan tanpa ribet.
      </p>
    </div>

    <!-- Pricing Cards Container Grid -->
    <div class="bg-black/10 dark:bg-white/10 py-2 md:p-4 max-w-7xl mx-auto">
      <div
        class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-2 px-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:px-0"
      >
        <!-- PackageCard with Staggered Entrance and Micro-Lift -->
        <PackageCard
          v-for="(pkg, index) in packages"
          :key="pkg.id"
          v-motion
          :initial="{ opacity: 0, y: 40, scale: 0.95 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              ...premiumSpring,
              delay: (index % 4) * 120,
            },
          }"
          :package="pkg"
          class="snap-center shrink-0 w-[78vw] sm:w-auto transition-transform duration-300"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
