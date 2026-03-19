<script setup>
const router = useRouter();

const handleBack = () => {
  router.push("/");
};
</script>

<template>
  <div class="py-20 lg:py-32 bg-light dark:bg-dark">
    <div class="mx-auto text-center max-w-2xl w-full mt-6">
      <h1 class="text-9xl font-semibold text-primary">404</h1>

      <div class="mt-6 space-y-2">
        <h2
          class="text-2xl font-bold text-black dark:text-white tracking-tight"
        >
          Halaman Tidak Ditemukan
        </h2>
        <p
          class="text-balck/60 dark:text-white/60 max-w-md mx-auto leading-relaxed"
        >
          Maaf, halaman yang Anda cari tidak ditemukan. Silakan periksa kembali
          URL atau kembali ke beranda.
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