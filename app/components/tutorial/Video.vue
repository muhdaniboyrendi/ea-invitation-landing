<script setup>
const emit = defineEmits("play");

const videoLength = ref("12:45");

const playVideo = () => {
  emit("play");
};
</script>

<template>
  <div class="relative max-w-6xl mx-auto">
    <!-- Glow Effect -->
    <div
      class="absolute -inset-8 bg-gradient-to-r from-red-400/30 via-pink-400/30 dark:via-purple-400/30 to-red-400/30 blur-3xl rounded-3xl"
    ></div>

    <!-- Video Container -->
    <div
      class="relative bg-dark/80 dark:bg-black/80 border border-black/20 rounded-3xl p-4 lg:p-8 shadow-2xl"
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
              <div class="h-8 bg-slate-800 flex items-center px-4 space-x-2">
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
              Tutorial komprehensif yang menunjukkan semua langkah dari awal
              hingga undangan siap dibagikan. Termasuk tips khusus untuk hasil
              optimal.
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
