<script setup>
const config = useRuntimeConfig();

const dashboardAppUrl = config.public.dashboardAppUrl;

const activeStep = ref(null);

const steps = [
  {
    number: 1,
    title: "Daftar dan Masuk",
    description:
      "Buat akun atau login jika sudah memiliki akun, atau langsung masuk dengan google.",
    image: "/img/tutorial/1.webp",
  },
  {
    number: 2,
    title: "Buat Undangan",
    description:
      'Setelah masuk anda akan diarahkan ke halaman utama dashboard EA Invitation, dan setelah itu klik "Buat Undangan Sekarang" untuk membuat undangan.',
    image: "/img/tutorial/2.webp",
  },
  {
    number: 3,
    title: "Pilih Paket Undangan",
    description:
      "Setelah itu anda diarahkan ke halaman pemilihan paket undangan, dan pilih salah satu dari paket undangan yang tersedia.",
    image: "/img/tutorial/3.webp",
  },
  {
    number: 4,
    title: "Checkout",
    description:
      'Setelah memilih paket undangan yang anda butuhkan anda diarahkan ke halaman checkout untuk melakukan transaksi pembelian paket undangan anda dan klik "Bayar Sekarang" untuk mengkonfirmasi pembelian paket undangan anda.',
    image: "/img/tutorial/4.webp",
  },
  {
    number: 5,
    title: "Metode Pembayaran",
    description:
      'Setelah memilih paket undangan yang anda butuhkan anda diarahkan ke halaman checkout untuk melakukan transaksi pembelian paket undangan anda dan klik "Bayar Sekarang" untuk mengkonfirmasi pembelian paket undangan anda dan memilih metode pembayaran yang tersedia.',
    image: "/img/tutorial/5.webp",
  },
  {
    number: 6,
    title: "Pembayaran",
    description:
      'Setelah memilih metode pembayaran yang tersedia, klik "Bayar Sekarang" untuk menyelesaikan proses pembayaran.',
    image: "/img/tutorial/6.webp",
  },
  {
    number: 7,
    title: "Nama Pasangan",
    description:
      "Setelah pembayaran berhasil, selanjutnya anda perlu memasukan nama pasangan yang akan dijadikan display utama di undangan anda.",
    image: "/img/tutorial/7.webp",
  },
  {
    number: 8,
    title: "Pilih Tema",
    description:
      "Selanjutnya anda perlu memilih tema undangan yang akan dijadikan sebagai desain dari undangan anda, dan anda dapat mengubahnya kapan pun.",
    image: "/img/tutorial/8.webp",
  },
  {
    number: 9,
    title: "Isi Data",
    description:
      "Setelah itu anda perlu mengisi data undangan yang dibutuhkan, seperti tanggal dan waktu acara, data mempelai pria dan wanita, daftar acara, kisah cinta, gift, foto, video, dll.",
    image: "/img/tutorial/9.webp",
  },
  {
    number: 10,
    title: "Kelola Tamu",
    description:
      "Selamat undangan anda telah selesai dibuat, dan selanjutnya adalah anda dapat mengelola, menambahkan, dan memantau daftar tamu undangan anda.",
    image: "/img/tutorial/10.webp",
  },
  {
    number: 11,
    title: "Bagikan Undangan",
    description:
      "Langkah yang terakhir adalah membagikan undangan anda ke teman, kerabat, atau orang lain yang anda undang untuk acara anda.",
    image: "/img/tutorial/11.webp",
  },
];

const handleImageError = (event, stepNumber) => {
  event.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect fill='%231e293b' width='800' height='450'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23cbd5e1' font-size='24' font-family='sans-serif'%3EStep ${stepNumber} Preview%3C/text%3E%3C/svg%3E`;
};

const setActive = (stepNumber) => {
  activeStep.value = stepNumber;
};

const clearActive = () => {
  activeStep.value = null;
};
</script>

