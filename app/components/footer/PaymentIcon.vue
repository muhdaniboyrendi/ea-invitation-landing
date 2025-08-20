<script setup>
const props = defineProps(["icon", "name"]);
</script>

<template>
  <div
    class="p-2 w-15 aspect-square bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center"
  >
    <NuxtImg
      :src="`/img/payments/${props.icon}`"
      :alt="props.name"
      quality="70"
      format="webp"
      class="w-full object-contain"
    />
  </div>
</template>
