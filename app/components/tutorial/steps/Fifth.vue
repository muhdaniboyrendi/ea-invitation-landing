<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div :class="['order-1 lg:order-1']">
      <div
        class="relative group bg-white dark:bg-black rounded-3xl hover:scale-105 transition-transform duration-500"
      >
        <div
          class="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 blur-2xl rounded-3xl"
        ></div>
        <div
          class="relative bg-linear-to-r from-cyan-900/90 to-blue-900/90 dark:from-cyan-900/10 dark:to-blue-900/10 border border-white/20 rounded-3xl p-8"
        >
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold text-xl"
            >
              5
            </div>
            <h3 class="text-2xl font-bold text-white">Pengisian Data</h3>
          </div>

          <div class="space-y-4 mb-6">
            <p class="text-white/80 leading-relaxed">
              Isi semua informasi yang diperlukan untuk undangan Anda dengan
              data yang sudah disiapkan sebelumnya. Pastikan semua informasi
              akurat.
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <i class="bi bi-people text-cyan-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Data Mempelai & Keluarga</p>
                <p class="text-white/70 text-sm">
                  Nama lengkap kedua mempelai dan orang tua masing-masing
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-calendar-event text-cyan-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Jadwal Acara Lengkap</p>
                <p class="text-white/70 text-sm">
                  Tanggal, waktu akad nikah, resepsi, dan lokasi masing-masing
                  acara
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-camera text-cyan-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Upload Foto</p>
                <p class="text-white/70 text-sm">
                  Foto prewedding, couple, dan foto keluarga berkualitas tinggi
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-heart text-cyan-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Love Story Timeline</p>
                <p class="text-white/70 text-sm">
                  Cerita perjalanan cinta dari awal bertemu hingga menikah
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-wallet text-cyan-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Informasi Amplop Digital</p>
                <p class="text-white/70 text-sm">
                  Rekening bank dan e-wallet untuk kemudahan tamu memberikan
                  hadiah
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-music-note text-cyan-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Musik & Personalisasi</p>
                <p class="text-white/70 text-sm">
                  Pilih lagu favorit dan pesan khusus untuk tamu undangan
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
          <!-- Data Entry Form Interface -->
          <div class="space-y-6">
            <div class="flex items-center justify-between">
              <h4 class="text-white font-semibold text-lg">
                Form Pengisian Data
              </h4>
              <div class="flex items-center space-x-2">
                <div
                  class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                ></div>
                <span class="text-green-400 text-sm font-medium"
                  >Auto Save</span
                >
              </div>
            </div>

            <!-- Progress Steps -->
            <div class="flex items-center space-x-2 mb-4">
              <div class="flex items-center space-x-1">
                <div
                  class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                >
                  <i class="bi bi-check text-white text-xs"></i>
                </div>
                <span class="text-green-400 text-xs">Data Mempelai</span>
              </div>
              <div class="w-8 h-px bg-white/20"></div>
              <div class="flex items-center space-x-1">
                <div
                  class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center animate-pulse"
                >
                  <span class="text-white text-xs font-bold">2</span>
                </div>
                <span class="text-cyan-400 text-xs">Detail Acara</span>
              </div>
              <div class="w-8 h-px bg-white/20"></div>
              <div class="flex items-center space-x-1">
                <div
                  class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
                >
                  <span class="text-white/50 text-xs">3</span>
                </div>
                <span class="text-white/50 text-xs">Upload</span>
              </div>
            </div>

            <!-- Current Form: Detail Acara -->
            <div class="space-y-4">
              <div class="bg-white/10 rounded-lg p-4">
                <h5 class="text-white font-medium mb-3 flex items-center">
                  <i class="bi bi-calendar-heart text-cyan-400 mr-2"></i>
                  Detail Acara Pernikahan
                </h5>

                <div class="space-y-3">
                  <div class="grid grid-cols-2 gap-3">
                    <div class="bg-white/5 rounded-lg p-3">
                      <p class="text-white/50 text-xs mb-1">Tanggal Akad</p>
                      <p class="text-white text-sm">15 Oktober 2024</p>
                    </div>
                    <div class="bg-white/5 rounded-lg p-3">
                      <p class="text-white/50 text-xs mb-1">Waktu Akad</p>
                      <p class="text-white text-sm">08:00 WIB</p>
                    </div>
                  </div>

                  <div class="bg-white/5 rounded-lg p-3">
                    <p class="text-white/50 text-xs mb-1">Lokasi Akad Nikah</p>
                    <p class="text-white text-sm">
                      Masjid Al-Ikhlas, Jl. Merdeka No. 123
                    </p>
                  </div>

                  <div class="grid grid-cols-2 gap-3">
                    <div class="bg-white/5 rounded-lg p-3">
                      <p class="text-white/50 text-xs mb-1">Tanggal Resepsi</p>
                      <p class="text-white text-sm">15 Oktober 2024</p>
                    </div>
                    <div class="bg-white/5 rounded-lg p-3">
                      <p class="text-white/50 text-xs mb-1">Waktu Resepsi</p>
                      <p class="text-white text-sm">18:00 WIB</p>
                    </div>
                  </div>

                  <div class="bg-white/5 rounded-lg p-3">
                    <p class="text-white/50 text-xs mb-1">Lokasi Resepsi</p>
                    <p class="text-white text-sm">
                      Gedung Serbaguna, Jl. Harmoni No. 456
                    </p>
                  </div>
                </div>
              </div>

              <!-- Quick Actions -->
              <div class="flex space-x-2">
                <button
                  class="flex-1 bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 py-2 px-4 rounded-lg text-sm hover:bg-cyan-500/30 transition-all"
                >
                  <i class="bi bi-geo-alt mr-1"></i>
                  Pilih di Maps
                </button>
                <button
                  class="flex-1 bg-white/10 border border-white/20 text-white/70 py-2 px-4 rounded-lg text-sm hover:bg-white/20 transition-all"
                >
                  <i class="bi bi-calendar-plus mr-1"></i>
                  Import Kalender
                </button>
              </div>

              <!-- Next Section Preview -->
              <div
                class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-lg p-4"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <h6 class="text-white font-medium text-sm">
                      Selanjutnya: Upload Foto
                    </h6>
                    <p class="text-white/60 text-xs">
                      Siapkan 3-5 foto terbaik Anda
                    </p>
                  </div>
                  <i class="bi bi-camera text-purple-400"></i>
                </div>
              </div>
            </div>

            <!-- Navigation Buttons -->
            <div class="flex space-x-3 pt-2">
              <button
                class="flex-1 bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-xl transition-all border border-white/20"
              >
                <i class="bi bi-arrow-left mr-1"></i>
                Kembali
              </button>
              <button
                class="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Lanjutkan
                <i class="bi bi-arrow-right ml-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
