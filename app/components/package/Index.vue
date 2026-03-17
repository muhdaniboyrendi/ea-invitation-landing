<script setup>
const { packages } = storeToRefs(usePackageStore());
</script>

<template>
  <section
    id="packages"
    class="relative py-20 overflow-hidden bg-light dark:bg-dark"
  >
    <div class="max-w-7xl mx-auto px-4 lg:px-6">
      <PackageHeader />

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
