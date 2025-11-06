<script setup>
const config = useRuntimeConfig();

const dashboardAppUrl = config.public.dashboardAppUrl;

const activeStep = ref(null);

const steps = [
  {
    number: 1,
    title: "Daftar dan Masuk",
    description:
      "Buat akun atau login jika sudah memiliki akun, atau langsung masuk dengan google.",
    image: "/img/tutorial/1.png",
  },
  {
    number: 2,
    title: "Buat Undangan",
    description:
      'Setelah masuk anda akan diarahkan ke halaman utama dashboard EA Invitation, dan setelah itu klik "Buat Undangan Sekarang" untuk membuat undangan.',
    image: "/img/tutorial/2.png",
  },
  {
    number: 3,
    title: "Pilih Paket Undangan",
    description:
      "Setelah itu anda diarahkan ke halaman pemilihan paket undangan, dan pilih salah satu dari paket undangan yang tersedia.",
    image: "/img/tutorial/3.png",
  },
  {
    number: 4,
    title: "Checkout",
    description:
      'Setelah memilih paket undangan yang anda butuhkan anda diarahkan ke halaman checkout untuk melakukan transaksi pembelian paket undangan anda dan klik "Bayar Sekarang" untuk mengkonfirmasi pembelian paket undangan anda.',
    image: "/img/tutorial/4.png",
  },
  {
    number: 5,
    title: "Nama Pasangan",
    description:
      "Setelah pembayaran berhasil, selanjutnya anda perlu memasukan nama pasangan yang akan dijadikan display utama di undangan anda.",
    image: "/img/tutorial/6.png",
  },
  {
    number: 6,
    title: "Pilih Tema",
    description:
      "Selanjutnya anda perlu memilih tema undangan yang akan dijadikan sebagai desain dari undangan anda, dan anda dapat mengubahnya kapan pun.",
    image: "/img/tutorial/7.png",
  },
  {
    number: 7,
    title: "Isi Data",
    description:
      "Setelah itu anda perlu mengisi data undangan yang dibutuhkan, seperti tanggal dan waktu acara, data mempelai pria dan wanita, daftar acara, kisah cinta, gift, foto, video, dll.",
    image: "/img/tutorial/8.png",
  },
  {
    number: 8,
    title: "Kelola Tamu",
    description:
      "Selamat undangan anda telah selesai dibuat, dan selanjutnya adalah anda dapat mengelola, menambahkan, dan memantau daftar tamu undangan anda.",
    image: "/img/tutorial/9.png",
  },
  {
    number: 9,
    title: "Bagikan Undangan",
    description:
      "Langkah yang terakhir adalah membagikan undangan anda ke teman, kerabat, atau orang lain yang anda undang untuk acara anda.",
    image: "/img/tutorial/10.png",
  },
];

const handleImageError = (event, stepNumber) => {
  event.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect fill='%231e293b' width='800' height='450'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23cbd5e1' font-size='24' font-family='sans-serif'%3EStep ${stepNumber} Preview%3C/text%3E%3C/svg%3E`;
};

const setActive = (stepNumber) => {
  activeStep.value = stepNumber;
};

const clearActive = () => {
  activeStep.value = null;
};
</script>

