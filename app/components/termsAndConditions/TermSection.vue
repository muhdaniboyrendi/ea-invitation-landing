<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="bg-white dark:bg-white/3 p-4 md:p-6 rounded-2xl border border-black/20 dark:border-white/20"
  >
    <!-- Header -->
    <div class="flex items-start gap-4 mb-4 md:mb-6">
      <h3 class="text-2xl font-bold text-black dark:text-white">{{ title }}</h3>
    </div>

    <!-- Content Slot -->
    <div class="prose prose-invert max-w-none">
      <slot />
    </div>
  </div>
</template>
