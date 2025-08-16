<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-black">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </div>

    <!-- Hero Section Part 1 -->
    <section class="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 lg:px-12 xl:px-20 py-30">
      <!-- Left Content -->
      <div class="flex-1 text-center lg:text-left mb-12 lg:mb-0">
        <!-- Badge -->
        <div class="inline-flex items-center px-4 py-2 mb-8 backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 rounded-full shadow-lg">
          <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          <span class="text-sm font-medium text-white/90">Developer Beta Version</span>
        </div>

        <!-- Main Heading -->
        <h1 class="relative text-5xl lg:text-7xl font-bold mb-6 text-off-white dark:text-off-white/90">
          Website
          <span class="bg-linear-to-r/oklab from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">Undangan Pernikahan</span>
          Digital
          <div class="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/10 to-transparent blur-lg rounded-lg"></div>
        </h1>

        <!-- Description -->
        <p class="text-xl lg:text-2xl text-white/80 mb-8 max-w-2xl leading-relaxed">
          Wujudkan momen bahagia pernikahan Anda dengan undangan digital yang elegan dan interaktif
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button class="group relative px-8 py-4 backdrop-blur-md bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <span class="relative z-10">Buat Undangan</span>
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl group-hover:blur-2xl transition-all duration-300 rounded-xl"></div>
          </button>
          
          <button class="group px-8 py-4 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <span class="flex justify-center items-center">
              Lihat Demo
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1"></path>
              </svg>
            </span>
          </button>
        </div>

      </div>

      <!-- Right Content - 3D Card -->
      <div class="flex-1 flex justify-center lg:justify-end">
        <div class="relative group">
          <!-- Glow Effect -->
          <div class="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 blur-2xl rounded-3xl group-hover:blur-3xl transition-all duration-500"></div>
          
          <!-- Main Card -->
          <div class="relative w-80 h-96 lg:w-96 lg:h-[480px] backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700 overflow-hidden">
            <!-- Card Glow -->
            <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
            
            <!-- Card Content -->
            <div class="relative z-10 p-8 h-full flex flex-col justify-center">
              <div class="mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl mb-4 flex items-center justify-center shadow-lg">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">Lightning Fast</h3>
                <p class="text-white/70">Experience unmatched performance with our optimized infrastructure.</p>
              </div>
              
              <!-- Feature List -->
              <div class="space-y-3">
                <div class="flex items-center text-white/80">
                  <div class="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span>Real-time processing</span>
                </div>
                <div class="flex items-center text-white/80">
                  <div class="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span>Advanced analytics</span>
                </div>
                <div class="flex items-center text-white/80">
                  <div class="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  <span>Seamless integration</span>
                </div>
              </div>
            </div>
            
            <!-- Animated Lines -->
            <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hero Section Part 2 - Features Grid -->
    <section class="relative z-10 px-6 lg:px-12 xl:px-20 pb-20">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-200">
          Fitur Unggulan
        </h2>
        <p class="text-xl text-white/70 max-w-3xl mx-auto">
          Discover the tools that will transform your workflow and accelerate your success
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <!-- Feature 1 -->
        <div class="group relative">
          <div class="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-300"></div>
          <div class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div class="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl mb-6 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Instant</h3>
            <p class="text-white/70">Undangan langsung jadi tanpa menunggu dan langsung bagikan.</p>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="group relative">
          <div class="absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-pink-500/20 blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-300"></div>
          <div class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl mb-6 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Anti-mainstream Design</h3>
            <p class="text-white/70">Rasakan desain undangan yang unik dan berbeda dari yang lain.</p>
          </div>
        </div>

        <!-- Feature 3 -->
        <div class="group relative">
          <div class="absolute -inset-2 bg-gradient-to-r from-green-400/20 to-teal-500/20 blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-300"></div>
          <div class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl mb-6 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Limitless</h3>
            <p class="text-white/70">Ubah konten undangan dan pilih tema kapanpun anda mau.</p>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-16">
        <div class="inline-flex items-center px-8 py-4 backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl">
          <span class="text-white font-medium mr-4">Siap untuk memulai?</span>
          <button class="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300">
            Buat Undangan Sekarang
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Custom animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
}

@keyframes gradient-x {
  0%, 100% {
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

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 4s ease infinite;
}

/* Grid pattern */
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px);
  background-size: 60px 60px;
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

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #0891b2, #7c3aed);
}
</style>