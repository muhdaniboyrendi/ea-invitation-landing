<template>
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
              <h4 class="text-white font-semibold">Pilih Tanggal & Waktu</h4>
              <i class="bi bi-calendar-heart text-purple-400"></i>
            </div>

            <!-- Calendar Mock -->
            <div class="bg-white/10 rounded-lg p-4">
              <div class="grid grid-cols-7 gap-1 mb-3">
                <div class="text-center text-white/50 text-xs p-1">Min</div>
                <div class="text-center text-white/50 text-xs p-1">Sen</div>
                <div class="text-center text-white/50 text-xs p-1">Sel</div>
                <div class="text-center text-white/50 text-xs p-1">Rab</div>
                <div class="text-center text-white/50 text-xs p-1">Kam</div>
                <div class="text-center text-white/50 text-xs p-1">Jum</div>
                <div class="text-center text-white/50 text-xs p-1">Sab</div>
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
            <h3 class="text-2xl font-bold text-white">Atur Jadwal Acara</h3>
          </div>

          <div class="space-y-4 mb-6">
            <p class="text-white/80 leading-relaxed">
              Tentukan tanggal pernikahan, waktu akad nikah, dan waktu resepsi.
              Pastikan semua detail waktu sudah akurat.
            </p>
          </div>

          <div class="space-y-3">
            <div class="flex items-start space-x-3">
              <i class="bi bi-check-circle-fill text-purple-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Pilih Tanggal</p>
                <p class="text-white/70 text-sm">
                  Gunakan kalender interaktif untuk memilih tanggal
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-check-circle-fill text-purple-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Waktu Akad & Resepsi</p>
                <p class="text-white/70 text-sm">
                  Tentukan jam mulai untuk setiap acara
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-check-circle-fill text-purple-400 mt-1"></i>
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
</template>
