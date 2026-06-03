<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const { themes } = useThemeStore();
const sliderRef = ref(null);
let autoplayInterval = null;

const limitedThemes = themes.slice(0, 8);

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    const el = sliderRef.value;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;

    // Jika scroll mendekati atau sudah mentok di kanan, reset ke awal (paling kiri)
    if (el.scrollLeft >= maxScrollLeft - 10) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      // Mengambil lebar elemen anak pertama (kartu) untuk kalkulasi jarak geser yang presisi
      const firstChild = el.firstElementChild;
      const cardWidth = firstChild
        ? firstChild.getBoundingClientRect().width
        : 300;

      // Karena menggunakan snap-center, kita geser sejauh lebar kartu + gap (16px)
      el.scrollBy({ left: cardWidth + 16, behavior: "smooth" });
    }
  }, 3000);
};

const stopAutoplay = () => {
  if (autoplayInterval) clearInterval(autoplayInterval);
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<template>
  <section
    id="themes"
    class="relative py-16 overflow-hidden bg-light dark:bg-dark"
  >
    <div class="px-4">
      <p class="text-primary text-sm font-bold uppercase tracking-widest mb-4">
        Galeri Tema Eksklusif
      </p>

      <h2
        class="text-black dark:text-white text-4xl font-semibold tracking-tighter mb-4"
      >
        Temukan Palet Estetika Pernikahan Impian Anda
      </h2>

      <p
        class="max-w-3xl text-black/60 dark:text-white/60 md:text-lg font-medium leading-relaxed mb-14"
      >
        EA Invitation mengurasi antologi desain premium dengan tingkat presisi
        tinggi. Setiap tata letak dikerjakan secara eksklusif untuk menciptakan
        kesan pertama yang tak terlupakan.
      </p>
    </div>

    <div class="bg-black/10 dark:bg-white/10 p-2 md:p-4">
      <div
        class="bg-light dark:bg-dark rounded-2xl border border-black/20 dark:border-white/20 p-2"
      >
        <div
          class="bg-black/5 dark:bg-white/5 rounded-lg border border-black/10 dark:border-white/10 overflow-hidden"
        >
          <div
            ref="sliderRef"
            @touchstart="stopAutoplay"
            @touchend="startAutoplay"
            class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-2 p-4 pb-0 px-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:p-4"
          >
            <ThemesCard
              v-for="theme in limitedThemes"
              :key="theme.id"
              :theme="theme"
              class="snap-center shrink-0 w-[76vw] sm:w-auto"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-14 px-4">
      <NuxtLink
        to="/themes"
        rel="external"
        class="py-3 px-6 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400/70 dark:hover:bg-zinc-600 text-black dark:text-white font-bold rounded-full shrink-0 active:scale-95 transition duration-300"
      >
        Jelajahi Semua Tema
        <i class="bi bi-arrow-up-right ml-2"></i>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
