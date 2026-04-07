<template>
  <section id="greeting" class="py-20 overflow-hidden bg-light dark:bg-dark">
    <div class="px-4 md:px-6">
      <!-- Bento Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-4 max-w-7xl mx-auto mb-10"
      >
        <!-- Card 1 - Instant (lebar 2 kolom, tinggi normal) -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :visible-once="{ opacity: 1, x: 0 }"
          :delay="200"
          :duration="1000"
          class="md:col-span-2"
        >
          <div
            class="rounded-2xl bg-white dark:bg-white/3 p-6 md:p-8 border border-dark/20 dark:border-light/20 shadow-xl flex flex-col hover:scale-102 transition-all duration-300"
          >
            <div
              class="w-12 h-12 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center mb-4 md:mb-6"
            >
              <i class="bi bi-lightning-charge text-primary text-xl"></i>
            </div>
            <div>
              <h2 class="text-xl font-semibold text-black dark:text-white mb-3">
                Instant
              </h2>
              <p class="text-dark/70 dark:text-light/50">
                Undangan langsung jadi, tanpa menunggu, dan langsung bagikan.
              </p>
            </div>
          </div>
        </div>

        <!-- Card 2 - Anti-mainstream (lebar 4 kolom, highlight utama) -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 100 }"
          :visible-once="{ opacity: 1, x: 0 }"
          :delay="200"
          :duration="1000"
          class="md:col-span-4"
        >
          <div
            class="rounded-2xl bg-white dark:bg-white/3 p-6 md:p-10 border border-dark/20 dark:border-light/20 shadow-xl flex flex-col hover:scale-102 transition-all duration-300"
          >
            <div
              class="w-12 h-12 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center mb-4 md:mb-6"
            >
              <i class="bi bi-layers text-primary text-xl"></i>
            </div>
            <div>
              <h2
                class="text-2xl font-semibold text-black dark:text-white mb-3"
              >
                Anti-mainstream Design
              </h2>
              <p class="text-dark/70 dark:text-light/50 max-w-xl">
                Rasakan desain undangan yang unik dan berbeda dari yang lain.
              </p>
            </div>
          </div>
        </div>

        <!-- Card 3 - Dashboard Analytics -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :visible-once="{ opacity: 1, x: 0 }"
          :delay="200"
          :duration="1000"
          class="md:col-span-4"
        >
          <div
            class="rounded-2xl bg-white dark:bg-white/3 p-6 md:p-10 border border-dark/20 dark:border-light/20 shadow-xl flex flex-col hover:scale-102 transition-all duration-300"
          >
            <div
              class="w-12 h-12 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center mb-4 md:mb-6"
            >
              <i class="bi bi-graph-up-arrow text-primary text-xl"></i>
            </div>
            <div>
              <h2
                class="text-2xl font-semibold text-black dark:text-white mb-3"
              >
                Dashboard Analytics
              </h2>
              <p class="text-dark/70 dark:text-light/50 max-w-xl">
                Pantau performa undangan Anda dengan dashboard analytics yang
                lengkap.
              </p>
            </div>
          </div>
        </div>

        <!-- Card 4 - Limitless (lebar 4 kolom) -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 100 }"
          :visible-once="{ opacity: 1, x: 0 }"
          :delay="200"
          :duration="1000"
          class="md:col-span-2"
        >
          <div
            class="rounded-2xl bg-white dark:bg-white/3 p-6 md:p-8 border border-dark/20 dark:border-light/20 shadow-xl flex flex-col hover:scale-102 transition-all duration-300"
          >
            <div
              class="w-12 h-12 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center mb-4 md:mb-6"
            >
              <i class="bi bi-sliders2 text-primary text-xl"></i>
            </div>
            <div>
              <h2
                class="text-2xl font-semibold text-black dark:text-white mb-3"
              >
                Limitless
              </h2>
              <p class="text-dark/70 dark:text-light/50 max-w-xl">
                Edit konten undangan dan ubah tema kapanpun anda mau.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Dashboard Image -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 300 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="1000"
        class="md:hidden w-full max-w-70 mx-auto perspective-[800px]"
      >
        <NuxtImg
          src="/img/dashboard-mobile-light.webp"
          loading="lazy"
          width="900"
          height="1950"
          sizes="800px"
          quality="80"
          class="block dark:hidden w-full rotate-x-[45deg] rotate-y-[0deg] shadow-xl rounded-xl mask-b-from-50% mask-b-to-90%"
          alt="Dashboard Image"
        />
        <NuxtImg
          src="/img/dashboard-mobile-dark.webp"
          loading="lazy"
          width="900"
          height="1950"
          sizes="800px"
          quality="80"
          class="hidden dark:block w-full rotate-x-[45deg] rotate-y-[0deg] shadow-xl rounded-xl mask-b-from-50% mask-b-to-90%"
          alt="Dashboard Image"
        />
      </div>

      <!-- Desktop Dashboard Image -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 300 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="1000"
        class="hidden md:block w-full max-w-4xl mx-auto perspective-[800px]"
      >
        <NuxtImg
          src="/img/dashboard-desktop-light.webp"
          loading="lazy"
          width="1600"
          height="900"
          sizes="800px"
          quality="80"
          class="block dark:hidden w-full rotate-x-[45deg] rotate-y-[0deg] shadow-xl rounded-xl mask-b-from-50% mask-b-to-95%"
          alt="Dashboard Image"
        />
        <NuxtImg
          src="/img/dashboard-desktop-dark.webp"
          loading="lazy"
          width="1600"
          height="900"
          sizes="800px"
          quality="80"
          class="hidden dark:block w-full rotate-x-[45deg] rotate-y-[0deg] shadow-xl rounded-xl mask-b-from-50% mask-b-to-95%"
          alt="Dashboard Image"
        />
      </div>
    </div>
  </section>
</template>
