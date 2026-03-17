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
    class="relative py-20 overflow-hidden bg-light dark:bg-dark"
  >
    <div class="relative max-w-7xl mx-auto px-4 lg:px-6">
      <!-- Section Header -->
      <div class="text-center mb-10">
        <!-- Main Title -->
        <h2
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="text-4xl/12 sm:text-5xl/15 lg:text-6xl/19 font-bold mb-6 text-black dark:text-white tracking-wide max-w-2xl mx-auto"
        >
          FAQ
        </h2>

        <!-- Description -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="text-xl lg:text-2xl text-dark/60 dark:text-light/60 max-w-4xl mx-auto leading-relaxed"
        >
          Temukan jawaban untuk pertanyaan yang sering diajukan seputar layanan
          undangan digital kami
        </p>
      </div>

      <!-- FAQ Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <div
          v-for="(category, categoryIndex) in faqs"
          :key="categoryIndex"
          class="space-y-2"
        >
          <!-- Category Header -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :visible-once="{ opacity: 1, x: 0 }"
            :duration="1000"
            class="group relative"
          >
            <div
              class="relative p-4 md:p-6 rounded-xl bg-white dark:bg-white/3 border border-black/20 dark:border-white/20 shadow-xl"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-10 h-10 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center"
                >
                  <div class="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <h3 class="text-xl font-bold text-black dark:text-white">
                  {{ category.category }}
                </h3>
              </div>
            </div>
          </div>

          <!-- Questions -->
          <div
            v-for="(faq, qIndex) in category.questions"
            :key="qIndex"
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :visible-once="{ opacity: 1, x: 0 }"
            :delay="qIndex * 100"
            :duration="1000"
            class="group relative"
          >
            <div
              class="relative bg-white/60 dark:bg-dark border border-black/20 dark:border-white/20 rounded-xl transition duration-300"
            >
              <!-- Question Button -->
              <button
                @click="toggleFAQ(categoryIndex, qIndex)"
                type="button"
                class="w-full p-4 md:p-6 text-left flex items-start justify-between gap-4 group/btn cursor-pointer"
              >
                <span
                  class="text-dark dark:text-light font-medium leading-relaxed"
                >
                  {{ faq.q }}
                </span>
                <i
                  :class="[
                    'bi bi-chevron-down flex-shrink-0 transition-all duration-300',
                    isOpen(categoryIndex, qIndex)
                      ? 'rotate-180 text-primary'
                      : 'text-dark/60 dark:text-light/60 group-hover/btn:text-primary',
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
                <div
                  class="px-4 md:px-6 pb-4 md:pb-6 border-t border-black/20 dark:border-white/20"
                >
                  <p
                    class="text-black/70 dark:text-white/70 leading-relaxed pt-2 md:pt-4"
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
