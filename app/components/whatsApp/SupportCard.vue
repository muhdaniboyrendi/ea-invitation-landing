<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  whatsappUrl: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:open', 'close']);

const handleClose = () => {
  emit('update:open', false);
  emit('close');
};
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
    <div v-show="open" class="mb-4 w-80 sm:w-96">
      <div
        class="relative backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 rounded-3xl shadow-2xl p-4 lg:p-6"
      >
        <WhatsAppSupportCardHeader />
        <WhatsAppSupportCardActions
          :whatsapp-url="whatsappUrl"
          @close="handleClose"
        />
      </div>
    </div>
  </Transition>
</template>