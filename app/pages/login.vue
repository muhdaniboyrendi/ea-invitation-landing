<script setup>
useHead({
  title: "Login - EA Invitation",
  meta: [
    {
      name: "description",
      content:
        "Login ke akun EA Invitation untuk mengelola dan mengedit undangan pernikahan digital Anda.",
    },
    {
      name: "robots",
      content: "noindex, nofollow", // Halaman login tidak perlu diindex
    },
  ],
});
</script>

<template>
  <div class="bg-off-white dark:bg-dark">
    <NuxtLayout name="auth">
      <AuthLogin />
    </NuxtLayout>
  </div>
</template>
