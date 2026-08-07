<script setup>
const props = defineProps(["theme"]);

const config = useRuntimeConfig();
const themeUrl = config.public.themeUrl;

const categoryLabel = (category) => {
  let bg = "";

  if (category === "basic") {
    bg = "bg-emerald-600";
  } else if (category === "premium") {
    bg = "bg-primary";
  } else if (category === "luxury") {
    bg = "bg-amber-[#D4AF37]";
  } else {
    bg = "bg-zinc-600";
  }

  return bg;
};
</script>

<template>
  <a
    :href="`${themeUrl}/${props.theme?.slug}` || '#'"
    target="_blank"
    rel="noopener"
    class="group relative block w-full text-left no-underline"
  >
    <div
      class="relative bg-light dark:bg-dark rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden hover:-translate-y-1 transition duration-500"
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

        <div class="absolute top-4 right-4">
          <span
            class="px-3 py-1 rounded-full text-xs text-light font-semibold capitalize"
            :class="categoryLabel(props.theme?.category)"
          >
            {{ props.theme?.category }}
          </span>
        </div>
      </div>

      <div class="py-2 px-4">
        <h3
          class="text-lg text-center font-semibold text-black dark:text-white"
        >
          {{ props.theme?.name || "Untitled Theme" }}
        </h3>
      </div>
    </div>
  </a>
</template>
