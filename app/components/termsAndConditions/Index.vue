<script setup>
const activeSection = ref(null);

const termsData = [
  {
    id: "general",
    title: "Ketentuan Umum",
    icon: "bi-file-text",
    color: "from-cyan-400 to-blue-600",
    glowColor: "from-cyan-400/30 to-blue-600/30",
    bgGradient: "from-cyan-950/90 to-blue-900/90",
    sections: [
      {
        subtitle: "1.1 Definisi",
        content: [
          "Platform mengacu pada layanan undangan pernikahan digital yang disediakan melalui website dan aplikasi kami.",
          "Pengguna adalah individu atau pihak yang mendaftar dan menggunakan layanan kami untuk membuat undangan pernikahan digital.",
          "Konten adalah semua materi yang diunggah oleh pengguna termasuk foto, teks, video, dan audio.",
          "Layanan mencakup semua fitur dan fungsi yang tersedia dalam paket yang dipilih pengguna.",
        ],
      },
      {
        subtitle: "1.2 Penerimaan Ketentuan",
        content: [
          "Dengan mengakses dan menggunakan layanan kami, Anda menyetujui untuk terikat dengan syarat dan ketentuan ini.",
          "Jika Anda tidak setuju dengan sebagian atau seluruh ketentuan ini, harap tidak menggunakan layanan kami.",
          "Kami berhak untuk mengubah ketentuan ini sewaktu-waktu dengan pemberitahuan kepada pengguna.",
          "Penggunaan berkelanjutan setelah perubahan ketentuan dianggap sebagai penerimaan terhadap perubahan tersebut.",
        ],
      },
    ],
  },
  {
    id: "service",
    title: "Layanan & Paket",
    icon: "bi-box-seam",
    color: "from-purple-400 to-pink-600",
    glowColor: "from-purple-400/30 to-pink-600/30",
    bgGradient: "from-purple-950/90 to-pink-900/90",
    sections: [
      {
        subtitle: "2.1 Jenis Layanan",
        content: [
          "Kami menyediakan berbagai paket layanan undangan digital dengan fitur yang berbeda-beda sesuai kebutuhan.",
          "Setiap paket memiliki batasan fitur, jumlah tamu, dan durasi layanan yang berbeda.",
          "Upgrade atau downgrade paket dapat dilakukan dengan ketentuan yang berlaku.",
          "Fitur yang tersedia dapat berubah seiring dengan perkembangan platform.",
        ],
      },
      {
        subtitle: "2.2 Masa Aktif Layanan",
        content: [
          "Layanan undangan digital aktif sesuai dengan durasi paket yang dipilih (6 bulan atau 12 bulan).",
          "Perpanjangan layanan dapat dilakukan sebelum masa aktif berakhir dengan biaya yang berlaku.",
          "Kami akan mengirimkan notifikasi reminder 30 hari dan 7 hari sebelum masa aktif berakhir.",
          "Setelah masa aktif berakhir, undangan akan dinonaktifkan dan data akan diarsipkan selama 30 hari.",
          "Data yang telah diarsipkan dapat dikembalikan dengan biaya reaktivasi.",
        ],
      },
      {
        subtitle: "2.3 Pembuatan dan Revisi",
        content: [
          "Proses pembuatan undangan memerlukan waktu 2-5 hari kerja setelah semua data lengkap.",
          "Paket Basic mendapat 3x revisi gratis, Premium mendapat revisi unlimited.",
          "Revisi major (perubahan tema/konsep) setelah approval awal akan dikenakan biaya tambahan.",
          "Request revisi harus disampaikan maksimal 14 hari sebelum tanggal acara.",
        ],
      },
    ],
  },
  {
    id: "payment",
    title: "Pembayaran & Refund",
    icon: "bi-credit-card",
    color: "from-amber-400 to-orange-600",
    glowColor: "from-amber-400/30 to-orange-600/30",
    bgGradient: "from-amber-950/90 to-orange-900/90",
    sections: [
      {
        subtitle: "3.1 Metode Pembayaran",
        content: [
          "Pembayaran dapat dilakukan melalui transfer bank, virtual account, atau e-wallet yang tersedia.",
          "Konfirmasi pembayaran diproses maksimal 1x24 jam pada hari kerja.",
          "Untuk paket Premium dan Ultimate, tersedia opsi cicilan dengan ketentuan khusus.",
          "Bukti pembayaran harus dikirimkan melalui dashboard atau customer service kami.",
        ],
      },
      {
        subtitle: "3.2 Kebijakan Refund",
        content: [
          "Refund penuh (100%) dapat dilakukan jika pembatalan dilakukan dalam 3 hari setelah pembayaran dan belum ada proses design.",
          "Refund 50% jika pembatalan dilakukan setelah proses design dimulai namun belum approval.",
          "Tidak ada refund setelah design diapprove dan undangan sudah dipublish.",
          "Proses refund memerlukan waktu 7-14 hari kerja setelah pengajuan disetujui.",
          "Biaya administrasi bank atau payment gateway menjadi tanggung jawab pengguna.",
        ],
      },
      {
        subtitle: "3.3 Keterlambatan Pembayaran",
        content: [
          "Untuk pembayaran cicilan, keterlambatan lebih dari 7 hari akan dikenakan denda 2% per minggu.",
          "Layanan akan disuspend jika pembayaran terlambat lebih dari 14 hari.",
          "Undangan akan dinonaktifkan jika pembayaran tidak lunas hingga 30 hari.",
          "Reaktivasi setelah suspension memerlukan pelunasan dan biaya administrasi.",
        ],
      },
    ],
  },
  {
    id: "content",
    title: "Konten & Hak Kekayaan Intelektual",
    icon: "bi-shield-check",
    color: "from-emerald-400 to-teal-600",
    glowColor: "from-emerald-400/30 to-teal-600/30",
    bgGradient: "from-emerald-950/90 to-teal-900/90",
    sections: [
      {
        subtitle: "4.1 Kepemilikan Konten",
        content: [
          "Pengguna mempertahankan semua hak atas konten yang mereka unggah (foto, video, teks).",
          "Dengan mengunggah konten, pengguna memberikan lisensi kepada kami untuk menampilkan konten tersebut dalam undangan.",
          "Kami tidak mengklaim kepemilikan atas konten pengguna dan tidak akan menggunakan konten untuk tujuan lain tanpa izin.",
          "Pengguna bertanggung jawab penuh atas legalitas dan hak cipta konten yang diunggah.",
        ],
      },
      {
        subtitle: "4.2 Konten yang Dilarang",
        content: [
          "Pengguna dilarang mengunggah konten yang melanggar hukum, mengandung SARA, pornografi, atau kekerasan.",
          "Konten yang melanggar hak cipta atau trademark pihak lain tidak diperbolehkan.",
          "Kami berhak menghapus konten yang melanggar ketentuan tanpa pemberitahuan sebelumnya.",
          "Pelanggaran berulang dapat mengakibatkan penutupan akun tanpa refund.",
          "Konten yang dilaporkan oleh pihak ketiga akan ditinjau dan ditindaklanjuti sesuai prosedur.",
        ],
      },
      {
        subtitle: "4.3 Hak Kekayaan Intelektual Platform",
        content: [
          "Semua design template, logo, dan elemen visual platform adalah hak milik kami.",
          "Pengguna tidak diperbolehkan menyalin, mendistribusikan, atau menggunakan template untuk tujuan komersial.",
          "Source code dan teknologi platform dilindungi oleh hak cipta dan tidak boleh di-reverse engineer.",
          "Pelanggaran hak kekayaan intelektual kami akan ditindak secara hukum.",
        ],
      },
    ],
  },
  {
    id: "privacy",
    title: "Privasi & Keamanan Data",
    icon: "bi-lock",
    color: "from-rose-400 to-red-600",
    glowColor: "from-rose-400/30 to-red-600/30",
    bgGradient: "from-rose-950/90 to-red-900/90",
    sections: [
      {
        subtitle: "5.1 Pengumpulan Data",
        content: [
          "Kami mengumpulkan data personal yang diperlukan untuk penyediaan layanan (nama, email, nomor telepon).",
          "Data pengunjung undangan dikumpulkan untuk keperluan analytics dan improvement layanan.",
          "Informasi pembayaran diproses melalui payment gateway pihak ketiga yang secure dan terenkripsi.",
          "Kami tidak menyimpan informasi kartu kredit atau data finansial sensitif di server kami.",
        ],
      },
      {
        subtitle: "5.2 Penggunaan Data",
        content: [
          "Data pengguna digunakan untuk penyediaan layanan, customer support, dan komunikasi terkait akun.",
          "Kami dapat menggunakan data aggregate (tanpa identitas personal) untuk analisis dan marketing.",
          "Data tidak akan dijual atau dibagikan kepada pihak ketiga tanpa persetujuan eksplisit pengguna.",
          "Email marketing hanya dikirim kepada pengguna yang opt-in dan dapat di-unsubscribe kapan saja.",
        ],
      },
      {
        subtitle: "5.3 Keamanan Data",
        content: [
          "Kami menggunakan enkripsi SSL/TLS untuk melindungi transmisi data.",
          "Database kami dilindungi dengan firewall dan sistem keamanan berlapis.",
          "Backup data dilakukan secara regular untuk mencegah kehilangan data.",
          "Akses ke data pengguna dibatasi hanya untuk staff yang memerlukan dalam pekerjaan mereka.",
          "Pengguna bertanggung jawab untuk menjaga kerahasiaan password dan credential akun mereka.",
        ],
      },
      {
        subtitle: "5.4 Hak Pengguna atas Data",
        content: [
          "Pengguna dapat mengakses, mengubah, atau menghapus data personal mereka melalui dashboard.",
          "Request penghapusan data akan diproses dalam 30 hari setelah verifikasi identitas.",
          "Data yang dihapus tidak dapat dipulihkan kembali.",
          "Beberapa data mungkin tetap tersimpan untuk keperluan legal dan compliance.",
        ],
      },
    ],
  },
  {
    id: "liability",
    title: "Tanggung Jawab & Batasan",
    icon: "bi-exclamation-triangle",
    color: "from-violet-400 to-purple-600",
    glowColor: "from-violet-400/30 to-purple-600/30",
    bgGradient: "from-violet-950/90 to-purple-900/90",
    sections: [
      {
        subtitle: "6.1 Jaminan Layanan",
        content: [
          "Kami berusaha menyediakan layanan dengan uptime 99.9% namun tidak dapat menjamin 100% tanpa gangguan.",
          "Maintenance terjadwal akan diinformasikan minimal 48 jam sebelumnya.",
          "Kami tidak bertanggung jawab atas force majeure atau kejadian di luar kendali kami.",
          "Gangguan layanan karena provider third-party (hosting, CDN) bukan tanggung jawab langsung kami.",
        ],
      },
      {
        subtitle: "6.2 Batasan Tanggung Jawab",
        content: [
          "Kami tidak bertanggung jawab atas kerugian tidak langsung, kehilangan profit, atau kerugian konsekuensial.",
          "Tanggung jawab kami terbatas pada nilai paket yang dibayarkan pengguna.",
          "Kami tidak bertanggung jawab atas akurasi atau kelengkapan informasi yang dimasukkan pengguna.",
          "Pengguna bertanggung jawab penuh atas penggunaan layanan dan konten yang mereka buat.",
        ],
      },
      {
        subtitle: "6.3 Ganti Rugi",
        content: [
          "Pengguna setuju untuk mengganti rugi dan membebaskan kami dari klaim pihak ketiga yang timbul dari pelanggaran ketentuan.",
          "Pengguna bertanggung jawab atas semua biaya hukum yang timbul dari pelanggaran mereka.",
          "Klaim harus diajukan secara tertulis dalam waktu 30 hari sejak kejadian.",
          "Penyelesaian sengketa akan dilakukan melalui musyawarah terlebih dahulu sebelum jalur hukum.",
        ],
      },
    ],
  },
  {
    id: "termination",
    title: "Penutupan & Penghentian Layanan",
    icon: "bi-x-circle",
    color: "from-slate-400 to-gray-600",
    glowColor: "from-slate-400/30 to-gray-600/30",
    bgGradient: "from-slate-950/90 to-gray-900/90",
    sections: [
      {
        subtitle: "7.1 Penutupan oleh Pengguna",
        content: [
          "Pengguna dapat menutup akun kapan saja melalui dashboard atau menghubungi customer service.",
          "Penutupan akun sebelum masa aktif berakhir tidak mendapatkan refund untuk sisa periode.",
          "Data akan dihapus permanen 30 hari setelah penutupan akun.",
          "Pengguna dapat mengekspor data mereka sebelum penutupan akun.",
        ],
      },
      {
        subtitle: "7.2 Penutupan oleh Platform",
        content: [
          "Kami berhak menutup akun yang melanggar ketentuan layanan tanpa pemberitahuan sebelumnya.",
          "Akun yang tidak aktif selama 12 bulan berturut-turut dapat ditutup secara otomatis.",
          "Penutupan akun karena pelanggaran tidak mendapatkan refund.",
          "Notifikasi penutupan akan dikirimkan melalui email terdaftar.",
        ],
      },
      {
        subtitle: "7.3 Setelah Penghentian",
        content: [
          "Setelah layanan berakhir, undangan tidak dapat lagi diakses oleh tamu.",
          "Data RSVP dan buku tamu dapat diunduh sebelum penghentian layanan.",
          "Kewajiban pembayaran tetap berlaku meskipun layanan dihentikan.",
          "Ketentuan mengenai kerahasiaan dan hak kekayaan intelektual tetap berlaku setelah penghentian.",
        ],
      },
    ],
  },
  {
    id: "misc",
    title: "Ketentuan Lain-lain",
    icon: "bi-three-dots",
    color: "from-indigo-400 to-blue-600",
    glowColor: "from-indigo-400/30 to-blue-600/30",
    bgGradient: "from-indigo-950/90 to-blue-900/90",
    sections: [
      {
        subtitle: "8.1 Hukum yang Berlaku",
        content: [
          "Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia.",
          "Setiap sengketa akan diselesaikan melalui Pengadilan Negeri Jakarta Selatan.",
          "Jika ada ketentuan yang dianggap tidak sah, ketentuan lainnya tetap berlaku.",
          "Versi Bahasa Indonesia adalah versi resmi dalam hal terjadi perbedaan interpretasi.",
        ],
      },
      {
        subtitle: "8.2 Perubahan Ketentuan",
        content: [
          "Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu.",
          "Perubahan material akan diberitahukan melalui email atau notifikasi di platform.",
          "Tanggal efektif perubahan akan dicantumkan pada bagian atas dokumen ini.",
          "Penggunaan berkelanjutan setelah perubahan dianggap sebagai penerimaan terhadap ketentuan baru.",
        ],
      },
      {
        subtitle: "8.3 Kontak & Pertanyaan",
        content: [
          "Untuk pertanyaan mengenai syarat dan ketentuan ini, hubungi kami melalui email: legal@weddingdigital.com",
          "Customer service tersedia 24/7 melalui WhatsApp, Live Chat, dan email support.",
          "Untuk pengaduan atau dispute, kirimkan surat resmi ke alamat kantor kami.",
          "Kami akan merespons pertanyaan dalam waktu maksimal 2x24 jam pada hari kerja.",
        ],
      },
    ],
  },
];

