<script setup>
useHead({
  title: "Daftar Akun Gratis - EA Invitation",
  meta: [
    {
      name: "description",
      content:
        "Daftar akun gratis di EA Invitation dan mulai membuat undangan pernikahan digital yang menakjubkan.",
    },
    {
      name: "robots",
      content: "noindex, follow", // Register page biasanya noindex
    },
  ],
});
</script>

<template>
  <div class="bg-off-white dark:bg-dark">
    <NuxtLayout name="auth">
      <AuthRegister />
    </NuxtLayout>
  </div>
</template>
