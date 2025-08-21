<script setup>
const { packages, pending, error } = storeToRefs(usePackageStore());

const packagesList = [
  {
    id: 1,
    name: "Economy",
    price: 100000.0,
    features: [
      "100 tamu undangan + grup",
      "4 foto galeri (max)",
      "Informasi acara",
      "Background musik (list)",
      "Timer countdown",
      "Maps lokasi",
      "Story",
      "RSVP",
      "Ucapan tamu",
      "1 bulan masa aktif",
    ],
  },
  {
    id: 2,
    name: "Premium",
    price: 150000.0,
    features: [
      "500 tamu undangan + grup",
      "10 foto galeri (max)",
      "1 video",
      "Informasi acara",
      "Background musik custom",
      "Timer countdown",
      "Maps lokasi",
      "Tambah ke kalender",
      "Story",
      "RSVP",
      "Ucapan tamu",
      "Kirim hadiah",
      "6 bulan masa aktif",
    ],
  },
  {
    id: 3,
    name: "Business",
    price: 250000.0,
    features: [
      "Unlimited tamu undangan + grup",
      "50 foto galeri (max)",
      "10 video (max)",
      "Informasi acara",
      "Background musik custom",
      "Timer countdown",
      "Maps lokasi",
      "Tambah ke kalender",
      "Story",
      "RSVP",
      "Ucapan tamu",
      "Kirim hadiah",
      "6 bulan masa aktif",
    ],
  },
];

const packagesUsed = packages ? packages : packagesList;
</script>

<template>
  <section
    id="packages"
    class="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-900/90 to-slate-900 dark:from-black dark:via-indigo-950/20 dark:to-dark"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-7"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <PackageHeader />

      <!-- Pricing Cards -->
      <PackageSkeleton v-if="pending" class="mx-auto" />

      <div v-else class="flex flex-wrap justify-center gap-8 mb-16">
        <PackageCard v-for="pkg in packagesUsed" :key="pkg.id" :package="pkg" />
      </div>

      <!-- Additional Info Section -->
      <PackageAdditionalInfo />
    </div>
  </section>
</template>

<style scoped>
/* Grid pattern */
.bg-grid-pattern {
  background-image: linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px);
  background-size: 120px 120px;
}
</style>
