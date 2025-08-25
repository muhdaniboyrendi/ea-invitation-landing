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
              7
            </div>
            <h3 class="text-2xl font-bold text-white">Bagikan Undangan</h3>
          </div>

          <div class="space-y-4">
            <p class="text-white/80 leading-relaxed">
              Bagikan undangan Anda kepada teman, keluarga, dan kerabat.
            </p>
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
          <!-- Mock Interface untuk Bagikan Undangan -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h4 class="text-white font-semibold">Bagikan Undangan</h4>
              <div
                class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
              ></div>
            </div>

            <!-- URL Undangan -->
            <div class="bg-white/10 rounded-lg p-4">
              <p class="text-white/50 text-xs mb-2">Link Undangan Digital</p>
              <div class="flex items-center gap-2">
                <p class="text-cyan-400 text-sm flex-1">
                  https://eainvitation.com/ahmad-siti
                </p>
                <button
                  class="bg-cyan-500/20 hover:bg-cyan-500/30 px-3 py-1 rounded text-cyan-400 text-xs transition-colors"
                >
                  Salin
                </button>
              </div>
            </div>

            <!-- Opsi Berbagi -->
            <div class="space-y-3">
              <p class="text-white/70 text-sm">Bagikan melalui:</p>

              <div class="grid grid-cols-2 gap-3">
                <div
                  class="bg-green-500/20 hover:bg-green-500/30 rounded-lg p-3 cursor-pointer transition-colors group"
                >
                  <div class="flex items-center gap-2">
                    <div
                      class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      <span class="text-white text-xs">W</span>
                    </div>
                    <p class="text-white text-sm">WhatsApp</p>
                  </div>
                </div>

                <div
                  class="bg-blue-500/20 hover:bg-blue-500/30 rounded-lg p-3 cursor-pointer transition-colors group"
                >
                  <div class="flex items-center gap-2">
                    <div
                      class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                    >
                      <span class="text-white text-xs">T</span>
                    </div>
                    <p class="text-white text-sm">Telegram</p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div
                  class="bg-blue-600/20 hover:bg-blue-600/30 rounded-lg p-3 cursor-pointer transition-colors group"
                >
                  <div class="flex items-center gap-2">
                    <div
                      class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center"
                    >
                      <span class="text-white text-xs">F</span>
                    </div>
                    <p class="text-white text-sm">Facebook</p>
                  </div>
                </div>

                <div
                  class="bg-pink-500/20 hover:bg-pink-500/30 rounded-lg p-3 cursor-pointer transition-colors group"
                >
                  <div class="flex items-center gap-2">
                    <div
                      class="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center"
                    >
                      <span class="text-white text-xs">I</span>
                    </div>
                    <p class="text-white text-sm">Instagram</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
