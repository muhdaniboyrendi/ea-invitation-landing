<template>
  <section
    id="packages"
    class="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-900/90 to-slate-900 dark:from-black dark:via-indigo-950/20 dark:to-dark"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-7"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <!-- Badge -->
        <div
          class="inline-flex items-center px-4 py-2 mb-8 backdrop-blur-md bg-white/5 dark:bg-black/10 border border-white/10 rounded-full shadow-lg"
        >
          <span
            class="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 animate-pulse"
          ></span>
          <span class="text-sm font-medium text-white/80"
            >Choose Your Plan</span
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
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
            ></path>
          </svg>
        </div>

        <!-- Main Title -->
        <h2
          class="text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200"
        >
          Simple Pricing
          <br />
          <span class="text-3xl lg:text-5xl text-white/60">For Everyone</span>
        </h2>

        <!-- Description -->
        <p
          class="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8"
        >
          Choose the perfect plan for your needs. Upgrade or downgrade at any
          time.
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <!-- Starter Package -->
        <div class="group relative">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 blur-lg rounded-3xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
          ></div>
          <div
            class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-3xl p-8 h-fit transition-all duration-500 hover:scale-105 hover:bg-white/10 dark:hover:bg-black/5"
          >
            <!-- Package Header -->
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-white mb-2">Economy</h3>
              <p class="text-white/60 mb-6">
                Perfect for individuals getting started
              </p>

              <!-- Price -->
              <div class="relative">
                <div
                  class="absolute -top-4 right-0 bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-bold px-2 py-1 rounded-full"
                >
                  20% OFF
                </div>
                <div class="flex items-baseline justify-center mb-2">
                  <span
                    class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
                  >
                    <span class="text-base">Rp</span>
                    100.000
                  </span>
                </div>
                <div class="text-sm text-white/50">
                  <span class="line-through">Rp 120.000</span>
                </div>
              </div>
            </div>

            <!-- Features List -->
            <div class="space-y-4 mb-8">
              <div class="flex items-start gap-x-3">
                <i class="bi bi-check2 text-blue-400 text-xl"></i>
                <span class="text-white/80">Up to 5 projects</span>
              </div>
            </div>

            <!-- CTA Button -->
            <button
              class="w-full group/btn relative inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 hover:from-blue-400 hover:to-cyan-400 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <span class="relative z-10">Pilih Paket</span>
              <i class="bi bi-arrow-right ml-2"></i>
              <div
                class="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-xl group-hover/btn:blur-2xl transition-all duration-300 rounded-xl"
              ></div>
            </button>

            <!-- Trial Info -->
            <p class="text-center text-white/50 text-sm mt-4">
              14-day free trial
            </p>
          </div>
        </div>

        <!-- Professional Package (Best Seller) -->
        <div class="group relative">
          <!-- Best Seller Badge -->
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
            <div
              class="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg"
            >
              🏆 BEST SELLER
            </div>
          </div>

          <!-- Enhanced Glow for Best Seller -->
          <div
            class="absolute -inset-2 bg-gradient-to-r from-purple-400/25 via-pink-400/25 to-purple-400/25 blur-xl rounded-3xl group-hover:blur-2xl transition-all duration-500"
          ></div>
          <div
            class="relative backdrop-blur-xl bg-white/10 dark:bg-black/20 border-2 border-purple-400/30 hover:border-purple-400/50 rounded-3xl p-8 h-fit transition-all duration-500 hover:scale-105 hover:bg-white/15 dark:hover:bg-black/15"
          >
            <!-- Package Header -->
            <div class="text-center mb-8 pt-4">
              <h3
                class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2"
              >
                Premium
              </h3>
              <p class="text-white/60 mb-6">Best for growing businesses</p>

              <!-- Price -->
              <div class="relative">
                <div
                  class="absolute -top-4 right-0 bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-bold px-2 py-1 rounded-full"
                >
                  20% OFF
                </div>
                <div class="flex items-baseline justify-center mb-2">
                  <span
                    class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                  >
                    <span class="text-base">Rp</span>
                    150.000
                  </span>
                </div>
                <div class="text-sm text-white/50">
                  <span class="line-through">Rp 175.000</span>
                </div>
              </div>
            </div>

            <!-- Features List -->
            <div class="space-y-4 mb-8">
              <div class="flex items-start gap-x-3">
                <i class="bi bi-check2 text-purple-400 text-xl"></i>
                <span class="text-white/80">Unlimited projects</span>
              </div>
            </div>

            <!-- CTA Button -->
            <button
              class="w-full group/btn relative inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <span class="relative z-10">Pilih Paket</span>
              <i class="bi bi-arrow-right ml-2"></i>
              <div
                class="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-xl group-hover/btn:blur-2xl transition-all duration-300 rounded-xl"
              ></div>
            </button>

            <!-- Trial Info -->
            <p class="text-center text-white/50 text-sm mt-4">
              14-day free trial
            </p>
          </div>
        </div>

        <!-- Enterprise Package -->
        <div class="group relative">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 blur-lg rounded-3xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
          ></div>
          <div
            class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-3xl p-8 h-fit transition-all duration-500 hover:scale-105 hover:bg-white/10 dark:hover:bg-black/5"
          >
            <!-- Package Header -->
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-white mb-2">Business</h3>
              <p class="text-white/60 mb-6">For large organizations</p>

              <!-- Price -->
              <div class="relative">
                <div
                  class="absolute -top-4 right-0 bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-bold px-2 py-1 rounded-full"
                >
                  20% OFF
                </div>
                <div class="flex items-baseline justify-center mb-2">
                  <span
                    class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400"
                  >
                    <span class="text-base">Rp</span>
                    200.000
                  </span>
                </div>
                <div class="text-sm text-white/50">
                  <span class="line-through">Rp 250.000</span>
                </div>
              </div>
            </div>

            <!-- Features List -->
            <div class="space-y-4 mb-8">
              <div class="flex items-start gap-x-3">
                <i class="bi bi-check2 text-emerald-400 text-xl"></i>
                <span class="text-white/80">Unlimited everything</span>
              </div>
            </div>

            <!-- CTA Button -->
            <button
              class="w-full group/btn relative inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-emerald-500/80 to-teal-500/80 hover:from-emerald-400 hover:to-teal-400 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <span class="relative z-10">Pilih Paket</span>
              <i class="bi bi-arrow-right ml-2"></i>
              <div
                class="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 blur-xl group-hover/btn:blur-2xl transition-all duration-300 rounded-xl"
              ></div>
            </button>

            <!-- Trial Info -->
            <p class="text-center text-white/50 text-sm mt-4">
              Custom onboarding
            </p>
          </div>
        </div>
      </div>

      <!-- Additional Info Section -->
      <div class="text-center mb-12">
        <div
          class="backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto"
        >
          <h3 class="text-2xl lg:text-3xl font-bold text-white mb-6">
            All Plans Include
          </h3>

          <!-- Features Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="flex items-center text-white/80">
              <div
                class="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0"
              >
                <svg
                  class="w-5 h-5 text-white"
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
              <span>SSL Encryption</span>
            </div>

            <div class="flex items-center text-white/80">
              <div
                class="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  ></path>
                </svg>
              </div>
              <span>Daily Backups</span>
            </div>

            <div class="flex items-center text-white/80">
              <div
                class="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0"
              >
                <svg
                  class="w-5 h-5 text-white"
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
              <span>99.9% Uptime</span>
            </div>

            <div class="flex items-center text-white/80">
              <div
                class="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
              <span>24/7 Monitoring</span>
            </div>

            <div class="flex items-center text-white/80">
              <div
                class="w-8 h-8 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0"
              >
                <svg
                  class="w-5 h-5 text-white"
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
              <span>REST API</span>
            </div>

            <div class="flex items-center text-white/80">
              <div
                class="w-8 h-8 bg-gradient-to-br from-rose-400 to-red-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <span>No Setup Fees</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Grid pattern */
.bg-grid-pattern {
  background-image: linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px);
  background-size: 120px 120px;
}
</style>
