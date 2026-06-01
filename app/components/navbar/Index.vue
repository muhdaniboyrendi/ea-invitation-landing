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
  { name: "Tema", href: "/#themes" },
  { name: "Harga", href: "/#packages" },
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
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
  >
    <div
      class="backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-black/20 dark:border-white/20"
    >
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <div class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="block w-40 h-10" aria-label="EA Invitation">
            <NuxtImg
              src="/logo-text-light.webp"
              width="160"
              height="40"
              loading="eager"
              quality="80"
              alt="EA Invitation logo"
              class="block dark:hidden"
            />
            <NuxtImg
              src="/logo-text-dark.webp"
              width="160"
              height="40"
              loading="eager"
              quality="80"
              alt="EA Invitation logo"
              class="hidden dark:block"
            />
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="flex items-center gap-6">
            <nav class="hidden md:block">
              <ul class="flex items-baseline space-x-6">
                <li
                  v-for="item in navigation"
                  :key="item.name"
                  class="cursor-pointer"
                >
                  <NuxtLink
                    :to="item.href"
                    class="relative text-sm font-semibold text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-all duration-300 group"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>

            <!-- CTA Button -->
            <a
              :href="dashboardAppUrl + '/login'"
              rel="external"
              class="hidden md:block px-5 py-1.5 bg-primary hover:bg-primary/80 text-light text-sm font-semibold rounded-full transition duration-300 active:scale-95"
            >
              Login
            </a>

            <!-- Mobile menu button -->
            <button
              @click="toggleMobile"
              type="button"
              aria-label="Open menu"
              title="Open menu"
              class="md:hidden p-2 rounded-md transition-all duration-300 cursor-pointer group"
            >
              <svg
                class="w-6 h-6 text-black/60 dark:text-white/60 group-hover:text-dark dark:group-hover:text-light"
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
        class="md:hidden backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-dark/10 dark:border-light/10 shadow-xl"
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
                class="block px-4 py-3 text-base font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-dark/5 dark:hover:bg-light/5 transition-all duration-300"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>

          <div class="pt-4 border-t border-light/20 dark:border-light/10">
            <a
              :href="dashboardAppUrl + '/login'"
              rel="external"
              class="w-full flex items-center justify-center px-4 py-3 bg-primary hover:bg-primary/80 active:scale-95 text-light text-base font-semibold rounded-full transition-all duration-300"
            >
              Login
            </a>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>
