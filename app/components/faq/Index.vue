<script setup>
const openIndex = ref(null);

const faqs = [
  {
    q: "Bagaimana cara kerja platform EA Invitation?",
    a: "Sistem kami mengonversi data acara Anda menjadi sebuah tautan (link) website responsif yang siap diakses secara online dan didistribusikan ke daftar penerima tanpa batasan kuota.",
  },
  {
    q: "Berapa lama estimasi proses pembuatan undangan?",
    a: "Instan. Undangan digital Anda langsung aktif dan dapat diakses publik segera setelah Anda menyelesaikan pengisian data dan konfigurasi pada dashboard.",
  },
  {
    q: "Bagaimana cara memantau konfirmasi rsvp dari tamu?",
    a: "Semua konfirmasi kehadiran (RSVP), jumlah riil tamu, serta pesan ucapan dari penerima akan otomatis terekam dan ditampilkan secara real-time di panel kontrol Anda.",
  },
  {
    q: "Apakah data informasi bisa diubah setelah tautan disebarkan?",
    a: "Ya. Anda memiliki akses penuh untuk memperbarui detail tanggal, lokasi maps, susunan acara, maupun galeri foto kapan saja melalui dashboard tanpa mengubah tautan undangan.",
  },
  {
    q: "Apakah platform mendukung fitur musik latar (backsound)?",
    a: "Ya. Tersedia modul audio otomatis yang dilengkapi dengan tombol kontrol play/pause, di mana Anda dapat mengunggah atau memilih lagu yang relevan dengan konsep acara.",
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
        FAQ
      </p>

      <h2
        class="text-black dark:text-white text-4xl font-semibold tracking-tighter mb-4"
      >
        Pertanyaan yang Sering Diajukan
      </h2>

      <p
        class="max-w-3xl text-black/60 dark:text-white/60 md:text-lg font-medium leading-relaxed mb-14"
      >
        Pelajari teknis penggunaan fitur, sistem pembaruan data, dan mekanisme operasional platform EA Invitation secara komprehensif.
      </p>
    </div>

    <div class="relative max-w-7xl mx-auto px-4">
      <!-- FAQ Stack (Tanpa Kategori) -->
      <div class="space-y-3">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :delay="index * 100"
          :duration="800"
          class="group relative"
        >
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
                isOpen(index)
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0',
              ]"
            >
              <div
                class="px-5 md:px-6 pb-5 md:pb-6 border-t border-black/5 dark:border-white/5"
              >
                <p
                  class="text-black/70 dark:text-white/70 leading-relaxed pt-3 md:pt-4 text-sm md:text-base font-medium"
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