<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div class="order-2 lg:order-1">
      <div class="relative">
        <div
          class="absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-red-500/20 blur-2xl rounded-3xl"
        ></div>
        <div
          class="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden"
        >
          <!-- Theme Selection Interface -->
          <div class="space-y-6">
            <div class="flex items-center justify-between">
              <h4 class="text-white font-semibold text-lg">Gallery Tema</h4>
              <div class="flex items-center space-x-2">
                <i class="bi bi-palette text-orange-400"></i>
                <span class="text-orange-400 text-sm">50+ Template</span>
              </div>
            </div>

            <!-- Theme Categories -->
            <div class="flex space-x-2 mb-4">
              <button
                class="px-3 py-1 bg-orange-500/20 border border-orange-400/50 text-orange-300 text-xs rounded-full"
              >
                Modern
              </button>
              <button
                class="px-3 py-1 bg-white/10 text-white/60 text-xs rounded-full hover:bg-white/20 transition-all"
              >
                Cultural
              </button>
              <button
                class="px-3 py-1 bg-white/10 text-white/60 text-xs rounded-full hover:bg-white/20 transition-all"
              >
                Floral
              </button>
            </div>

            <!-- Theme Grid -->
            <div class="grid grid-cols-2 gap-3">
              <!-- Selected Theme -->
              <div class="relative group cursor-pointer">
                <div
                  class="bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg p-4 border-2 border-orange-400/50 relative overflow-hidden"
                >
                  <div class="absolute top-2 right-2">
                    <i class="bi bi-check-circle-fill text-orange-400"></i>
                  </div>
                  <div
                    class="h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded mb-2 flex items-center justify-center"
                  >
                    <i class="bi bi-heart-fill text-white/70"></i>
                  </div>
                  <p class="text-white text-xs font-medium">Elegant Purple</p>
                  <p class="text-white/50 text-xs">Modern • Premium</p>
                </div>
              </div>

              <div
                class="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-4 cursor-pointer hover:border border-white/20 transition-all"
              >
                <div
                  class="h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded mb-2 flex items-center justify-center"
                >
                  <i class="bi bi-water text-white/70"></i>
                </div>
                <p class="text-white text-xs font-medium">Ocean Blue</p>
                <p class="text-white/50 text-xs">Modern • Free</p>
              </div>

              <div
                class="bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-lg p-4 cursor-pointer hover:border border-white/20 transition-all"
              >
                <div
                  class="h-16 bg-gradient-to-br from-pink-400 to-orange-400 rounded mb-2 flex items-center justify-center"
                >
                  <i class="bi bi-gem text-white/70"></i>
                </div>
                <p class="text-white text-xs font-medium">Rose Gold</p>
                <p class="text-white/50 text-xs">Luxury • Premium</p>
              </div>

              <div
                class="bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-lg p-4 cursor-pointer hover:border border-white/20 transition-all"
              >
                <div
                  class="h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded mb-2 flex items-center justify-center"
                >
                  <i class="bi bi-tree-fill text-white/70"></i>
                </div>
                <p class="text-white text-xs font-medium">Forest Green</p>
                <p class="text-white/50 text-xs">Nature • Free</p>
              </div>
            </div>

            <!-- Theme Preview -->
            <div class="bg-white/10 rounded-lg p-4">
              <div class="flex items-center justify-between mb-3">
                <h5 class="text-white font-medium text-sm">
                  Preview: Elegant Purple
                </h5>
                <button class="text-orange-400 text-xs hover:text-orange-300">
                  <i class="bi bi-eye"></i> Preview Lengkap
                </button>
              </div>

              <div
                class="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-4 text-center"
              >
                <div
                  class="bg-white/20 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center"
                >
                  <i class="bi bi-heart-fill text-white"></i>
                </div>
                <p class="text-white text-sm font-bold">Ahmad & Siti</p>
                <p class="text-white/80 text-xs">15 Oktober 2024</p>
              </div>
            </div>

            <!-- Theme Features -->
            <div
              class="bg-orange-500/10 border border-orange-400/20 rounded-lg p-4"
            >
              <h6 class="text-orange-300 font-medium text-sm mb-2">
                Fitur Tema Premium:
              </h6>
              <div class="grid grid-cols-2 gap-2 text-xs">
                <div class="flex items-center space-x-2">
                  <i class="bi bi-music-note text-orange-400"></i>
                  <span class="text-white/70">Background Music</span>
                </div>
                <div class="flex items-center space-x-2">
                  <i class="bi bi-images text-orange-400"></i>
                  <span class="text-white/70">Photo Gallery</span>
                </div>
                <div class="flex items-center space-x-2">
                  <i class="bi bi-heart text-orange-400"></i>
                  <span class="text-white/70">Love Story Timeline</span>
                </div>
                <div class="flex items-center space-x-2">
                  <i class="bi bi-stars text-orange-400"></i>
                  <span class="text-white/70">Animations</span>
                </div>
              </div>
            </div>

            <!-- Action Button -->
            <div class="pt-2">
              <button
                class="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Gunakan Tema Ini
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="order-1 lg:order-2">
      <div
        class="relative group bg-white dark:bg-black rounded-3xl hover:scale-105 transition-transform duration-500"
      >
        <div
          class="absolute -inset-4 bg-gradient-to-r from-orange-400/30 via-red-400/30 to-orange-400/30 blur-2xl rounded-3xl"
        ></div>
        <div
          class="relative bg-linear-to-r from-orange-900/90 to-red-900/90 dark:from-orange-900/10 dark:to-red-900/10 border border-white/20 rounded-3xl p-8"
        >
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mr-4 text-white font-bold text-xl"
            >
              4
            </div>
            <h3 class="text-2xl font-bold text-white">Pilih Tema</h3>
          </div>

          <div class="space-y-4 mb-6">
            <p class="text-white/80 leading-relaxed">
              Pilih tema yang sesuai dengan konsep dan style pernikahan Anda.
              Setiap tema memiliki karakteristik dan fitur yang berbeda.
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <i class="bi bi-laptop text-orange-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Modern & Minimalis</p>
                <p class="text-white/70 text-sm">
                  Desain yang bersih dan elegant dengan sentuhan teknologi
                  terkini
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-flower1 text-orange-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Traditional & Cultural</p>
                <p class="text-white/70 text-sm">
                  Tema yang terinspirasi budaya lokal dengan ornamen tradisional
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-palette text-orange-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Artistic & Creative</p>
                <p class="text-white/70 text-sm">
                  Desain unik dengan elemen artistik dan warna-warna menarik
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-heart text-orange-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Romantic & Floral</p>
                <p class="text-white/70 text-sm">
                  Tema romantis dengan nuansa bunga dan warna pastel
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-gem text-orange-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Luxury & Premium</p>
                <p class="text-white/70 text-sm">
                  Tema mewah dengan efek premium dan animasi yang menawan
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-phone text-orange-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Mobile Optimized</p>
                <p class="text-white/70 text-sm">
                  Semua tema responsive dan teroptimasi untuk berbagai perangkat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
