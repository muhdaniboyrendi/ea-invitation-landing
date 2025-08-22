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
                <button class="text-orange-400 text-xs">Download</button>
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
            <h3 class="text-2xl font-bold text-white">Bagikan & Publikasi</h3>
          </div>

          <div class="space-y-4 mb-6">
            <p class="text-white/80 leading-relaxed">
              Undangan sudah siap! Sekarang bagikan ke teman dan keluarga
              melalui berbagai platform media sosial atau QR code.
            </p>
          </div>

          <div class="space-y-3">
            <div class="flex items-start space-x-3">
              <i class="bi bi-check-circle-fill text-orange-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Link Unik</p>
                <p class="text-white/70 text-sm">
                  Dapatkan link khusus yang mudah dibagikan
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-check-circle-fill text-orange-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Media Sosial</p>
                <p class="text-white/70 text-sm">
                  Bagikan langsung ke WhatsApp, Facebook, Instagram
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-check-circle-fill text-orange-400 mt-1"></i>
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
</template>
