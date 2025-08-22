<template>
  <div
    id="tutorial"
    class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-dark"
  >
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </div>

    <!-- Hero Section -->
    <TutorialHero />

    <!-- Tutorial Steps -->
    <TutorialSteps />

    <!-- Tips & Tricks Section -->
    <TutorialTips />

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
/* Grid pattern */
.bg-grid-pattern {
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.4) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.7) 1px, transparent 1px);
  background-size: 120px 120px;
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

/* Video modal backdrop blur */
.video-modal-backdrop {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
</style>
