<!-- components/features/BentoGrid.vue -->
<script setup>
const premiumSpring = {
  type: "spring",
  stiffness: 50,
  damping: 22,
  mass: 1,
};
</script>

<template>
  <section id="greeting" class="py-16 overflow-hidden bg-light dark:bg-dark">
    <!-- Header Section (Staggered Entrance on Scroll) -->
    <div class="px-4 max-w-7xl mx-auto">
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-primary text-sm font-bold uppercase tracking-widest mb-4"
      >
        Mengapa EA Invitation?
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
        Semua yang Kamu Butuhkan Di Hari Pernikahan
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
        Semua kebutuhan undangan pernikahanmu ada di satu dasbor — dari desain,
        jadwal acara, sampai konfirmasi kehadiran tamu.
      </p>
    </div>

    <!-- Bento Grid -->
    <div
      class="bg-black/10 dark:bg-white/10 p-2 md:p-4 grid grid-cols-1 md:grid-cols-6 gap-2 max-w-7xl mx-auto mb-10"
    >
      <!-- Card 1: Design (Full Width) -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0, transition: premiumSpring }"
        class="md:col-span-6"
      >
        <div
          class="rounded-2xl bg-light dark:bg-dark p-2 border border-dark/20 dark:border-light/20 flex flex-col transition-all duration-300"
        >
          <div
            class="p-6 md:p-12 mb-4 flex flex-col md:flex-row md:items-center gap-8 gap-x-12"
          >
            <i class="bi bi-layers text-black dark:text-white text-7xl"></i>

            <div>
              <h3
                class="text-black dark:text-white text-xl md:text-2xl font-semibold mb-2"
              >
                Desain Modern dan Anti-Mainstream
              </h3>
              <p class="max-w-2xl text-black/60 dark:text-white/60">
                Kami menghadirkan berbagai desain undangan yang modern dan
                mungkin belum pernah anda temui sebelumnya.
              </p>
            </div>
          </div>

          <div
            class="rounded-lg border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/3 overflow-hidden"
          >
            <div
              class="bg-light dark:bg-dark mt-3 mx-3 md:mt-6 md:mx-6 xl:p-8 xl:px-16 rounded-2xl rounded-b-none border border-b-0 border-black/10 dark:border-white/10 grid lg:grid-cols-2 gap-x-4"
            >
              <!-- Image Container with Custom Parallax/Reveal Effect -->
              <div class="lg:order-2 p-2 overflow-hidden">
                <div
                  class="w-full aspect-4/3 rounded-lg border border-black/10 dark:border-white/10 overflow-hidden bg-black/5"
                >
                  <NuxtImg
                    src="/img/greeting/themes.webp"
                    width="1000"
                    quality="80"
                    loading="lazy"
                    placeholder
                    alt="anti-mainstream design theme image"
                    class="rotate-x-60 -rotate-z-45 scale-240 origin-center"
                  />
                </div>
              </div>

              <div class="lg:order-1 p-6 flex flex-col justify-center">
                <span
                  class="text-black/40 dark:text-white/40 font-medium uppercase text-xs tracking-wider"
                  >Pilihan Tema</span
                >
                <div
                  class="flex flex-col md:flex-row md:justify-between md:items-center gap-y-4 mb-4 mt-1"
                >
                  <h4
                    class="text-black dark:text-white text-xl md:text-2xl md:text-3xl font-bold"
                  >
                    Bukan Template yang Itu-itu Saja
                  </h4>

                  <NuxtLink
                    to="#themes"
                    class="block lg:hidden py-2 px-6 w-full md:w-fit text-center text-white font-bold bg-primary rounded-full hover:bg-primary/80 transition"
                  >
                    Lihat Koleksi Tema
                    <i class="bi bi-arrow-right ml-1"></i>
                  </NuxtLink>
                </div>

                <p class="text-black/60 dark:text-white/60">
                  Ada tema minimalis, tema interaktif, sampai tema budaya
                  tradisional yang dikemas dengan sentuhan modern.
                </p>

                <NuxtLink
                  to="#themes"
                  class="hidden lg:block py-2 px-6 w-full md:w-fit text-center text-white font-bold bg-primary rounded-full mt-6 hover:bg-primary/80 transition"
                >
                  Lihat Koleksi Tema
                  <i class="bi bi-arrow-right ml-1"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 2: Instant (Left Split) -->
      <div
        v-motion
        :initial="{ opacity: 0, x: -40 }"
        :visible-once="{
          opacity: 1,
          x: 0,
          transition: { ...premiumSpring, delay: 150 },
        }"
        class="md:col-span-3"
      >
        <div
          class="rounded-2xl bg-light dark:bg-dark p-2 border border-dark/20 dark:border-light/20 flex flex-col transition-all duration-300 h-full"
        >
          <div
            class="p-6 md:p-12 mb-4 flex flex-col md:flex-row md:items-center gap-8 gap-x-12"
          >
            <i
              class="bi bi-lightning-charge text-black dark:text-white text-7xl"
            ></i>
            <div>
              <h3
                class="text-black dark:text-white text-xl md:text-2xl font-semibold mb-2"
              >
                Buat dalam Hitungan Menit
              </h3>
              <p class="max-w-2xl text-black/60 dark:text-white/60">
                Persiapan pernikahan sudah banyak yang harus diurus. Isi data
                acara, pilih tema, undanganmu langsung siap dibagikan.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 3: Limitless (Right Split) -->
      <div
        v-motion
        :initial="{ opacity: 0, x: 40 }"
        :visible-once="{
          opacity: 1,
          x: 0,
          transition: { ...premiumSpring, delay: 150 },
        }"
        class="md:col-span-3"
      >
        <div
          class="rounded-2xl bg-light dark:bg-dark p-2 border border-dark/20 dark:border-light/20 flex flex-col transition-all duration-300 h-full"
        >
          <div
            class="p-6 md:p-12 mb-4 flex flex-col md:flex-row md:items-center gap-8 gap-x-12"
          >
            <i class="bi bi-sliders2 text-black dark:text-white text-7xl"></i>
            <div>
              <h3
                class="text-black dark:text-white text-xl md:text-2xl font-semibold mb-2"
              >
                Edit Kapan Saja
              </h3>
              <p class="max-w-2xl text-black/60 dark:text-white/60">
                Tanggal berubah atau lokasi pindah mendadak? Buka dasbor, edit
                informasinya, selesai. Link undangan yang sudah disebar tidak
                perlu diganti.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 4: Analytics (Full Width Footer) -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { ...premiumSpring, delay: 200 },
        }"
        class="md:col-span-6"
      >
        <div
          class="rounded-2xl bg-light dark:bg-dark p-2 border border-dark/20 dark:border-light/20 flex flex-col transition-all duration-300"
        >
          <div
            class="p-6 md:p-12 mb-4 flex flex-col md:flex-row md:items-center gap-8 gap-x-12"
          >
            <i
              class="bi bi-graph-up-arrow text-black dark:text-white text-7xl"
            ></i>
            <div>
              <h3
                class="text-black dark:text-white text-xl md:text-2xl font-semibold mb-2"
              >
                RSVP dan Ucapan Tamu
              </h3>
              <p class="max-w-2xl text-black/60 dark:text-white/60">
                Konfirmasi kehadiran, dan ucapan dari tamu langsung tercatat di
                dasbor. Tanpa perlu rekap manual dari chat atau komentar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
