<template>
  <div>
    <h4 class="text-lg font-semibold text-black dark:text-white mb-6 relative">
      Dukungan
      <div
        class="absolute bottom-0 left-0 w-8 h-0.5 bg-primary rounded-full"
      ></div>
    </h4>
    <ul class="space-y-4">
      <li>
        <NuxtLink
          to="/terms-and-conditions"
          class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
        >
          Syarat & Ketentuan
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/privacy-policy"
          class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
        >
          Kebijakan Privasi
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
