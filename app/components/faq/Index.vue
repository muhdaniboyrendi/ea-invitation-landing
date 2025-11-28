<script setup>
const openIndex = ref(null);

const faqs = [
  {
    category: "Umum",
    color: "from-cyan-400 to-blue-600",
    glowColor: "from-cyan-400/30 to-blue-600/30",
    bgGradient: "from-cyan-950/90 to-blue-900/90",
    questions: [
      {
        q: "Apa itu undangan pernikahan digital?",
        a: "Undangan pernikahan digital adalah undangan berbasis web yang dapat diakses melalui link unik. Undangan ini lebih praktis, ramah lingkungan, dan dapat dibagikan dengan mudah melalui WhatsApp, email, atau media sosial lainnya.",
      },
      {
        q: "Berapa lama waktu pembuatan undangan?",
        a: "Undangan langsung jadi tanpa ada proses tunggu dan anda dapat mengeditnya kapan pun.",
      },
      {
        q: "Apakah bisa request custom design?",
        a: "Desain tidak bisa dicustom, anda hanya bisa menggunkan tema desain yang sudah tersedia.",
      },
    ],
  },
  {
    category: "Fitur & Teknis",
    color: "from-purple-400 to-pink-600",
    glowColor: "from-purple-400/30 to-pink-600/30",
    bgGradient: "from-purple-950/90 to-pink-900/90",
    questions: [
      {
        q: "Apakah undangan bisa diakses tanpa internet?",
        a: "Undangan membutuhkan koneksi internet untuk akses pertama kali. Namun, setelah dibuka, beberapa elemen akan tersimpan di cache browser sehingga loading berikutnya lebih cepat.",
      },
      {
        q: "Bagaimana cara tracking konfirmasi tamu?",
        a: "Setiap undangan dilengkapi dengan dashboard admin real-time yang menampilkan statistik RSVP dan jumlah tamu yang akan hadir. Anda bisa mengaksesnya kapan saja melalui panel admin.",
      },
      {
        q: "Apakah mendukung musik background?",
        a: "Ya, undangan digital kami mendukung musik background dengan kontrol play/pause. Anda dapat memilih lagu favorit atau lagu tema pernikahan Anda untuk pengalaman yang lebih personal.",
      },
    ],
  },
  {
    category: "Pembayaran & Paket",
    color: "from-amber-400 to-orange-600",
    glowColor: "from-amber-400/30 to-orange-600/30",
    bgGradient: "from-amber-950/90 to-orange-900/90",
    questions: [
      {
        q: "Apa saja paket yang tersedia?",
        a: "Kami menyediakan 3 paket: Basic (fitur standar), Premium (fitur lengkap + custom design), dan Business (semua fitur + video cinematic + unlimited guest). Detail lengkap tersedia di halaman pricing.",
      },
      {
        q: "Bagaimana metode pembayaran?",
        a: "Kami menerima pembayaran melalui transfer bank (BCA, Mandiri, BNI, BRI), e-wallet (OVO, GoPay, Dana), dan virtual account.",
      },
      {
        q: "Apakah ada biaya tambahan?",
        a: "Ada biaya admin sebesar Rp 2.500 untuk setiap transaksi, selain itu tidak ada biaya tambahan sama sekali.",
      },
    ],
  },
  {
    category: "Support & Maintenance",
    color: "from-emerald-400 to-teal-600",
    glowColor: "from-emerald-400/30 to-teal-600/30",
    bgGradient: "from-emerald-950/90 to-teal-900/90",
    questions: [
      {
        q: "Bagaimana jika ada masalah teknis?",
        a: "Tim support kami siap membantu 24/7 melalui WhatsApp dan email. Response time maksimal 2 jam untuk issue teknis dan 24 jam untuk pertanyaan umum.",
      },
      {
        q: "Berapa lama undangan bisa diakses?",
        a: "Undangan akan aktif sesuai dengan paket yang dipilih yang dapat anda lihat di deskripsi fitur paket.",
      },
      {
        q: "Apakah bisa update data setelah publish?",
        a: "Tentu! Anda dapat melakukan update data seperti tanggal, lokasi, atau informasi lainnya kapan saja melalui dashboard admin.",
      },
    ],
  },
];

