<script setup>
const props = defineProps({
  error: Object,
});
</script>

<template>
  <NuxtLayout>
    <div class="font-primary bg-dark">
      <template v-if="error.statusCode === 404">
        <Error404 />
      </template>
      <template v-else>
        <ErrorPage :status-code="error.statusCode" :message="error.message" />
      </template>
    </div>
  </NuxtLayout>
</template>
