<template>
  <section
    class="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-purple-950/90 to-slate-900 dark:from-dark dark:via-purple-950/30 dark:to-dark"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
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
          <span class="text-sm font-medium text-white/80">Our Features</span>
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
          class="text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-200"
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

      <!-- Secondary Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <!-- Feature 3 -->
        <div class="group relative">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-teal-500/20 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
          ></div>
          <div
            class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:bg-white/10 dark:hover:bg-black/15"
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
            class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:bg-white/10 dark:hover:bg-black/15"
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
            class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:bg-white/10 dark:hover:bg-black/15"
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
            class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:bg-white/10 dark:hover:bg-black/15"
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
/* Grid pattern */
.bg-grid-pattern {
  background-image: linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px);
  background-size: 80px 80px;
}
</style>
