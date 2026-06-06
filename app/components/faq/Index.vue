<!-- components/faq/AccordionSection.vue -->
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

// Kurva pegas premium untuk transisi list kelompok FAQ
const premiumSpring = {
  type: 'spring',
  stiffness: 50,
  damping: 18
};
</script>

<template>
  <section
    id="faq"
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
        Tanya-Jawab
      </p>

      <h2
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100 } }"
        class="text-black dark:text-white text-4xl font-semibold tracking-tighter mb-4"
      >
        Punya Pertanyaan? Kami Punya Jawabannya
      </h2>

      <p
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        class="max-w-3xl text-black/60 dark:text-white/60 md:text-lg font-medium leading-relaxed mb-14"
      >
        Ada hal yang masih bikin kamu penasaran? Tenang, berikut beberapa hal
        penting yang paling sering ditanyakan seputar fitur dan cara mengelola
        undangan digitalmu.
      </p>
    </div>

    <!-- FAQ List Wrapper -->
    <div class="relative max-w-4xl mx-auto px-4">
      <div class="space-y-3">
        <!-- Item Card Loop with Staggered Entrance -->
        <div 
          v-for="(faq, index) in faqs" 
          :key="index" 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ 
            opacity: 1, 
            y: 0, 
            transition: { ...premiumSpring, delay: index * 80 } 
          }"
          class="group relative"
        >
          <div
            class="relative bg-white/60 dark:bg-dark border rounded-xl transition-all duration-300"
            :class="isOpen(index) ? 'border-primary/40 shadow-lg shadow-primary/5' : 'border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20'"
          >
            <!-- Question Button -->
            <button
              @click="toggleFAQ(index)"
              type="button"
              class="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 group/btn cursor-pointer select-none"
            >
              <span
                class="text-dark dark:text-light font-semibold leading-relaxed md:text-lg transition-colors duration-300"
                :class="isOpen(index) ? 'text-primary' : ''"
              >
                {{ faq.q }}
              </span>
              <div 
                class="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300"
                :class="isOpen(index) ? 'border-primary/20 bg-primary/5' : 'border-black/10 dark:border-white/10 group-hover/btn:border-primary/30 group-hover/btn:bg-primary/5'"
              >
                <i
                  :class="[
                    'bi bi-chevron-down text-sm flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
                    isOpen(index)
                      ? 'rotate-180 text-primary'
                      : 'text-dark/60 dark:text-light/60 group-hover/btn:text-primary',
                  ]"
                ></i>
              </div>
            </button>

            <!-- Smooth Dynamic Expanding Answer Area -->
            <div
              class="accordion-collapse"
              :style="{ 
                gridTemplateRows: isOpen(index) ? '1fr' : '0fr',
                opacity: isOpen(index) ? '1' : '0'
              }"
            >
              <div class="overflow-hidden">
                <div
                  class="px-5 md:px-6 pb-5 md:pb-6 border-t border-black/5 dark:border-white/5"
                >
                  <p
                    class="text-black/70 dark:text-white/70 leading-relaxed pt-3 md:pt-4 font-medium text-sm md:text-base"
                  >
                    {{ faq.a }}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* CSS Grid Trick untuk Animasi Ketinggian (Height: auto) yang Mulus Maksimal */
.accordion-collapse {
  display: grid;
  transition: grid-template-rows 400px, opacity 350ms;
  transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1); /* Garis lengkung percepatan melambat premium */
}
</style>