const toggleFAQ = (categoryIndex, questionIndex) => {
  const index = `${categoryIndex}-${questionIndex}`;
  openIndex.value = openIndex.value === index ? null : index;
};

const isOpen = (categoryIndex, questionIndex) => {
  return openIndex.value === `${categoryIndex}-${questionIndex}`;
};
</script>

<template>
  <section
    id="faq"
    class="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-purple-950/90 to-slate-900 dark:from-dark dark:via-purple-950/30 dark:to-dark"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <!-- Badge -->
        <div
          class="inline-flex items-center px-4 py-2 mb-8 backdrop-blur-md bg-white/5 dark:bg-black/10 border border-white/10 rounded-full shadow-lg"
        >
          <span
            class="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 animate-pulse"
          ></span>
          <span class="text-sm font-medium text-white/80"
            >Frequently Asked Questions</span
          >
          <i class="bi bi-arrow-down ml-2 text-white/60 text-sm"></i>
        </div>

        <!-- Main Title -->
        <h2
          class="text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-200"
        >
          Got Questions?
          <br />
          <span class="text-3xl lg:text-5xl text-white/60"
            >We've Got Answers</span
          >
        </h2>

        <!-- Description -->
        <p
          class="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
        >
          Temukan jawaban untuk pertanyaan yang sering diajukan seputar layanan
          undangan digital kami
        </p>
      </div>

      <!-- FAQ Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          v-for="(category, categoryIndex) in faqs"
          :key="categoryIndex"
          class="space-y-4"
        >
          <!-- Category Header -->
          <div class="group relative">
            <div
              :class="[
                'relative p-6 rounded-2xl border border-white/10',
                `bg-gradient-to-br ${category.bgGradient} dark:from-dark/80 dark:to-dark/70`,
              ]"
            >
              <div class="flex items-center gap-3">
                <div
                  :class="[
                    'w-10 h-10 rounded-xl flex items-center justify-center shadow-lg',
                    `bg-gradient-to-br ${category.color}`,
                  ]"
                >
                  <div class="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <h3 class="text-xl font-bold text-white">
                  {{ category.category }}
                </h3>
              </div>
            </div>
          </div>

          <!-- Questions -->
          <div
            v-for="(faq, qIndex) in category.questions"
            :key="qIndex"
            class="group relative"
          >
            <div
              class="relative bg-white/5 dark:bg-black/10 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <!-- Question Button -->
              <button
                @click="toggleFAQ(categoryIndex, qIndex)"
                type="button"
                class="w-full p-6 text-left flex items-start justify-between gap-4 group/btn"
              >
                <span
                  class="text-white font-medium leading-relaxed group-hover/btn:text-cyan-200 transition-colors duration-300"
                >
                  {{ faq.q }}
                </span>
                <i
                  :class="[
                    'bi bi-chevron-down flex-shrink-0 transition-all duration-300',
                    isOpen(categoryIndex, qIndex)
                      ? 'rotate-180 text-cyan-400'
                      : 'text-white/60 group-hover/btn:text-white',
                  ]"
                ></i>
              </button>

              <!-- Answer -->
              <div
                :class="[
                  'overflow-hidden transition-all duration-300 ease-in-out',
                  isOpen(categoryIndex, qIndex)
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0',
                ]"
              >
                <div class="px-6 pb-6 border-t border-white/5">
                  <p class="text-white/70 leading-relaxed pt-4">
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
/* Grid pattern */
.bg-grid-pattern {
  background-image: linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px);
  background-size: 80px 80px;
}
</style>
