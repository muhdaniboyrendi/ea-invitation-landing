<template>
  <div
    id="tutorial"
    class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-dark"
  >
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </div>

    <!-- Hero Section -->
    <section class="relative z-10 px-6 md:px-10 pt-30 pb-20">
      <div class="max-w-7xl mx-auto text-center">
        <div
          class="inline-flex items-center px-4 py-2 mb-8 backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 rounded-full shadow-lg"
        >
          <i class="bi bi-play-circle text-cyan-400 mr-2"></i>
          <span class="text-sm font-medium text-white/90">Panduan Lengkap</span>
        </div>

        <h1 class="text-4xl lg:text-6xl font-bold mb-6 text-white">
          Tutorial
          <span
            class="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x"
            >Pembuatan Undangan</span
          >
          Digital
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
              class="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
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
              class="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <div class="text-3xl font-bold text-purple-400 mb-2">
                4 Langkah
              </div>
              <p class="text-white/80">Proses Mudah</p>
            </div>
          </div>

          <div class="relative group">
            <div
              class="absolute -inset-2 bg-gradient-to-r from-green-400/20 to-teal-500/20 blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-300"
            ></div>
            <div
              class="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <div class="text-3xl font-bold text-green-400 mb-2">100%</div>
              <p class="text-white/80">Gratis</p>
            </div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/demo"
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
            @click="scrollToVideo"
            class="group px-8 py-4 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <span class="flex items-center justify-center">
              Tonton Video
              <i
                class="bi bi-play-circle ml-2 group-hover:scale-110 transition-transform"
              ></i>
            </span>
          </button>
        </div>
      </div>
    </section>

    <!-- Tutorial Steps -->
    <section class="relative z-10 px-6 md:px-10 py-20">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2
            class="text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-200"
          >
            Langkah-langkah Mudah
          </h2>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            Ikuti panduan step-by-step untuk membuat undangan digital yang
            memukau
          </p>
        </div>

        <!-- Steps -->
        <div class="space-y-24">
          <!-- Step 1 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div :class="['order-1 lg:order-1']">
              <div class="relative group">
                <div
                  class="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 blur-2xl rounded-3xl"
                ></div>
                <div
                  class="relative backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 rounded-3xl p-8 hover:scale-105 transition-transform duration-500"
                >
                  <div class="flex items-center mb-6">
                    <div
                      class="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold text-xl"
                    >
                      1
                    </div>
                    <h3 class="text-2xl font-bold text-white">
                      Persiapan Data
                    </h3>
                  </div>

                  <div class="space-y-4 mb-6">
                    <p class="text-white/80 leading-relaxed">
                      Siapkan semua informasi yang diperlukan untuk undangan
                      Anda sebelum memulai proses pembuatan.
                    </p>
                  </div>

                  <div class="space-y-3">
                    <div class="flex items-start space-x-3">
                      <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
                      <div>
                        <p class="text-white font-medium">Data Mempelai</p>
                        <p class="text-white/70 text-sm">
                          Nama lengkap kedua mempelai dan orang tua
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-3">
                      <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
                      <div>
                        <p class="text-white font-medium">Detail Acara</p>
                        <p class="text-white/70 text-sm">
                          Tanggal, waktu, dan lokasi acara pernikahan
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-3">
                      <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
                      <div>
                        <p class="text-white font-medium">Foto Prewedding</p>
                        <p class="text-white/70 text-sm">
                          Foto berkualitas tinggi untuk tampilan undangan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="order-2 lg:order-2">
              <div class="relative">
                <div
                  class="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-2xl rounded-3xl"
                ></div>
                <div
                  class="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden"
                >
                  <!-- Mock Interface -->
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <h4 class="text-white font-semibold">
                        Form Data Mempelai
                      </h4>
                      <div
                        class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                      ></div>
                    </div>

                    <div class="space-y-3">
                      <div class="bg-white/10 rounded-lg p-3">
                        <p class="text-white/50 text-xs mb-1">
                          Nama Mempelai Pria
                        </p>
                        <p class="text-white">Ahmad Rizky Pratama</p>
                      </div>

                      <div class="bg-white/10 rounded-lg p-3">
                        <p class="text-white/50 text-xs mb-1">
                          Nama Mempelai Wanita
                        </p>
                        <p class="text-white">Siti Nurhaliza</p>
                      </div>

                      <div class="grid grid-cols-2 gap-3">
                        <div class="bg-white/10 rounded-lg p-3">
                          <p class="text-white/50 text-xs mb-1">Ayah Pria</p>
                          <p class="text-white text-sm">Bapak Suharto</p>
                        </div>
                        <div class="bg-white/10 rounded-lg p-3">
                          <p class="text-white/50 text-xs mb-1">Ibu Pria</p>
                          <p class="text-white text-sm">Ibu Sari</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <div class="relative">
                <div
                  class="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-pink-500/20 blur-2xl rounded-3xl"
                ></div>
                <div
                  class="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden"
                >
                  <!-- Mock Calendar Interface -->
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <h4 class="text-white font-semibold">
                        Pilih Tanggal & Waktu
                      </h4>
                      <i class="bi bi-calendar-heart text-purple-400"></i>
                    </div>

                    <!-- Calendar Mock -->
                    <div class="bg-white/10 rounded-lg p-4">
                      <div class="grid grid-cols-7 gap-1 mb-3">
                        <div class="text-center text-white/50 text-xs p-1">
                          Min
                        </div>
                        <div class="text-center text-white/50 text-xs p-1">
                          Sen
                        </div>
                        <div class="text-center text-white/50 text-xs p-1">
                          Sel
                        </div>
                        <div class="text-center text-white/50 text-xs p-1">
                          Rab
                        </div>
                        <div class="text-center text-white/50 text-xs p-1">
                          Kam
                        </div>
                        <div class="text-center text-white/50 text-xs p-1">
                          Jum
                        </div>
                        <div class="text-center text-white/50 text-xs p-1">
                          Sab
                        </div>
                      </div>
                      <div class="grid grid-cols-7 gap-1">
                        <div
                          class="aspect-square flex items-center justify-center text-white/30 text-sm"
                        >
                          1
                        </div>
                        <div
                          class="aspect-square flex items-center justify-center text-white/30 text-sm"
                        >
                          2
                        </div>
                        <div
                          class="aspect-square flex items-center justify-center text-white/30 text-sm"
                        >
                          3
                        </div>
                        <div
                          class="aspect-square flex items-center justify-center text-white/30 text-sm"
                        >
                          4
                        </div>
                        <div
                          class="aspect-square flex items-center justify-center text-white/30 text-sm"
                        >
                          5
                        </div>
                        <div
                          class="aspect-square flex items-center justify-center text-white/30 text-sm"
                        >
                          6
                        </div>
                        <div
                          class="aspect-square flex items-center justify-center text-white/30 text-sm"
                        >
                          7
                        </div>
                        <div
                          class="aspect-square flex items-center justify-center text-white/30 text-sm"
                        >
                          8
                        </div>
                        <div
                          class="aspect-square flex items-center justify-center text-white/30 text-sm"
                        >
                          9
                        </div>
                        <div
                          class="aspect-square flex items-center justify-center text-white/30 text-sm"
                        >
                          10
                        </div>
                        <div
                          class="aspect-square flex items-center justify-center text-white/30 text-sm"
                        >
                          11
                        </div>
                        <div
                          class="aspect-square flex items-center justify-center text-white/30 text-sm"
                        >
                          12
                        </div>
                        <div
                          class="aspect-square flex items-center justify-center text-white/30 text-sm"
                        >
                          13
                        </div>
                        <div
                          class="aspect-square flex items-center justify-center text-white/30 text-sm"
                        >
                          14
                        </div>
                        <div
                          class="aspect-square flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-lg font-bold"
                        >
                          15
                        </div>
                      </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                      <div class="bg-white/10 rounded-lg p-3">
                        <p class="text-purple-400 text-xs mb-1">Akad Nikah</p>
                        <p class="text-white">08:00 WIB</p>
                      </div>
                      <div class="bg-white/10 rounded-lg p-3">
                        <p class="text-pink-400 text-xs mb-1">Resepsi</p>
                        <p class="text-white">19:00 WIB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="order-1 lg:order-2">
              <div class="relative group">
                <div
                  class="absolute -inset-4 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-purple-400/30 blur-2xl rounded-3xl"
                ></div>
                <div
                  class="relative backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 rounded-3xl p-8 hover:scale-105 transition-transform duration-500"
                >
                  <div class="flex items-center mb-6">
                    <div
                      class="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-4 text-white font-bold text-xl"
                    >
                      2
                    </div>
                    <h3 class="text-2xl font-bold text-white">
                      Atur Jadwal Acara
                    </h3>
                  </div>

                  <div class="space-y-4 mb-6">
                    <p class="text-white/80 leading-relaxed">
                      Tentukan tanggal pernikahan, waktu akad nikah, dan waktu
                      resepsi. Pastikan semua detail waktu sudah akurat.
                    </p>
                  </div>

                  <div class="space-y-3">
                    <div class="flex items-start space-x-3">
                      <i
                        class="bi bi-check-circle-fill text-purple-400 mt-1"
                      ></i>
                      <div>
                        <p class="text-white font-medium">Pilih Tanggal</p>
                        <p class="text-white/70 text-sm">
                          Gunakan kalender interaktif untuk memilih tanggal
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-3">
                      <i
                        class="bi bi-check-circle-fill text-purple-400 mt-1"
                      ></i>
                      <div>
                        <p class="text-white font-medium">
                          Waktu Akad & Resepsi
                        </p>
                        <p class="text-white/70 text-sm">
                          Tentukan jam mulai untuk setiap acara
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-3">
                      <i
                        class="bi bi-check-circle-fill text-purple-400 mt-1"
                      ></i>
                      <div>
                        <p class="text-white font-medium">Lokasi Acara</p>
                        <p class="text-white/70 text-sm">
                          Tambahkan alamat lengkap dan link Google Maps
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-1 lg:order-1">
              <div class="relative group">
                <div
                  class="absolute -inset-4 bg-gradient-to-r from-green-400/30 via-teal-400/30 to-green-400/30 blur-2xl rounded-3xl"
                ></div>
                <div
                  class="relative backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 rounded-3xl p-8 hover:scale-105 transition-transform duration-500"
                >
                  <div class="flex items-center mb-6">
                    <div
                      class="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mr-4 text-white font-bold text-xl"
                    >
                      3
                    </div>
                    <h3 class="text-2xl font-bold text-white">
                      Pilih Tema & Desain
                    </h3>
                  </div>

                  <div class="space-y-4 mb-6">
                    <p class="text-white/80 leading-relaxed">
                      Sesuaikan tampilan undangan dengan memilih tema warna,
                      font, dan layout yang sesuai dengan kepribadian Anda.
                    </p>
                  </div>

                  <div class="space-y-3">
                    <div class="flex items-start space-x-3">
                      <i
                        class="bi bi-check-circle-fill text-green-400 mt-1"
                      ></i>
                      <div>
                        <p class="text-white font-medium">Pilihan Tema</p>
                        <p class="text-white/70 text-sm">
                          Berbagai template siap pakai dengan desain menarik
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-3">
                      <i
                        class="bi bi-check-circle-fill text-green-400 mt-1"
                      ></i>
                      <div>
                        <p class="text-white font-medium">Kustomisasi Warna</p>
                        <p class="text-white/70 text-sm">
                          Sesuaikan palet warna dengan tema pernikahan
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-3">
                      <i
                        class="bi bi-check-circle-fill text-green-400 mt-1"
                      ></i>
                      <div>
                        <p class="text-white font-medium">Upload Foto</p>
                        <p class="text-white/70 text-sm">
                          Tambahkan foto prewedding untuk sentuhan personal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="order-2 lg:order-2">
              <div class="relative">
                <div
                  class="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-teal-500/20 blur-2xl rounded-3xl"
                ></div>
                <div
                  class="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden"
                >
                  <!-- Theme Selection Mock -->
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <h4 class="text-white font-semibold">Pilih Tema</h4>
                      <i class="bi bi-palette text-green-400"></i>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                      <div
                        class="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-4 relative"
                      >
                        <div
                          class="absolute inset-2 border-2 border-white/30 rounded-lg"
                        ></div>
                        <p class="text-white text-xs font-medium">
                          Elegant Purple
                        </p>
                      </div>

                      <div
                        class="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg p-4"
                      >
                        <p class="text-white text-xs font-medium">Ocean Blue</p>
                      </div>

                      <div
                        class="bg-gradient-to-br from-pink-400 to-orange-400 rounded-lg p-4"
                      >
                        <p class="text-white text-xs font-medium">Rose Gold</p>
                      </div>

                      <div
                        class="bg-gradient-to-br from-green-500 to-teal-500 rounded-lg p-4"
                      >
                        <p class="text-white text-xs font-medium">
                          Forest Green
                        </p>
                      </div>
                    </div>

                    <div class="bg-white/10 rounded-lg p-4">
                      <p class="text-white/70 text-xs mb-2">Upload Foto</p>
                      <div
                        class="border-2 border-dashed border-white/30 rounded-lg p-6 text-center"
                      >
                        <i
                          class="bi bi-cloud-upload text-white/50 text-2xl mb-2"
                        ></i>
                        <p class="text-white/50 text-xs">
                          Drag & drop foto di sini
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <div class="relative">
                <div
                  class="absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-red-500/20 blur-2xl rounded-3xl"
                ></div>
                <div
                  class="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden"
                >
                  <!-- Share Options Mock -->
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <h4 class="text-white font-semibold">Bagikan Undangan</h4>
                      <i class="bi bi-share text-orange-400"></i>
                    </div>

                    <div class="bg-white/10 rounded-lg p-4">
                      <p class="text-white/70 text-xs mb-2">Link Undangan</p>
                      <div class="flex items-center space-x-2">
                        <div class="flex-1 bg-white/5 rounded-lg p-2">
                          <p class="text-white text-xs font-mono">
                            ea-invitation.com/ahmad-siti
                          </p>
                        </div>
                        <button
                          class="px-3 py-2 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs rounded-lg"
                        >
                          Copy
                        </button>
                      </div>
                    </div>

                    <div class="grid grid-cols-3 gap-3">
                      <button class="p-3 bg-green-600 rounded-lg text-center">
                        <i class="bi bi-whatsapp text-white text-lg"></i>
                        <p class="text-white text-xs mt-1">WhatsApp</p>
                      </button>

                      <button class="p-3 bg-blue-600 rounded-lg text-center">
                        <i class="bi bi-facebook text-white text-lg"></i>
                        <p class="text-white text-xs mt-1">Facebook</p>
                      </button>

                      <button class="p-3 bg-sky-500 rounded-lg text-center">
                        <i class="bi bi-twitter text-white text-lg"></i>
                        <p class="text-white text-xs mt-1">Twitter</p>
                      </button>
                    </div>

                    <div class="bg-white/10 rounded-lg p-4">
                      <div class="flex items-center justify-between mb-2">
                        <p class="text-white font-medium text-sm">QR Code</p>
                        <button class="text-orange-400 text-xs">
                          Download
                        </button>
                      </div>
                      <div
                        class="w-24 h-24 bg-white rounded-lg mx-auto flex items-center justify-center"
                      >
                        <div
                          class="w-20 h-20 bg-black/90 rounded grid grid-cols-8 gap-px p-1"
                        >
                          <div class="bg-white rounded-sm"></div>
                          <div class="bg-black rounded-sm"></div>
                          <div class="bg-white rounded-sm"></div>
                          <div class="bg-black rounded-sm"></div>
                          <div class="bg-white rounded-sm"></div>
                          <div class="bg-black rounded-sm"></div>
                          <div class="bg-white rounded-sm"></div>
                          <div class="bg-black rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="order-1 lg:order-2">
              <div class="relative group">
                <div
                  class="absolute -inset-4 bg-gradient-to-r from-orange-400/30 via-red-400/30 to-orange-400/30 blur-2xl rounded-3xl"
                ></div>
                <div
                  class="relative backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 rounded-3xl p-8 hover:scale-105 transition-transform duration-500"
                >
                  <div class="flex items-center mb-6">
                    <div
                      class="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mr-4 text-white font-bold text-xl"
                    >
                      4
                    </div>
                    <h3 class="text-2xl font-bold text-white">
                      Bagikan & Publikasi
                    </h3>
                  </div>

                  <div class="space-y-4 mb-6">
                    <p class="text-white/80 leading-relaxed">
                      Undangan sudah siap! Sekarang bagikan ke teman dan
                      keluarga melalui berbagai platform media sosial atau QR
                      code.
                    </p>
                  </div>

                  <div class="space-y-3">
                    <div class="flex items-start space-x-3">
                      <i
                        class="bi bi-check-circle-fill text-orange-400 mt-1"
                      ></i>
                      <div>
                        <p class="text-white font-medium">Link Unik</p>
                        <p class="text-white/70 text-sm">
                          Dapatkan link khusus yang mudah dibagikan
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-3">
                      <i
                        class="bi bi-check-circle-fill text-orange-400 mt-1"
                      ></i>
                      <div>
                        <p class="text-white font-medium">Media Sosial</p>
                        <p class="text-white/70 text-sm">
                          Bagikan langsung ke WhatsApp, Facebook, Instagram
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-3">
                      <i
                        class="bi bi-check-circle-fill text-orange-400 mt-1"
                      ></i>
                      <div>
                        <p class="text-white font-medium">QR Code</p>
                        <p class="text-white/70 text-sm">
                          Download dan cetak QR code untuk undangan fisik
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tips & Tricks Section -->
    <section class="relative z-10 px-6 md:px-10 py-20">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2
            class="text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-orange-200"
          >
            Tips & Trik
          </h2>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            Maksimalkan penggunaan EA Invitation dengan tips dari ahli
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Tip 1 -->
          <div class="group relative">
            <div
              class="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-300"
            ></div>
            <div
              class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 rounded-2xl p-8 hover:bg-white/10 dark:hover:bg-black/5 transition-all duration-300 hover:scale-105"
            >
              <div
                class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl mb-6 flex items-center justify-center"
              >
                <i class="bi bi-lightbulb text-white text-xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">
                Foto Berkualitas
              </h3>
              <p class="text-white/70">
                Gunakan foto prewedding dengan resolusi tinggi (minimal 1080p)
                untuk hasil terbaik. Hindari foto yang blur atau gelap.
              </p>
            </div>
          </div>

          <!-- Tip 2 -->
          <div class="group relative">
            <div
              class="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-300"
            ></div>
            <div
              class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 rounded-2xl p-8 hover:bg-white/10 dark:hover:bg-black/5 transition-all duration-300 hover:scale-105"
            >
              <div
                class="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl mb-6 flex items-center justify-center"
              >
                <i class="bi bi-clock text-white text-xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">
                Waktu yang Tepat
              </h3>
              <p class="text-white/70">
                Kirim undangan 2-3 minggu sebelum acara untuk memberikan waktu
                tamu mempersiapkan kehadiran mereka.
              </p>
            </div>
          </div>

          <!-- Tip 3 -->
          <div class="group relative">
            <div
              class="absolute -inset-2 bg-gradient-to-r from-green-400/20 to-teal-500/20 blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-300"
            ></div>
            <div
              class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 rounded-2xl p-8 hover:bg-white/10 dark:hover:bg-black/5 transition-all duration-300 hover:scale-105"
            >
              <div
                class="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl mb-6 flex items-center justify-center"
              >
                <i class="bi bi-geo-alt text-white text-xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">
                Lokasi Jelas
              </h3>
              <p class="text-white/70">
                Pastikan alamat lengkap dan tambahkan link Google Maps untuk
                memudahkan tamu menemukan lokasi acara.
              </p>
            </div>
          </div>

          <!-- Tip 4 -->
          <div class="group relative">
            <div
              class="absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-pink-500/20 blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-300"
            ></div>
            <div
              class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 rounded-2xl p-8 hover:bg-white/10 dark:hover:bg-black/5 transition-all duration-300 hover:scale-105"
            >
              <div
                class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl mb-6 flex items-center justify-center"
              >
                <i class="bi bi-palette2 text-white text-xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">
                Konsistensi Tema
              </h3>
              <p class="text-white/70">
                Pilih tema warna yang sesuai dengan konsep pernikahan Anda untuk
                menciptakan kesan yang harmonis dan elegan.
              </p>
            </div>
          </div>

          <!-- Tip 5 -->
          <div class="group relative">
            <div
              class="absolute -inset-2 bg-gradient-to-r from-red-400/20 to-rose-500/20 blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-300"
            ></div>
            <div
              class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 rounded-2xl p-8 hover:bg-white/10 dark:hover:bg-black/5 transition-all duration-300 hover:scale-105"
            >
              <div
                class="w-12 h-12 bg-gradient-to-br from-red-400 to-rose-500 rounded-xl mb-6 flex items-center justify-center"
              >
                <i class="bi bi-heart text-white text-xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">
                Pesan Personal
              </h3>
              <p class="text-white/70">
                Tambahkan pesan khusus atau quote romantic untuk memberikan
                sentuhan personal pada undangan Anda.
              </p>
            </div>
          </div>

          <!-- Tip 6 -->
          <div class="group relative">
            <div
              class="absolute -inset-2 bg-gradient-to-r from-indigo-400/20 to-purple-500/20 blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-300"
            ></div>
            <div
              class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 rounded-2xl p-8 hover:bg-white/10 dark:hover:bg-black/5 transition-all duration-300 hover:scale-105"
            >
              <div
                class="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl mb-6 flex items-center justify-center"
              >
                <i class="bi bi-phone-vibrate text-white text-xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">Follow Up</h3>
              <p class="text-white/70">
                Lakukan follow up melalui WhatsApp atau telepon untuk memastikan
                undangan telah diterima dan dibaca tamu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Tutorial Section -->
    <section id="video-tutorial" class="relative z-10 px-6 md:px-10 py-20">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center px-4 py-2 mb-8 backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 rounded-full shadow-lg"
          >
            <i class="bi bi-play-btn text-red-400 mr-2 animate-pulse"></i>
            <span class="text-sm font-medium text-white/90"
              >Video Tutorial</span
            >
          </div>

          <h2 class="text-4xl lg:text-6xl font-bold mb-6 text-white">
            Tonton
            <span
              class="bg-gradient-to-r from-red-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-gradient-x"
              >Video Tutorial</span
            >
            Lengkap
          </h2>

          <p
            class="text-xl lg:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Ikuti panduan video step-by-step untuk membuat undangan digital yang
            sempurna dalam hitungan menit
          </p>
        </div>

        <!-- Video Player Card -->
        <div class="relative max-w-6xl mx-auto">
          <!-- Glow Effect -->
          <div
            class="absolute -inset-8 bg-gradient-to-r from-red-400/30 via-pink-400/30 dark:via-purple-400/30 to-red-400/30 blur-3xl rounded-3xl"
          ></div>

          <!-- Video Container -->
          <div
            class="relative backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 rounded-3xl p-4 lg:p-8 shadow-2xl"
          >
            <div
              class="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden group cursor-pointer"
              @click="playVideo"
            >
              <!-- Video Thumbnail -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-slate-700/50 to-slate-900/50 flex items-center justify-center"
              >
                <!-- Fake Video Preview -->
                <div class="absolute inset-4 rounded-xl overflow-hidden">
                  <!-- Mock UI Screenshot -->
                  <div
                    class="w-full h-full bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 relative"
                  >
                    <!-- Mock Browser Bar -->
                    <div
                      class="h-8 bg-slate-800 flex items-center px-4 space-x-2"
                    >
                      <div class="flex space-x-1">
                        <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div class="flex-1 bg-slate-700 rounded px-3 py-1">
                        <div class="w-32 h-2 bg-slate-600 rounded"></div>
                      </div>
                    </div>

                    <!-- Mock Content -->
                    <div class="p-8">
                      <div class="text-center mb-8">
                        <div
                          class="w-48 h-8 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded mx-auto mb-4"
                        ></div>
                        <div class="w-32 h-4 bg-white/20 rounded mx-auto"></div>
                      </div>

                      <div class="grid grid-cols-2 gap-6">
                        <div class="space-y-4">
                          <div class="w-full h-12 bg-white/10 rounded-lg"></div>
                          <div class="w-full h-12 bg-white/10 rounded-lg"></div>
                          <div class="w-full h-24 bg-white/10 rounded-lg"></div>
                        </div>
                        <div class="bg-white/5 rounded-2xl p-6">
                          <div
                            class="w-full h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4"
                          ></div>
                          <div class="space-y-2">
                            <div class="w-24 h-4 bg-white/20 rounded"></div>
                            <div class="w-32 h-6 bg-white/30 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Play Button Overlay -->
                <div
                  class="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors duration-300"
                >
                  <div
                    class="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300"
                  >
                    <i
                      class="bi bi-play-fill text-white text-3xl lg:text-4xl ml-1"
                    ></i>
                  </div>
                </div>

                <!-- Duration Badge -->
                <div
                  class="absolute bottom-4 right-4 px-3 py-1 bg-black/80 text-white text-sm rounded-lg"
                >
                  {{ videoLength }}
                </div>

                <!-- Quality Badge -->
                <div
                  class="absolute top-4 right-4 px-2 py-1 bg-red-600 text-white text-xs font-bold rounded"
                >
                  HD
                </div>
              </div>
            </div>

            <!-- Video Info -->
            <div class="mt-6 lg:mt-8">
              <div
                class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
              >
                <div class="flex-1">
                  <h3 class="text-2xl lg:text-3xl font-bold text-white mb-3">
                    Cara Membuat Undangan Digital di EA Invitation
                  </h3>
                  <p class="text-white/70 mb-4 leading-relaxed">
                    Tutorial komprehensif yang menunjukkan semua langkah dari
                    awal hingga undangan siap dibagikan. Termasuk tips khusus
                    untuk hasil optimal.
                  </p>

                  <!-- Video Stats -->
                  <div
                    class="flex flex-wrap items-center gap-6 text-sm text-white/60"
                  >
                    <div class="flex items-center">
                      <i class="bi bi-eye mr-2 text-cyan-400"></i>
                      <span>15.2K views</span>
                    </div>
                    <div class="flex items-center">
                      <i class="bi bi-hand-thumbs-up mr-2 text-green-400"></i>
                      <span>1.8K likes</span>
                    </div>
                    <div class="flex items-center">
                      <i class="bi bi-calendar3 mr-2 text-purple-400"></i>
                      <span>2 hari yang lalu</span>
                    </div>
                    <div class="flex items-center">
                      <i class="bi bi-stopwatch mr-2 text-orange-400"></i>
                      <span>{{ videoLength }}</span>
                    </div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row gap-3 lg:gap-4">
                  <button
                    @click="playVideo"
                    class="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-400 hover:to-pink-400 text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  >
                    <i class="bi bi-play-circle mr-2"></i>
                    Tonton Sekarang
                  </button>

                  <button
                    class="px-6 py-3 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  >
                    <i class="bi bi-bookmark mr-2"></i>
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Chapter List -->
          <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              v-for="(chapter, index) in chapters"
              :key="index"
              class="group relative cursor-pointer"
              @click="seekToChapter(chapter.time)"
            >
              <div
                class="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/5 blur rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div
                class="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 group-hover:bg-white/10 transition-colors duration-300"
              >
                <div class="flex items-center space-x-4">
                  <div
                    class="w-10 h-10 bg-gradient-to-r from-red-400/20 to-pink-400/20 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <span class="text-red-400 font-semibold text-sm">{{
                      chapter.time
                    }}</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4
                      class="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300"
                    >
                      {{ chapter.title }}
                    </h4>
                    <p class="text-white/60 text-sm mt-1">
                      {{ chapter.description }}
                    </p>
                  </div>
                  <i
                    class="bi bi-play-circle text-white/40 group-hover:text-red-400 transition-colors duration-300"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="text-center mt-16">
          <div class="max-w-4xl mx-auto">
            <h3 class="text-3xl lg:text-4xl font-bold text-white mb-6">
              Siap Membuat Undangan Digital Anda?
            </h3>
            <p class="text-xl text-white/80 mb-8">
              Setelah menonton tutorial, saatnya praktik langsung! Mulai buat
              undangan impian Anda sekarang.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink
                to="/demo"
                class="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <span class="flex items-center justify-center">
                  Mulai Buat Undangan
                  <i
                    class="bi bi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"
                  ></i>
                </span>
              </NuxtLink>

              <button
                @click="shareVideo"
                class="group px-8 py-4 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <span class="flex items-center justify-center">
                  Bagikan Tutorial
                  <i
                    class="bi bi-share ml-2 group-hover:scale-110 transition-transform"
                  ></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Modal -->
    <div
      v-if="showVideoModal"
      class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <div class="relative max-w-6xl w-full">
        <!-- Close Button -->
        <button
          @click="closeVideo"
          class="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white hover:text-red-400 transition-colors"
        >
          <i class="bi bi-x-lg"></i>
        </button>

        <!-- Video Player -->
        <div class="relative aspect-video bg-black rounded-2xl overflow-hidden">
          <!-- Fake Video Player -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center"
          >
            <div class="text-center">
              <div
                class="w-24 h-24 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse"
              >
                <i class="bi bi-play-fill text-white text-3xl ml-1"></i>
              </div>
              <p class="text-white text-lg">Video sedang dimuat...</p>
              <p class="text-white/60 text-sm mt-2">
                Tutorial EA Invitation - {{ videoLength }}
              </p>
            </div>
          </div>

          <!-- Video Controls -->
          <div
            class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
          >
            <div class="flex items-center space-x-4">
              <button class="text-white hover:text-red-400 transition-colors">
                <i class="bi bi-play-fill text-2xl"></i>
              </button>

              <div class="flex-1 bg-white/20 rounded-full h-2 relative">
                <div
                  class="absolute left-0 top-0 h-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full"
                  :style="{ width: currentProgress + '%' }"
                ></div>
              </div>

              <span class="text-white text-sm"
                >{{ formatTime(currentTime) }} / {{ videoLength }}</span
              >

              <button class="text-white hover:text-red-400 transition-colors">
                <i class="bi bi-volume-up"></i>
              </button>

              <button class="text-white hover:text-red-400 transition-colors">
                <i class="bi bi-fullscreen"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Reactive data
