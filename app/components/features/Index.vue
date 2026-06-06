<!-- components/features/InteractiveFeatures.vue -->
<script setup>
const features = [
  {
    title: "Profil",
    icon: "bi-person-standing",
    label: "profil",
    content: {
      title: "Desain Profil yang Hidup & Estetik",
      description:
        "Bukan sekadar teks kaku yang membosankan. Tampilkan profil kamu dan pasangan dengan transisi visual yang halus, layout ala editorial majalah, serta link media sosial yang dikemas super bersih dan elegan.",
      image: "/img/features/profile.webp",
    },
  },
  {
    title: "Acara",
    icon: "bi-calendar-event",
    label: "acara",
    content: {
      title: "Detail Agenda & Navigasi Presisi",
      description:
        "Susun seluruh rangkaian acara bahagiamu dengan rapi. Dilengkapi hitung mundur otomatis dan integrasi peta digital yang presisi, memastikan para tamu undangan bisa sampai ke lokasi tanpa drama tersesat.",
      image: "/img/features/event.webp",
    },
  },
  {
    title: "Kisah",
    icon: "bi-heart",
    label: "kisah",
    content: {
      title: "Garis Waktu Cerita Cinta (Love Journey)",
      description:
        "Bagikan perjalanan cinta unik kalian berdua lewat linimasa interaktif yang seru dan menyentuh. Sampaikan momen-momen berharga dari awal bertemu hingga akhirnya mantap melangkah ke pelaminan.",
      image: "/img/features/story.webp",
    },
  },
  {
    title: "Countdown",
    icon: "bi-stopwatch",
    label: "countdown",
    content: {
      title: "Pewaktu Mundur yang Cerdas",
      description:
        "Membangun antusiasme para tamu menuju hari bahagiamu dengan widget countdown dinamis yang otomatis menyesuaikan zona waktu secara akurat.",
      image: "/img/features/countdown.webp",
    },
  },
  {
    title: "Galeri",
    icon: "bi-camera",
    label: "galeri",
    content: {
      title: "Galeri Foto & Video Imersif",
      description:
        "Pamerkan dokumentasi prewedding kalian dalam ruang digital bergaya galeri seni. Mendukung slideshow otomatis yang halus serta pemutaran video berkualitas tinggi tanpa mengurangi ketajaman visualnya.",
      image: "/img/features/gallery.webp",
    },
  },
  {
    title: "RSVP",
    icon: "bi-person-check",
    label: "rsvp",
    content: {
      title: "Sistem RSVP Praktis & Seamless",
      description:
        "Kasih kenyamanan maksimal buat tamu undangan. Sistem RSVP kami mendeteksi kehadiran secara instan, mencatat jumlah rombongan, dan merangkum datanya langsung ke akun dasbormu.",
      image: "/img/features/rsvp.webp",
    },
  },
  {
    title: "Gift",
    icon: "bi-gift",
    label: "gift",
    content: {
      title: "Fitur Hadiah & Angpao Digital Aman",
      description:
        "Sediakan jalur tanda kasih yang sopan dan elegan lewat integrasi transfer bank langsung, dompet digital (e-wallet), hingga kado fisik. Semuanya berjalan transparan, aman, dan menjaga privasi.",
      image: "/img/features/gift.webp",
    },
  },
  {
    title: "Kontak",
    icon: "bi-journal-arrow-up",
    label: "kontak",
    content: {
      title: "Kelola Ribuan Data Tamu Tanpa Pusing",
      description:
        "Urusan sebar undangan jadi jauh lebih efisien. Kamu bisa impor ratusan hingga ribuan nama kontak tamu sekaligus hanya dalam hitungan detik, bebas dari capeknya ketik manual satu per satu.",
      image: "/img/features/import.webp",
    },
  },
  {
    title: "Check-in",
    icon: "bi-patch-check",
    label: "check-in",
    content: {
      title: "QR Code Check-In & Buku Tamu Digital",
      description:
        "Bawa atmosfer resepsi modern yang profesional ke meja penerima tamu. Proses absensi kehadiran di lokasi acara berlangsung instan cukup dengan sekali scan kode QR unik pada undangan.",
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
        Fitur Lengkap & Interaktif
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
        Kendali Penuh di Tanganmu, Hasil Tetap Mewah
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
        Setiap fitur di EA Invitation dirancang untuk memberikan pengalaman yang
        berbeda, fleksibel, dan jauh dari kesan pasaran. Bikin undangan digital
        impianmu dengan konfigurasi super gampang.
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
            class="bg-black/3 dark:bg-white/3 rounded-lg border border-black/10 dark:border-white/10 mt-auto"
          >
            <div
              class="mt-3 mx-3 md:mt-4 md:mx-4 xl:mt-8 xl:mx-8 bg-light dark:bg-dark rounded-2xl rounded-b-none border border-black/10 dark:border-white/10 p-2 overflow-hidden"
            >
              <div
                class="w-full aspect-4/3 rounded-lg border border-black/10 dark:border-white/10 overflow-hidden flex justify-center items-end bg-black/5 dark:bg-white/5 relative"
              >
                <!-- Image Smooth Scale-In Animation based on Active Key -->
                <NuxtImg
                  :key="activeFeature"
                  v-motion
                  :initial="{ opacity: 0, y: 40, scale: 0.95 }"
                  :enter="{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: 'spring', stiffness: 50, damping: 15 },
                  }"
                  :src="featureDetail.image"
                  width="600"
                  loading="lazy"
                  placeholder
                  alt="Feature image"
                  class="w-2/5 rounded-t-2xl border border-b-0 border-black/10 dark:border-white/10 object-cover origin-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
