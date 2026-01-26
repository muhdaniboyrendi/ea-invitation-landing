<script setup>
const props = defineProps({
  whatsappUrl: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['close']);

const handleClose = () => {
  emit('close');
};
</script>

<template>
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
      @click="handleClose"
      type="button"
      class="w-full px-6 py-3 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-medium rounded-xl transition-all duration-300"
    >
      Nanti saja
    </button>
  </div>
</template>