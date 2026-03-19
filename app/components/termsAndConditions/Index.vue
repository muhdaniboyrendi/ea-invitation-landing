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
          <span class="text-primary"> Syarat </span>
          dan Ketentuan
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

      <!-- Agreement Notice -->
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
            <i class="bi bi-exclamation-triangle-fill text-primary text-xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-black dark:text-white">
            Persetujuan
          </h3>
        </div>
        <div>
          <p class="text-black/60 dark:text-white/60 leading-relaxed">
            Dengan menggunakan aplikasi/platform/layanan EA Invitation, Anda
            menyatakan telah membaca dan menyetujui syarat dan ketentuan telah
            ditentukan oleh EA Invitation. EA Invitation merupakan aplikasi
            buatan perorangan (bukan berbadan hukum) yang berfungsi untuk
            membuat undangan pernikahan digital berbasis web. Anda sepakat untuk
            mengikat diri dengan ketentuan dan persyaratan yang ditentukan oleh
            EA Invitation, sebagaimana suatu perjanjian yang sah dan mengikat
            (“Syarat dan Ketentuan”), sebagai berikut:
          </p>
        </div>
      </div>

      <!-- Terms Content Grid -->
      <div class="grid grid-cols-1 gap-3 md:gap-4">
        <!-- Section 1: Tentang Layanan -->
        <TermsAndConditionsTermSection title="1. Tentang Layanan">
          <p class="text-black/60 dark:text-white/60 leading-relaxed">
            eainvitation.com adalah platform untuk membuat undangan pernikahan
            digital. Dengan menggunakan layanan kami, Anda setuju dengan syarat
            dan ketentuan berikut.
          </p>
        </TermsAndConditionsTermSection>

        <!-- Section 2: Akun Pengguna -->
        <TermsAndConditionsTermSection title="2. Akun Pengguna">
          <div class="space-y-4">
            <div>
              <h4 class="text-lg font-semibold text-dark dark:text-light mb-3">
                Pendaftaran
              </h4>
              <ul class="space-y-2 text-black/60 dark:text-white/60">
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span
                    >Anda harus berusia minimal 18 tahun untuk menggunakan
                    layanan kami</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Berikan informasi yang akurat saat mendaftar</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span>Jaga kerahasiaan password Anda</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-dark dark:text-light mb-3">
                Keamanan
              </h4>
              <p class="text-black/60 dark:text-white/60 leading-relaxed">
                Anda bertanggung jawab atas semua aktivitas di akun Anda. Segera
                hubungi kami jika terjadi penggunaan tidak sah.
              </p>
            </div>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 3: Layanan yang Kami Sediakan -->
        <TermsAndConditionsTermSection title="3. Layanan yang Kami Sediakan">
          <div class="space-y-4">
            <p class="text-black/60 dark:text-white/60 leading-relaxed">
              Kami menyediakan:
            </p>
            <ul class="space-y-2 text-black/60 dark:text-white/60">
              <li class="flex items-start gap-2">
                <i class="bi bi-check-circle-fill text-primary"></i>
                <span>Template undangan pernikahan digital</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="bi bi-check-circle-fill text-primary"></i>
                <span>Editor untuk menyesuaikan isi undangan</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="bi bi-check-circle-fill text-primary"></i>
                <span>Fitur RSVP dan konfirmasi kehadiran</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="bi bi-check-circle-fill text-primary"></i>
                <span>Link unik untuk membagikan undangan</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="bi bi-check-circle-fill text-primary"></i>
                <span>Statistik tamu undangan</span>
              </li>
            </ul>
            <p
              class="text-black/60 dark:text-white/60 text-sm leading-relaxed pt-4 border-t border-black/20 dark:border-white/20"
            >
              Kami dapat mengubah atau menghentikan layanan kapan saja. Kami
              akan berusaha memberitahu Anda terlebih dahulu jika ada perubahan
              besar.
            </p>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 4: Harga dan Pembayaran -->
        <TermsAndConditionsTermSection title="4. Harga dan Pembayaran">
          <div class="space-y-4">
            <div>
              <h4 class="text-lg font-semibold text-dark dark:text-light mb-3">
                Biaya
              </h4>
              <ul class="space-y-2 text-black/60 dark:text-white/60">
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span
                    >Harga tercantum di website dan dapat berubah
                    sewaktu-waktu</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span
                    >Pembayaran melalui metode yang tersedia (transfer bank,
                    e-wallet, dll)</span
                  >
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-dark dark:text-light mb-3">
                Pengembalian Dana
              </h4>
              <p class="text-black/60 dark:text-white/60 leading-relaxed">
                Pembayaran tidak dapat dikembalikan. Jika Anda membatalkan,
                akses tetap berlaku hingga akhir periode yang sudah dibayar.
              </p>
            </div>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 5: Aturan Penggunaan -->
        <TermsAndConditionsTermSection title="5. Aturan Penggunaan">
          <div class="space-y-4">
            <div>
              <h4 class="text-lg font-semibold text-dark dark:text-light mb-3">
                Dilarang:
              </h4>
              <ul class="space-y-2 text-black/60 dark:text-white/60">
                <li class="flex items-start gap-2">
                  <i class="bi bi-x-circle-fill text-primary"></i>
                  <span>Menggunakan untuk hal ilegal</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-x-circle-fill text-primary"></i>
                  <span>Mengunggah konten yang melanggar hak cipta</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-x-circle-fill text-primary"></i>
                  <span
                    >Mengunggah konten pornografi, kekerasan, atau
                    kebencian</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-x-circle-fill text-primary"></i>
                  <span>Menggunakan virus atau malware</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-x-circle-fill text-primary"></i>
                  <span>Spam atau mengirim pesan massal</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-x-circle-fill text-primary"></i>
                  <span>Menjual kembali layanan tanpa izin</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-dark dark:text-light mb-3">
                Konten Anda
              </h4>
              <ul class="space-y-2 text-black/60 dark:text-white/60">
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span
                    >Anda bertanggung jawab atas semua konten yang Anda
                    unggah</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span
                    >Pastikan Anda memiliki hak untuk menggunakan foto/video
                    yang diunggah</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-primary"></i>
                  <span
                    >Kami berhak menghapus konten yang melanggar aturan</span
                  >
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-dark dark:text-light mb-3">
                Konsekuensi
              </h4>
              <p class="text-black/60 dark:text-white/60 leading-relaxed">
                Pelanggaran dapat berakibat penangguhan atau penghapusan akun
                tanpa pengembalian dana.
              </p>
            </div>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 6: Hak Kekayaan Intelektual -->
        <TermsAndConditionsTermSection title="6. Hak Kekayaan Intelektual">
          <div class="space-y-4">
            <div>
              <h4 class="text-lg font-semibold text-dark dark:text-light mb-3">
                Milik Kami
              </h4>
              <p class="text-black/60 dark:text-white/60 leading-relaxed">
                Template, desain, dan semua konten platform adalah milik
                eainvitation.com. Anda tidak boleh menyalin atau menggunakannya
                di luar platform.
              </p>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-dark dark:text-light mb-3">
                Milik Anda
              </h4>
              <p class="text-black/60 dark:text-white/60 leading-relaxed">
                Foto, teks, dan konten yang Anda buat tetap milik Anda. Namun,
                Anda memberi kami izin untuk menggunakannya seperlunya untuk
                menjalankan layanan.
              </p>
            </div>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 7: Privasi -->
        <TermsAndConditionsTermSection title="7. Privasi">
          <p class="text-black/60 dark:text-white/60 leading-relaxed">
            Kami melindungi data pribadi Anda sesuai Kebijakan Privasi kami.
            Kami tidak akan menjual data Anda kepada pihak ketiga.
          </p>
        </TermsAndConditionsTermSection>

        <!-- Section 8: Pembatalan -->
        <TermsAndConditionsTermSection title="8. Pembatalan">
          <div class="space-y-4">
            <div>
              <h4 class="text-lg font-semibold text-dark dark:text-light mb-3">
                Oleh Anda
              </h4>
              <p class="text-black/60 dark:text-white/60 leading-relaxed">
                Anda dapat membatalkan paket yang telah anda pilih selama anda
                belum menyelesaikan pembayaran.
              </p>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-dark dark:text-light mb-3">
                Oleh Kami
              </h4>
              <p class="text-black/60 dark:text-white/60 leading-relaxed mb-3">
                Kami dapat menangguhkan atau menghentikan akun Anda jika:
              </p>
              <ul class="space-y-2 text-black/60 dark:text-white/60 mb-4">
                <li class="flex items-start gap-2">
                  <i class="bi bi-dash-circle-fill text-primary"></i>
                  <span>Anda melanggar syarat dan ketentuan ini</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-dash-circle-fill text-primary"></i>
                  <span>Tidak membayar tagihan</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-dash-circle-fill text-primary"></i>
                  <span>Kami mencurigai aktivitas penipuan</span>
                </li>
              </ul>
              <p
                class="text-black/60 dark:text-white/60 text-sm leading-relaxed pt-4 border-t border-black/20 dark:border-white/20"
              >
                Setelah akun dihentikan, data Anda mungkin dihapus. Backup data
                Anda secara berkala.
              </p>
            </div>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 9: Batasan Tanggung Jawab -->
        <TermsAndConditionsTermSection title="9. Batasan Tanggung Jawab">
          <div class="space-y-4">
            <div>
              <h4 class="text-lg font-semibold text-dark dark:text-light mb-3">
                Layanan "Sebagaimana Adanya"
              </h4>
              <p class="text-black/60 dark:text-white/60 leading-relaxed">
                Kami menyediakan layanan sebagaimana adanya tanpa jaminan akan
                selalu tersedia 100% atau bebas dari kesalahan.
              </p>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-dark dark:text-light mb-3">
                Batasan Ganti Rugi
              </h4>
              <p class="text-black/60 dark:text-white/60 leading-relaxed mb-3">
                Kami tidak bertanggung jawab atas:
              </p>
              <ul class="space-y-2 text-black/60 dark:text-white/60 mb-4">
                <li class="flex items-start gap-2">
                  <i class="bi bi-dash-circle-fill text-primary"></i>
                  <span>Kerugian tidak langsung atau kehilangan data</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-dash-circle-fill text-primary"></i>
                  <span>Gangguan layanan atau downtime</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-dash-circle-fill text-primary"></i>
                  <span>Kesalahan pada konten yang Anda buat</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-dash-circle-fill text-primary"></i>
                  <span>Masalah dengan pihak ketiga</span>
                </li>
              </ul>
              <p
                class="text-black/60 dark:text-white/60 text-sm leading-relaxed pt-4 border-t border-black/20 dark:border-white/20"
              >
                Tanggung jawab kami maksimal sebesar biaya yang sudah Anda
                bayarkan dalam 12 bulan terakhir.
              </p>
            </div>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 10: Perubahan Syarat -->
        <TermsAndConditionsTermSection
          title="10. Perubahan Syarat dan Ketentuan"
        >
          <p class="text-black/60 dark:text-white/60 leading-relaxed">
            Kami dapat mengubah syarat dan ketentuan ini kapan saja. Perubahan
            akan diberitahukan melalui email atau notifikasi di platform. Dengan
            terus menggunakan layanan setelah perubahan, berarti Anda menyetujui
            perubahan tersebut.
          </p>
        </TermsAndConditionsTermSection>

        <!-- Section 11: Hukum yang Berlaku -->
        <TermsAndConditionsTermSection title="11. Hukum yang Berlaku">
          <p class="text-black/60 dark:text-white/60 leading-relaxed">
            Syarat dan ketentuan ini tunduk pada hukum Republik Indonesia.
            Sengketa akan diselesaikan melalui pengadilan yang berwenang di
            Indonesia.
          </p>
        </TermsAndConditionsTermSection>
      </div>

      <!-- Footer Notice -->
      <div class="mt-10 text-center">
        <div
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="inline-flex items-center px-6 py-3 bg-white dark:bg-white/3 border border-black/20 dark:border-white/20 rounded-full"
        >
          <i class="bi bi-calendar-check text-primary mr-3"></i>
          <span class="text-sm text-black/60 dark:text-white/60"
            >Dokumen terakhir diperbarui: 27 Januari 2026</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
