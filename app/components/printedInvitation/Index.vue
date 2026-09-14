<script setup>
const premiumSpring = {
  type: "spring",
  stiffness: 50,
  damping: 22,
  mass: 1,
};
</script>

<template>
  <section
    id="print-invitation"
    class="py-16 overflow-hidden bg-light dark:bg-dark"
  >
    <div class="px-4 max-w-7xl mx-auto">
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-primary text-sm font-bold uppercase tracking-widest mb-4"
      >
        Coming Soon
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
        Undangan Cetak by EA Printing
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
        Kini EA Invitation juga menyediakan undangan cetak, bekerja sama dengan
        EA Printing dengan pilihan desain yang identik dengan undangan digital.
      </p>
    </div>

    <!-- Bento Grid -->
    <div
      class="bg-black/10 dark:bg-white/10 p-2 md:p-4 lg:p-6 max-w-7xl mx-auto mb-10"
    >
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0, transition: premiumSpring }"
        class="bg-light dark:bg-dark sm:p-4 xl:p-6 rounded-2xl border border-b-0 border-black/10 dark:border-white/10 grid lg:grid-cols-2 gap-x-4"
      >
        <!-- Image Container with Custom Parallax/Reveal Effect -->
        <div class="p-2 overflow-hidden">
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
              class="rotate-x-60 -rotate-z-45 scale-240 origin-center blur-2xl"
            />
          </div>
        </div>

        <div class="p-6 flex flex-col justify-center">
          <span
            class="text-black/40 dark:text-white/40 font-medium uppercase text-xs tracking-wider"
            >Coming Soon</span
          >
          <div
            class="flex flex-col md:flex-row md:justify-between md:items-center gap-y-4 mb-4 mt-1"
          >
            <h4
              class="text-black dark:text-white text-xl md:text-2xl md:text-3xl font-bold"
            >
              Undangan Cetak
            </h4>

            <button
              type="button"
              disabled
              class="block lg:hidden py-2 px-6 w-full md:w-fit text-center text-white font-bold bg-primary rounded-full hover:bg-primary/80 transition"
            >
              Coming Soon
              <!-- Pesan Sekarang -->
              <!-- <i class="bi bi-arrow-right ml-1"></i> -->
            </button>
          </div>

          <p class="text-black/60 dark:text-white/60">
            Kami segera menghadirkan undangan cetak untuk pelanggan kami
          </p>

          <button
            type="button"
            disabled
            class="hidden lg:block py-2 px-6 w-full md:w-fit text-center text-white font-bold bg-primary rounded-full mt-6 hover:bg-primary/80 transition"
          >
            Coming Soon
            <!-- Pesan Sekarang -->
            <!-- <i class="bi bi-arrow-right ml-1"></i> -->
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
