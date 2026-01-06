<script setup>
const { packages } = storeToRefs(usePackageStore());
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
      <!-- <PackageSkeleton v-if="pending" class="mx-auto" />

      <div v-else-if="error">{{ error }}</div> -->

      <div class="flex flex-wrap justify-center gap-8 mb-16">
        <PackageCard v-for="pkg in packages" :key="pkg.id" :package="pkg" />
      </div>

      <p>{{ packages }}</p>

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
