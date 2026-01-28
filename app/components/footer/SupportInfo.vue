<template>
  <div>
    <h4 class="text-lg font-semibold text-white mb-6 relative">
      Dukungan
      <div
        class="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
      ></div>
    </h4>
    <ul class="space-y-4">
      <li>
        <NuxtLink
          to="/terms-and-conditions"
          class="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
        >
          <div
            class="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"
          ></div>
          Syarat & Ketentuan
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/privacy-policy"
          class="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
        >
          <div
            class="w-1.5 h-1.5 bg-rose-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"
          ></div>
          Kebijakan Privasi
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
