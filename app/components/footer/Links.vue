<template>
  <div>
    <h4 class="text-lg font-semibold text-white mb-6 relative">
      Navigasi
      <div
        class="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
      ></div>
    </h4>
    <ul class="space-y-4">
      <li>
        <NuxtLink
          to="/#home"
          class="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
        >
          <div
            class="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"
          ></div>
          Beranda
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/#features"
          class="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
        >
          <div
            class="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"
          ></div>
          Fitur
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/#packages"
          class="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
        >
          <div
            class="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"
          ></div>
          Harga
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/#themes"
          class="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
        >
          <div
            class="w-1.5 h-1.5 bg-teal-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"
          ></div>
          Tema Undangan
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/tutorial"
          class="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
        >
          <div
            class="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"
          ></div>
          Tutorial
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
