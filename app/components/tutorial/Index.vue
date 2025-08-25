<script setup>
// Reactive data
const showVideoModal = ref(false);
const videoLength = ref("12:45");
const currentTime = ref(0);
const currentProgress = ref(0);

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

<template>
  <div
    id="tutorial"
    class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-dark"
  >
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </div>

    <!-- Hero Section -->
    <TutorialHero @scroll-to-video="scrollToVideo" />

    <!-- Tutorial Steps -->
    <TutorialSteps />

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
        <TutorialVideo @play="playVideo" />

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
                to="/login"
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
</style>
