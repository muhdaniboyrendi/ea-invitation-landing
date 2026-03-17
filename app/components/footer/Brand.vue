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
        class="text-black dark:text-white text-lg leading-relaxed mb-6 max-w-md"
      >
        Buat undangan pernikahan digital berbasis website dengan berbagai tema
        modern dan interaktif serta fitur lengkap.
      </p>

      <!-- CTA Button -->
      <NuxtLink
        :to="dashboardAppUrl + '/login'"
        class="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:scale-102 active:scale-95 transition duration-300"
      >
        Buat Undangan
        <i class="bi bi-arrow-right ml-2"></i>
      </NuxtLink>
    </div>
  </div>
</template>
