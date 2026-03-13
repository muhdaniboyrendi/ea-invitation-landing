<!-- components/navbar/Index.vue -->
<script setup>
const colorMode = useColorMode();
const config = useRuntimeConfig();

const dashboardAppUrl = config.public.dashboardAppUrl;

const isMobileOpen = ref(false);
const isDark = computed(() => colorMode.value === "dark");

const navigation = [
  { name: "Beranda", href: "/#home" },
  { name: "Fitur", href: "/#features" },
  { name: "Harga", href: "/#packages" },
  { name: "Tema", href: "/#themes" },
  { name: "Tutorial", href: "/tutorial" },
];

const toggleTheme = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

const toggleMobile = () => {
  isMobileOpen.value = !isMobileOpen.value;
};

const closeMobile = () => {
  isMobileOpen.value = false;
};

const logoText = computed(() => {
  return colorMode.value === "dark"
    ? "/logo-text-dark.webp"
    : "/logo-text-light.webp";
});
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
  >
    <div
      class="backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-black/10 dark:border-white/10"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-20">
          <NuxtLink to="/" class="block" aria-label="EA Invitation">
            <NuxtImg
              :src="logoText"
              width="160"
              height="40"
              loading="eager"
              quality="80"
              alt="EA Invitation logo"
            />
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <nav>
              <ul class="ml-10 flex items-baseline space-x-6">
                <li
                  v-for="item in navigation"
                  :key="item.name"
                  class="cursor-pointer"
                >
                  <NuxtLink
                    :to="item.href"
                    class="relative px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-sky-500 transition-all duration-300 group"
                  >
                    {{ item.name }}
                    <span
                      class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-sky-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    ></span>
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>

          <!-- Right Side Actions -->
          <div class="flex items-center space-x-2">
            <!-- Theme Toggle with ClientOnly -->
            <ClientOnly>
              <button
                @click="toggleTheme"
                title="Theme preferences"
                aria-label="Theme preferences button"
                class="h-10 aspect-square cursor-pointer"
              >
                <i v-if="isDark" class="bi bi-sun-fill text-yellow-500"></i>
                <i
                  v-else
                  class="bi bi-moon-fill text-gray-600 hover:text-black"
                ></i>
              </button>
              <template #fallback>
                <!-- Placeholder untuk server-side rendering -->
                <div
                  class="h-10 aspect-square rounded-md bg-black/5 border border-white/10 flex items-center justify-center"
                ></div>
              </template>
            </ClientOnly>

            <!-- CTA Button -->
            <NuxtLink
              :to="dashboardAppUrl + '/login'"
              class="hidden lg:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-400 hover:to-blue-400 text-white text-sm font-semibold rounded-md transition duration-300 active:scale-95"
            >
              Login
            </NuxtLink>

            <!-- Mobile menu button -->
            <button
              @click="toggleMobile"
              type="button"
              class="md:hidden p-2 rounded-md transition-all duration-300"
            >
              <svg
                class="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  v-if="!isMobileOpen"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-full opacity-0"
    >
      <div
        v-show="isMobileOpen"
        class="md:hidden backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-black/10 dark:border-white/10 shadow-md"
      >
        <nav class="px-4 pt-4 pb-6">
          <ul class="space-y-3 text-center">
            <li
              v-for="item in navigation"
              :key="item.name"
              class="cursor-pointer"
            >
              <NuxtLink
                @click="closeMobile"
                :to="item.href"
                class="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-cyan-400 hover:bg-white/10 rounded-xl transition-all duration-300"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>

          <div class="pt-4 border-t border-white/20 dark:border-white/10">
            <a
              :href="dashboardAppUrl"
              class="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white text-base font-semibold rounded-md shadow-lg transition-all duration-300"
            >
              Login
            </a>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>
