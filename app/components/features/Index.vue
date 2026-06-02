<script setup>
const features = [
  {
    title: "Profil",
    icon: "bi-person-standing",
    label: "profil",
    content: {
      title: "Profil mempelai",
      description:
        "Menampilkan data mempelai pria dan wanita seperti nama, orang tua, foto (opsional), dan instagram (opsional).",
      image: "/logo.webp",
    },
  },
  {
    title: "Acara",
    icon: "bi-calendar-event",
    label: "acara",
    content: {
      title: "Daftar acara",
      description:
        "Menampilkan data mempelai pria dan wanita seperti nama, orang tua, dan instagram (opsional).",
      image: "/logo.webp",
    },
  },
  {
    title: "Kisah",
    icon: "bi-heart",
    label: "kisah",
    content: {
      title: "Kisah cinta",
      description:
        "Menampilkan data mempelai pria dan wanita seperti nama, orang tua, dan instagram (opsional).",
      image: "/logo.webp",
    },
  },
  {
    title: "Countdown",
    icon: "bi-stopwatch",
    label: "countdown",
    content: {
      title: "Timer countdown",
      description:
        "Menampilkan data mempelai pria dan wanita seperti nama, orang tua, dan instagram (opsional).",
      image: "/logo.webp",
    },
  },
  {
    title: "Galeri",
    icon: "bi-camera",
    label: "galeri",
    content: {
      title: "Galeri foto & video",
      description:
        "Menampilkan data mempelai pria dan wanita seperti nama, orang tua, dan instagram (opsional).",
      image: "/logo.webp",
    },
  },
  {
    title: "RSVP",
    icon: "bi-person-check",
    label: "rsvp",
    content: {
      title: "Konfirmasi RSVP",
      description:
        "Menampilkan data mempelai pria dan wanita seperti nama, orang tua, dan instagram (opsional).",
      image: "/logo.webp",
    },
  },
  {
    title: "Gift",
    icon: "bi-gift",
    label: "gift",
    content: {
      title: "Amplop digital",
      description:
        "Menampilkan data mempelai pria dan wanita seperti nama, orang tua, dan instagram (opsional).",
      image: "/logo.webp",
    },
  },
  {
    title: "Kontak",
    icon: "bi-journal-arrow-up",
    label: "kontak",
    content: {
      title: "Import tamu",
      description:
        "Menampilkan data mempelai pria dan wanita seperti nama, orang tua, dan instagram (opsional).",
      image: "/logo.webp",
    },
  },
  {
    title: "Check-in",
    icon: "bi-patch-check",
    label: "check-in",
    content: {
      title: "Check-in tamu",
      description:
        "Menampilkan data mempelai pria dan wanita seperti nama, orang tua, dan instagram (opsional).",
      image: "/logo.webp",
    },
  },
];

const activeFeature = ref("profil");

const changeActiveFeature = (label) => {
  activeFeature.value = label;
};

const featureDetail = computed(() => {
  const item = features.find((f) => f.label === activeFeature.value)?.content;

  return {
    title: item?.title ?? "",
    description: item?.description ?? "",
    image: item?.image ?? "",
  };
});
</script>

<template>
  <section
    id="features"
    class="relative py-16 overflow-hidden bg-light dark:bg-dark"
  >
    <div class="px-4">
      <p class="text-primary text-sm font-bold uppercase tracking-wide mb-4">
        Fitur eksklusif
      </p>

      <h2
        class="text-black dark:text-white text-4xl font-semibold tracking-tighter mb-4"
      >
        Fitur lengkap untuk kebutuhan anda.
      </h2>

      <p class="max-w-3xl text-black/60 dark:text-white/60 md:text-lg mb-14">
        EA Invitation menyediakan berbagai fitur undangan digital modern lengkap
        untuk kebutuhan pernikahan anda.
      </p>
    </div>

    <div
      class="grid grid-cols-3 md:grid-cols-6 border-t border-b border-black/10 dark:border-white/10 divide-x divide-y divide-black/10 dark:divide-white/10 mb-4"
    >
      <button
        v-for="feature in features"
        :key="feature.label"
        @click="changeActiveFeature(feature.label)"
        type="button"
        class="px-2 py-3 aspect-square flex flex-col justify-center items-center gap-3 hover:bg-black/3 dark:hover:bg-white/3 transition duration.300 cursor-pointer"
      >
        <i
          class="bi text-6xl"
          :class="[
            feature.icon,
            activeFeature === feature.label
              ? 'text-primary'
              : 'text-black dark:text-white',
          ]"
        ></i>
        <span
          class="font-mono font-semibold uppercase tracking-wider"
          :class="
            activeFeature === feature.label
              ? 'text-primary'
              : 'text-black dark:text-white'
          "
          >{{ feature.title }}</span
        >
      </button>
    </div>

    <div class="bg-black/5 dark:bg-white/5 p-2">
      <div class="bg-off-white dark:bg-dark rounded-2xl p-2">
        <div class="p-6">
          <h3
            class="text-black dark:text-white text-2xl font-semibold tracking-tighter mb-4"
          >
            {{ featureDetail.title }}
          </h3>

          <p class="text-black/60 dark:text-white/60 font-semibold">
            {{ featureDetail.description }}
          </p>
        </div>

        <div
          class="bg-black/2 dark:bg-white/2 rounded-lg border border-black/10 dark:border-white/10"
        >
          <div
            class="mt-4 mx-4 bg-off-white dark:bg-dark rounded-2xl rounded-b-none border border-black/10 dark:border-white/10 p-2"
          >
            <NuxtImg
              src="/logo.webp"
              class="rounded-lg border border-black/10 dark:border-white/10"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 lg:px-6">
      <!-- Features Grid -->
      <FeaturesList />
    </div>
  </section>
</template>
