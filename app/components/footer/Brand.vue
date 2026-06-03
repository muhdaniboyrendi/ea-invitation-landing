<script setup>
const config = useRuntimeConfig();

const dashboardAppUrl = config.public.dashboardAppUrl;
</script>

<template>
  <div class="lg:col-span-2">
    <div class="mb-8">
      <!-- Logo/Brand -->
      <NuxtLink to="/" class="block mb-6" aria-label="EA Invitation">
        <NuxtImg
          src="/logo-text-dark.webp"
          width="200"
          height="50"
          loading="eager"
          quality="80"
          alt="EA Invitation logo"
        />
      </NuxtLink>

      <!-- Description -->
      <p
        class="text-black/80 dark:text-white/80 text-base leading-relaxed font-medium mb-6 max-w-md opacity-80"
      >
        Platform representasi digital untuk hari bahagia Anda. Menghadirkan
        pengalaman mengundang yang luhur melalui kurasi desain modern dan
        teknologi imersif.
      </p>
    </div>
  </div>
</template>
