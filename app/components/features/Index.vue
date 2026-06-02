<script setup>
const features = [
  {
    title: "Profil",
    icon: "bi-person-standing",
    label: "profil",
    content: {
      title: "Profil Mempelai yang Elegan",
      description:
        "Presentasi sinematik profil kedua mempelai. Menampilkan nama, garis keturunan, kisah latar belakang, serta integrasi media sosial dalam tata letak yang anggun.",
      image: "/logo.webp",
    },
  },
  {
    title: "Acara",
    icon: "bi-calendar-event",
    label: "acara",
    content: {
      title: "Detail Agenda & Navigasi Presisi",
      description:
        "Informasi sakral seluruh rangkaian acara yang tertata rapi, dilengkapi dengan integrasi peta digital presisi untuk memandu langkah para tamu kehormatan.",
      image: "/logo.webp",
    },
  },
  {
    title: "Kisah",
    icon: "bi-heart",
    label: "kisah",
    content: {
      title: "Timeline Kisah Cinta (Love Journey)",
      description:
        "Abadikan perjalanan romantis hubungan Anda melalui linimasa interaktif yang dikurasi indah, merayakan setiap momen penting yang penuh makna.",
      image: "/logo.webp",
    },
  },
  {
    title: "Countdown",
    icon: "bi-stopwatch",
    label: "countdown",
    content: {
      title: "Hitung Mundur Momen Sakral",
      description:
        "Pewaktu hitung mundur eksklusif yang dinamis dan adaptif terhadap zona waktu, membangun antusiasme menuju hari bahagia Anda.",
      image: "/logo.webp",
    },
  },
  {
    title: "Galeri",
    icon: "bi-camera",
    label: "galeri",
    content: {
      title: "Galeri Multimedia Imersif",
      description:
        "Ruang pameran digital untuk momen pra-pernikahan Anda. Dilengkapi dengan transisi visual yang halus, slideshow otomatis, dan dukungan video berkualitas tinggi.",
      image: "/logo.webp",
    },
  },
  {
    title: "RSVP",
    icon: "bi-person-check",
    label: "rsvp",
    content: {
      title: "Konfirmasi Kehadiran Eksklusif",
      description:
        "Sistem manajemen RSVP yang seamless untuk kenyamanan tamu Anda, dilengkapi dengan pelacakan kapasitas otomatis dan notifikasi konfirmasi langsung.",
      image: "/logo.webp",
    },
  },
  {
    title: "Gift",
    icon: "bi-gift",
    label: "gift",
    content: {
      title: "Hadiah Digital & Amplop Eksklusif",
      description:
        "Fasilitasi tanda kasih dari para tamu secara elegan dan aman melalui integrasi gerbang pembayaran digital, transfer bank, maupun dompet digital langsung.",
      image: "/logo.webp",
    },
  },
  {
    title: "Kontak",
    icon: "bi-journal-arrow-up",
    label: "kontak",
    content: {
      title: "Manajemen Tamu Instan",
      description:
        "Sistem manajemen basis data yang efisien. Impor ratusan kontak tamu kehormatan Anda secara massal dalam hitungan detik tanpa proses manual yang rumit.",
      image: "/logo.webp",
    },
  },
  {
    title: "Check-in",
    icon: "bi-patch-check",
    label: "check-in",
    content: {
      title: "Sistem Meja Tamu & QR Check-In",
      description:
        "Hadirkan impresi mewah di lokasi acara. Proses verifikasi kehadiran tamu di venue menjadi lebih profesional dan cepat menggunakan pemindaian kode QR eksklusif.",
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
      <p class="text-primary text-sm font-bold uppercase tracking-widest mb-4">
        Pengalaman Eksklusif
      </p>

      <h2
        class="text-black dark:text-white text-4xl font-semibold tracking-tighter mb-4"
      >
        Dirancang Sempurna untuk Hari Bahagia Anda
      </h2>

      <p class="max-w-3xl text-black/60 dark:text-white/60 md:text-lg mb-14">
        EA Invitation mengombinasikan estetika premium dengan teknologi
        mutakhir, memastikan setiap detail undangan digital Anda memancarkan
        kesan mewah dan berkelas.
      </p>
    </div>

    <div class="grid md:grid-cols-6 gap-4 sm:px-4">
      <div
        class="md:col-span-3 grid grid-cols-3 content-between mb-4 md:mb-0 border border-black/10 dark:border-white/10"
      >
        <button
          v-for="feature in features"
          :key="feature.label"
          @click="changeActiveFeature(feature.label)"
          type="button"
          class="px-2 py-3 aspect-square flex flex-col justify-center items-center gap-3 border border-black/10 dark:border-white/10 hover:bg-black/3 dark:hover:bg-white/3 transition duration-300 cursor-pointer"
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

      <div class="md:col-span-3 bg-black/10 dark:bg-white/10 p-2">
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
              class="mt-4 mx-4 xl:mt-8 xl:mx-8 bg-light dark:bg-dark rounded-2xl rounded-b-none border border-black/10 dark:border-white/10 p-2"
            >
              <NuxtImg
                src="/logo.webp"
                width="600"
                loading="lazy"
                placeholder
                class="w-full aspect-4/3 object-cover object-center rounded-lg border border-black/10 dark:border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