const toggleSection = (sectionId) => {
  activeSection.value = activeSection.value === sectionId ? null : sectionId;
};

const lastUpdated = ref("5 November 2025");
</script>

<template>
  <section
    id="terms"
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
            >Terms & Conditions</span
          >
          <i class="bi bi-file-earmark-text ml-2 text-white/60 text-sm"></i>
        </div>

        <!-- Main Title -->
        <h2
          class="text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-200"
        >
          Syarat & Ketentuan
          <br />
          <span class="text-3xl lg:text-5xl text-white/60">Layanan Kami</span>
        </h2>

        <!-- Description -->
        <p
          class="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-4"
        >
          Mohon baca dengan seksama syarat dan ketentuan penggunaan layanan
          undangan digital kami
        </p>

        <!-- Last Updated -->
        <div class="flex items-center justify-center gap-2 text-white/50">
          <i class="bi bi-clock-history text-sm"></i>
          <span class="text-sm">Terakhir diperbarui: {{ lastUpdated }}</span>
        </div>
      </div>

      <!-- Terms Content -->
      <div class="max-w-5xl mx-auto space-y-6">
        <div v-for="term in termsData" :key="term.id" class="group relative">
          <!-- Main Card -->
          <div
            :class="[
              'absolute -inset-1 blur-lg rounded-2xl transition-all duration-500',
              activeSection === term.id
                ? 'opacity-75'
                : 'opacity-50 group-hover:opacity-75',
              `bg-gradient-to-r ${term.glowColor}`,
            ]"
          ></div>

          <div
            :class="[
              'relative rounded-2xl border transition-all duration-300',
              activeSection === term.id
                ? 'border-white/20'
                : 'border-white/10 hover:border-white/20',
              `bg-gradient-to-br ${term.bgGradient} dark:from-black/80 dark:to-black/70`,
            ]"
          >
            <!-- Header Button -->
            <button
              @click="toggleSection(term.id)"
              class="w-full p-8 text-left flex items-center justify-between gap-4 group/btn"
            >
              <div class="flex items-center gap-4 flex-1">
                <div
                  :class="[
                    'w-14 h-14 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0',
                    `bg-gradient-to-br ${term.color}`,
                  ]"
                >
                  <i :class="[term.icon, 'text-white text-2xl']"></i>
                </div>
                <div>
                  <h3
                    class="text-2xl font-bold text-white mb-1 group-hover/btn:text-cyan-200 transition-colors duration-300"
                  >
                    {{ term.title }}
                  </h3>
                  <p class="text-white/60 text-sm">
                    {{ term.sections.length }} bagian
                  </p>
                </div>
              </div>
              <i
                :class="[
                  'bi bi-chevron-down text-2xl transition-all duration-300',
                  activeSection === term.id
                    ? 'rotate-180 text-cyan-400'
                    : 'text-white/60 group-hover/btn:text-white',
                ]"
              ></i>
            </button>

            <!-- Content -->
            <div
              :class="[
                'overflow-hidden transition-all duration-500 ease-in-out',
                activeSection === term.id
                  ? 'max-h-[5000px] opacity-100'
                  : 'max-h-0 opacity-0',
              ]"
            >
              <div class="px-8 pb-8 space-y-6 border-t border-white/5 pt-6">
                <div
                  v-for="(section, index) in term.sections"
                  :key="index"
                  class="space-y-4"
                >
                  <!-- Subtitle -->
                  <h4
                    class="text-lg font-bold text-white flex items-center gap-2"
                  >
                    <div
                      :class="[
                        'w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold',
                        `bg-gradient-to-br ${term.color}`,
                      ]"
                    >
                      {{ index + 1 }}
                    </div>
                    {{ section.subtitle }}
                  </h4>

                  <!-- Content List -->
                  <div class="pl-10 space-y-3">
                    <div
                      v-for="(item, itemIndex) in section.content"
                      :key="itemIndex"
                      class="flex items-start gap-3 group/item"
                    >
                      <div
                        class="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-white/20 transition-colors duration-300"
                      >
                        <div
                          :class="[
                            'w-2 h-2 rounded-full',
                            `bg-gradient-to-br ${term.color}`,
                          ]"
                        ></div>
                      </div>
                      <p
                        class="text-white/80 leading-relaxed group-hover/item:text-white transition-colors duration-300"
                      >
                        {{ item }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Acceptance Notice -->
      <div class="mt-16 max-w-5xl mx-auto">
        <div class="group relative">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-purple-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-75"
          ></div>
          <div
            class="relative backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 rounded-2xl p-8"
          >
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
              >
                <i class="bi bi-info-circle text-white text-xl"></i>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-white mb-3">
                  Penerimaan Ketentuan
                </h3>
                <p class="text-white/70 leading-relaxed mb-4">
                  Dengan menggunakan layanan kami, Anda menyatakan bahwa Anda
                  telah membaca, memahami, dan menyetujui untuk terikat dengan
                  syarat dan ketentuan ini. Jika Anda tidak menyetujui ketentuan
                  ini, mohon untuk tidak menggunakan layanan kami.
                </p>
                <p class="text-white/70 leading-relaxed">
                  Untuk pertanyaan lebih lanjut mengenai syarat dan ketentuan
                  ini, silakan hubungi tim legal kami di
                  <a
                    href="mailto:legal@weddingdigital.com"
                    class="text-cyan-400 hover:text-cyan-300 font-medium"
                    >legal@weddingdigital.com</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div
        class="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div class="group/card relative">
          <div
            class="absolute -inset-0.5 bg-gradient-to-r from-blue-400/30 to-indigo-600/30 blur rounded-xl opacity-0 group-hover/card:opacity-50 transition-all duration-300"
          ></div>
          <div
            class="relative backdrop-blur-md bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-xl p-6 transition-all duration-300 text-center"
          >
            <i class="bi bi-envelope text-4xl text-emerald-400 mb-3"></i>
            <h4 class="text-white font-semibold mb-2">Hubungi Legal</h4>
            <p class="text-white/70 text-sm mb-4">Ada pertanyaan hukum?</p>
            <button
              class="text-emerald-400 text-sm font-medium hover:text-emerald-300 flex items-center gap-1 mx-auto"
            >
              <i class="bi bi-send"></i>
              Contact
            </button>
          </div>
        </div>
      </div>

      <!-- CTA Bottom -->
      <div class="mt-16 text-center">
        <div class="group relative inline-block max-w-4xl">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-purple-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-75"
          ></div>
          <div
            class="relative backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 rounded-2xl p-8"
          >
            <h3 class="text-2xl font-bold text-white mb-3">Siap Memulai?</h3>
            <p class="text-white/70 mb-6 max-w-2xl mx-auto">
              Dengan menyetujui syarat dan ketentuan ini, Anda dapat langsung
              membuat undangan pernikahan digital yang indah dan profesional
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
              <button
                class="group/btn relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <span class="relative z-10 flex items-center gap-2">
                  <i class="bi bi-check-circle"></i>
                  Saya Setuju & Mulai
                </span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                ></div>
              </button>
              <button
                class="px-8 py-4 backdrop-blur-md bg-white/5 dark:bg-black/10 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-2"
              >
                <i class="bi bi-headset"></i>
                Hubungi Support
              </button>
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
