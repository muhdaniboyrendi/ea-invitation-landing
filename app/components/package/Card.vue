<script setup>
const props = defineProps(["package"]);

// State untuk mengontrol tampilan features
const showAllFeatures = ref(false);
const maxFeatures = 5;

// Computed untuk features yang ditampilkan
const displayedFeatures = computed(() => {
  if (showAllFeatures.value || props.package.features.length <= maxFeatures) {
    return props.package.features;
  }
  return props.package.features.slice(0, maxFeatures);
});

// Computed untuk mengecek apakah ada features yang disembunyikan
const hasHiddenFeatures = computed(() => {
  return props.package.features.length > maxFeatures;
});

// Function untuk toggle tampilan features
const toggleFeatures = () => {
  showAllFeatures.value = !showAllFeatures.value;
};
</script>

<template>
  <div
    class="group relative bg-gradient-to-b rounded-3xl w-full max-w-90 h-fit transition-all duration-500 hover:scale-103"
    :class="
      props.package.id === 2
        ? 'from-indigo-900 to-indigo-900 dark:from-purple-500 dark:to-pink-500'
        : 'from-black to-black dark:from-blue-400 dark:to-cyan-400'
    "
  >
    <!-- Best Seller Badge -->
    <div
      v-if="props.package.id === 2"
      class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
    >
      <div
        class="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg"
      >
        🏆 BEST SELLER
      </div>
    </div>

    <!-- Enhanced Glow for Best Seller -->
    <div
      class="absolute -inset-2 bg-gradient-to-r blur-xl rounded-3xl group-hover:blur-2xl transition-all duration-500"
      :class="
        props.package.id === 2
          ? 'from-purple-400/25 via-pink-400/25 to-purple-400/25'
          : 'from-blue-400/10 via-cyan-400/10 to-blue-400/10'
      "
    ></div>

    <div
      class="relative w-full h-full bg-linear-to-b p-8 rounded-3xl transition-all duration-500 hover:bg-white/10 dark:hover:bg-black/5"
      :class="
        props.package.id === 2
          ? 'border-2 border-purple-400/30 hover:border-purple-400/50 from-purple-950 to-pink-900/30 dark:from-black/80 dark:to-black/80'
          : 'border border-white/10 hover:border-white/20 from-indigo-950 to-indigo-900/90 dark:from-black/90 dark:to-black/90'
      "
    >
      <!-- Package Header -->
      <div class="text-center mb-8">
        <h3
          class="text-2xl font-bold mb-8"
          :class="
            props.package.id === 2
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'
              : 'text-white'
          "
        >
          {{ props.package.name }}
        </h3>

        <!-- Price -->
        <div class="relative">
          <div
            class="absolute -top-4 right-0 bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-bold px-2 py-1 rounded-full"
          >
            20% OFF
          </div>
          <div class="flex items-baseline justify-center mb-2">
            <ClientOnly>
              <span
                class="font-bold text-transparent bg-clip-text bg-gradient-to-r"
                :class="
                  props.package.id === 2
                    ? 'from-purple-400 to-pink-400 text-5xl'
                    : 'from-blue-400 to-cyan-400 text-4xl'
                "
              >
                <span class="text-base">Rp</span>
                {{ formatRupiah(props.package.price) }}
              </span>
            </ClientOnly>
          </div>
          <div class="text-sm text-white/50">
            <span class="line-through">Rp 120.000</span>
          </div>
        </div>
      </div>

      <!-- Features List -->
      <div class="space-y-4 mb-6">
        <transition-group name="features" tag="div" class="space-y-4">
          <div
            v-for="(feature, index) in displayedFeatures"
            :key="`feature-${index}`"
            class="flex items-start gap-x-3"
          >
            <i
              class="bi bi-check2 text-xl"
              :class="
                props.package.id === 2 ? 'text-purple-400' : 'text-blue-400'
              "
            ></i>
            <span class="text-white/80">{{ feature }}</span>
          </div>
        </transition-group>
      </div>

      <!-- Show More/Less Button -->
      <div v-if="hasHiddenFeatures" class="text-center mb-6">
        <button
          @click="toggleFeatures"
          class="inline-flex items-center gap-2 text-sm font-medium hover:underline transition-all duration-300"
          :class="
            props.package.id === 2
              ? 'text-purple-400 hover:text-purple-300'
              : 'text-blue-400 hover:text-blue-300'
          "
        >
          <span>{{
            showAllFeatures ? "Lihat lebih sedikit" : "Lihat lebih banyak"
          }}</span>
          <i
            class="bi transition-transform duration-300"
            :class="showAllFeatures ? 'bi-chevron-up' : 'bi-chevron-down'"
          ></i>
        </button>
      </div>

      <!-- CTA Button -->
      <button
        class="w-full group/btn relative inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
        :class="
          props.package.id === 2
            ? 'from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400'
            : 'from-blue-500/80 to-cyan-500/80 hover:from-blue-400 hover:to-cyan-400'
        "
      >
        <span class="relative z-10">Pilih Paket</span>
        <i class="bi bi-arrow-right ml-2"></i>
        <div
          class="absolute inset-0 bg-gradient-to-r blur-xl group-hover/btn:blur-2xl transition-all duration-300 rounded-xl"
          :class="
            props.package.id === 2
              ? 'from-purple-400/20 to-pink-400/20'
              : 'from-blue-400/20 to-cyan-400/20'
          "
        ></div>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Transisi untuk features list */
.features-enter-active,
.features-leave-active {
  transition: all 0.3s ease;
}

.features-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.features-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.features-move {
  transition: transform 0.3s ease;
}
</style>
