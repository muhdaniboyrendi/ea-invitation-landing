<template>
  <section class="relative z-10 px-6 md:px-10 pt-30 pb-20">
    <div class="max-w-7xl mx-auto text-center">
      <div
        class="inline-flex items-center px-4 py-2 mb-8 backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 rounded-full shadow-lg"
      >
        <i class="bi bi-play-circle text-cyan-400 mr-2"></i>
        <span class="text-sm font-medium text-white/90">Panduan Lengkap</span>
      </div>

      <h1
        class="text-4xl lg:text-6xl font-bold mb-6 text-white max-w-3xl mx-auto"
      >
        Cara Membuat
        <span
          class="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x"
          >Undangan Digital</span
        >
        EA Invitation
      </h1>

      <p
        class="text-xl lg:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
      >
        Pelajari cara membuat undangan pernikahan digital yang menawan dalam 4
        langkah mudah. Dari persiapan hingga berbagi dengan tamu undangan.
      </p>

      <!-- Quick Stats -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
      >
        <div class="relative group">
          <div
            class="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-300"
          ></div>
          <div
            class="relative backdrop-blur-xl bg-white/5 dark:bg-dark/10 border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
          >
            <div class="text-3xl font-bold text-cyan-400 mb-2">5 Menit</div>
            <p class="text-white/80">Waktu Pembuatan</p>
          </div>
        </div>

        <div class="relative group">
          <div
            class="absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-pink-500/20 blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-300"
          ></div>
          <div
            class="relative backdrop-blur-xl bg-white/5 dark:bg-dark/10 border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
          >
            <div class="text-3xl font-bold text-purple-400 mb-2">4 Langkah</div>
            <p class="text-white/80">Proses Mudah</p>
          </div>
        </div>

        <div class="relative group">
          <div
            class="absolute -inset-2 bg-gradient-to-r from-green-400/20 to-teal-500/20 blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-300"
          ></div>
          <div
            class="relative backdrop-blur-xl bg-white/5 dark:bg-dark/10 border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
          >
            <div class="text-3xl font-bold text-green-400 mb-2">100%</div>
            <p class="text-white/80">Gratis</p>
          </div>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          to="/login"
          class="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <span class="flex items-center justify-center">
            Coba Langsung
            <i
              class="bi bi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"
            ></i>
          </span>
        </NuxtLink>

        <button
          class="group px-8 py-4 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <span class="flex items-center justify-center">
            Tonton Video
            <i
              class="bi bi-play-circle ml-2 group-hover:scale-110 transition-transform"
            ></i>
          </span>
        </button>
        <!-- <button
          @click="scrollToVideo"
          class="group px-8 py-4 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <span class="flex items-center justify-center">
            Tonton Video
            <i
              class="bi bi-play-circle ml-2 group-hover:scale-110 transition-transform"
            ></i>
          </span>
        </button> -->
      </div>
    </div>
  </section>
</template>