const showVideoModal = ref(false);
const videoLength = ref("12:45");
const currentTime = ref(0);
const currentProgress = ref(0);

const chapters = ref([
  {
    time: "0:00",
    title: "Pengenalan EA Invitation",
    description: "Overview fitur dan keunggulan platform",
  },
  {
    time: "1:30",
    title: "Menyiapkan Data Mempelai",
    description: "Input nama dan informasi keluarga",
  },
  {
    time: "4:15",
    title: "Setting Tanggal & Lokasi",
    description: "Konfigurasi waktu dan tempat acara",
  },
  {
    time: "7:20",
    title: "Memilih Tema & Kustomisasi",
    description: "Personalisasi desain dan warna",
  },
  {
    time: "9:45",
    title: "Preview & Finalisasi",
    description: "Review dan penyesuaian akhir",
  },
  {
    time: "11:20",
    title: "Publikasi & Sharing",
    description: "Cara membagikan undangan ke tamu",
  },
]);

// Methods
const playVideo = () => {
  showVideoModal.value = true;
  // Simulate video progress
  const interval = setInterval(() => {
    currentTime.value += 1;
    currentProgress.value = (currentTime.value / 765) * 100; // 12:45 = 765 seconds

    if (currentTime.value >= 765) {
      clearInterval(interval);
    }
  }, 1000);
};

