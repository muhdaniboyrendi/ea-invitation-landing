<script setup>
// Features data
const features = [
  "Premium Materials & Craftsmanship",
  "Cutting-edge Technology Integration",
  "Sustainable & Eco-friendly Design",
  "Lifetime Quality Guarantee",
];

// Add any reactive data or methods here
</script>

<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900"
  >
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Floating Orbs -->
      <div
        class="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-float-slow"
      ></div>
      <div
        class="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-float-reverse"
      ></div>
      <div
        class="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-400/25 to-indigo-400/25 rounded-full blur-3xl animate-float"
      ></div>

      <!-- Grid Pattern -->
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]"
      ></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Content -->
        <div class="text-center lg:text-left space-y-6">
          <!-- Badge -->
          <div
            class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 text-sm font-medium text-purple-600 dark:text-purple-400 shadow-lg"
          >
            <div
              class="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"
            ></div>
            <span>New Launch 2025</span>
          </div>

          <!-- Main Heading -->
          <div class="space-y-4">
            <h1
              class="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span
                class="block bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent animate-gradient"
              >
                Website
              </span>
              <span
                class="block bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-reverse"
              >
                Undangan Pernikahan
              </span>
              <span
                class="block bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent animate-gradient"
              >
                Digital
              </span>
            </h1>
            <p
              class="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              Wujudkan momen bahagia pernikahan Anda dengan undangan digital yang elegan, interaktif, dan penuh cinta. Bagikan kebahagiaan dengan cara yang tak terlupakan.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 lg:gap-6">
            <button
              class="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span
                class="relative z-10 flex items-center justify-center space-x-2"
              >
                <span>Buat Undangan Sekarang</span>
                <svg
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              ></div>
            </button>

            <button
              class="group px-8 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200 font-semibold rounded-2xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span class="flex items-center justify-center space-x-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Lihat Demo</span>
              </span>
            </button>
          </div>

          <!-- Stats -->
          <div
            class="grid grid-cols-3 gap-8 pt-8 border-t border-white/20 dark:border-white/10"
          >
            <div class="text-center lg:text-left">
              <div
                class="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                50K+
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Happy Customers
              </div>
            </div>
            <div class="text-center lg:text-left">
              <div
                class="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                98%
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Satisfaction Rate
              </div>
            </div>
            <div class="text-center lg:text-left">
              <div
                class="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                25+
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Awards Won
              </div>
            </div>
          </div>
        </div>

        <!-- Right Content - Hero Visual -->
        <div class="relative">
          <div class="relative group">
            <!-- Main Glass Card -->
            <div
              class="relative p-8 lg:p-12 rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-105"
            >
              <!-- Inner Content -->
              <div class="space-y-6">
                <!-- Top Section -->
                <div class="flex items-center justify-between">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <svg
                      class="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                  <div class="text-right">
                    <div
                      class="text-2xl font-bold text-gray-800 dark:text-white"
                    >
                      Premium
                    </div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">
                      Experience
                    </div>
                  </div>
                </div>

                <!-- Progress Bars -->
                <div class="space-y-4">
                  <div>
                    <div class="flex justify-between text-sm mb-2">
                      <span class="text-gray-600 dark:text-gray-400"
                        >Design Quality</span
                      >
                      <span
                        class="text-purple-600 dark:text-purple-400 font-medium"
                        >98%</span
                      >
                    </div>
                    <div
                      class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                    >
                      <div
                        class="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-progress-98"
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between text-sm mb-2">
                      <span class="text-gray-600 dark:text-gray-400"
                        >User Experience</span
                      >
                      <span
                        class="text-purple-600 dark:text-purple-400 font-medium"
                        >95%</span
                      >
                    </div>
                    <div
                      class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                    >
                      <div
                        class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-progress-95"
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between text-sm mb-2">
                      <span class="text-gray-600 dark:text-gray-400"
                        >Innovation</span
                      >
                      <span
                        class="text-purple-600 dark:text-purple-400 font-medium"
                        >100%</span
                      >
                    </div>
                    <div
                      class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                    >
                      <div
                        class="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-progress-100"
                      ></div>
                    </div>
                  </div>
                </div>

                <!-- Features List -->
                <div class="space-y-3 pt-4">
                  <div
                    v-for="feature in features"
                    :key="feature"
                    class="flex items-center space-x-3 text-sm"
                  >
                    <div
                      class="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    ></div>
                    <span class="text-gray-700 dark:text-gray-300">{{
                      feature
                    }}</span>
                  </div>
                </div>
              </div>

              <!-- Floating Elements -->
              <div
                class="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-80"
              ></div>
              <div
                class="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full animate-pulse opacity-60"
              ></div>
            </div>

            <!-- Decorative Elements -->
            <div
              class="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
            ></div>
            <div
              class="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div class="flex flex-col items-center space-y-2 animate-bounce">
        <span
          class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider"
          >Scroll Down</span
        >
        <svg
          class="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom Animations */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }
  33% {
    transform: translateY(-30px) translateX(20px);
  }
  66% {
    transform: translateY(10px) translateX(-15px);
  }
}

@keyframes float-reverse {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(25px) translateX(-30px);
  }
}

@keyframes gradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes gradient-reverse {
  0%,
  100% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 0% 50%;
  }
}

@keyframes progress-98 {
  from {
    width: 0%;
  }
  to {
    width: 98%;
  }
}

@keyframes progress-95 {
  from {
    width: 0%;
  }
  to {
    width: 95%;
  }
}

@keyframes progress-100 {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 7s ease-in-out infinite reverse;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 4s ease infinite;
}

.animate-gradient-reverse {
  background-size: 200% 200%;
  animation: gradient-reverse 4s ease infinite;
}

.animate-progress-98 {
  animation: progress-98 2s ease-out 0.5s forwards;
  width: 0%;
}

.animate-progress-95 {
  animation: progress-95 2s ease-out 0.8s forwards;
  width: 0%;
}

.animate-progress-100 {
  animation: progress-100 2s ease-out 1.1s forwards;
  width: 0%;
}

/* Enhanced Glassmorphism */
.backdrop-blur-xl {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Smooth gradient backgrounds */
.bg-gradient-to-br {
  background-size: 400% 400%;
}

/* Custom scrollbar for better UX */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #9333ea, #ec4899);
  border-radius: 3px;
}

/* Responsive text scaling */
@media (max-width: 640px) {
  .text-4xl {
    font-size: 2.5rem;
  }

  .text-6xl {
    font-size: 3.5rem;
  }
}
</style>
