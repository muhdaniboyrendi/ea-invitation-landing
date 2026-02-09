<script setup>
const props = defineProps({
  statusCode: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

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
      <h1 class="text-9xl font-semibold text-cyan-500">
        {{ props.statusCode }}
      </h1>

      <div class="mt-6 space-y-2">
        <h2
          class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-200 tracking-tight"
        >
          {{ props.message }}
        </h2>
        <p class="text-slate-300 max-w-md mx-auto leading-relaxed">
          Maaf, terjadi kesalahan pada server. Silakan coba lagi nanti.
        </p>
      </div>

      <div class="mt-10">
        <button
          @click="handleBack"
          type="button"
          class="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold rounded-xl shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-300 flex gap-2 items-center mx-auto"
        >
          <i
            class="bi bi-arrow-left transition-transform group-hover:-translate-x-1"
          ></i>
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
