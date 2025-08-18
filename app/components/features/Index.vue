<template>
  <section
    class="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900/50 to-slate-900 dark:from-black dark:via-purple-950/30 dark:to-black"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Animated Background Orbs -->
      <div
        class="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-400/5 to-teal-500/5 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"
      ></div>

      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <!-- Floating Particles -->
      <div
        class="absolute top-20 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60"
      ></div>
      <div
        class="absolute top-40 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-float animation-delay-1000 opacity-40"
      ></div>
      <div
        class="absolute bottom-32 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-float animation-delay-3000 opacity-30"
      ></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <!-- Badge -->
        <div
          class="inline-flex items-center px-4 py-2 mb-8 backdrop-blur-md bg-white/5 dark:bg-black/10 border border-white/10 rounded-full shadow-lg"
        >
          <span
            class="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 animate-pulse"
          ></span>
          <span class="text-sm font-medium text-white/80"
            >Our Features</span
          >
          <svg
            class="w-4 h-4 ml-2 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            ></path>
          </svg>
        </div>

        <!-- Main Title -->
        <h2
          class="text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-200 animate-gradient-x"
        >
          Everything You Need
          <br />
          <span class="text-3xl lg:text-5xl text-white/60"
            >In One Platform</span
          >
        </h2>

        <!-- Description -->
        <p
          class="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
        >
          Discover powerful tools designed to accelerate your workflow and
          unlock new possibilities
        </p>
      </div>

      <!-- Main Features Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        <!-- Feature Card 1 - Large -->
        <div class="lg:col-span-2 group relative">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-lg rounded-3xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
          ></div>
          <div
            class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-3xl p-8 lg:p-12 h-full transition-all duration-500 hover:scale-[1.02] hover:bg-white/10"
          >
            <!-- Feature Icon -->
            <div class="relative mb-8">
              <div
                class="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-xl rounded-2xl"
              ></div>
              <div
                class="relative w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl"
              >
                <svg
                  class="w-8 h-8 lg:w-10 lg:h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
            </div>

            <!-- Content -->
            <div>
              <h3 class="text-2xl lg:text-3xl font-bold text-white mb-4">
                Lightning Performance
              </h3>
              <p class="text-white/70 text-lg mb-6 leading-relaxed">
                Experience blazing-fast speeds with our optimized
                infrastructure. Built for scale, designed for performance.
              </p>

              <!-- Feature List -->
              <div class="space-y-3">
                <div class="flex items-center text-white/80">
                  <div
                    class="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"
                  ></div>
                  <span>Sub-50ms response times</span>
                </div>
                <div class="flex items-center text-white/80">
                  <div
                    class="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse animation-delay-500"
                  ></div>
                  <span>Auto-scaling infrastructure</span>
                </div>
                <div class="flex items-center text-white/80">
                  <div
                    class="w-2 h-2 bg-pink-400 rounded-full mr-3 animate-pulse animation-delay-1000"
                  ></div>
                  <span>99.99% uptime guarantee</span>
                </div>
              </div>

              <!-- CTA -->
              <div class="mt-8">
                <button
                  class="group/btn relative inline-flex items-center px-6 py-3 backdrop-blur-md bg-gradient-to-r from-cyan-500/80 to-purple-500/80 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <span class="relative z-10">Learn More</span>
                  <svg
                    class="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl group-hover/btn:blur-2xl transition-all duration-300 rounded-xl"
                  ></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature Card 2 - Small -->
        <div class="group relative">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-pink-500/20 blur-lg rounded-3xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
          ></div>
          <div
            class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-3xl p-8 h-full transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 flex flex-col"
          >
            <!-- Icon -->
            <div class="relative mb-6">
              <div
                class="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-500/20 blur-xl rounded-2xl"
              ></div>
              <div
                class="relative w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl"
              >
                <svg
                  class="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
            </div>

            <div class="flex-1">
              <h3 class="text-xl font-bold text-white mb-3">
                Enterprise Security
              </h3>
              <p class="text-white/70 leading-relaxed">
                Bank-grade security with end-to-end encryption and advanced
                threat protection.
              </p>
            </div>

            <!-- Stats -->
            <div class="mt-6 pt-6 border-t border-white/10">
              <div class="text-2xl font-bold text-purple-400 mb-1">256-bit</div>
              <div class="text-white/60 text-sm">AES Encryption</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Secondary Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <!-- Feature 3 -->
        <div class="group relative">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-teal-500/20 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
          ></div>
          <div
            class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:bg-white/10"
          >
            <div
              class="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl mb-4 flex items-center justify-center shadow-lg"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">
              Real-time Analytics
            </h3>
            <p class="text-white/70 text-sm">
              Get insights instantly with our powerful analytics dashboard.
            </p>
          </div>
        </div>

        <!-- Feature 4 -->
        <div class="group relative">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
          ></div>
          <div
            class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:bg-white/10"
          >
            <div
              class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl mb-4 flex items-center justify-center shadow-lg"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">
              Smart Automation
            </h3>
            <p class="text-white/70 text-sm">
              Automate workflows with AI-powered intelligent processes.
            </p>
          </div>
        </div>

        <!-- Feature 5 -->
        <div class="group relative">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-indigo-400/20 to-blue-500/20 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
          ></div>
          <div
            class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:bg-white/10"
          >
            <div
              class="w-12 h-12 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-xl mb-4 flex items-center justify-center shadow-lg"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">
              Easy Integration
            </h3>
            <p class="text-white/70 text-sm">
              Connect with your favorite tools and platforms seamlessly.
            </p>
          </div>
        </div>

        <!-- Feature 6 -->
        <div class="group relative">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-rose-400/20 to-red-500/20 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
          ></div>
          <div
            class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:bg-white/10"
          >
            <div
              class="w-12 h-12 bg-gradient-to-br from-rose-400 to-red-500 rounded-xl mb-4 flex items-center justify-center shadow-lg"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">
              Team Collaboration
            </h3>
            <p class="text-white/70 text-sm">
              Work together efficiently with advanced collaboration tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom animations */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

@keyframes gradient-x {
  0%,
  100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 4s ease infinite;
}

/* Animation delays */
.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Grid pattern */
.bg-grid-pattern {
  background-image: linear-gradient(
      rgba(255, 255, 255, 1) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px);
  background-size: 80px 80px;
}

/* Glassmorphism enhancements */
.backdrop-blur-xl {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.backdrop-blur-md {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Smooth transitions for all elements */
* {
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
}

/* Enhanced hover effects */
.group:hover .group-hover\:blur-xl {
  filter: blur(20px);
}

.group:hover .group-hover\:blur-2xl {
  filter: blur(40px);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #0891b2, #7c3aed);
}
</style>
