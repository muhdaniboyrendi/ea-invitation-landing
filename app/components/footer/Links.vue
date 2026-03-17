<template>
  <div>
    <h4 class="text-lg font-semibold text-black dark:text-white mb-6 relative">
      Navigasi
      <div
        class="absolute bottom-0 left-0 w-8 h-0.5 bg-primary rounded-full"
      ></div>
    </h4>
    <ul class="space-y-4">
      <li>
        <NuxtLink
          to="/#home"
          class="text-black/60 dark:text-white/60 hover:text-primary duration-300 flex items-center group"
        >
          Beranda
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/#features"
          class="text-black/60 dark:text-white/60 hover:text-primary duration-300 flex items-center group"
        >
          Fitur
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/#packages"
          class="text-black/60 dark:text-white/60 hover:text-primary duration-300 flex items-center group"
        >
          Harga
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/#themes"
          class="text-black/60 dark:text-white/60 hover:text-primary duration-300 flex items-center group"
        >
          Tema Undangan
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/tutorial"
          class="text-black/60 dark:text-white/60 hover:text-primary duration-300 flex items-center group"
        >
          Tutorial
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
