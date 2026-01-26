<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <NuxtLayout>
    <div class="font-primary bg-dark">
      <template v-if="error.statusCode === 404">
        <Error404 />
      </template>

      <template v-else>
        <div class="flex flex-col items-center justify-center py-20">
          <h1 class="text-4xl font-bold">{{ error.statusCode }}</h1>
          <p>{{ error.message }}</p>
          <button
            @click="handleError"
            class="mt-4 px-4 py-2 bg-sky-500 text-white rounded"
          >
            Kembali
          </button>
        </div>
      </template>
    </div>
  </NuxtLayout>
</template>