<template>
  <section id="tutorial" class="pt-28 md:pt-40 pb-20 bg-light dark:bg-dark">
    <div class="max-w-7xl mx-auto px-4 lg:px-6">
      <!-- Section Header -->
      <div class="text-center mb-10 md:mb-30">
        <!-- Main Title -->
        <h1
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="text-4xl/12 sm:text-5xl/15 lg:text-6xl/19 font-bold mb-6 text-black dark:text-white tracking-wide"
        >
          <span class="text-primary"> Tutorial Lengkap </span>
          <br />Membuat Undangan Digital EA Invitation
        </h1>

        <!-- Description -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="text-xl lg:text-2xl text-black/60 dark:text-white/60 max-w-4xl mx-auto leading-relaxed"
        >
          Ikuti panduan step-by-step untuk membuat undangan digital impian Anda
          dalam hitungan menit
        </p>
      </div>

      <!-- Steps Grid -->
      <div class="relative space-y-4 md:space-y-6 mb-40">
        <!-- Timeline line (hanya tampil md ke atas, di belakang semua card) -->
        <div
          class="hidden md:block absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent -z-0"
        />

        <div
          v-for="(step, index) in steps"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="group relative flex gap-5 md:gap-8"
          @mouseenter="setActive(step.number)"
          @mouseleave="clearActive"
        >
          <!-- Timeline dot -->
          <div class="hidden md:flex flex-col items-center z-10 pt-6">
            <div
              class="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-white dark:bg-white/10 border-2 border-primary/60 group-hover:border-primary shadow-lg group-hover:shadow-primary/30 transition-all duration-300"
            >
              <span class="text-primary text-base font-bold leading-none">
                {{ step.number }}
              </span>
            </div>
          </div>

          <!-- Card -->
          <div
            class="flex-1 rounded-2xl bg-white dark:bg-white/3 border border-dark/20 dark:border-light/20 shadow-xl overflow-hidden transition-all duration-300"
          >
            <!-- Mobile: step badge (hanya mobile, karena dot disembunyikan) -->
            <div class="flex md:hidden items-center gap-3 px-5 pt-5 pb-0">
              <div
                class="w-9 h-9 rounded-full flex items-center justify-center shrink-0 bg-primary/10 border border-primary/30"
              >
                <span class="text-primary text-sm font-bold">{{
                  step.number
                }}</span>
              </div>
              <div class="h-px flex-1 bg-dark/10 dark:bg-light/10" />
            </div>

            <!-- Text section -->
            <div class="px-5 pt-5 pb-4 md:px-6 md:pt-6 md:pb-5">
              <h3
                class="text-lg md:text-xl font-semibold text-black dark:text-white mb-2"
              >
                {{ step.title }}
              </h3>
              <p
                class="text-sm md:text-base text-dark/70 dark:text-light/50 leading-relaxed"
              >
                {{ step.description }}
              </p>
            </div>

            <!-- Divider -->
            <div class="mx-5 md:mx-6 h-px bg-dark/8 dark:bg-light/8" />

            <!-- Image section (landscape) -->
            <div
              class="w-full aspect-2/1 overflow-hidden bg-white/20 dark:bg-white/5"
            >
              <NuxtImg
                :src="step.image"
                :alt="step.title"
                width="1200"
                loading="lazy"
                format="webp"
                quality="80"
                placeholder
                class="w-full h-full object-cover"
                @error="(e) => handleImageError(e, step.number)"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Video Tutorial Section -->
      <div class="mb-20">
        <div class="text-center mb-10">
          <h2
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="1000"
            class="text-4xl/12 sm:text-5xl/15 lg:text-6xl/19 font-bold mb-6 text-black dark:text-white tracking-wide"
          >
            Tonton Video Tutorial
          </h2>
          <p
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="1000"
            class="text-xl lg:text-2xl text-black/60 dark:text-white/60 max-w-4xl mx-auto leading-relaxed"
          >
            Pelajari lebih detail dengan menonton video tutorial lengkap kami
          </p>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="w-full max-w-5xl aspect-video mx-auto p-6 md:p-8 rounded-2xl bg-white dark:bg-white/3 border border-black/20 dark:border-white/20 shadow-xl"
        ></div>
      </div>

      <!-- CTA Section -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="1000"
        class="max-w-2xl mx-auto text-center p-6 md:p-8 rounded-2xl bg-white dark:bg-white/3 border border-black/20 dark:border-white/20 shadow-xl"
      >
        <h3 class="text-2xl font-bold text-black dark:text-white mb-3">
          Siap Membuat Undangan Digital Anda?
        </h3>
        <p class="text-black/70 dark:text-white/70 mb-6 max-w-2xl mx-auto">
          Ikuti tutorial di atas dan buat undangan digital impian Anda dalam
          hitungan menit!
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink
            :to="dashboardAppUrl + '/login'"
            class="group/btn px-8 py-4 bg-primary rounded-xl font-semibold text-white transition duration-300 hover:scale-102 active:scale-90"
          >
            Buat Undangan Sekarang
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Grid pattern */
.bg-grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px);
  background-size: 80px 80px;
}
</style>
