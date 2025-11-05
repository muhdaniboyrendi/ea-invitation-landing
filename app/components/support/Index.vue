<script setup>
const selectedCategory = ref("getting-started");

const helpCategories = [
  {
    id: "getting-started",
    title: "Memulai",
    icon: "bi-rocket-takeoff",
    color: "from-cyan-400 to-blue-600",
    glowColor: "from-cyan-400/30 to-blue-600/30",
    bgGradient: "from-cyan-950/90 to-blue-900/90",
    articles: [
      {
        title: "Cara Membuat Undangan Digital Pertama Kali",
        description:
          "Panduan lengkap untuk membuat undangan digital Anda dari awal hingga selesai.",
        steps: [
          "Pilih paket yang sesuai dengan kebutuhan Anda",
          "Daftar dan buat akun di platform kami",
          "Upload foto dan materi yang diperlukan",
          "Isi data mempelai dan informasi acara",
          "Pilih template atau custom design",
          "Review dan approve design",
          "Publish dan bagikan link undangan",
        ],
      },
      {
        title: "Memilih Paket yang Tepat",
        description:
          "Tips memilih paket undangan digital yang sesuai dengan budget dan kebutuhan.",
        steps: [
          "Tentukan jumlah tamu yang akan diundang",
          "Pertimbangkan fitur yang Anda butuhkan",
          "Sesuaikan dengan budget pernikahan",
          "Konsultasi dengan tim kami untuk rekomendasi",
        ],
      },
    ],
  },
  {
    id: "design",
    title: "Desain & Kustomisasi",
    icon: "bi-palette",
    color: "from-purple-400 to-pink-600",
    glowColor: "from-purple-400/30 to-pink-600/30",
    bgGradient: "from-purple-950/90 to-pink-900/90",
    articles: [
      {
        title: "Cara Mengupload dan Mengatur Foto",
        description:
          "Panduan mengupload foto dengan kualitas terbaik untuk undangan Anda.",
        steps: [
          "Siapkan foto dengan resolusi minimal 1920x1080px",
          "Format file: JPG, PNG, atau WEBP",
          "Ukuran maksimal per foto: 5MB",
          "Upload melalui dashboard admin",
          "Atur posisi dan crop sesuai keinginan",
          "Preview hasil sebelum publish",
        ],
      },
      {
        title: "Custom Design & Request Revisi",
        description:
          "Bagaimana cara melakukan kustomisasi dan request revisi design.",
        steps: [
          "Login ke dashboard admin Anda",
          'Pilih menu "Design Customization"',
          "Pilih elemen yang ingin diubah (warna, font, layout)",
          "Submit request revisi dengan detail yang jelas",
          "Tim designer akan merespon dalam 1x24 jam",
          "Review hasil revisi dan approve",
        ],
      },
      {
        title: "Menambahkan Musik Background",
        description:
          "Cara menambahkan dan mengatur musik latar untuk undangan digital.",
        steps: [
          "Siapkan file musik format MP3",
          'Upload melalui menu "Music Settings"',
          "Atur auto-play dan volume default",
          "Tambahkan control button untuk tamu",
          "Test musik sebelum publish",
        ],
      },
    ],
  },
  {
    id: "features",
    title: "Fitur & Fungsi",
    icon: "bi-gear",
    color: "from-amber-400 to-orange-600",
    glowColor: "from-amber-400/30 to-orange-600/30",
    bgGradient: "from-amber-950/90 to-orange-900/90",
    articles: [
      {
        title: "Menggunakan Fitur RSVP",
        description:
          "Cara mengaktifkan dan mengelola konfirmasi kehadiran tamu.",
        steps: [
          "Aktifkan fitur RSVP di dashboard",
          "Atur deadline konfirmasi",
          "Buat form konfirmasi sesuai kebutuhan",
          "Monitor konfirmasi real-time",
          "Export data RSVP untuk keperluan catering",
          "Kirim reminder otomatis ke tamu",
        ],
      },
      {
        title: "Setup Amplop Digital",
        description: "Panduan mengatur amplop digital dan informasi rekening.",
        steps: [
          'Masuk ke menu "Digital Gift"',
          "Tambahkan informasi rekening bank",
          "Upload QR Code (opsional)",
          "Atur tampilan amplop digital",
          "Test fitur sebelum publish",
          "Monitor transfer yang masuk",
        ],
      },
      {
        title: "Mengelola Buku Tamu Digital",
        description: "Cara mengelola ucapan dan komentar dari tamu undangan.",
        steps: [
          "Aktifkan fitur buku tamu",
          "Atur moderasi komentar (opsional)",
          "Balas ucapan dari tamu",
          "Filter dan export ucapan",
          "Bagikan ucapan favorit ke sosial media",
        ],
      },
    ],
  },
  {
    id: "sharing",
    title: "Berbagi & Distribusi",
    icon: "bi-share",
    color: "from-emerald-400 to-teal-600",
    glowColor: "from-emerald-400/30 to-teal-600/30",
    bgGradient: "from-emerald-950/90 to-teal-900/90",
    articles: [
      {
        title: "Cara Membagikan Undangan Digital",
        description:
          "Berbagai cara efektif untuk membagikan undangan kepada tamu.",
        steps: [
          "Copy link undangan dari dashboard",
          "Bagikan via WhatsApp dengan template message",
          "Share melalui email blast",
          "Post di sosial media dengan teaser",
          "Gunakan QR Code untuk undangan fisik",
          "Kirim broadcast message",
        ],
      },
      {
        title: "Tracking Pengunjung Undangan",
        description:
          "Cara melihat statistik kunjungan dan engagement undangan.",
        steps: [
          'Akses menu "Analytics" di dashboard',
          "Lihat jumlah total visitor",
          "Monitor bounce rate dan duration",
          "Lihat device dan browser tamu",
          "Analisa peak time kunjungan",
          "Export report untuk dokumentasi",
        ],
      },
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    icon: "bi-tools",
    color: "from-rose-400 to-red-600",
    glowColor: "from-rose-400/30 to-red-600/30",
    bgGradient: "from-rose-950/90 to-red-900/90",
    articles: [
      {
        title: "Undangan Tidak Bisa Dibuka",
        description:
          "Solusi jika tamu mengalami masalah saat membuka undangan.",
        steps: [
          "Pastikan koneksi internet stabil",
          "Clear cache dan cookies browser",
          "Coba buka di browser berbeda",
          "Update browser ke versi terbaru",
          "Coba akses di device berbeda",
          "Hubungi support jika masalah berlanjut",
        ],
      },
      {
        title: "Foto Tidak Tampil atau Loading Lambat",
        description: "Cara mengatasi masalah loading foto pada undangan.",
        steps: [
          "Kompres ukuran foto tanpa mengurangi kualitas",
          "Gunakan format WEBP untuk loading lebih cepat",
          "Pastikan koneksi internet memadai",
          "Tunggu beberapa saat untuk initial loading",
          "Clear cache browser dan reload",
          "Hubungi support untuk optimasi server",
        ],
      },
      {
        title: "Musik Tidak Otomatis Play",
        description: "Solusi masalah autoplay musik background.",
        steps: [
          "Browser modern memblokir autoplay secara default",
          "Tamu harus klik tombol play manual",
          "Tambahkan instruksi di landing page",
          "Gunakan splash screen dengan button play",
          "Ini adalah limitasi browser, bukan bug",
        ],
      },
    ],
  },
  {
    id: "account",
    title: "Akun & Billing",
    icon: "bi-person-circle",
    color: "from-violet-400 to-purple-600",
    glowColor: "from-violet-400/30 to-purple-600/30",
    bgGradient: "from-violet-950/90 to-purple-900/90",
    articles: [
      {
        title: "Mengubah Data Akun",
        description: "Cara update informasi akun dan password.",
        steps: [
          "Login ke dashboard Anda",
          'Klik menu "Profile Settings"',
          "Update informasi yang diperlukan",
          "Verifikasi perubahan via email",
          "Save perubahan",
        ],
      },
      {
        title: "Upgrade atau Downgrade Paket",
        description: "Panduan mengubah paket langganan.",
        steps: [
          'Akses menu "Subscription"',
          "Pilih paket yang diinginkan",
          "Review perubahan fitur dan harga",
          "Lakukan pembayaran selisih (upgrade)",
          "Perubahan akan aktif setelah pembayaran",
          "Dapatkan konfirmasi via email",
        ],
      },
      {
        title: "Perpanjangan Langganan",
        description: "Cara memperpanjang masa aktif undangan digital.",
        steps: [
          "Cek masa aktif di dashboard",
          "Pilih durasi perpanjangan",
          "Dapatkan diskon untuk perpanjangan tahunan",
          "Lakukan pembayaran",
          "Masa aktif akan otomatis bertambah",
          "Simpan invoice untuk dokumentasi",
        ],
      },
    ],
  },
];

const currentCategory = computed(() => {
  return helpCategories.find((cat) => cat.id === selectedCategory.value);
});

const selectCategory = (categoryId) => {
  selectedCategory.value = categoryId;
};
</script>

<template>
  <section
    id="help"
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
          <span class="text-sm font-medium text-white/80">Help Center</span>
          <i class="bi bi-question-circle ml-2 text-white/60 text-sm"></i>
        </div>

        <!-- Main Title -->
        <h2
          class="text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-200"
        >
          Pusat Bantuan
          <br />
          <span class="text-3xl lg:text-5xl text-white/60"
            >Panduan Lengkap</span
          >
        </h2>

        <!-- Description -->
        <p
          class="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
        >
          Temukan panduan dan tutorial lengkap untuk memaksimalkan penggunaan
          undangan digital Anda
        </p>
      </div>

      <!-- Help Content -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Sidebar Categories -->
        <div class="lg:col-span-1 space-y-3">
          <div
            v-for="category in helpCategories"
            :key="category.id"
            class="group relative"
          >
            <div
              v-if="selectedCategory === category.id"
              :class="[
                'absolute -inset-0.5 blur rounded-xl transition-all duration-300',
                `bg-gradient-to-r ${category.glowColor}`,
              ]"
            ></div>
            <button
              @click="selectCategory(category.id)"
              :class="[
                'relative w-full p-4 rounded-xl border transition-all duration-300 text-left flex items-center gap-3',
                selectedCategory === category.id
                  ? 'bg-white/10 dark:bg-black/20 border-white/20'
                  : 'backdrop-blur-md bg-white/5 dark:bg-black/10 border-white/10 hover:bg-white/10 hover:border-white/20',
              ]"
            >
              <div
                :class="[
                  'w-10 h-10 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0',
                  `bg-gradient-to-br ${category.color}`,
                ]"
              >
                <i :class="[category.icon, 'text-white text-lg']"></i>
              </div>
              <div class="flex-1 min-w-0">
                <h3
                  :class="[
                    'font-semibold text-sm',
                    selectedCategory === category.id
                      ? 'text-white'
                      : 'text-white/80 group-hover:text-white',
                  ]"
                >
                  {{ category.title }}
                </h3>
                <p class="text-xs text-white/50 mt-0.5">
                  {{ category.articles.length }} artikel
                </p>
              </div>
              <i
                v-if="selectedCategory === category.id"
                class="bi bi-chevron-right text-cyan-400"
              ></i>
            </button>
          </div>
        </div>

        <!-- Main Content -->
        <div v-if="currentCategory" class="lg:col-span-3 space-y-6">
          <div
            v-for="(article, index) in currentCategory.articles"
            :key="index"
            class="group relative"
          >
            <div
              :class="[
                'absolute -inset-1 blur-lg rounded-2xl opacity-50 group-hover:opacity-75 transition-all duration-500',
                `bg-gradient-to-r ${currentCategory.glowColor}`,
              ]"
            ></div>
            <div
              :class="[
                'relative p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300',
                `bg-gradient-to-br ${currentCategory.bgGradient} dark:from-black/80 dark:to-black/70`,
              ]"
            >
              <!-- Article Header -->
              <div class="flex items-start gap-4 mb-6">
                <div
                  :class="[
                    'w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0',
                    `bg-gradient-to-br ${currentCategory.color}`,
                  ]"
                >
                  <span class="text-white font-bold text-lg">{{
                    index + 1
                  }}</span>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-white mb-2">
                    {{ article.title }}
                  </h3>
                  <p class="text-white/70 text-sm leading-relaxed">
                    {{ article.description }}
                  </p>
                </div>
              </div>

              <!-- Steps List -->
              <div class="space-y-3 pl-16">
                <div
                  v-for="(step, stepIndex) in article.steps"
                  :key="stepIndex"
                  class="flex items-start gap-3 group/step"
                >
                  <div
                    class="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/step:bg-white/20 transition-colors duration-300"
                  >
                    <div
                      :class="[
                        'w-2 h-2 rounded-full',
                        `bg-gradient-to-br ${currentCategory.color}`,
                      ]"
                    ></div>
                  </div>
                  <p
                    class="text-white/80 text-sm leading-relaxed group-hover/step:text-white transition-colors duration-300"
                  >
                    {{ step }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Support CTA -->
      <div class="mt-20 text-center">
        <div class="group relative inline-block max-w-4xl">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-purple-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-75"
          ></div>
          <div
            class="relative backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 rounded-2xl p-8"
          >
            <div class="flex items-center justify-center gap-4 mb-4">
              <div
                class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl"
              >
                <i class="bi bi-headset text-white text-2xl"></i>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">
              Butuh Bantuan Lebih Lanjut?
            </h3>
            <p class="text-white/70 mb-6 max-w-2xl mx-auto">
              Tim support kami siap membantu Anda 24/7 melalui berbagai channel.
              Kami akan merespons pertanyaan Anda dalam waktu maksimal 2 jam!
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
              <button
                class="group/btn relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <span class="relative z-10 flex items-center gap-2">
                  <i class="bi bi-whatsapp"></i>
                  WhatsApp Support
                </span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                ></div>
              </button>
              <button
                class="px-8 py-4 backdrop-blur-md bg-white/5 dark:bg-black/10 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-2"
              >
                <i class="bi bi-envelope"></i>
                Email Support
              </button>
              <button
                class="px-8 py-4 backdrop-blur-md bg-white/5 dark:bg-black/10 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-2"
              >
                <i class="bi bi-chat-dots"></i>
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="group relative">
          <div
            class="absolute -inset-0.5 bg-gradient-to-r from-blue-400/30 to-indigo-600/30 blur rounded-xl opacity-0 group-hover:opacity-50 transition-all duration-300"
          ></div>
          <div
            class="relative backdrop-blur-md bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-xl p-6 transition-all duration-300"
          >
            <i class="bi bi-book text-3xl text-cyan-400 mb-3"></i>
            <h4 class="text-white font-semibold mb-2">Dokumentasi</h4>
            <p class="text-white/70 text-sm mb-4">
              Dokumentasi lengkap API dan developer guide
            </p>
            <a
              href="#"
              class="text-cyan-400 text-sm font-medium hover:text-cyan-300 flex items-center gap-1"
            >
              Baca Dokumentasi
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>

        <div class="group relative">
          <div
            class="absolute -inset-0.5 bg-gradient-to-r from-purple-400/30 to-pink-600/30 blur rounded-xl opacity-0 group-hover:opacity-50 transition-all duration-300"
          ></div>
          <div
            class="relative backdrop-blur-md bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-xl p-6 transition-all duration-300"
          >
            <i class="bi bi-play-circle text-3xl text-purple-400 mb-3"></i>
            <h4 class="text-white font-semibold mb-2">Video Tutorial</h4>
            <p class="text-white/70 text-sm mb-4">
              Pelajari dengan video tutorial step-by-step
            </p>
            <a
              href="#"
              class="text-purple-400 text-sm font-medium hover:text-purple-300 flex items-center gap-1"
            >
              Tonton Tutorial
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>

        <div class="group relative">
          <div
            class="absolute -inset-0.5 bg-gradient-to-r from-amber-400/30 to-orange-600/30 blur rounded-xl opacity-0 group-hover:opacity-50 transition-all duration-300"
          ></div>
          <div
            class="relative backdrop-blur-md bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-xl p-6 transition-all duration-300"
          >
            <i class="bi bi-people text-3xl text-amber-400 mb-3"></i>
            <h4 class="text-white font-semibold mb-2">Community Forum</h4>
            <p class="text-white/70 text-sm mb-4">
              Diskusi dengan pengguna lain dan berbagi tips
            </p>
            <a
              href="#"
              class="text-amber-400 text-sm font-medium hover:text-amber-300 flex items-center gap-1"
            >
              Join Forum
              <i class="bi bi-arrow-right"></i>
            </a>
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
