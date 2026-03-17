<script setup>
const props = defineProps(["icon", "name"]);
</script>

<template>
  <div
    class="p-2 w-15 aspect-square bg-light dark:bg-dark rounded-lg border border-dark/10 dark:border-light/10 flex items-center justify-center"
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
