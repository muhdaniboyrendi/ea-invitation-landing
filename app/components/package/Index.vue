<script setup>
const { packages } = storeToRefs(usePackageStore());
</script>

<template>
  <section
    id="packages"
    class="relative py-10 overflow-hidden bg-light dark:bg-dark"
  >
    <div class="max-w-7xl mx-auto px-4 lg:px-6">
      <PackageHeader />

      <div class="flex flex-wrap justify-center gap-8 mb-16">
        <PackageCard v-for="pkg in packages" :key="pkg.id" :package="pkg" />
      </div>

      <PackageAdditionalInfo />
    </div>
  </section>
</template>

<style scoped>
/* Grid pattern */
.bg-grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px);
  background-size: 120px 120px;
}
</style>