<template>
  <section
    id="tutorial"
    class="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-purple-950/90 to-slate-900 dark:from-dark dark:via-purple-950/30 dark:to-dark"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <!-- Badge -->
        <div
          class="inline-flex items-center px-4 py-2 mb-8 backdrop-blur-md bg-white/5 dark:bg-black/10 border border-white/10 rounded-full shadow-lg"
        >
          <span
            class="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 animate-pulse"
          ></span>
          <span class="text-sm font-medium text-white/80">Tutorial</span>
          <i class="bi bi-question-circle ml-2 text-white/60 text-sm"></i>
        </div>

        <!-- Main Title -->
        <h2
          class="text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-200"
        >
          Tutorial Lengkap
          <br />
          <span class="text-3xl lg:text-5xl text-white/60"
            >Cara Membuat Undangan Digital</span
          >
        </h2>

        <!-- Description -->
        <p
          class="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
        >
          Ikuti panduan step-by-step untuk membuat undangan digital impian Anda
          dengan mudah
        </p>
      </div>

      <!-- Steps Grid -->
      <div class="space-y-8 mb-20">
        <div
          v-for="(step, index) in steps"
          :key="step.number"
          class="group relative"
          @mouseenter="setActive(step.number)"
          @mouseleave="clearActive"
        >
          <div
            :class="[
              'absolute -inset-1 blur-lg rounded-2xl transition-all duration-500',
              activeStep === step.number
                ? 'opacity-75 bg-gradient-to-r from-cyan-400/30 to-purple-600/30'
                : 'opacity-50 bg-gradient-to-r from-cyan-400/20 to-purple-600/20',
            ]"
          ></div>

          <div
            class="relative bg-gradient-to-br from-cyan-950/90 to-purple-900/90 dark:from-black/80 dark:to-black/70 border border-white/10 hover:border-white/20 rounded-2xl p-8 transition-all duration-300"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <!-- Content -->
              <div :class="index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'">
                <div class="flex items-start gap-4 mb-6">
                  <div
                    class="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 bg-gradient-to-br from-cyan-400 to-purple-600"
                  >
                    <span class="text-white font-bold text-2xl">{{
                      step.number
                    }}</span>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-2xl font-bold text-white mb-3">
                      {{ step.title }}
                    </h3>
                    <p class="text-white/70 text-base leading-relaxed">
                      {{ step.description }}
                    </p>
                  </div>
                </div>

                <!-- Progress Indicator -->
                <div class="flex items-center gap-2 pl-20">
                  <div
                    class="flex-1 h-2 bg-white/10 rounded-full overflow-hidden"
                  >
                    <div
                      class="h-full bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-500"
                      :style="{
                        width: `${(step.number / steps.length) * 100}%`,
                      }"
                    ></div>
                  </div>
                  <span class="text-sm text-white/60 font-medium">
                    {{ step.number }}/{{ steps.length }}
                  </span>
                </div>
              </div>

              <!-- Image -->
              <div :class="index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'">
                <div class="relative group/img">
                  <div
                    class="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 blur-xl rounded-2xl opacity-0 group-hover/img:opacity-100 transition-all duration-500"
                  ></div>
                  <div
                    class="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5"
                  >
                    <NuxtImg
                      :src="step.image"
                      :alt="step.title"
                      width="800"
                      height="450"
                      loading="lazy"
                      format="webp"
                      quality="90"
                      placeholder
                      class="w-full h-full object-cover"
                      @error="(e) => handleImageError(e, step.number)"
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Video Tutorial Section -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <div
            class="inline-flex items-center px-4 py-2 mb-6 backdrop-blur-md bg-white/5 dark:bg-black/10 border border-white/10 rounded-full shadow-lg"
          >
            <span
              class="w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mr-3 animate-pulse"
            ></span>
            <span class="text-sm font-medium text-white/80"
              >Video Tutorial</span
            >
          </div>
          <h2
            class="text-3xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-rose-200"
          >
            Tonton Video Tutorial
          </h2>
          <p class="text-lg text-white/70 max-w-2xl mx-auto">
            Pelajari lebih detail dengan menonton video tutorial lengkap kami
          </p>
        </div>

        <div class="group relative max-w-5xl mx-auto">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-pink-400/30 to-rose-600/30 blur-xl rounded-3xl opacity-75 group-hover:opacity-100 transition-all duration-500"
          ></div>
          <div
            class="relative backdrop-blur-md bg-gradient-to-br from-pink-950/90 to-rose-900/90 dark:from-black/80 dark:to-black/70 border border-white/10 hover:border-white/20 rounded-3xl p-4 transition-all duration-300"
          >
            <div
              class="relative aspect-video rounded-2xl overflow-hidden bg-slate-900/50"
            >
              <div
                class="absolute inset-0 flex items-center justify-center z-10"
              >
                <button class="group/play relative">
                  <div
                    class="absolute -inset-8 bg-gradient-to-r from-pink-400/30 to-rose-600/30 blur-2xl rounded-full opacity-75 group-hover/play:opacity-100 transition-all duration-500"
                  ></div>
                  <div
                    class="relative w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-2xl group-hover/play:scale-110 transition-transform duration-300"
                  >
                    <i class="bi bi-play-fill text-white text-4xl ml-1"></i>
                  </div>
                </button>
              </div>
              <!-- Placeholder for video -->
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%231e293b' width='1920' height='1080'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23cbd5e1' font-size='48' font-family='sans-serif'%3EVideo Tutorial Preview%3C/text%3E%3C/svg%3E"
                alt="Video Tutorial"
                class="w-full h-full object-cover opacity-50"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <div class="group relative inline-block max-w-4xl">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-purple-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-75"
          ></div>
          <div
            class="relative backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 rounded-2xl p-8"
          >
            <div class="flex items-center justify-center gap-4 mb-4">
              <div
                class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl"
              >
                <i class="bi bi-check-circle text-white text-3xl"></i>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">
              Siap Membuat Undangan Digital Anda?
            </h3>
            <p class="text-white/70 mb-6 max-w-2xl mx-auto">
              Ikuti tutorial di atas dan buat undangan digital impian Anda dalam
              hitungan menit!
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
              <a
                :href="dashboardAppUrl"
                class="group/btn relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <span class="relative z-10 flex items-center gap-2">
                  <i class="bi bi-plus-circle"></i>
                  Buat Undangan Sekarang
                </span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                ></div>
              </a>
              <button
                class="px-8 py-4 backdrop-blur-md bg-white/5 dark:bg-black/10 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-2"
              >
                <i class="bi bi-telephone"></i>
                Hubungi Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Grid pattern */
.bg-grid-pattern {
  background-image: linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px);
  background-size: 80px 80px;
}
</style>
