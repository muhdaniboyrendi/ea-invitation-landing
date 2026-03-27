<script setup>
const socialList = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/ea_invitation?igsh=NHMzdnIxdnZ3Ymlq",
    iconClass: "bi-instagram",
    hoverColor: "#E1306C",
  },
  {
    name: "Tiktok",
    url: "https://www.tiktok.com/@erlan.azr_",
    iconClass: "bi-tiktok",
    hoverColor: "#000000",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/6282220633024",
    iconClass: "bi-whatsapp",
    hoverColor: "#25D366",
  },
];
</script>

<template>
  <div class="mt-10 pt-10 border-t border-black/20 dark:border-white/20">
    <div class="flex flex-col lg:flex-row justify-between items-center gap-8">
      <!-- Contact Info -->
      <div class="flex flex-col sm:flex-row items-center gap-6 text-white/70">
        <a
          href="mailto:erlanazrdev@gmail.com"
          target="_blank"
          class="flex items-center text-black/70 dark:text-white/70 hover:underline"
        >
          <i class="bi bi-envelope mr-2 text-primary"></i>
          <span>erlanazrdev@gmail.com</span>
        </a>
        <a
          href="https://wa.me/6282220633024"
          target="_blank"
          class="flex items-center text-black/70 dark:text-white/70 hover:underline"
        >
          <i class="bi bi-telephone mr-2 text-primary"></i>
          <span>+62 822-2063-3024</span>
        </a>
      </div>

      <!-- Social Media Links -->
      <div class="flex items-center space-x-4">
        <a
          v-for="(social, index) in socialList"
          :key="index"
          :href="social.url"
          target="_blank"
          class="group h-11 aspect-square flex justify-center items-center bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 rounded-lg transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/10"
          rel="noopener noreferrer"
          :title="social.name"
          :aria-label="`EA Invitation ${social.name}`"
        >
          <i
            class="bi text-dark dark:text-light text-lg transition-colors duration-300"
            :class="`${social.iconClass} group-hover:text-[${social.hoverColor}]`"
          ></i>
        </a>
      </div>
    </div>
  </div>
</template>
