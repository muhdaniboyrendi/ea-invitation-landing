<!-- components/features/InteractiveFeatures.vue -->
<script setup>
const features = [
  {
    title: "Profil",
    icon: "bi-person-standing",
    label: "profil",
    content: {
      title: "Profil Kedua Mempelai",
      description:
        "Tampilkan profil kamu dan pasangan dengan layout yang rapi, lengkap dengan link ke media sosial masing-masing.",
      image: "/img/features/profile.webp",
    },
  },
  {
    title: "Acara",
    icon: "bi-calendar-event",
    label: "acara",
    content: {
      title: "Detail Acara dan Lokasi",
      description:
        "Susun rangkaian acara lengkap dengan hitung mundur dan peta lokasi, supaya tamu gak kesulitan mencari tempatnya.",
      image: "/img/features/event.webp",
    },
  },
  {
    title: "Kisah",
    icon: "bi-heart",
    label: "kisah",
    content: {
      title: "Cerita Perjalanan Mempelai",
      description:
        "Bagikan cerita kalian lewat linimasa, dari awal bertemu sampai akhirnya memutuskan menikah.",
      image: "/img/features/story.webp",
    },
  },
  {
    title: "Countdown",
    icon: "bi-stopwatch",
    label: "countdown",
    content: {
      title: "Hitung Mundur Hari Pernikahan",
      description:
        "Widget hitung mundur yang otomatis menyesuaikan zona waktu tamu, di mana pun mereka berada.",
      image: "/img/features/countdown.webp",
    },
  },
  {
    title: "Galeri",
    icon: "bi-camera",
    label: "galeri",
    content: {
      title: "Galeri Foto dan Video",
      description:
        "Tampilkan foto prewedding dalam galeri dengan slideshow otomatis, lengkap dengan video berkualitas tinggi.",
      image: "/img/features/gallery.webp",
    },
  },
  {
    title: "RSVP",
    icon: "bi-person-check",
    label: "rsvp",
    content: {
      title: "Konfirmasi Kehadiran Tamu",
      description:
        "Tamu bisa konfirmasi kehadiran langsung dari undangan. Jumlah rombongan otomatis tercatat di dasbormu.",
      image: "/img/features/rsvp.webp",
    },
  },
  {
    title: "Gift",
    icon: "bi-gift",
    label: "gift",
    content: {
      title: "Kado dan Angpao Digital",
      description:
        "Tamu bisa kirim kado lewat transfer bank, e-wallet, atau alamat pengiriman kado fisik — datanya tetap privat.",
      image: "/img/features/gift.webp",
    },
  },
  {
    title: "Kontak",
    icon: "bi-journal-arrow-up",
    label: "kontak",
    content: {
      title: "Impor Data Tamu Sekaligus",
      description:
        "Impor ratusan nama tamu sekaligus tanpa perlu mengetik satu per satu.",
      image: "/img/features/import.webp",
    },
  },
  {
    title: "Check-in",
    icon: "bi-patch-check",
    label: "check-in",
    content: {
      title: "Check-in dengan QR Code",
      description:
        "Tamu tinggal scan QR code di undangan untuk absen kehadiran di lokasi acara.",
      image: "/img/features/checkin.webp",
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

// Kurva pegas premium (stabil, peredaman tinggi)
const premiumSpring = {
  type: "spring",
  stiffness: 60,
  damping: 20,
};
</script>

<template>
  <section
    id="features"
    class="relative py-16 overflow-hidden bg-light dark:bg-dark"
  >
    <!-- Header Section -->
    <div class="px-4 max-w-7xl mx-auto">
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-primary text-sm font-bold uppercase tracking-widest mb-4"
      >
        Semua Fitur dalam Satu Dasbor
      </p>

      <h2
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 800, delay: 100 },
        }"
        class="text-black dark:text-white text-4xl font-semibold tracking-tighter mb-4"
      >
        Atur Semuanya Sendiri, dari Dasbor yang Sama
      </h2>

      <p
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 800, delay: 200 },
        }"
        class="max-w-3xl text-black/60 dark:text-white/60 md:text-lg mb-14"
      >
        Semua kebutuhan undangan pernikahanmu ada di satu dasbor — dari profil,
        galeri, RSVP, sampai kado digital.
      </p>
    </div>

    <!-- Main Container Grid -->
    <div
      class="bg-black/10 dark:bg-white/10 p-2 md:p-4 grid md:grid-cols-6 gap-x-4 gap-y-2 max-w-7xl mx-auto"
    >
      <!-- Left Side: Interactive Buttons Grid -->
      <div class="md:col-span-3 grid grid-cols-3 content-between">
        <div
          v-for="(feature, index) in features"
          :key="feature.label"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible-once="{
            opacity: 1,
            scale: 1,
            transition: {
              type: 'spring',
              stiffness: 60,
              damping: 15,
              delay: index * 60,
            },
          }"
          class="aspect-square"
        >
          <button
            @click="changeActiveFeature(feature.label)"
            type="button"
            class="w-full px-2 py-3 aspect-square bg-light dark:bg-dark flex flex-col justify-center items-center gap-3 border border-black/10 dark:border-white/10 hover:bg-light/80 dark:hover:bg-dark/80 transition-all duration-300 cursor-pointer relative group overflow-hidden"
          >
            <i
              class="bi text-5xl md:text-6xl transition-transform duration-500 group-hover:scale-110"
              :class="[
                feature.icon,
                activeFeature === feature.label
                  ? 'text-primary'
                  : 'text-black dark:text-white/80',
              ]"
            ></i>
            <span
              class="font-mono font-semibold uppercase tracking-wider text-[10px] md:text-xs text-center"
              :class="
                activeFeature === feature.label
                  ? 'text-primary'
                  : 'text-black/70 dark:text-white/70'
              "
            >
              {{ feature.title }}
            </span>
          </button>
        </div>
      </div>

      <!-- Right Side: Showcase Content Wrapper (Animate on Load) -->
      <div
        v-motion
        :initial="{ opacity: 0, x: 30 }"
        :visible-once="{ opacity: 1, x: 0, transition: premiumSpring }"
        class="md:col-span-3"
      >
        <!-- Isi Container Detail -->
        <div
          class="bg-light dark:bg-dark rounded-2xl border border-black/20 dark:border-white/20 p-2 h-full flex flex-col justify-between"
        >
          <!-- Element Dynamic Key to Trigger Content Animation on Change -->
          <div :key="activeFeature" v-motion-fade class="p-6 xl:p-8">
            <h3
              class="text-black dark:text-white text-2xl font-semibold tracking-tighter mb-4"
            >
              {{ featureDetail.title }}
            </h3>

            <p
              class="text-black/60 dark:text-white/60 font-medium leading-relaxed"
            >
              {{ featureDetail.description }}
            </p>
          </div>

          <div
            class="bg-black/3 dark:bg-white/3 rounded-lg border border-black/10 dark:border-white/10 mt-auto overflow-hidden aspect-4/3 flex justify-center items-end"
          >
            <!-- Image Smooth Scale-In Animation based on Active Key -->
            <NuxtImg
              :key="activeFeature"
              v-motion
              :initial="{ opacity: 0, y: 40, scale: 0.95 }"
              :visible-once="{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: 'spring', stiffness: 50, damping: 15 },
              }"
              :src="featureDetail.image"
              width="600"
              :alt="`${featureDetail.title} image`"
              class="w-2/5 rounded-t-2xl border border-b-0 border-black/10 dark:border-white/10 object-cover origin-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
