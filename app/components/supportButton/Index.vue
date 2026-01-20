<script setup>
const props = defineProps({
  phoneNumber: {
    type: String,
    default: "6282220633024",
  },
  message: {
    type: String,
    default:
      "Halo! Saya tertarik dengan layanan undangan digital EA Invitation. Bisakah Anda membantu saya?",
  },
});

const isCardOpen = ref(false);
const isAtBottom = ref(false);

const whatsappUrl = computed(() => {
  const encodedMessage = encodeURIComponent(props.message);
  return `https://wa.me/${props.phoneNumber}?text=${encodedMessage}`;
});

const toggleCard = () => {
  isCardOpen.value = !isCardOpen.value;
};

// Close card when clicking outside
const handleClickOutside = (event) => {
  const element = event.target.closest(".fixed.bottom-6.right-6");
  if (!element && isCardOpen.value) {
    isCardOpen.value = false;
  }
};

// Check if user is at bottom of page
const checkIfAtBottom = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  // Threshold 50px dari bawah
  const threshold = 50;
  isAtBottom.value = scrollTop + clientHeight >= scrollHeight - threshold;
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("scroll", checkIfAtBottom);
  // Check initial position
  checkIfAtBottom();
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("scroll", checkIfAtBottom);
});
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform translate-y-20 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-20 opacity-0"
  >
    <div v-show="!isAtBottom" class="fixed bottom-6 right-6 z-50 text-end">
      <!-- Support Card -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform translate-y-4 opacity-0 scale-90"
        enter-to-class="transform translate-y-0 opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100 scale-100"
        leave-to-class="transform translate-y-4 opacity-0 scale-90"
      >
        <div v-show="isCardOpen" class="mb-4 w-80 sm:w-96">
          <!-- Main Card -->
          <div
            class="relative backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 rounded-3xl shadow-2xl p-4 lg:p-6"
          >
            <!-- Close Button -->
            <button
              @click="toggleCard"
              type="button"
              class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300"
            >
              <i class="bi bi-x text-white text-lg"></i>
            </button>

            <!-- Header -->
            <div class="mb-4">
              <div class="flex items-center mb-3">
                <div
                  class="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl mr-3 flex items-center justify-center"
                >
                  <i class="bi bi-headset text-white text-lg"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">
                    Butuh Bantuan?
                  </h3>
                  <span class="flex items-center text-sm text-white/70">
                    <span
                      class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"
                    ></span>
                    Online sekarang
                  </span>
                </div>
              </div>
              <p class="text-white/80 text-sm">
                Tim support kami siap membantu Anda membuat undangan digital
                yang sempurna. Chat dengan kami sekarang!
              </p>
            </div>

            <!-- CTA Buttons -->
            <div class="space-y-3">
              <a
                :href="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="group w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-semibold rounded-xl shadow-lg transform hover:scale-102 transition-all duration-300"
              >
                <i class="bi bi-whatsapp text-xl mr-2"></i>
                Chat WhatsApp
                <i
                  class="bi bi-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"
                ></i>
              </a>

              <button
                @click="toggleCard"
                type="button"
                class="w-full px-6 py-3 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-medium rounded-xl transition-all duration-300"
              >
                Nanti saja
              </button>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Floating Button -->
      <button
        @click="toggleCard"
        :class="[
          'group w-14 h-14 rounded-full shadow-2xl transform transition-all duration-300',
          isCardOpen
            ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-400 hover:to-pink-400'
            : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 hover:scale-110',
        ]"
        aria-label="contact support button"
      >
        <!-- Button Content -->
        <div
          class="relative z-10 w-full h-full flex items-center justify-center"
        >
          <Transition
            enter-active-class="transition duration-200"
            enter-from-class="transform rotate-45 scale-0"
            enter-to-class="transform rotate-0 scale-100"
            leave-active-class="transition duration-200"
            leave-from-class="transform rotate-0 scale-100"
            leave-to-class="transform rotate-45 scale-0"
            mode="out-in"
          >
            <i
              v-if="isCardOpen"
              key="close"
              class="bi bi-x text-white text-2xl"
            ></i>
            <i
              v-else
              key="support"
              class="bi bi-headset text-white text-xl"
            ></i>
          </Transition>
        </div>
      </button>
    </div>
  </Transition>
</template>

<style scoped>
@keyframes ping {
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>
