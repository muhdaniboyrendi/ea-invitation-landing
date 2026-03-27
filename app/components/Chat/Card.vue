<script setup>
const props = defineProps({
  isCardOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);

const whatsappUrl =
  "https://wa.me/6282220633024?text=Halo!%20Saya%20tertarik%20dengan%20layanan%20undangan%20digital%20EA%20Invitation.%20Bisakah%20Anda%20membantu%20saya%3F";
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform translate-y-4 opacity-0 scale-90"
    enter-to-class="transform translate-y-0 opacity-100 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform translate-y-0 opacity-100 scale-100"
    leave-to-class="transform translate-y-4 opacity-0 scale-90"
  >
    <div v-show="props.isCardOpen" class="w-80 sm:w-96">
      <div
        class="backdrop-blur-md bg-white/70 dark:bg-dark/70 border border-black/20 dark:border-white/20 rounded-2xl p-4 lg:p-6"
      >
        <div class="flex items-center gap-3 mb-4">
          <div
            class="w-12 h-12 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center"
          >
            <i class="bi bi-headset text-primary text-xl"></i>
          </div>
          <h3 class="text-lg text-dark dark:text-light font-semibold">
            Butuh Bantuan?
          </h3>
        </div>
        <div class="mb-4">
          <p class="text-black/70 dark:text-white/70 text-end">
            Tim support kami siap membantu Anda membuat undangan digital yang
            sempurna.
          </p>
          <p class="text-black/70 dark:text-white/70 text-end">
            Chat dengan kami sekarang!
          </p>
        </div>
        <div class="space-y-3">
          <a
            :href="whatsappUrl"
            target="_blank"
            class="relative block py-3 px-6 bg-primary rounded-lg text-center text-white font-medium hover:bg-primary/80 active:scale-90 transition"
          >
            <i class="bi bi-whatsapp absolute left-4 top-3 text-xl"></i>
            Chat WhatsApp
          </a>
          <button
            @click="emit('close')"
            type="button"
            class="w-full py-3 px-6 bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 text-black dark:text-white text-sm md:text-base font-semibold rounded-lg hover:bg-black/10 dark:hover:bg-white/10 active:scale-90 transition duration-300 cursor-pointer"
          >
            Nanti Saja
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
