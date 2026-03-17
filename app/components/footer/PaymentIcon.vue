<script setup>
const props = defineProps(["icon", "name"]);
</script>

<template>
  <div
    class="p-2 w-15 aspect-square bg-light dark:bg-white/3 rounded-lg border border-dark/20 dark:border-light/20 flex items-center justify-center"
  >
    <NuxtImg
      :src="`/img/payments/${props.icon}`"
      :alt="props.name"
      width="40"
      quality="30"
      format="webp"
      loading="lazy"
      placeholder
      class="w-full object-contain"
    />
  </div>
</template>
