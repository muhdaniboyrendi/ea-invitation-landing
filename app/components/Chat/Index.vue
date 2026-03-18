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
  footerOffset: {
    type: Number,
    default: 250,
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

const handleClickOutside = (event) => {
  const element = event.target.closest(".fixed.bottom-6.right-6");
  if (!element && isCardOpen.value) {
    isCardOpen.value = false;
  }
};

const checkIfAtBottom = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  isAtBottom.value =
    scrollTop + clientHeight >= scrollHeight - props.footerOffset;
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("scroll", checkIfAtBottom);
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
    <div
      v-show="!isAtBottom"
      class="fixed bottom-6 right-6 z-50 flex flex-col justify-end items-end gap-4"
    >
      <ChatCard @close="toggleCard" :is-card-open="isCardOpen" />

      <button
        @click="toggleCard"
        aria-label="Chat support"
        title="Chat support"
        class="w-12 h-12 aspect-square rounded-full backdrop-blur-md border border-black/20 dark:border-white/20 flex justify-center items-center hover:scale-103 active:scale-90 transition cursor-pointer"
        :class="
          isCardOpen
            ? 'bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-dark'
            : 'bg-primary/70 hover:bg-primary'
        "
      >
        <i
          class="bi"
          :class="
            isCardOpen
              ? 'bi-x-lg text-black dark:text-white'
              : 'bi-chat-left-text mt-1 text-white'
          "
        ></i>
      </button>
    </div>
  </Transition>
</template>
