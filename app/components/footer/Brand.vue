<template>
  <div class="lg:col-span-2">
    <div class="mb-8">
      <!-- Logo/Brand -->
      <div class="flex items-center mb-6">
        <div
          class="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mr-4"
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
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div>
          <h3 class="text-2xl font-bold text-white">EA Invitation</h3>
          <p class="text-purple-300 text-sm">Digital Wedding Invitation</p>
        </div>
      </div>

      <!-- Description -->
      <p class="text-white/70 text-lg leading-relaxed mb-6 max-w-md">
        Wujudkan momen bahagia pernikahan Anda dengan undangan digital yang
        elegan, interaktif, dan mudah dibagikan kepada keluarga dan teman.
      </p>

      <!-- CTA Button -->
      <button
        class="group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        <span class="relative z-10 flex items-center">
          Buat Undangan
          <i class="bi bi-arrow-right ml-2"></i>
        </span>
        <div
          class="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl group-hover:blur-2xl transition-all duration-300 rounded-xl"
        ></div>
      </button>
    </div>
  </div>
</template>
