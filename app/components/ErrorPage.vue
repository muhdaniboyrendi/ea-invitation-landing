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
  <div class="py-20 lg:py-32 bg-light dark:bg-dark">
    <div class="mx-auto text-center max-w-2xl w-full mt-6">
      <h1 class="text-9xl font-semibold text-primary">
        {{ props.statusCode }}
      </h1>

      <div class="mt-6 space-y-2">
        <h2
          class="text-2xl font-bold text-black dark:text-white tracking-tight"
        >
          {{ props.message }}
        </h2>
        <p
          class="text-black/60 dark:text-white/60 max-w-md mx-auto leading-relaxed"
        >
          Maaf, terjadi kesalahan pada server. Silakan coba lagi nanti.
        </p>
      </div>

      <div class="mt-10">
        <button
          @click="handleBack"
          type="button"
          class="group inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-white/5 border border-black/20 dark:border-white/20 text-black dark:text-white font-semibold rounded-lg hover:scale-102 transition duration-300"
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
