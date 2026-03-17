<script setup>
const config = useRuntimeConfig();

const dashboardAppUrl = config.public.dashboardAppUrl;

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

const getFinalPrice = computed(() => {
  if (props.package.discount) {
    const discountAmount =
      (parseFloat(props.package.price) * props.package.discount) / 100;
    return (parseFloat(props.package.price) - discountAmount).toFixed(2);
  }
  return parseFloat(props.package.price).toFixed(2);
});

// Function untuk toggle tampilan features
const toggleFeatures = () => {
  showAllFeatures.value = !showAllFeatures.value;
};
</script>

<template>
  <div
    class="group relative rounded-2xl w-full max-w-90 h-fit bg-primary/10 border-2 p-8"
    :class="
      props.package.id === 2
        ? 'border-primary'
        : 'border-dark/10 dark:border-light/10'
    "
  >
    <!-- Package Header -->
    <div class="mb-6">
      <div class="flex items-end gap-2 mb-4">
        <h3 class="text-3xl text-primary font-bold">
          {{ props.package.name }}
        </h3>
        <span
          v-if="props.package.id === 2"
          class="py-0.5 px-2 rounded-md bg-dark/10 dark:bg-light/15 text-dark dark:text-light/80 font-medium text-sm mb-1.5"
          >Most Popular</span
        >
      </div>

      <!-- Price -->
      <div class="relative">
        <div class="flex items-center gap-2 mb-2">
          <span class="font-bold text-5xl text-black dark:text-white">
            <span class="text-sm">Rp</span>
            {{ formatRupiah(getFinalPrice) }}
          </span>
          <div
            v-if="props.package.discount"
            class="bg-primary py-0.5 px-2 rounded-md text-light font-semibold"
          >
            -{{ props.package.discount }}%
          </div>
        </div>
        <div
          v-if="props.package.discount"
          class="text-dark/60 dark:text-light/60 font-semibold"
        >
          <span class="line-through"
            >Rp {{ formatRupiah(props.package.price) }}</span
          >
        </div>
      </div>
    </div>

    <!-- CTA Button -->
    <a
      :href="`${dashboardAppUrl}/invitation/create/checkout/${props.package?.id}`"
      class="w-full group/btn relative inline-flex items-center justify-center px-6 py-4 bg-primary text-white font-semibold rounded-lg hover:scale-102 transition duration-300 mb-6"
    >
      <span class="relative z-10">Pilih Paket</span>
      <i class="bi bi-arrow-right ml-2"></i>
    </a>

    <!-- Features List - DIPERBAIKI -->
    <transition-group name="features" tag="ul" class="space-y-2 mb-6">
      <li
        v-for="(feature, index) in displayedFeatures"
        :key="`feature-${index}`"
        class="flex items-start gap-x-3"
      >
        <i class="bi bi-check2 text-xl text-primary"></i>
        <span class="text-dark/80 dark:text-light/80">{{ feature }}</span>
      </li>
    </transition-group>

    <!-- Show More/Less Button -->
    <div v-if="hasHiddenFeatures" class="text-center">
      <button
        @click="toggleFeatures"
        type="button"
        class="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline transition-all duration-300"
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
