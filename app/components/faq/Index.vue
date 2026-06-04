<script setup>
import { ref } from "vue";

const openIndex = ref(null);

const faqs = [
  {
    q: "Gimana sih cara kerja EA Invitation?",
    a: "Gampang banget! Setelah kamu isi data acara, sistem kami bakal otomatis bikin website undangan yang responsif dan estetik. Kamu bakal dapat satu link khusus yang siap disebar ke semua orang tanpa ada batasan kuota tamu.",
  },
  {
    q: "Berapa lama proses pembuatan undangannya?",
    a: "Instan kok! Undangan digitalmu langsung aktif dan bisa langsung diakses publik begitu kamu selesai mengisi data dan klik simpan di dasbor.",
  },
  {
    q: "Cara tahu kalau tamu bakal datang atau enggak gimana?",
    a: "Semua konfirmasi kehadiran (RSVP), jumlah rombongan yang mau datang, sampai ucapan selamat dari para tamu bakal langsung masuk dan tercatat rapi secara real-time di dasbormu.",
  },
  {
    q: "Bisa gak datanya diubah kalau link-nya sudah terlanjur disebar?",
    a: "Bisa banget! Kamu punya akses penuh buat ganti tanggal, revisi lokasi maps, susunan acara, atau nambah foto galeri kapan saja lewat dasbor. Link undangannya gak bakal berubah kok.",
  },
  {
    q: "Bisa pakai musik latar (backsound) sesuai request kita?",
    a: "Tentu bisa! Sudah ada fitur pemutar musik otomatis yang dilengkapi tombol play/pause. Kamu bebas pilih dari daftar lagu yang tersedia atau pakai lagu pilihanmu sendiri biar makin syahdu.",
  },
];

const toggleFAQ = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const isOpen = (index) => {
  return openIndex.value === index;
};
</script>

<template>
  <section
    id="faq"
    class="relative py-16 overflow-hidden bg-light dark:bg-dark"
  >
    <div class="px-4">
      <p class="text-primary text-sm font-bold uppercase tracking-widest mb-4">
        Tanya-Jawab
      </p>

      <h2
        class="text-black dark:text-white text-4xl font-semibold tracking-tighter mb-4"
      >
        Punya Pertanyaan? Kami Punya Jawabannya
      </h2>

      <p
        class="max-w-3xl text-black/60 dark:text-white/60 md:text-lg font-medium leading-relaxed mb-14"
      >
        Ada hal yang masih bikin kamu penasaran? Tenang, berikut beberapa hal
        penting yang paling sering ditanyakan seputar fitur dan cara mengelola
        undangan digitalmu.
      </p>
    </div>

    <div class="relative max-w-7xl mx-auto px-4">
      <!-- FAQ Stack (Tanpa Kategori) -->
      <div class="space-y-3">
        <div v-for="(faq, index) in faqs" :key="index" class="group relative">
          <div
            class="relative bg-white/60 dark:bg-dark border border-black/10 dark:border-white/10 rounded-xl transition duration-300"
          >
            <!-- Question Button -->
            <button
              @click="toggleFAQ(index)"
              type="button"
              class="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 group/btn cursor-pointer"
            >
              <span
                class="text-dark dark:text-light font-semibold leading-relaxed md:text-lg"
              >
                {{ faq.q }}
              </span>
              <i
                :class="[
                  'bi bi-chevron-down flex-shrink-0 transition-all duration-300',
                  isOpen(index)
                    ? 'rotate-180 text-primary'
                    : 'text-dark/60 dark:text-light/60 group-hover/btn:text-primary',
                ]"
              ></i>
            </button>

            <!-- Answer -->
            <div
              :class="[
                'overflow-hidden transition-all duration-300 ease-in-out',
                isOpen(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
              ]"
            >
              <div
                class="px-5 md:px-6 pb-5 md:pb-6 border-t border-black/5 dark:border-white/5"
              >
                <p
                  class="text-black/70 dark:text-white/70 leading-relaxed pt-3 md:pt-4 font-medium"
                >
                  {{ faq.a }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
