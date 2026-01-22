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
  <div class="mt-12 pt-8 border-t border-white/10">
    <div class="flex flex-col lg:flex-row justify-between items-center gap-8">
      <!-- Contact Info -->
      <div class="flex flex-col sm:flex-row items-center gap-6 text-white/70">
        <a
          href="mailto:erlanazrdev@gmail.com"
          target="_blank"
          class="flex items-center hover:underline hover:text-cyan-500 transition"
        >
          <i class="bi bi-envelope mr-2 text-cyan-400"></i>
          <span>erlanazrdev@gmail.com</span>
        </a>
        <a
          href="https://wa.me/6282220633024"
          target="_blank"
          class="flex items-center hover:underline hover:text-cyan-500 transition"
        >
          <i class="bi bi-telephone mr-2 text-purple-400"></i>
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
          class="group h-11 aspect-square backdrop-blur-md flex justify-center items-center bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-xl transition-all duration-300 hover:scale-110"
          rel="noopener noreferrer"
          :title="social.name"
          :aria-label="`EA Invitation ${social.name}`"
        >
          <i
            class="bi text-white text-lg transition-colors duration-300"
            :class="`${social.iconClass} group-hover:text-[${social.hoverColor}]`"
          ></i>
        </a>
      </div>
    </div>
  </div>
</template>
