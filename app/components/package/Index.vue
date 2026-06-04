<script setup>
const { packages } = storeToRefs(usePackageStore());
</script>

<template>
  <section id="packages" class="py-16 overflow-hidden bg-light dark:bg-dark">
    <div class="px-4">
      <p class="text-primary text-sm font-bold uppercase tracking-widest mb-4">
        Pilihan Paket Harga
      </p>

      <h2
        class="text-black dark:text-white text-4xl font-semibold tracking-tighter mb-4"
      >
        Pilih Paket yang Paling Pas untuk Hari Bahagiamu
      </h2>

      <p
        class="max-w-3xl text-black/60 dark:text-white/60 md:text-lg font-medium leading-relaxed mb-14"
      >
        Temukan kombinasi fitur terbaik yang sesuai dengan kebutuhan acaramu.
        Tenang saja, kamu punya kebebasan penuh buat upgrade paket kapan saja
        kamu butuhkan tanpa ribet.
      </p>
    </div>

    <div class="bg-black/10 dark:bg-white/10 py-2 md:p-4">
      <div
        class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-2 px-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:px-0"
      >
        <PackageCard
          v-for="pkg in packages"
          :key="pkg.id"
          :package="pkg"
          class="snap-center shrink-0 w-[78vw] sm:w-auto"
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
