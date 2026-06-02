<script setup>
const colorMode = useColorMode();
</script>

<template>
  <div class="border-t border-black/20 dark:border-white/20">
    <div
      class="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-20 flex justify-between items-center"
    >
      <ClientOnly>
        <div
          class="flex items-center bg-black/5 dark:bg-white/10 rounded-full p-1 gap-0.5"
        >
          <button
            @click="colorMode.preference = 'system'"
            :class="[
              'w-7 h-7 rounded-full flex items-center justify-center transition duration-300 cursor-pointer',
              colorMode.preference === 'system'
                ? 'bg-black/20 dark:bg-white/20 shadow-sm'
                : 'hover:bg-black/10 dark:hover:bg-white/10',
            ]"
            title="System Mode"
          >
            <i class="bi bi-display text-black dark:text-white text-sm"></i>
          </button>

          <button
            @click="colorMode.preference = 'light'"
            :class="[
              'w-7 h-7 rounded-full flex items-center justify-center transition duration-300 cursor-pointer',
              colorMode.preference === 'light'
                ? 'bg-white dark:bg-black/40 shadow-sm'
                : 'hover:bg-black/10 dark:hover:bg-white/10',
            ]"
            title="Light Mode"
          >
            <i class="bi bi-sun text-black dark:text-white text-sm"></i>
          </button>

          <button
            @click="colorMode.preference = 'dark'"
            :class="[
              'w-7 h-7 rounded-full flex items-center justify-center transition duration-300 cursor-pointer',
              colorMode.preference === 'dark'
                ? 'bg-black/30 bg-white/20 shadow-sm'
                : 'hover:bg-black/10 dark:hover:bg-white/10',
            ]"
            title="Dark Mode"
          >
            <i class="bi bi-moon text-black dark:text-white text-sm"></i>
          </button>
        </div>
      </ClientOnly>

      <p class="text-black/60 dark:text-white/60 text-sm text-center">
        © 2026 EA Invitation. All rights reserved.
      </p>
    </div>
  </div>
</template>
