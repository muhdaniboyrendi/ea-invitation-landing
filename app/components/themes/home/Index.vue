<!-- components/themes/ShowcaseSlider.vue -->
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

const premiumSpring = {
  type: "spring",
  stiffness: 45,
  damping: 20,
};
</script>

<template>
  <section
    id="themes"
    class="relative py-16 overflow-hidden bg-light dark:bg-dark"
  >
    <!-- Header Section -->
    <div class="px-4 max-w-7xl mx-auto">
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-primary text-sm font-bold uppercase tracking-widest mb-4"
      >
        Koleksi Tema Pilihan
      </p>

      <h2
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 800, delay: 100 },
        }"
        class="text-black dark:text-white text-4xl font-semibold tracking-tighter mb-4"
      >
        Pilihan Desain Unik & Gak Pasaran
      </h2>

      <p
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 800, delay: 200 },
        }"
        class="max-w-3xl text-black/60 dark:text-white/60 md:text-lg font-medium leading-relaxed mb-14"
      >
        Kami mengurasi deretan desain undangan digital modern yang penuh
        karakter khusus untuk kamu yang bosan dengan template sejuta umat.
        Setiap layout dibuat presisi agar undanganmu sukses bikin tamu berkesan
        sejak pandangan pertama.
      </p>
    </div>

    <!-- Themes Catalog Wrapper -->
    <div
      class="bg-black/10 dark:bg-white/10 p-2 md:p-4 max-w-7xl mx-auto"
    >
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
            class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-2 px-6 pt-4 pb-4 sm:px-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            <!-- Themes Cards with Staggered Slide-Up -->
            <ThemesCard
              v-for="(theme, index) in limitedThemes"
              :key="theme.id"
              v-motion
              :initial="{ opacity: 0, y: 40, scale: 0.98 }"
              :visible-once="{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: 'spring',
                  stiffness: 40,
                  damping: 16,
                  delay: (index % 4) * 100,
                },
              }"
              :theme="theme"
              class="snap-center shrink-0 w-[76vw] sm:w-auto"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action Button Section -->
    <div class="mt-14 px-4 text-center max-w-7xl mx-auto md:text-left">
      <NuxtLink
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :visible-once="{
          opacity: 1,
          scale: 1,
          transition: { ...premiumSpring, delay: 500 },
        }"
        to="/themes"
        rel="external"
        class="inline-block py-3 px-6 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400/70 dark:hover:bg-zinc-600 text-black dark:text-white font-bold rounded-full shrink-0 active:scale-95 transition-all duration-300 shadow-md shadow-black/5 hover:shadow-lg"
      >
        Jelajahi Semua Desain
        <i
          class="bi bi-arrow-up-right ml-2 transition-transform duration-300 inline-block group-hover:translate-x-1 group-hover:-translate-y-1"
        ></i>
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
