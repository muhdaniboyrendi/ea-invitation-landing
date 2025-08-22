<template>
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
            <h3 class="text-2xl font-bold text-white">Pilih Tema & Desain</h3>
          </div>

          <div class="space-y-4 mb-6">
            <p class="text-white/80 leading-relaxed">
              Sesuaikan tampilan undangan dengan memilih tema warna, font, dan
              layout yang sesuai dengan kepribadian Anda.
            </p>
          </div>

          <div class="space-y-3">
            <div class="flex items-start space-x-3">
              <i class="bi bi-check-circle-fill text-green-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Pilihan Tema</p>
                <p class="text-white/70 text-sm">
                  Berbagai template siap pakai dengan desain menarik
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-check-circle-fill text-green-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Kustomisasi Warna</p>
                <p class="text-white/70 text-sm">
                  Sesuaikan palet warna dengan tema pernikahan
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-check-circle-fill text-green-400 mt-1"></i>
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
                <p class="text-white text-xs font-medium">Elegant Purple</p>
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
                <p class="text-white text-xs font-medium">Forest Green</p>
              </div>
            </div>

            <div class="bg-white/10 rounded-lg p-4">
              <p class="text-white/70 text-xs mb-2">Upload Foto</p>
              <div
                class="border-2 border-dashed border-white/30 rounded-lg p-6 text-center"
              >
                <i class="bi bi-cloud-upload text-white/50 text-2xl mb-2"></i>
                <p class="text-white/50 text-xs">Drag & drop foto di sini</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
