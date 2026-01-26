<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['toggle']);

const handleToggle = () => {
  emit('toggle');
};
</script>

<template>
  <button
    @click="handleToggle"
    :class="[
      'group w-14 h-14 rounded-full shadow-2xl transform transition-all duration-300',
      isOpen
        ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-400 hover:to-pink-400'
        : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 hover:scale-110',
    ]"
    aria-label="contact support button"
  >
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
          v-if="isOpen"
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
</template>