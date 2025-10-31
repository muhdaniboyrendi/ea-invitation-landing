<script setup>
const { checkInvitation } = useInvitationStore();
const route = useRoute();
const config = useRuntimeConfig(); // <-- 1. Ambil runtime config

const slug = route.params.slug;
const guest = route.query.guest;

const progress = ref(0);
const errorState = ref(null); // <-- Untuk menangani error
const targetUrl = ref(null); // <-- Untuk menyimpan URL tujuan

/**
 * Memuat data undangan dan menentukan URL tema.
 */
const loadInvitation = async () => {
  try {
    const response = await checkInvitation(slug);

    if (!response || !response.theme_id) {
      throw new Error(
        "Data undangan tidak valid atau tidak memiliki 'theme_id'."
      );
    }

    // 2. Dapatkan theme_id dari respons API Anda
    const themeId = response.theme_id;

    // 3. Cari URL dasar tema dari themeMap di config
    const themeMap = config.public.themeMap;
    const baseUrl = themeMap[themeId];

    if (!baseUrl) {
      throw new Error(`Konfigurasi untuk tema ID: ${themeId} tidak ditemukan.`);
    }

    // 4. Bangun URL lengkap (termasuk slug dan guest)
    let finalUrl = `${baseUrl}/${slug}`;
    if (guest) {
      // Gunakan encodeURIComponent untuk keamanan jika nama tamu mengandung spasi/simbol
      finalUrl += `?guest=${encodeURIComponent(guest)}`;
    }

    // 5. Simpan URL target. Ini akan memicu progress bar selesai.
    targetUrl.value = finalUrl;

    console.log(`Mengalihkan ke: ${finalUrl}`);
  } catch (error) {
    console.error("Gagal memuat undangan:", error);
    errorState.value =
      error.message || "Gagal memuat undangan. Silakan coba lagi.";
  }
};

/**
 * Awasi (watch) perubahan pada progress bar.
 * Saat mencapai 100, lakukan pengalihan jika URL target valid.
 */
watch(progress, (newProgress) => {
  if (newProgress >= 100) {
    // Jika tidak ada error dan URL target sudah siap
    if (targetUrl.value && !errorState.value) {
      // 6. Lakukan pengalihan EKSTERNAL
      navigateTo(targetUrl.value, {
        external: true,
      });
    }
    // Jika ada error, progress bar berhenti di 100 tapi tidak ada pengalihan.
    // Kita bisa menampilkan pesan errorState di template.
  }
});

onMounted(() => {
  // Mulai animasi progress bar
  const interval = setInterval(() => {
    if (progress.value < 100) {
      // Jika data sudah selesai dimuat (targetUrl siap) ATAU terjadi error,
      // langsung set progress ke 100 untuk memicu watcher.
      if (targetUrl.value || errorState.value) {
        progress.value = 100;
        clearInterval(interval);
      } else {
        // Jika belum, lanjutkan progress palsu TAPI berhenti di 90%
        // agar terlihat sedang "menyelesaikan"
        let newProgress = progress.value + Math.random() * 15;
        progress.value = Math.min(newProgress, 90); // Berhenti di 90
      }
    } else {
      clearInterval(interval);
    }
  }, 200);

  // Mulai proses pemuatan data undangan
  loadInvitation();
});
</script>

<template>
  <div
    class="relative min-h-screen bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900 flex items-center justify-center overflow-hidden"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-grid-pattern"></div>

      <!-- Animated Gradient Orbs -->
      <div
        class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-delayed"
      ></div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 flex flex-col items-center justify-center px-6">
      <!-- Loading Text -->
      <div class="text-center space-y-6 animate-fade-in-up animation-delay-200">
        <!-- Status Badge -->
        <div
          class="inline-flex items-center px-4 py-2 mb-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-full shadow-lg"
        >
          <span
            class="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 animate-pulse"
          ></span>
          <span class="text-sm font-medium text-white/80">Loading</span>
        </div>

        <!-- Main Text -->
        <h1
          class="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-200 mb-4"
        >
          {{ errorState ? "Terjadi Kesalahan" : "Memuat Undangan" }}
        </h1>

        <!-- Subtitle -->
        <p class="text-xl lg:text-2xl text-white/70 mb-8">
          {{
            errorState
              ? "Undangan tidak dapat dimuat."
              : "Mohon tunggu sebentar..."
          }}
        </p>

        <div
          v-if="errorState"
          class="my-4 text-red-400 text-lg p-4 bg-red-900/20 border border-red-500/30 rounded-lg"
        >
          {{ errorState }}
        </div>

        <div
          v-if="!errorState"
          class="flex items-center justify-center space-x-2"
        ></div>

        <div
          v-if="!errorState"
          class="mt-12 w-64 animate-fade-in-up animation-delay-600"
        ></div>

        <!-- Loading Dots -->
        <div class="flex items-center justify-center space-x-2">
          <div
            class="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full loader-dot"
          ></div>
          <div
            class="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full loader-dot loader-dot-2"
          ></div>
          <div
            class="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full loader-dot loader-dot-3"
          ></div>
        </div>
      </div>

      <!-- Brand -->
      <div class="mt-16 animate-fade-in-up animation-delay-400">
        <div class="relative group">
          <div
            class="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-500 opacity-50"
          ></div>
          <div
            class="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-8 py-4 shadow-xl"
          >
            <div class="flex items-center space-x-3">
              <div
                class="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <i class="bi bi-heart-fill text-white text-lg"></i>
              </div>
              <div>
                <p
                  class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-purple-200"
                >
                  EA Invitation
                </p>
                <p class="text-xs text-white/50">
                  Your Digital Wedding Partner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Progress Bar -->
      <div class="mt-12 w-64 animate-fade-in-up animation-delay-600">
        <div
          class="h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm"
        >
          <div
            ref="progressBar"
            class="h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transition-all duration-300"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
      </div>
    </div>

    <!-- Bottom Decoration -->
    <div
      class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/80 to-transparent"
    ></div>
  </div>
</template>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes loader-pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 3s ease-in-out infinite;
  animation-delay: 1s;
}

.animate-pulse-ring {
  animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-pulse-ring-delayed {
  animation-delay: 0.5s;
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.bg-grid-pattern {
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.02) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 80px 80px;
}

.loader-dot {
  animation: loader-pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.loader-dot-2 {
  animation-delay: 0.2s;
}

.loader-dot-3 {
  animation-delay: 0.4s;
}
</style>
