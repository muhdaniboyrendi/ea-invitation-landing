<script setup>
const config = useRuntimeConfig();

const dashboardAppUrl = config.public.dashboardAppUrl;

const activeStep = ref(null);

const steps = [
  {
    number: 1,
    title: "EA Invitation",
    description: `Cari dan buka eainvitation.com di browser kemudian klik "Buat Undangan".`,
    image: "/img/tutorial/1.png",
  },
  {
    number: 2,
    title: "Masuk Dashboard",
    description:
      "Daftar atau masuk jika sudah memiliki akun, atau langsung masuk dengan google.",
    image: "/img/tutorial/2.png",
  },
  {
    number: 3,
    title: "Buat Undangan",
    description:
      "Setelah masuk, klik 'Buat Undangan' untuk memulai proses pembuatan undangan.",
    image: "/img/tutorial/3.png",
  },
  {
    number: 4,
    title: "Pilih Paket Undangan",
    description:
      "Pilih salah satu dari paket undangan yang tersedia sesuai dengan kebutuhan anda.",
    image: "/img/tutorial/4.png",
  },
  {
    number: 5,
    title: "Checkout",
    description:
      'Setelah memilih paket undangan yang anda butuhkan anda diarahkan ke halaman checkout untuk melakukan transaksi pembelian paket undangan anda dan klik "Bayar Sekarang" untuk mengkonfirmasi pembelian paket undangan anda.',
    image: "/img/tutorial/5.png",
  },
  {
    number: 6,
    title: "Metode Pembayaran",
    description: "Pilih salah satu metode pembayaran yang tersedia.",
    image: "/img/tutorial/6.png",
  },
  {
    number: 7,
    title: "Pembayaran",
    description: "Lakukan pembayaran sesuai metode yang telah dipilih.",
    image: "/img/tutorial/7.png",
  },
  {
    number: 8,
    title: "Nama Pasangan",
    description:
      "Setelah pembayaran berhasil, selanjutnya anda perlu memasukan nama pasangan yang akan dijadikan display utama di undangan anda.",
    image: "/img/tutorial/8.png",
  },
  {
    number: 9,
    title: "Tema Undangan",
    description:
      "Pilih tema undangan yang akan dijadikan sebagai desain dari undangan anda, dan anda dapat mengubahnya kapan pun.",
    image: "/img/tutorial/9.png",
  },
  {
    number: 10,
    title: "Konfirmasi",
    description:
      "Konfirmasi nama pasangan dan tema undangan sebelum mengisi data undangan dengan klik 'Buat Undangan'.",
    image: "/img/tutorial/10.png",
  },
  {
    number: 11,
    title: "Isi Undangan",
    description:
      "Isi semua informasi yang diperlukan dalam undangan anda seperti tanggal dan waktu acara, data mempelai pria dan wanita, daftar acara, kisah cinta, gift, foto, video, dll.",
    image: "/img/tutorial/11.png",
  },
  {
    number: 12,
    title: "Selesai Pengisian",
    description:
      "Anda telah berhasil mengisi semua informasi yang diperlukan dalam undangan anda dan undangan sudah bisa diakses.",
    image: "/img/tutorial/12.png",
  },
  {
    number: 13,
    title: "Tambah Tamu",
    description:
      "Setelah undangan anda selesai, anda dapat menambahkan tamu yang akan hadir dalam acara anda.",
    image: "/img/tutorial/13.png",
  },
  {
    number: 14,
    title: "Bagikan Undangan",
    description:
      "Bagikan undangan anda dengan mudah ke semua teman, kerabat, atau orang lain yang anda undang untuk acara anda.",
    image: "/img/tutorial/14.png",
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
                height="600"
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
          class="w-full max-w-5xl aspect-video mx-auto p-6 md:p-8 rounded-2xl bg-white dark:bg-white/3 border border-black/20 dark:border-white/20 shadow-xl flex justify-center items-center"
        >
          <p class="text-black/30 dark:text-white/30">
            Video Tutorial Segera Tersedia
          </p>
        </div>
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
