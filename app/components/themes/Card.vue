<script setup>
const props = defineProps(["theme"]);

const config = useRuntimeConfig();
const themeUrl = config.public.themeUrl;
</script>

<template>
  <a
    :href="`${themeUrl}/${props.theme?.slug}` || '#'"
    target="_blank"
    rel="noopener"
    class="group relative block w-full text-left no-underline"
  >
    <div
      class="relative bg-light dark:bg-dark rounded-2xl border border-black/20 dark:border-white/20 overflow-hidden hover:-translate-y-1 transition duration-500"
    >
      <div class="relative h-fit overflow-hidden">
        <div class="p-2 pb-0">
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
            class="w-full aspect-4/3 object-cover object-center rounded-lg border border-black/10 dark:border-white/10"
          />
          <div
            v-else
            class="w-full aspect-4/3 rounded-lg border border-white/10 flex flex-col justify-center items-center bg-zinc-400 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-600"
          >
            <i class="bi bi-image text-6xl"></i>
            <span class="text-sm font-medium">No Image</span>
          </div>
        </div>

        <div v-if="props.theme?.is_premium" class="absolute top-6 right-6 z-10">
          <span
            class="px-3 py-1 rounded-full text-xs text-light font-semibold bg-primary"
          >
            Premium
          </span>
        </div>
      </div>

      <div class="p-4">
        <div class="flex items-center justify-between">
          <div>
            <h3
              class="text-lg font-semibold text-black dark:text-white"
            >
              {{ props.theme?.name || "Untitled Theme" }}
            </h3>
          </div>
          <span class="text-sm text-primary font-mono font-semibold uppercase">
            {{ props.theme?.theme_category?.name || "Uncategorized" }}
          </span>
        </div>
      </div>
    </div>
  </a>
</template>
