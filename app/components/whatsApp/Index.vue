<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

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

  isAtBottom.value = scrollTop + clientHeight >= scrollHeight - props.footerOffset;
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
    <div v-show="!isAtBottom" class="fixed bottom-6 right-6 z-50 text-end">
      <WhatsAppSupportCard
        v-model:open="isCardOpen"
        :whatsapp-url="whatsappUrl"
        @close="toggleCard"
      />

      <WhatsAppFloatingButton
        :is-open="isCardOpen"
        @toggle="toggleCard"
      />
    </div>
  </Transition>
</template>