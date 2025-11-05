<script setup>
const config = useRuntimeConfig();

const dashboardAppUrl = config.public.dashboardAppUrl;
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
          <span class="text-sm font-medium text-white/80"
            >Step by Step Guide</span
          >
          <i class="bi bi-arrow-right ml-2 text-white/60 text-sm"></i>
        </div>

        <!-- Main Title -->
        <h2
          class="text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-200"
        >
          Panduan Lengkap
          <br />
          <span class="text-3xl lg:text-5xl text-white/60"
            >Membuat Undangan Digital</span
          >
        </h2>

        <!-- Description -->
        <p
          class="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
        >
          Ikuti langkah-langkah mudah berikut untuk menciptakan undangan
          pernikahan digital yang sempurna dan memukau
        </p>
      </div>

      <!-- Tutorial Steps -->
      <div class="space-y-8 mb-16">
        <!-- Step 1 -->
        <div class="group relative rounded-2xl transition-all duration-300">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-blue-400/30 to-indigo-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
          ></div>
          <div
            class="relative w-full bg-gradient-to-b rounded-2xl border border-white/10 hover:border-white/20 from-blue-950/90 to-indigo-900/90 dark:from-black/80 dark:to-black/70 overflow-hidden"
          >
            <div class="flex flex-col lg:flex-row">
              <!-- Image Section -->
              <div class="max-h-92 aspect-4/3">
                <NuxtImg
                  src="/img/tutorial/1.png"
                  class="h-full object-cover"
                />
              </div>

              <!-- Content Section -->
              <div class="lg:w-3/5 p-8 lg:p-12">
                <div class="flex items-start gap-6 mb-6">
                  <!-- Step Number -->
                  <div class="flex-shrink-0">
                    <div
                      class="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <span class="text-3xl font-bold text-white">1</span>
                    </div>
                  </div>

                  <div class="flex-1">
                    <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2">
                      Daftar dan Masuk
                    </h3>
                    <div
                      class="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full"
                    ></div>
                  </div>
                </div>

                <p class="text-white/70 text-lg mb-6">
                  Buat akun atau login jika sudah memiliki akun, atau langsung
                  masuk dengan google.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="group relative rounded-2xl transition-all duration-300">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-purple-400/30 to-violet-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
          ></div>
          <div
            class="relative w-full bg-gradient-to-b rounded-2xl border border-white/10 hover:border-white/20 from-purple-950/90 to-violet-900/90 dark:from-black/80 dark:to-black/70 overflow-hidden"
          >
            <div class="flex flex-col lg:flex-row-reverse">
              <!-- Image Section -->
              <div class="max-h-92 aspect-4/3">
                <NuxtImg
                  src="/img/tutorial/2.png"
                  class="h-full object-cover"
                />
              </div>

              <!-- Content Section -->
              <div class="lg:w-3/5 p-8 lg:p-12">
                <div class="flex items-start gap-6 mb-6">
                  <!-- Step Number -->
                  <div class="flex-shrink-0">
                    <div
                      class="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <span class="text-3xl font-bold text-white">2</span>
                    </div>
                  </div>

                  <div class="flex-1">
                    <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2">
                      Buat Undangan
                    </h3>
                    <div
                      class="w-20 h-1 bg-gradient-to-r from-purple-400 to-violet-600 rounded-full"
                    ></div>
                  </div>
                </div>

                <p class="text-white/70 text-lg mb-6">
                  Setelah masuk anda akan diarahkan ke halaman utama dashboard
                  EA Invitation, dan setelah itu klik "Buat Undangan Sekarang"
                  untuk membuat undangan.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="group relative rounded-2xl transition-all duration-300">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-sky-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
          ></div>
          <div
            class="relative w-full bg-gradient-to-b rounded-2xl border border-white/10 hover:border-white/20 from-cyan-950/90 to-sky-900/90 dark:from-black/80 dark:to-black/70 overflow-hidden"
          >
            <div class="flex flex-col lg:flex-row">
              <!-- Image Section -->
              <div class="max-h-92 aspect-4/3">
                <NuxtImg
                  src="/img/tutorial/3.png"
                  class="h-full object-cover"
                />
              </div>

              <!-- Content Section -->
              <div class="lg:w-3/5 p-8 lg:p-12">
                <div class="flex items-start gap-6 mb-6">
                  <!-- Step Number -->
                  <div class="flex-shrink-0">
                    <div
                      class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-sky-600 rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <span class="text-3xl font-bold text-white">3</span>
                    </div>
                  </div>

                  <div class="flex-1">
                    <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2">
                      Pilih Paket Undangan
                    </h3>
                    <div
                      class="w-20 h-1 bg-gradient-to-r from-cyan-400 to-sky-600 rounded-full"
                    ></div>
                  </div>
                </div>

                <p class="text-white/70 text-lg mb-6">
                  Setelah itu anda diarahkan ke halaman pemilihan paket
                  undangan, dan pilih salah satu dari paket undangan yang
                  tersedia.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="group relative rounded-2xl transition-all duration-300">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-emerald-400/30 to-teal-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
          ></div>
          <div
            class="relative w-full bg-gradient-to-b rounded-2xl border border-white/10 hover:border-white/20 from-emerald-950/90 to-teal-900/90 dark:from-black/80 dark:to-black/70 overflow-hidden"
          >
            <div class="flex flex-col lg:flex-row-reverse">
              <!-- Image Section -->
              <div class="max-h-92 aspect-4/3">
                <NuxtImg
                  src="/img/tutorial/4.png"
                  class="h-full object-cover"
                />
              </div>

              <!-- Content Section -->
              <div class="lg:w-3/5 p-8 lg:p-12">
                <div class="flex items-start gap-6 mb-6">
                  <!-- Step Number -->
                  <div class="flex-shrink-0">
                    <div
                      class="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <span class="text-3xl font-bold text-white">4</span>
                    </div>
                  </div>

                  <div class="flex-1">
                    <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2">
                      Checkout
                    </h3>
                    <div
                      class="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full"
                    ></div>
                  </div>
                </div>

                <p class="text-white/70 text-lg mb-6">
                  Setelah memilih paket undangan yang anda butuhkan anda
                  diarahkan ke halaman checkout untuk melakukan transaksi
                  pembelian paket uandangan anda dan klik "Bayar Sekarang" untuk
                  mengkonfirmasi pembelian paket undangan anda.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 5 -->
        <div class="group relative rounded-2xl transition-all duration-300">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-pink-400/30 to-rose-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
          ></div>
          <div
            class="relative w-full bg-gradient-to-b rounded-2xl border border-white/10 hover:border-white/20 from-pink-950/90 to-rose-900/90 dark:from-black/80 dark:to-black/70 overflow-hidden"
          >
            <div class="flex flex-col lg:flex-row">
              <!-- Image Section -->
              <div class="max-h-92 aspect-4/3">
                <NuxtImg
                  src="/img/tutorial/6.png"
                  class="h-full object-cover"
                />
              </div>

              <!-- Content Section -->
              <div class="lg:w-3/5 p-8 lg:p-12">
                <div class="flex items-start gap-6 mb-6">
                  <!-- Step Number -->
                  <div class="flex-shrink-0">
                    <div
                      class="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <span class="text-3xl font-bold text-white">5</span>
                    </div>
                  </div>

                  <div class="flex-1">
                    <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2">
                      Nama Pasangan
                    </h3>
                    <div
                      class="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-600 rounded-full"
                    ></div>
                  </div>
                </div>

                <p class="text-white/70 text-lg mb-6">
                  Setelah pembeyaran berhasil, selanjutnya anda perlu memasukan
                  nama pasangagan yang akan dijadikan display utama di undangan
                  anda.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 6 -->
        <div class="group relative rounded-2xl transition-all duration-300">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-emerald-400/30 to-teal-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
          ></div>
          <div
            class="relative w-full bg-gradient-to-b rounded-2xl border border-white/10 hover:border-white/20 from-emerald-950/90 to-teal-900/90 dark:from-black/80 dark:to-black/70 overflow-hidden"
          >
            <div class="flex flex-col lg:flex-row-reverse">
              <!-- Image Section -->
              <div class="max-h-92 aspect-4/3">
                <NuxtImg
                  src="/img/tutorial/7.png"
                  class="h-full object-cover"
                />
              </div>

              <!-- Content Section -->
              <div class="lg:w-3/5 p-8 lg:p-12">
                <div class="flex items-start gap-6 mb-6">
                  <!-- Step Number -->
                  <div class="flex-shrink-0">
                    <div
                      class="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <span class="text-3xl font-bold text-white">6</span>
                    </div>
                  </div>

                  <div class="flex-1">
                    <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2">
                      Pilih Tema
                    </h3>
                    <div
                      class="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full"
                    ></div>
                  </div>
                </div>

                <p class="text-white/70 text-lg mb-6">
                  Selanjutnya andan perlu memilih tema undangan yang akan
                  dijadikan sebagai desain dari undangan anda, dan anda dapat
                  mengubahnya kapan pun.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 7 -->
        <div class="group relative rounded-2xl transition-all duration-300">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-pink-400/30 to-rose-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
          ></div>
          <div
            class="relative w-full bg-gradient-to-b rounded-2xl border border-white/10 hover:border-white/20 from-pink-950/90 to-rose-900/90 dark:from-black/80 dark:to-black/70 overflow-hidden"
          >
            <div class="flex flex-col lg:flex-row">
              <!-- Image Section -->
              <div class="max-h-92 aspect-4/3">
                <NuxtImg
                  src="/img/tutorial/8.png"
                  class="h-full object-cover"
                />
              </div>

              <!-- Content Section -->
              <div class="lg:w-3/5 p-8 lg:p-12">
                <div class="flex items-start gap-6 mb-6">
                  <!-- Step Number -->
                  <div class="flex-shrink-0">
                    <div
                      class="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <span class="text-3xl font-bold text-white">7</span>
                    </div>
                  </div>

                  <div class="flex-1">
                    <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2">
                      Isi Data
                    </h3>
                    <div
                      class="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-600 rounded-full"
                    ></div>
                  </div>
                </div>

                <p class="text-white/70 text-lg mb-6">
                  Setelah itu anda perlu mengisi data undangan yang dibutuhkan,
                  seperti tanggal dan waktu acara, data mempelai pria dan
                  wanita, daftar acara, kisah cinta, gift, foto, video, dll.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 8 -->
        <div class="group relative rounded-2xl transition-all duration-300">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-emerald-400/30 to-teal-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
          ></div>
          <div
            class="relative w-full bg-gradient-to-b rounded-2xl border border-white/10 hover:border-white/20 from-emerald-950/90 to-teal-900/90 dark:from-black/80 dark:to-black/70 overflow-hidden"
          >
            <div class="flex flex-col lg:flex-row-reverse">
              <!-- Image Section -->
              <div class="max-h-92 aspect-4/3">
                <NuxtImg
                  src="/img/tutorial/9.png"
                  class="h-full object-cover"
                />
              </div>

              <!-- Content Section -->
              <div class="lg:w-3/5 p-8 lg:p-12">
                <div class="flex items-start gap-6 mb-6">
                  <!-- Step Number -->
                  <div class="flex-shrink-0">
                    <div
                      class="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <span class="text-3xl font-bold text-white">8</span>
                    </div>
                  </div>

                  <div class="flex-1">
                    <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2">
                      Kelola Tamu
                    </h3>
                    <div
                      class="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full"
                    ></div>
                  </div>
                </div>

                <p class="text-white/70 text-lg mb-6">
                  Selamat undagan anda telah selesai dibuat, dan selanjutnya
                  adalah anda dapat mengelola, menambahkan, dan memantau daftar
                  tamu undangan anda.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 9 -->
        <div class="group relative rounded-2xl transition-all duration-300">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-pink-400/30 to-rose-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
          ></div>
          <div
            class="relative w-full bg-gradient-to-b rounded-2xl border border-white/10 hover:border-white/20 from-pink-950/90 to-rose-900/90 dark:from-black/80 dark:to-black/70 overflow-hidden"
          >
            <div class="flex flex-col lg:flex-row">
              <!-- Image Section -->
              <div class="max-h-92 aspect-4/3">
                <NuxtImg
                  src="/img/tutorial/10.png"
                  class="h-full object-cover"
                />
              </div>

              <!-- Content Section -->
              <div class="lg:w-3/5 p-8 lg:p-12">
                <div class="flex items-start gap-6 mb-6">
                  <!-- Step Number -->
                  <div class="flex-shrink-0">
                    <div
                      class="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <span class="text-3xl font-bold text-white">7</span>
                    </div>
                  </div>

                  <div class="flex-1">
                    <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2">
                      Bagikan Undangan
                    </h3>
                    <div
                      class="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-600 rounded-full"
                    ></div>
                  </div>
                </div>

                <p class="text-white/70 text-lg mb-6">
                  Langkah yang terakhir adalah membagikan undangan anda ke
                  teman, kerabat, atau orang lain yang anda undang untuk acara
                  anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Video Tutorial Section -->
      <div class="mb-16">
        <div class="group relative rounded-2xl transition-all duration-300">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-amber-400/30 to-orange-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
          ></div>
          <div
            class="relative w-full bg-gradient-to-b p-8 lg:p-12 rounded-2xl border border-white/10 hover:border-white/20 from-amber-950/90 to-orange-900/90 dark:from-black/80 dark:to-black/70"
          >
            <div class="text-center mb-8">
              <div
                class="inline-flex items-center px-4 py-2 mb-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-full"
              >
                <i class="bi bi-play-circle-fill text-amber-400 mr-2"></i>
                <span class="text-sm font-medium text-white/80"
                  >Video Tutorial</span
                >
              </div>
              <h3 class="text-3xl lg:text-4xl font-bold text-white mb-4">
                Tonton Panduan Video
              </h3>
              <p class="text-white/70 text-lg max-w-2xl mx-auto">
                Pelajari cara membuat undangan digital dengan menonton video
                tutorial lengkap kami
              </p>
            </div>

            <!-- Video Placeholder -->
            <div
              class="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10"
            >
              <div class="absolute inset-0 flex items-center justify-center">
                <button
                  class="group/play w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
                >
                  <i
                    class="bi bi-play-fill text-white text-4xl lg:text-5xl ml-1"
                  ></i>
                </button>
              </div>

              <!-- Video Thumbnail Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <div
          class="group relative rounded-2xl inline-block hover:scale-105 transition-all duration-300"
        >
          <div
            class="absolute -inset-1 bg-gradient-to-r from-cyan-400/50 to-purple-600/50 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500"
          ></div>
          <a
            :href="dashboardAppUrl"
            class="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Mulai Buat Undangan Sekarang
            <i class="bi bi-arrow-right ml-3"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Grid pattern */
.bg-grid-pattern {
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 80px 80px;
}

/* Animation delays */
.delay-150 {
  animation-delay: 0.15s;
}

.delay-300 {
  animation-delay: 0.3s;
}

.delay-1000 {
  animation-delay: 1s;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
