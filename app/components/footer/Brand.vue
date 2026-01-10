<script setup>
const config = useRuntimeConfig();

const dashboardAppUrl = config.public.dashboardAppUrl;
</script>

<template>
  <div class="lg:col-span-2">
    <div class="mb-8">
      <!-- Logo/Brand -->
      <NuxtLink to="/" class="block mb-6" aria-label="ea invitation">
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
      <p class="text-white/70 text-lg leading-relaxed mb-6 max-w-md">
        Wujudkan momen bahagia pernikahan Anda dengan undangan digital yang
        elegan, interaktif, dan mudah dibagikan kepada keluarga dan teman.
      </p>

      <!-- CTA Button -->
      <NuxtLink
        :to="dashboardAppUrl + '/login'"
        class="group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
      >
        Buat Undangan
        <i class="bi bi-arrow-right ml-2"></i>
      </NuxtLink>
    </div>
  </div>
</template>
