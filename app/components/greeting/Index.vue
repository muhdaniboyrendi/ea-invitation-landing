<template>
  <section id="greeting" class="py-20 overflow-hidden bg-light dark:bg-dark">
    <div class="px-4 md:px-6">
      <!-- Bento Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-4 max-w-7xl mx-auto mb-20"
      >
        <!-- Card 1 - Instant (lebar 2 kolom, tinggi normal) -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :visible-once="{ opacity: 1, x: 0 }"
          :duration="1000"
          class="md:col-span-2 rounded-2xl bg-white dark:bg-white/3 p-6 md:p-8 border border-dark/20 dark:border-light/20 shadow-xl flex flex-col justify-between"
        >
          <div
            class="w-12 h-12 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center mb-4 md:mb-6"
          >
            <i class="bi bi-lightning-charge text-primary text-xl"></i>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-black dark:text-white mb-3">
              Instant
            </h3>
            <p class="text-dark/70 dark:text-light/50">
              Undangan langsung jadi, tanpa menunggu, dan langsung bagikan.
            </p>
          </div>
        </div>

        <!-- Card 2 - Anti-mainstream (lebar 4 kolom, highlight utama) -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 100 }"
          :visible-once="{ opacity: 1, x: 0 }"
          :delay="200"
          :duration="1000"
          class="md:col-span-4 rounded-2xl bg-white dark:bg-white/3 p-6 md:p-10 border border-dark/20 dark:border-light/20 shadow-xl flex flex-col justify-between"
        >
          <div
            class="w-12 h-12 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center mb-4 md:mb-6"
          >
            <i class="bi bi-layers text-primary text-xl"></i>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-black dark:text-white mb-3">
              Anti-mainstream Design
            </h3>
            <p class="text-dark/70 dark:text-light/50 max-w-lg">
              Rasakan desain undangan yang unik dan berbeda dari yang lain.
            </p>
          </div>
        </div>

        <!-- Card 3 - Limitless (lebar 4 kolom) -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :visible-once="{ opacity: 1, x: 0 }"
          :duration="1000"
          class="md:col-span-6 rounded-2xl bg-white dark:bg-white/3 p-6 md:p-8 border border-dark/20 dark:border-light/20 shadow-xl flex flex-col justify-between"
        >
          <div
            class="w-12 h-12 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center mb-4 md:mb-6"
          >
            <i class="bi bi-sliders2 text-primary text-xl"></i>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-black dark:text-white mb-3">
              Limitless
            </h3>
            <p class="text-dark/70 dark:text-light/50 max-w-lg">
              Edit konten undangan dan ubah tema kapanpun anda mau.
            </p>
          </div>
        </div>

        <!-- Card 4 - Bonus dekoratif (lebar 2 kolom, pengisi bento) -->
        <!-- <div
          class="md:col-span-2 rounded-2xl bg-light dark:bg-light/15 p-6 md:p-8 border border-dark/20 dark:border-light/20 shadow-xl flex flex-col items-center justify-center"
        >
          <i class="bi bi-stars text-white/20 text-6xl mb-4"></i>
          <p class="text-light/40 text-sm text-center leading-relaxed">
            Lebih dari 1.000+ pasangan<br />telah mempercayai kami.
          </p>
        </div> -->
      </div>

      <div
        class="w-full max-w-4xl mx-auto rounded-2xl shadow-xl overflow-hidden"
      >
        <NuxtImg
          src="/img/dashboard.webp"
          loading="lazy"
          width="1000"
          height="1000"
          class="w-full"
        />
      </div>
    </div>
  </section>
</template>
