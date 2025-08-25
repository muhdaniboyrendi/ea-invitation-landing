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
          <!-- Package Selection Interface -->
          <div class="space-y-6">
            <div class="flex items-center justify-between">
              <h4 class="text-white font-semibold text-lg">Paket Undangan</h4>
              <i class="bi bi-heart-fill text-purple-400"></i>
            </div>

            <!-- Package Options -->
            <div class="space-y-4">
              <!-- Economy Package -->
              <div
                class="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all cursor-pointer"
              >
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center"
                    >
                      <i class="bi bi-star text-white text-sm"></i>
                    </div>
                    <div>
                      <h5 class="text-white font-semibold">Economy</h5>
                      <p class="text-white/60 text-xs">Paket dasar</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-white font-bold">Rp 50K</p>
                    <p class="text-white/50 text-xs">sekali bayar</p>
                  </div>
                </div>
                <div class="flex items-center space-x-2 text-xs">
                  <i class="bi bi-check text-green-400"></i>
                  <span class="text-white/70"
                    >Max 100 tamu • 3 Template • Fitur dasar</span
                  >
                </div>
              </div>

              <!-- Premium Package - Selected -->
              <div
                class="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-400/50 rounded-lg p-4 relative overflow-hidden"
              >
                <div class="absolute top-2 right-2">
                  <span
                    class="bg-purple-500 text-white text-xs px-2 py-1 rounded-full"
                    >Dipilih</span
                  >
                </div>
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center"
                    >
                      <i class="bi bi-star-fill text-white text-sm"></i>
                    </div>
                    <div>
                      <h5 class="text-white font-semibold">Premium</h5>
                      <p class="text-purple-300 text-xs">Paling populer</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-white font-bold">Rp 150K</p>
                    <p class="text-white/50 text-xs">sekali bayar</p>
                  </div>
                </div>
                <div class="space-y-1">
                  <div class="flex items-center space-x-2 text-xs">
                    <i class="bi bi-check text-green-400"></i>
                    <span class="text-white/70"
                      >Max 500 tamu • 10 Template premium</span
                    >
                  </div>
                  <div class="flex items-center space-x-2 text-xs">
                    <i class="bi bi-check text-green-400"></i>
                    <span class="text-white/70"
                      >Musik, Gallery, Timeline & Maps</span
                    >
                  </div>
                </div>
              </div>

              <!-- Business Package -->
              <div
                class="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all cursor-pointer"
              >
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                    >
                      <i class="bi bi-gem text-white text-sm"></i>
                    </div>
                    <div>
                      <h5 class="text-white font-semibold">Business</h5>
                      <p class="text-white/60 text-xs">Fitur lengkap</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-white font-bold">Rp 300K</p>
                    <p class="text-white/50 text-xs">sekali bayar</p>
                  </div>
                </div>
                <div class="space-y-1">
                  <div class="flex items-center space-x-2 text-xs">
                    <i class="bi bi-check text-green-400"></i>
                    <span class="text-white/70"
                      >Tamu unlimited • Custom domain</span
                    >
                  </div>
                  <div class="flex items-center space-x-2 text-xs">
                    <i class="bi bi-check text-green-400"></i>
                    <span class="text-white/70"
                      >Analytics & Live streaming</span
                    >
                  </div>
                </div>
              </div>
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
          class="absolute -inset-4 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-purple-400/30 blur-2xl rounded-3xl"
        ></div>
        <div
          class="relative bg-linear-to-r from-purple-900/90 to-pink-900/90 dark:from-purple-900/10 dark:to-pink-900/10 border border-white/20 rounded-3xl p-8"
        >
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-4 text-white font-bold text-xl"
            >
              2
            </div>
            <h3 class="text-2xl font-bold text-white">Pilih Paket Undangan</h3>
          </div>

          <div class="space-y-4 mb-6">
            <p class="text-white/80 leading-relaxed">
              Pilih paket undangan yang sesuai dengan tema dan kebutuhan Anda.
            </p>
          </div>

          <div class="space-y-3">
            <div class="flex items-start space-x-3">
              <i class="bi bi-check-circle-fill text-purple-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Ekonomy</p>
                <p class="text-white/70 text-sm">
                  Sesuai untuk undangan sederhana dengan fitur dasar
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-check-circle-fill text-purple-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Premium</p>
                <p class="text-white/70 text-sm">
                  Fitur tambahan untuk undangan yang lebih mewah
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-check-circle-fill text-purple-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Business</p>
                <p class="text-white/70 text-sm">
                  Fitur lengkap untuk undangan dengan tamu tanpa batas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
