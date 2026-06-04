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
</script>

<template>
  <section
    id="features"
    class="relative py-16 overflow-hidden bg-light dark:bg-dark"
  >
    <div class="px-4">
      <p class="text-primary text-sm font-bold uppercase tracking-widest mb-4">
        Fitur Lengkap & Interaktif
      </p>

      <h2
        class="text-black dark:text-white text-4xl font-semibold tracking-tighter mb-4"
      >
        Kendali Penuh di Tanganmu, Hasil Tetap Mewah
      </h2>

      <p class="max-w-3xl text-black/60 dark:text-white/60 md:text-lg mb-14">
        Setiap fitur di EA Invitation dirancang untuk memberikan pengalaman yang
        berbeda, fleksibel, dan jauh dari kesan pasaran. Bikin undangan digital
        impianmu dengan konfigurasi super gampang.
      </p>
    </div>

    <!-- Sisa kode template Anda tetap sama di bawah ini -->
    <div
      class="bg-black/10 dark:bg-white/10 p-2 md:p-4 grid md:grid-cols-6 gap-x-4 gap-y-2"
    >
      <div class="md:col-span-3 grid grid-cols-3 content-between">
        <button
          v-for="feature in features"
          :key="feature.label"
          @click="changeActiveFeature(feature.label)"
          type="button"
          class="px-2 py-3 aspect-square bg-light dark:bg-dark flex flex-col justify-center items-center gap-3 border border-black/10 dark:border-white/10 hover:bg-light/80 dark:hover:bg-dark/80 transition duration-300 cursor-pointer"
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
            class="font-mono font-semibold uppercase tracking-wider text-xs"
            :class="
              activeFeature === feature.label
                ? 'text-primary'
                : 'text-black dark:text-white'
            "
            >{{ feature.title }}</span
          >
        </button>
      </div>

      <div class="md:col-span-3">
        <div
          class="bg-light dark:bg-dark rounded-2xl border border-black/20 dark:border-white/20 p-2"
        >
          <div class="p-6 xl:p-8">
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
            class="bg-black/3 dark:bg-white/3 rounded-lg border border-black/10 dark:border-white/10"
          >
            <div
              class="mt-3 mx-3 md:mt-4 md:mx-4 xl:mt-8 xl:mx-8 bg-light dark:bg-dark rounded-2xl rounded-b-none border border-black/10 dark:border-white/10 p-2"
            >
              <div
                class="w-full aspect-4/3 rounded-lg border border-black/10 dark:border-white/10 overflow-hidden flex justify-center items-end"
              >
                <NuxtImg
                  :src="featureDetail.image"
                  width="600"
                  loading="lazy"
                  placeholder
                  alt="Feature image"
                  class="w-2/5 rounded-t-2xl border border-b-0 border-black/10 dark:border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
