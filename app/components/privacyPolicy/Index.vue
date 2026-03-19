<script setup>
const config = useRuntimeConfig();
const appUrl = config.public.appUrl;
</script>

<template>
  <div class="pt-28 md:pt-40 pb-20 bg-light dark:bg-dark">
    <div class="max-w-7xl mx-auto px-4 lg:px-6">
      <!-- Header Section -->
      <div class="text-center mb-10 md:mb-20">
        <!-- Main Title -->
        <h1
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="text-4xl/12 sm:text-5xl/15 lg:text-6xl/19 font-bold mb-6 text-black dark:text-white tracking-wide"
        >
          <span class="text-primary"> Kebijakan </span>
          Privasi
        </h1>

        <!-- Subtitle -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="text-xl lg:text-2xl text-black/60 dark:text-white/60 max-w-4xl mx-auto leading-relaxed"
        >
          EA Invitation
        </p>
      </div>

      <!-- Privacy Notice -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="1000"
        class="rounded-2xl mb-6 md:mb-8 bg-white dark:bg-white/3 border-2 border-primary p-4 md:p-8 shadow-xl"
      >
        <div class="flex items-center gap-4 mb-4 md:mb-6">
          <div
            class="w-12 h-12 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center"
          >
            <i class="bi bi-shield-check text-primary text-xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-black dark:text-white">
            Persetujuan
          </h3>
        </div>
        <div>
          <p class="text-black/60 dark:text-white/60 leading-relaxed">
            Dengan menggunakan eainvitation.com, Anda menyatakan telah membaca
            dan memahami Kebijakan Privasi ini dan menyetujui pengumpulan serta
            penggunaan informasi Anda sebagaimana dijelaskan di sini.
          </p>
        </div>
      </div>

      <!-- Privacy Content Grid -->
      <div class="grid grid-cols-1 gap-3 md:gap-4">
        <!-- Section 1: Pendahuluan -->
        <TermsAndConditionsTermSection title="1. Pendahuluan">
          <p class="text-black/60 dark:text-white/60 leading-relaxed mb-4">
            EA Invitation ("kami", "Platform") menghargai privasi Anda.
            Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan,
            menggunakan, menyimpan, dan melindungi informasi pribadi Anda saat
            menggunakan layanan kami.
          </p>
          <p class="text-black/60 dark:text-white/60 leading-relaxed">
            Dengan menggunakan Platform kami, Anda menyetujui praktik yang
            dijelaskan dalam Kebijakan Privasi ini.
          </p>
        </TermsAndConditionsTermSection>

        <!-- Section 2: Informasi yang Kami Kumpulkan -->
        <TermsAndConditionsTermSection title="2. Informasi yang Kami Kumpulkan">
          <div class="space-y-6">
            <!-- 2.1 -->
            <div>
              <h4 class="text-lg font-semibold text-dark dark:text-light mb-3">
                2.1 Informasi yang Anda Berikan
              </h4>

              <div class="space-y-4">
                <div>
                  <p
                    class="text-black/70 dark:text-white/70 text-sm font-medium mb-2"
                  >
                    Saat Pendaftaran:
                  </p>
                  <ul class="space-y-2 text-black/60 dark:text-white/60">
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <span>Nama lengkap</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <span>Alamat email</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <span>Nomor telepon</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <span>Password (terenkripsi)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p
                    class="text-black/70 dark:text-white/70 text-sm font-medium mb-2"
                  >
                    Saat Menggunakan Layanan:
                  </p>
                  <ul class="space-y-2 text-black/60 dark:text-white/60">
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <span>Nama pasangan</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <span>Tanggal pernikahan</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <span>Lokasi acara</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <span>Foto dan video yang diunggah</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <span>Teks dan konten undangan</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <span>Daftar tamu undangan</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
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
            <div class="pt-4 border-t border-black/20 dark:border-white/20">
              <h4 class="text-lg font-semibold text-dark dark:text-light mb-3">
                2.2 Informasi yang Dikumpulkan Otomatis
              </h4>

              <div class="space-y-4">
                <div>
                  <p
                    class="text-black/70 dark:text-white/70 text-sm font-medium mb-2"
                  >
                    Data Teknis:
                  </p>
                  <ul class="space-y-2 text-black/60 dark:text-white/60">
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <span>Alamat IP</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <span>Jenis browser dan perangkat</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <span>Sistem operasi</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <span>Waktu akses</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <span>Halaman yang dikunjungi</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <span>Sumber referral (dari mana Anda datang)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p
                    class="text-black/70 dark:text-white/70 text-sm font-medium mb-2"
                  >
                    Cookies dan Teknologi Pelacakan:
                  </p>
                  <p class="text-black/60 dark:text-white/60 leading-relaxed">
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
            <p class="text-black/60 dark:text-white/60 leading-relaxed">
              Kami menggunakan informasi Anda untuk:
            </p>

            <div>
              <h5
                class="text-base font-semibold text-dark dark:text-light mb-2"
              >
                Menyediakan Layanan:
              </h5>
              <ul class="space-y-2 text-black/60 dark:text-white/60">
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Membuat dan mengelola akun Anda</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Memproses pembayaran</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Membuat dan menyimpan undangan digital Anda</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Mengirim undangan ke tamu Anda</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Menyediakan fitur RSVP dan konfirmasi kehadiran</span>
                </li>
              </ul>
            </div>

            <div>
              <h5
                class="text-base font-semibold text-dark dark:text-light mb-2"
              >
                Komunikasi:
              </h5>
              <ul class="space-y-2 text-black/60 dark:text-white/60">
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Mengirim konfirmasi transaksi</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Memberikan update layanan</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Merespons pertanyaan Anda</span>
                </li>
              </ul>
            </div>

            <div>
              <h5
                class="text-base font-semibold text-dark dark:text-light mb-2"
              >
                Peningkatan Layanan:
              </h5>
              <ul class="space-y-2 text-black/60 dark:text-white/60">
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Menganalisis penggunaan Platform</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Mengidentifikasi dan memperbaiki masalah teknis</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Mengembangkan fitur baru</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Melakukan riset dan analisis</span>
                </li>
              </ul>
            </div>

            <div>
              <h5
                class="text-base font-semibold text-dark dark:text-light mb-2"
              >
                Keamanan:
              </h5>
              <ul class="space-y-2 text-black/60 dark:text-white/60">
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Mencegah penipuan</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Melindungi dari aktivitas berbahaya</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
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
              <p class="text-red-600 dark:text-red-500 font-semibold text-lg">
                Kami TIDAK menjual informasi pribadi Anda kepada siapa pun.
              </p>
            </div>

            <p class="text-black/60 dark:text-white/60 leading-relaxed">
              Kami hanya berbagi informasi dengan:
            </p>

            <div>
              <h5
                class="text-base font-semibold text-dark dark:text-light mb-2"
              >
                Penyedia Layanan:
              </h5>
              <ul class="space-y-2 text-black/60 dark:text-white/60">
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Payment gateway untuk memproses pembayaran</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Layanan hosting untuk menyimpan data</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Layanan email untuk mengirim notifikasi</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Analytics untuk memahami penggunaan Platform</span>
                </li>
              </ul>
            </div>

            <div>
              <h5
                class="text-base font-semibold text-dark dark:text-light mb-2"
              >
                Kewajiban Hukum:
              </h5>
              <p class="text-black/60 dark:text-white/60 leading-relaxed">
                Kami dapat mengungkapkan informasi jika diwajibkan oleh hukum,
                perintah pengadilan, atau untuk melindungi hak kami.
              </p>
            </div>

            <div>
              <h5
                class="text-base font-semibold text-dark dark:text-light mb-2"
              >
                Dengan Persetujuan Anda:
              </h5>
              <p class="text-black/60 dark:text-white/60 leading-relaxed">
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
              <h4 class="text-lg font-semibold text-dark dark:text-light mb-3">
                5.1 Penyimpanan Data
              </h4>

              <div class="space-y-3">
                <div>
                  <p
                    class="text-black/70 dark:text-white/70 text-sm font-medium mb-2"
                  >
                    Lokasi:
                  </p>
                  <p class="text-black/60 dark:text-white/60 leading-relaxed">
                    Data Anda disimpan di server yang aman dan dapat berlokasi
                    di Indonesia atau luar negeri.
                  </p>
                </div>

                <div>
                  <p
                    class="text-black/70 dark:text-white/70 text-sm font-medium mb-2"
                  >
                    Durasi:
                  </p>
                  <ul class="space-y-2 text-black/60 dark:text-white/60">
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <span>Data akun: selama akun Anda aktif</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                      <span
                        >Data undangan: hingga Anda menghapusnya atau akun
                        ditutup</span
                      >
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="bi bi-check-circle-fill text-primary"></i>
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
            <div class="pt-4 border-t border-black/20 dark:border-white/20">
              <h4 class="text-lg font-semibold text-dark dark:text-light mb-3">
                5.2 Keamanan Data
              </h4>

              <p class="text-black/60 dark:text-white/60 leading-relaxed mb-3">
                Kami menerapkan langkah keamanan untuk melindungi data Anda:
              </p>

              <ul class="space-y-2 text-black/60 dark:text-white/60 mb-4">
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Enkripsi SSL/TLS untuk transmisi data</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Password terenkripsi</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Akses terbatas ke data pribadi</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Pemantauan sistem keamanan secara berkala</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Backup data rutin</span>
                </li>
              </ul>

              <div
                class="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4"
              >
                <p class="text-black/60 dark:text-white/60 leading-relaxed">
                  <strong class="text-dark dark:text-light">Namun,</strong>
                  tidak ada sistem yang 100% aman. Kami tidak dapat menjamin
                  keamanan absolut terhadap akses tidak sah atau pelanggaran
                  data.
                </p>
              </div>
            </div>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 6: Cookies -->
        <TermsAndConditionsTermSection title="6. Cookies">
          <div class="space-y-4">
            <div>
              <h5
                class="text-base font-semibold text-dark dark:text-light mb-2"
              >
                Apa itu Cookies?
              </h5>
              <p class="text-black/60 dark:text-white/60 leading-relaxed">
                Cookies adalah file kecil yang disimpan di perangkat Anda saat
                mengunjungi website.
              </p>
            </div>

            <div>
              <h5
                class="text-base font-semibold text-dark dark:text-light mb-2"
              >
                Jenis Cookies yang Kami Gunakan
              </h5>

              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div
                    class="w-8 h-8 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center"
                  >
                    <i class="bi bi-shield-check text-primary text-sm"></i>
                  </div>
                  <div>
                    <p class="text-dark dark:text-light font-medium">
                      Cookies Esensial:
                    </p>
                    <p class="text-black/60 dark:text-white/60 text-sm">
                      Diperlukan agar Platform berfungsi (misalnya untuk login)
                    </p>
                  </div>
                </div>

                <div class="flex items-center gap-3">
                  <div
                    class="w-8 h-8 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center"
                  >
                    <i class="bi bi-graph-up text-primary text-sm"></i>
                  </div>
                  <div>
                    <p class="text-dark dark:text-light font-medium">
                      Cookies Analitik:
                    </p>
                    <p class="text-black/60 dark:text-white/60 text-sm">
                      Membantu kami memahami cara Anda menggunakan Platform
                      (misalnya Google Analytics)
                    </p>
                  </div>
                </div>

                <div class="flex items-center gap-3">
                  <div
                    class="w-8 h-8 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center"
                  >
                    <i class="bi bi-gear text-primary text-sm"></i>
                  </div>
                  <div>
                    <p class="text-dark dark:text-light font-medium">
                      Cookies Fungsional:
                    </p>
                    <p class="text-black/60 dark:text-white/60 text-sm">
                      Menyimpan preferensi Anda
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h5
                class="text-base font-semibold text-dark dark:text-light mb-2"
              >
                Mengelola Cookies
              </h5>
              <p class="text-black/60 dark:text-white/60 leading-relaxed">
                Anda dapat mengatur browser untuk menolak cookies, tetapi ini
                mungkin mempengaruhi fungsionalitas Platform.
              </p>
            </div>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 7: Hak Anda -->
        <TermsAndConditionsTermSection title="7. Hak Anda">
          <div class="space-y-4">
            <p class="text-black/60 dark:text-white/60 leading-relaxed mb-4">
              Anda memiliki hak untuk:
            </p>

            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center"
                >
                  <i class="bi bi-eye text-primary"></i>
                </div>
                <div>
                  <p class="text-dark dark:text-light font-medium">Akses</p>
                  <p class="text-black/60 dark:text-white/60 text-sm">
                    Meminta salinan data pribadi yang kami simpan tentang Anda
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center"
                >
                  <i class="bi bi-pencil text-primary"></i>
                </div>
                <div>
                  <p class="text-dark dark:text-light font-medium">Koreksi</p>
                  <p class="text-black/60 dark:text-white/60 text-sm">
                    Memperbarui atau memperbaiki informasi yang tidak akurat
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center"
                >
                  <i class="bi bi-trash text-primary"></i>
                </div>
                <div>
                  <p class="text-dark dark:text-light font-medium">
                    Penghapusan
                  </p>
                  <p class="text-black/60 dark:text-white/60 text-sm">
                    Meminta penghapusan data pribadi Anda (dengan beberapa
                    pengecualian hukum)
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center"
                >
                  <i class="bi bi-pause-circle text-primary"></i>
                </div>
                <div>
                  <p class="text-dark dark:text-light font-medium">
                    Pembatasan
                  </p>
                  <p class="text-black/60 dark:text-white/60 text-sm">
                    Meminta pembatasan pemrosesan data Anda
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center"
                >
                  <i class="bi bi-download text-primary"></i>
                </div>
                <div>
                  <p class="text-dark dark:text-light font-medium">
                    Portabilitas
                  </p>
                  <p class="text-black/60 dark:text-white/60 text-sm">
                    Meminta data Anda dalam format yang dapat dibaca mesin
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center"
                >
                  <i class="bi bi-x-circle text-primary"></i>
                </div>
                <div>
                  <p class="text-dark dark:text-light font-medium">Keberatan</p>
                  <p class="text-black/60 dark:text-white/60 text-sm">
                    Menolak pemrosesan data untuk tujuan tertentu (seperti
                    marketing)
                  </p>
                </div>
              </div>
            </div>

            <p
              class="text-black/70 dark:text-white/70 text-sm pt-4 border-t border-black/20 dark:border-white/20"
            >
              Untuk menggunakan hak-hak ini, hubungi kami di email yang
              tercantum di bawah.
            </p>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 8: Data Anak-anak -->
        <TermsAndConditionsTermSection title="8. Data Anak-anak">
          <p class="text-black/60 dark:text-white/60 leading-relaxed">
            Layanan kami tidak ditujukan untuk anak di bawah 18 tahun. Kami
            tidak dengan sengaja mengumpulkan data dari anak-anak. Jika Anda
            mengetahui bahwa anak Anda memberikan informasi pribadi kepada kami,
            harap hubungi kami untuk menghapusnya.
          </p>
        </TermsAndConditionsTermSection>

        <!-- Section 9: Link Pihak Ketiga -->
        <TermsAndConditionsTermSection title="9. Link ke Situs Pihak Ketiga">
          <p class="text-black/60 dark:text-white/60 leading-relaxed">
            Platform kami mungkin berisi link ke website lain. Kami tidak
            bertanggung jawab atas praktik privasi situs tersebut. Kami
            menyarankan Anda membaca kebijakan privasi setiap website yang Anda
            kunjungi.
          </p>
        </TermsAndConditionsTermSection>

        <!-- Section 10: Perubahan Kebijakan -->
        <TermsAndConditionsTermSection title="10. Perubahan Kebijakan Privasi">
          <div class="space-y-4">
            <p class="text-black/60 dark:text-white/60 leading-relaxed">
              Kami dapat memperbarui Kebijakan Privasi ini sewaktu-waktu.
              Perubahan akan diberitahukan melalui:
            </p>

            <ul class="space-y-2 text-black/60 dark:text-white/60">
              <li class="flex items-start gap-2">
                <i class="bi bi-check-circle-fill text-primary"></i>
                <span>Email ke alamat terdaftar Anda</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="bi bi-check-circle-fill text-primary"></i>
                <span>Notifikasi di Platform</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="bi bi-check-circle-fill text-primary"></i>
                <span
                  >Update tanggal "Terakhir Diperbarui" di bagian bawah</span
                >
              </li>
            </ul>

            <p class="text-black/60 dark:text-white/60 leading-relaxed">
              Penggunaan layanan setelah perubahan berarti Anda menyetujui
              Kebijakan Privasi yang diperbarui.
            </p>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 11: Transfer Data Internasional -->
        <TermsAndConditionsTermSection title="11. Transfer Data Internasional">
          <p class="text-black/60 dark:text-white/60 leading-relaxed">
            Data Anda mungkin ditransfer dan disimpan di server yang berlokasi
            di luar Indonesia. Kami memastikan bahwa transfer data dilakukan
            sesuai dengan standar perlindungan data yang berlaku.
          </p>
        </TermsAndConditionsTermSection>

        <!-- Section 12: Dasar Hukum -->
        <TermsAndConditionsTermSection title="12. Dasar Hukum Pemrosesan Data">
          <div class="space-y-4">
            <p class="text-black/60 dark:text-white/60 leading-relaxed">
              Kami memproses data Anda berdasarkan:
            </p>

            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center"
                >
                  <i class="bi bi-file-earmark-check text-primary"></i>
                </div>
                <div>
                  <p class="text-dark dark:text-light font-medium">Kontrak</p>
                  <p class="text-black/60 dark:text-white/60 text-sm">
                    Untuk menyediakan layanan yang Anda minta
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center"
                >
                  <i class="bi bi-hand-thumbs-up text-primary"></i>
                </div>
                <div>
                  <p class="text-dark dark:text-light font-medium">
                    Persetujuan
                  </p>
                  <p class="text-black/60 dark:text-white/60 text-sm">
                    Untuk marketing dan komunikasi opsional
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center"
                >
                  <i class="bi bi-bullseye text-primary"></i>
                </div>
                <div>
                  <p class="text-dark dark:text-light font-medium">
                    Kepentingan Sah
                  </p>
                  <p class="text-black/60 dark:text-white/60 text-sm">
                    Untuk meningkatkan layanan dan keamanan
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-light dark:bg-light/15 rounded-lg border border-black/5 dark:border-white/5 flex items-center justify-center"
                >
                  <i class="bi bi-shield-check text-primary"></i>
                </div>
                <div>
                  <p class="text-dark dark:text-light font-medium">
                    Kewajiban Hukum
                  </p>
                  <p class="text-black/60 dark:text-white/60 text-sm">
                    Untuk mematuhi hukum yang berlaku
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TermsAndConditionsTermSection>
      </div>

      <!-- Footer Notice -->
      <div class="mt-11 text-center">
        <div
          class="inline-flex items-center px-6 py-3 backdrop-blur-md bg-white dark:bg-white/3 border border-black/20 dark:border-white/20 rounded-full"
        >
          <i class="bi bi-calendar-check text-primary mr-3"></i>
          <span class="text-sm text-black/70 dark:text-white/70"
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
