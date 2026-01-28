<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="group relative rounded-2xl">
    <!-- Card Content -->
    <div
      :class="[
        'relative bg-dark/50 p-4 lg:p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300',
      ]"
    >
      <!-- Header -->
      <div class="flex items-start gap-4 mb-4 md:mb-6">
        <h3 class="text-2xl font-bold text-white">{{ title }}</h3>
      </div>

      <!-- Content Slot -->
      <div class="prose prose-invert max-w-none">
        <slot />
      </div>
    </div>
  </div>
</template>
