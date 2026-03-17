<script setup>
const props = defineProps(["theme"]);

const config = useRuntimeConfig();
const themeUrl = config.public.themeUrl;
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visible-once="{ opacity: 1, y: 0 }"
    :duration="1000"
    class="group relative w-full max-w-xs"
  >
    <!-- Theme Card -->
    <div
      class="relative bg-white dark:bg-white/3 rounded-2xl border border-dark/20 dark:border-light/20 shadow-xl overflow-hidden hover:-translate-y-1 transition duration-500"
    >
      <!-- Theme Preview Image -->
      <div class="relative h-fit overflow-hidden">
        <div class="p-4 pb-2">
          <NuxtImg
            v-if="props.theme?.thumbnail"
            :src="props.theme?.thumbnail || '/img/hero.jpg'"
            :alt="props.theme?.name || 'Theme Image'"
            width="400"
            height="300"
            loading="lazy"
            format="webp"
            quality="80"
            placeholder
            class="w-full aspect-4/3 object-cover object-center rounded-lg border border-black/20 dark:border-white/20"
          />
          <div
            v-else
            class="w-full aspect-4/3 rounded-lg border border-white/10 flex flex-col justify-center items-center bg-zinc-400 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-600"
          >
            <i class="bi bi-image text-6xl"></i>
            <span class="text-sm font-medium">No Image</span>
          </div>
        </div>

        <!-- Theme Type Badge -->
        <div v-if="props.theme?.is_premium" class="absolute top-6 right-6 z-10">
          <span
            class="px-3 py-1 rounded-full text-xs text-light font-semibold bg-primary"
          >
            Premium
          </span>
        </div>
      </div>

      <!-- Theme Info -->
      <div class="p-4 pt-0">
        <div class="flex items-start justify-between mb-2">
          <div>
            <h3 class="text-lg font-semibold text-black dark:text-white">
              {{ props.theme?.name || "Untitled Theme" }}
            </h3>
          </div>
          <span
            class="py-0.5 px-2 rounded-md bg-dark/10 dark:bg-light/10 text-sm text-dark dark:text-light/80"
          >
            {{ props.theme?.theme_category?.name || "Uncategorized" }}
          </span>
        </div>

        <a
          :href="`${themeUrl}/${props.theme?.slug}` || '#'"
          target="_blank"
          :rel="props.theme?.name || 'null'"
          class="group/btn relative w-full inline-flex justify-center items-center px-4 py-2 bg-primary text-light font-semibold rounded-lg hover:scale-102 transition duration-300"
        >
          Lihat Tema
          <i class="bi bi-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  </div>
</template>
