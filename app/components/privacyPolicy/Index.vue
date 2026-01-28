<script setup>
const config = useRuntimeConfig();
const appUrl = config.public.appUrl;
</script>

<template>
  <div
    class="min-h-screen relative overflow-hidden bg-gradient-to-b from-slate-900 via-purple-950/90 to-slate-900 dark:from-dark dark:via-purple-950/30 dark:to-dark"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>

    <div
      class="relative z-10 max-w-6xl mx-auto px-3 md:px-4 lg:px-6 py-20 lg:py-32"
    >
      <!-- Header Section -->
      <div class="text-center mb-16">
        <!-- Badge -->
        <div
          class="inline-flex items-center px-4 py-2 mb-8 backdrop-blur-md bg-white/5 dark:bg-black/10 border border-white/10 rounded-full shadow-lg"
        >
          <span
            class="w-2 h-2 bg-gradient-to-r from-sky-400 to-teal-400 rounded-full mr-3 animate-pulse"
          ></span>
          <span class="text-sm font-medium text-white/80">Legal Document</span>
          <i class="bi bi-arrow-right ml-2 text-white/60 text-sm"></i>
        </div>

        <!-- Main Title -->
        <h1
          class="text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-teal-200"
        >
          Kebijakan Privasi
        </h1>

        <!-- Subtitle -->
        <div class="flex items-center justify-center gap-3 text-white/60 mb-4">
          <i class="bi bi-shield-lock text-xl"></i>
          <span class="text-lg">eainvitation.com</span>
        </div>
      </div>

      <!-- Privacy Notice -->
      <div class="group relative rounded-3xl mb-8">
        <div
          class="absolute -inset-1 bg-gradient-to-r from-sky-400/30 to-sky-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
        ></div>
        <div
          class="relative bg-dark/50 p-4 lg:p-6 rounded-3xl border border-white/10 hover:border-white/20"
        >
          <div class="flex items-center gap-4 mb-4 md:mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
            >
              <i class="bi bi-shield-check text-white text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-white">Persetujuan</h3>
          </div>
          <div>
            <p class="text-white/80 leading-relaxed">
              Dengan menggunakan eainvitation.com, Anda menyatakan telah membaca
              dan memahami Kebijakan Privasi ini dan menyetujui pengumpulan
              serta penggunaan informasi Anda sebagaimana dijelaskan di sini.
            </p>
          </div>
        </div>
      </div>

      <!-- Privacy Content Grid -->
      <div class="grid grid-cols-1 gap-3 md:gap-4">
        <!-- Section 1: Pendahuluan -->
        <TermsAndConditionsTermSection title="1. Pendahuluan">
          <p class="text-white/80 leading-relaxed mb-4">
            EA Invitation ("kami", "Platform") menghargai privasi Anda.
            Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan,
            menggunakan, menyimpan, dan melindungi informasi pribadi Anda saat
            menggunakan layanan kami.
          </p>
          <p class="text-white/80 leading-relaxed">
            Dengan menggunakan Platform kami, Anda menyetujui praktik yang
            dijelaskan dalam Kebijakan Privasi ini.
          </p>
        </TermsAndConditionsTermSection>

        <!-- Section 2: Informasi yang Kami Kumpulkan -->
        <TermsAndConditionsTermSection title="2. Informasi yang Kami Kumpulkan">
          <div class="space-y-6">
            <!-- 2.1 -->
            <div>
              <h4 class="text-lg font-semibold text-white mb-3">
                2.1 Informasi yang Anda Berikan
              </h4>

              <div class="space-y-4">
                <div>
                  <p class="text-white/70 text-sm font-medium mb-2">
                    Saat Pendaftaran:
                  </p>
                  <ul class="space-y-2 text-white/80">
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                      <span>Nama lengkap</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                      <span>Alamat email</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                      <span>Nomor telepon</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                      <span>Password (terenkripsi)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p class="text-white/70 text-sm font-medium mb-2">
                    Saat Menggunakan Layanan:
                  </p>
                  <ul class="space-y-2 text-white/80">
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                      <span>Nama pasangan</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                      <span>Tanggal pernikahan</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                      <span>Lokasi acara</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                      <span>Foto dan video yang diunggah</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                      <span>Teks dan konten undangan</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                      <span>Daftar tamu undangan</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                      <span
                        >Informasi pembayaran (diproses melalui payment gateway
                        pihak ketiga)</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 2.2 -->
            <div class="pt-4 border-t border-white/10">
              <h4 class="text-lg font-semibold text-white mb-3">
                2.2 Informasi yang Dikumpulkan Otomatis
              </h4>

              <div class="space-y-4">
                <div>
                  <p class="text-white/70 text-sm font-medium mb-2">
                    Data Teknis:
                  </p>
                  <ul class="space-y-2 text-white/80">
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                      <span>Alamat IP</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                      <span>Jenis browser dan perangkat</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                      <span>Sistem operasi</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                      <span>Waktu akses</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                      <span>Halaman yang dikunjungi</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                      <span>Sumber referral (dari mana Anda datang)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p class="text-white/70 text-sm font-medium mb-2">
                    Cookies dan Teknologi Pelacakan:
                  </p>
                  <p class="text-white/80 leading-relaxed">
                    Kami menggunakan cookies untuk meningkatkan pengalaman Anda,
                    seperti menyimpan preferensi login dan menganalisis
                    penggunaan website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 3: Cara Kami Menggunakan Informasi -->
        <TermsAndConditionsTermSection
          title="3. Cara Kami Menggunakan Informasi Anda"
        >
          <div class="space-y-4">
            <p class="text-white/80 leading-relaxed">
              Kami menggunakan informasi Anda untuk:
            </p>

            <div>
              <h5 class="text-base font-semibold text-white mb-2">
                Menyediakan Layanan:
              </h5>
              <ul class="space-y-2 text-white/80">
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
                  <span>Membuat dan mengelola akun Anda</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
                  <span>Memproses pembayaran</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
                  <span>Membuat dan menyimpan undangan digital Anda</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
                  <span>Mengirim undangan ke tamu Anda</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
                  <span>Menyediakan fitur RSVP dan konfirmasi kehadiran</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 class="text-base font-semibold text-white mb-2">
                Komunikasi:
              </h5>
              <ul class="space-y-2 text-white/80">
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
                  <span>Mengirim konfirmasi transaksi</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
                  <span>Memberikan update layanan</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
                  <span>Merespons pertanyaan Anda</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 class="text-base font-semibold text-white mb-2">
                Peningkatan Layanan:
              </h5>
              <ul class="space-y-2 text-white/80">
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
                  <span>Menganalisis penggunaan Platform</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
                  <span>Mengidentifikasi dan memperbaiki masalah teknis</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
                  <span>Mengembangkan fitur baru</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
                  <span>Melakukan riset dan analisis</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 class="text-base font-semibold text-white mb-2">Keamanan:</h5>
              <ul class="space-y-2 text-white/80">
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
                  <span>Mencegah penipuan</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
                  <span>Melindungi dari aktivitas berbahaya</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
                  <span>Mematuhi kewajiban hukum</span>
                </li>
              </ul>
            </div>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 4: Berbagi Informasi -->
        <TermsAndConditionsTermSection
          title="4. Berbagi Informasi dengan Pihak Ketiga"
        >
          <div class="space-y-4">
            <div class="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p class="text-white font-semibold text-lg">
                Kami TIDAK menjual informasi pribadi Anda kepada siapa pun.
              </p>
            </div>

            <p class="text-white/80 leading-relaxed">
              Kami hanya berbagi informasi dengan:
            </p>

            <div>
              <h5 class="text-base font-semibold text-white mb-2">
                Penyedia Layanan:
              </h5>
              <ul class="space-y-2 text-white/80">
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                  <span>Payment gateway untuk memproses pembayaran</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                  <span>Layanan hosting untuk menyimpan data</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                  <span>Layanan email untuk mengirim notifikasi</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                  <span>Analytics untuk memahami penggunaan Platform</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 class="text-base font-semibold text-white mb-2">
                Kewajiban Hukum:
              </h5>
              <p class="text-white/80 leading-relaxed">
                Kami dapat mengungkapkan informasi jika diwajibkan oleh hukum,
                perintah pengadilan, atau untuk melindungi hak kami.
              </p>
            </div>

            <div>
              <h5 class="text-base font-semibold text-white mb-2">
                Dengan Persetujuan Anda:
              </h5>
              <p class="text-white/80 leading-relaxed">
                Kami akan meminta izin Anda sebelum berbagi informasi untuk
                tujuan lain.
              </p>
            </div>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 5: Penyimpanan dan Keamanan -->
        <TermsAndConditionsTermSection title="5. Penyimpanan dan Keamanan Data">
          <div class="space-y-6">
            <!-- 5.1 -->
            <div>
              <h4 class="text-lg font-semibold text-white mb-3">
                5.1 Penyimpanan Data
              </h4>

              <div class="space-y-3">
                <div>
                  <p class="text-white/70 text-sm font-medium mb-2">Lokasi:</p>
                  <p class="text-white/80 leading-relaxed">
                    Data Anda disimpan di server yang aman dan dapat berlokasi
                    di Indonesia atau luar negeri.
                  </p>
                </div>

                <div>
                  <p class="text-white/70 text-sm font-medium mb-2">Durasi:</p>
                  <ul class="space-y-2 text-white/80">
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                      <span>Data akun: selama akun Anda aktif</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                      <span
                        >Data undangan: hingga Anda menghapusnya atau akun
                        ditutup</span
                      >
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                      <span
                        >Data transaksi: sesuai kewajiban hukum dan pajak
                        (minimal 5 tahun)</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 5.2 -->
            <div class="pt-4 border-t border-white/10">
              <h4 class="text-lg font-semibold text-white mb-3">
                5.2 Keamanan Data
              </h4>

              <p class="text-white/80 leading-relaxed mb-3">
                Kami menerapkan langkah keamanan untuk melindungi data Anda:
              </p>

              <ul class="space-y-2 text-white/80 mb-4">
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                  <span>Enkripsi SSL/TLS untuk transmisi data</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                  <span>Password terenkripsi</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                  <span>Akses terbatas ke data pribadi</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                  <span>Pemantauan sistem keamanan secara berkala</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                  <span>Backup data rutin</span>
                </li>
              </ul>

              <div
                class="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4"
              >
                <p class="text-white/80 leading-relaxed">
                  <strong class="text-white">Namun,</strong> tidak ada sistem
                  yang 100% aman. Kami tidak dapat menjamin keamanan absolut
                  terhadap akses tidak sah atau pelanggaran data.
                </p>
              </div>
            </div>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 6: Cookies -->
        <TermsAndConditionsTermSection title="6. Cookies">
          <div class="space-y-4">
            <div>
              <h5 class="text-base font-semibold text-white mb-2">
                Apa itu Cookies?
              </h5>
              <p class="text-white/80 leading-relaxed">
                Cookies adalah file kecil yang disimpan di perangkat Anda saat
                mengunjungi website.
              </p>
            </div>

            <div>
              <h5 class="text-base font-semibold text-white mb-2">
                Jenis Cookies yang Kami Gunakan
              </h5>

              <div class="space-y-3">
                <div class="flex items-start gap-3">
                  <div
                    class="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <i class="bi bi-shield-check text-sky-400 text-sm"></i>
                  </div>
                  <div>
                    <p class="text-white font-medium">Cookies Esensial:</p>
                    <p class="text-white/80 text-sm">
                      Diperlukan agar Platform berfungsi (misalnya untuk login)
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div
                    class="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <i class="bi bi-graph-up text-sky-400 text-sm"></i>
                  </div>
                  <div>
                    <p class="text-white font-medium">Cookies Analitik:</p>
                    <p class="text-white/80 text-sm">
                      Membantu kami memahami cara Anda menggunakan Platform
                      (misalnya Google Analytics)
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div
                    class="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <i class="bi bi-gear text-sky-400 text-sm"></i>
                  </div>
                  <div>
                    <p class="text-white font-medium">Cookies Fungsional:</p>
                    <p class="text-white/80 text-sm">
                      Menyimpan preferensi Anda
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h5 class="text-base font-semibold text-white mb-2">
                Mengelola Cookies
              </h5>
              <p class="text-white/80 leading-relaxed">
                Anda dapat mengatur browser untuk menolak cookies, tetapi ini
                mungkin mempengaruhi fungsionalitas Platform.
              </p>
            </div>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 7: Hak Anda -->
        <TermsAndConditionsTermSection title="7. Hak Anda">
          <div class="space-y-4">
            <p class="text-white/80 leading-relaxed mb-4">
              Anda memiliki hak untuk:
            </p>

            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <div
                  class="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i class="bi bi-eye text-sky-400"></i>
                </div>
                <div>
                  <p class="text-white font-medium">Akses</p>
                  <p class="text-white/80 text-sm">
                    Meminta salinan data pribadi yang kami simpan tentang Anda
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div
                  class="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i class="bi bi-pencil text-sky-400"></i>
                </div>
                <div>
                  <p class="text-white font-medium">Koreksi</p>
                  <p class="text-white/80 text-sm">
                    Memperbarui atau memperbaiki informasi yang tidak akurat
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div
                  class="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i class="bi bi-trash text-sky-400"></i>
                </div>
                <div>
                  <p class="text-white font-medium">Penghapusan</p>
                  <p class="text-white/80 text-sm">
                    Meminta penghapusan data pribadi Anda (dengan beberapa
                    pengecualian hukum)
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div
                  class="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i class="bi bi-pause-circle text-sky-400"></i>
                </div>
                <div>
                  <p class="text-white font-medium">Pembatasan</p>
                  <p class="text-white/80 text-sm">
                    Meminta pembatasan pemrosesan data Anda
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div
                  class="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i class="bi bi-download text-sky-400"></i>
                </div>
                <div>
                  <p class="text-white font-medium">Portabilitas</p>
                  <p class="text-white/80 text-sm">
                    Meminta data Anda dalam format yang dapat dibaca mesin
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div
                  class="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i class="bi bi-x-circle text-sky-400"></i>
                </div>
                <div>
                  <p class="text-white font-medium">Keberatan</p>
                  <p class="text-white/80 text-sm">
                    Menolak pemrosesan data untuk tujuan tertentu (seperti
                    marketing)
                  </p>
                </div>
              </div>
            </div>

            <p class="text-white/70 text-sm pt-4 border-t border-white/10">
              Untuk menggunakan hak-hak ini, hubungi kami di email yang
              tercantum di bawah.
            </p>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 8: Data Anak-anak -->
        <TermsAndConditionsTermSection title="8. Data Anak-anak">
          <p class="text-white/80 leading-relaxed">
            Layanan kami tidak ditujukan untuk anak di bawah 18 tahun. Kami
            tidak dengan sengaja mengumpulkan data dari anak-anak. Jika Anda
            mengetahui bahwa anak Anda memberikan informasi pribadi kepada kami,
            harap hubungi kami untuk menghapusnya.
          </p>
        </TermsAndConditionsTermSection>

        <!-- Section 9: Link Pihak Ketiga -->
        <TermsAndConditionsTermSection title="9. Link ke Situs Pihak Ketiga">
          <p class="text-white/80 leading-relaxed">
            Platform kami mungkin berisi link ke website lain. Kami tidak
            bertanggung jawab atas praktik privasi situs tersebut. Kami
            menyarankan Anda membaca kebijakan privasi setiap website yang Anda
            kunjungi.
          </p>
        </TermsAndConditionsTermSection>

        <!-- Section 10: Perubahan Kebijakan -->
        <TermsAndConditionsTermSection title="10. Perubahan Kebijakan Privasi">
          <div class="space-y-4">
            <p class="text-white/80 leading-relaxed">
              Kami dapat memperbarui Kebijakan Privasi ini sewaktu-waktu.
              Perubahan akan diberitahukan melalui:
            </p>

            <ul class="space-y-2 text-white/80">
              <li class="flex items-start gap-2">
                <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                <span>Email ke alamat terdaftar Anda</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                <span>Notifikasi di Platform</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                <span
                  >Update tanggal "Terakhir Diperbarui" di bagian bawah</span
                >
              </li>
            </ul>

            <p class="text-white/80 leading-relaxed">
              Penggunaan layanan setelah perubahan berarti Anda menyetujui
              Kebijakan Privasi yang diperbarui.
            </p>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 11: Transfer Data Internasional -->
        <TermsAndConditionsTermSection title="11. Transfer Data Internasional">
          <p class="text-white/80 leading-relaxed">
            Data Anda mungkin ditransfer dan disimpan di server yang berlokasi
            di luar Indonesia. Kami memastikan bahwa transfer data dilakukan
            sesuai dengan standar perlindungan data yang berlaku.
          </p>
        </TermsAndConditionsTermSection>

        <!-- Section 12: Dasar Hukum -->
        <TermsAndConditionsTermSection title="12. Dasar Hukum Pemrosesan Data">
          <div class="space-y-4">
            <p class="text-white/80 leading-relaxed">
              Kami memproses data Anda berdasarkan:
            </p>

            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <div
                  class="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i class="bi bi-file-earmark-check text-sky-400"></i>
                </div>
                <div>
                  <p class="text-white font-medium">Kontrak</p>
                  <p class="text-white/80 text-sm">
                    Untuk menyediakan layanan yang Anda minta
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div
                  class="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i class="bi bi-hand-thumbs-up text-sky-400"></i>
                </div>
                <div>
                  <p class="text-white font-medium">Persetujuan</p>
                  <p class="text-white/80 text-sm">
                    Untuk marketing dan komunikasi opsional
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div
                  class="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i class="bi bi-bullseye text-sky-400"></i>
                </div>
                <div>
                  <p class="text-white font-medium">Kepentingan Sah</p>
                  <p class="text-white/80 text-sm">
                    Untuk meningkatkan layanan dan keamanan
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div
                  class="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i class="bi bi-shield-check text-sky-400"></i>
                </div>
                <div>
                  <p class="text-white font-medium">Kewajiban Hukum</p>
                  <p class="text-white/80 text-sm">
                    Untuk mematuhi hukum yang berlaku
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 13: Hubungi Kami -->
        <TermsAndConditionsTermSection title="13. Hubungi Kami">
          <div class="space-y-4">
            <p class="text-white/80 leading-relaxed">
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau
              ingin menggunakan hak Anda, hubungi kami di:
            </p>

            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-lg flex items-center justify-center"
                >
                  <i class="bi bi-envelope text-sky-400"></i>
                </div>
                <div>
                  <p class="text-sm text-white/60">Email</p>
                  <p class="text-white font-medium">{{ getOfficialEmail() }}</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-lg flex items-center justify-center"
                >
                  <i class="bi bi-globe text-sky-400"></i>
                </div>
                <div>
                  <p class="text-sm text-white/60">Website</p>
                  <NuxtLink
                    :to="appUrl"
                    class="text-white font-medium hover:text-sky-400 transition-colors"
                    >{{ appUrl }}</NuxtLink
                  >
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-lg flex items-center justify-center"
                >
                  <i class="bi bi-geo-alt text-sky-400"></i>
                </div>
                <div>
                  <p class="text-sm text-white/60">Alamat</p>
                  <p class="text-white font-medium">
                    Banjarsari RT 5/RW 6 No.09, Koripan, Matesih, Karanganyar,
                    Jawa Tengah, Indonesia, 57781
                  </p>
                </div>
              </div>
            </div>

            <p class="text-white/70 text-sm pt-4 border-t border-white/10">
              Kami akan merespons permintaan Anda dalam waktu 14 hari kerja.
            </p>
          </div>
        </TermsAndConditionsTermSection>
      </div>

      <!-- Footer Notice -->
      <div class="mt-16 text-center">
        <div
          class="inline-flex items-center px-6 py-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-full"
        >
          <i class="bi bi-calendar-check text-emerald-400 mr-3"></i>
          <span class="text-sm text-white/70"
            >Dokumen terakhir diperbarui: 27 Januari 2026</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Grid pattern */
.bg-grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 80px 80px;
}

/* Animation delays */
.delay-1000 {
  animation-delay: 1s;
}
</style>