const closeVideo = () => {
  showVideoModal.value = false;
  currentTime.value = 0;
  currentProgress.value = 0;
};

const seekToChapter = (time) => {
  // Convert time string to seconds and seek
  const [minutes, seconds] = time.split(":").map(Number);
  const seekTime = minutes * 60 + seconds;
  currentTime.value = seekTime;
  currentProgress.value = (seekTime / 765) * 100;
  playVideo();
};

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const scrollToVideo = () => {
  const element = document.getElementById("video-tutorial");
  element?.scrollIntoView({ behavior: "smooth" });
};

const shareVideo = () => {
  if (navigator.share) {
    navigator.share({
      title: "Tutorial EA Invitation - Cara Membuat Undangan Digital",
      text: "Pelajari cara membuat undangan pernikahan digital yang menawan!",
      url: window.location.href,
    });
  } else {
    // Fallback copy to clipboard
    navigator.clipboard.writeText(window.location.href);
    alert("Link tutorial telah disalin ke clipboard!");
  }
};

// Lifecycle
onMounted(() => {
  // Initialize any required animations or observers
});
</script>

<style scoped>
@keyframes gradient-x {
  0%,
  100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 4s ease infinite;
}

/* Grid pattern */
.bg-grid-pattern {
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.4) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: rgba(139, 92, 246, 0.5);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(139, 92, 246, 0.7);
}

/* Video hover effects */
@keyframes pulse-glow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.4);
  }
  50% {
    box-shadow: 0 0 40px rgba(239, 68, 68, 0.8);
  }
}

.video-play-button {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Chapter hover animations */
.chapter-item:hover .chapter-icon {
  transform: scale(1.1);
}

/* Video modal backdrop blur */
.video-modal-backdrop {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Progress bar animations */
@keyframes progress-glow {
  0%,
  100% {
    box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.8);
  }
}

.progress-bar {
  animation: progress-glow 2s ease-in-out infinite;
}
</style>
