<script setup>
const router = useRouter();

const handleBack = () => {
  router.push("/");
};
</script>

<template>
  <div
    class="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-purple-950/90 to-slate-900 dark:from-dark dark:via-purple-950/30 dark:to-dark"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>

    <div class="relative z-10 mx-auto text-center max-w-2xl w-full mt-6">
      <h1 class="text-9xl font-semibold text-cyan-500">404</h1>

      <div class="mt-6 space-y-2">
        <h2
          class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-200 tracking-tight"
        >
          Halaman Tidak Ditemukan
        </h2>
        <p class="text-slate-300 max-w-md mx-auto leading-relaxed">
          Maaf, halaman yang Anda cari tidak ditemukan. Silakan periksa kembali
          URL atau kembali ke beranda.
        </p>
      </div>

      <div class="mt-10">
        <button
          @click="handleBack"
          type="button"
          class="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold rounded-xl shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-300 flex gap-2 items-center mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 transition-transform group-hover:-translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Kembali ke Beranda
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Grid pattern */
.bg-grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px);
  background-size: 80px 80px;
}
</style>
