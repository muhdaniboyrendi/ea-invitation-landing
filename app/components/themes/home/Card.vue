<script setup>
const props = defineProps(["theme"]);

const config = useRuntimeConfig();
const themeUrl = config.public.themeUrl;
</script>

<template>
  <div class="group relative w-full max-w-xs">
    <!-- Theme Card -->
    <div
      class="relative bg-violet-950 dark:bg-dark border border-white/10 hover:border-white/20 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105"
    >
      <!-- Theme Preview Image -->
      <div class="relative h-fit overflow-hidden">
        <div class="p-4">
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
            class="w-full aspect-4/3 object-cover object-center rounded-xl border border-white/10"
          />
          <div
            v-else
            class="w-full aspect-4/3 rounded-xl border border-white/10 flex flex-col justify-center items-center bg-zinc-400 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-600"
          >
            <i class="bi bi-image text-6xl"></i>
            <span class="text-sm font-medium">No Image</span>
          </div>
        </div>

        <!-- Theme Type Badge -->
        <div v-if="props.theme?.is_premium" class="absolute top-6 right-6 z-10">
          <span
            class="px-3 py-1 rounded-full text-xs text-dark font-semibold bg-cyan-400"
          >
            Premium
          </span>
        </div>
      </div>

      <!-- Theme Info -->
      <div class="p-4 pt-0">
        <div class="flex items-start justify-between mb-4">
          <div>
            <h3 class="text-lg font-bold text-white">
              {{ props.theme?.name || "Untitled Theme" }}
            </h3>
          </div>
          <span class="py-1 px-2 rounded-lg bg-white/10 text-sm text-white/80">
            {{ props.theme?.theme_category?.name || "Uncategorized" }}
          </span>
        </div>

        <a
          :href="`${themeUrl}/${props.theme?.slug}` || '#'"
          target="_blank"
          :rel="props.theme?.name || 'null'"
          class="group/btn relative w-full inline-flex justify-center items-center px-4 py-2 backdrop-blur-md bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <span class="relative z-10">Lihat Tema</span>
          <i class="bi bi-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  </div>
</template>
