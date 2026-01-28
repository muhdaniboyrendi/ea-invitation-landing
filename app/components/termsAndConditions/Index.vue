<script setup>
const props = defineProps({
  icon: String,
  title: String,
  gradient: String,
  glowColor: String,
  bgGradient: String,
});

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
            class="w-2 h-2 bg-gradient-to-r from-sky-400 to-sky-400 rounded-full mr-3 animate-pulse"
          ></span>
          <span class="text-sm font-medium text-white/80">Legal Document</span>
          <i class="bi bi-arrow-right ml-2 text-white/60 text-sm"></i>
        </div>

        <!-- Main Title -->
        <h1
          class="text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-200"
        >
          Syarat dan Ketentuan
        </h1>

        <!-- Subtitle -->
        <div class="flex items-center justify-center gap-3 text-white/60 mb-4">
          <i class="bi bi-globe text-xl"></i>
          <span class="text-lg">eainvitation.com</span>
        </div>
      </div>

      <!-- Agreement Notice -->
      <div class="group relative rounded-2xl mb-8">
        <div
          class="absolute -inset-1 bg-gradient-to-r from-sky-400/30 to-sky-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
        ></div>
        <div
          class="relative bg-dark/50 p-6 lg:p-8 rounded-2xl border border-white/10 hover:border-white/20"
        >
          <div class="flex items-center gap-4 mb-4 md:mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
            >
              <i class="bi bi-exclamation-triangle-fill text-white text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-white">Persetujuan</h3>
          </div>
          <div>
            <p class="text-white/80 leading-relaxed">
              Dengan menggunakan aplikasi/platform/layanan EA Invitation, Anda
              menyatakan telah membaca dan menyetujui syarat dan ketentuan telah
              ditentukan oleh EA Invitation. EA Invitation merupakan aplikasi
              buatan perorangan (bukan berbadan hukum) yang berfungsi untuk
              membuat undangan pernikahan digital berbasis web. Anda sepakat
              untuk mengikat diri dengan ketentuan dan persyaratan yang
              ditentukan oleh EA Invitation, sebagaimana suatu perjanjian yang
              sah dan mengikat (“Syarat dan Ketentuan”), sebagai berikut:
            </p>
          </div>
        </div>
      </div>

      <!-- Terms Content Grid -->
      <div class="grid grid-cols-1 gap-3 md:gap-4">
        <!-- Section 1: Tentang Layanan -->
        <TermsAndConditionsTermSection title="1. Tentang Layanan">
          <p class="text-white/80 leading-relaxed mb-4">
            eainvitation.com adalah platform untuk membuat undangan pernikahan
            digital. Dengan menggunakan layanan kami, Anda setuju dengan syarat
            dan ketentuan berikut.
          </p>
        </TermsAndConditionsTermSection>

        <!-- Section 2: Akun Pengguna -->
        <TermsAndConditionsTermSection title="2. Akun Pengguna">
          <div class="space-y-4">
            <div>
              <h4 class="text-lg font-semibold text-white mb-3">Pendaftaran</h4>
              <ul class="space-y-2 text-white/80">
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                  <span
                    >Anda harus berusia minimal 18 tahun untuk menggunakan
                    layanan kami</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                  <span>Berikan informasi yang akurat saat mendaftar</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                  <span>Jaga kerahasiaan password Anda</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-white mb-3">Keamanan</h4>
              <p class="text-white/80 leading-relaxed">
                Anda bertanggung jawab atas semua aktivitas di akun Anda. Segera
                hubungi kami jika terjadi penggunaan tidak sah.
              </p>
            </div>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 3: Layanan yang Kami Sediakan -->
        <TermsAndConditionsTermSection title="3. Layanan yang Kami Sediakan">
          <div class="space-y-4">
            <p class="text-white/80 leading-relaxed">Kami menyediakan:</p>
            <ul class="space-y-2 text-white/80">
              <li class="flex items-start gap-2">
                <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                <span>Template undangan pernikahan digital</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                <span>Editor untuk menyesuaikan isi undangan</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                <span>Fitur RSVP dan konfirmasi kehadiran</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                <span>Link unik untuk membagikan undangan</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                <span>Statistik tamu undangan</span>
              </li>
            </ul>
            <p
              class="text-white/70 text-sm leading-relaxed pt-4 border-t border-white/10"
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
              <h4 class="text-lg font-semibold text-white mb-3">Biaya</h4>
              <ul class="space-y-2 text-white/80">
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                  <span
                    >Harga tercantum di website dan dapat berubah
                    sewaktu-waktu</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                  <span
                    >Pembayaran melalui metode yang tersedia (transfer bank,
                    e-wallet, dll)</span
                  >
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-white mb-3">
                Pengembalian Dana
              </h4>
              <p class="text-white/80 leading-relaxed">
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
              <h4 class="text-lg font-semibold text-white mb-3">Dilarang:</h4>
              <ul class="space-y-2 text-white/80">
                <li class="flex items-start gap-2">
                  <i class="bi bi-x-circle-fill text-sky-400 mt-1"></i>
                  <span>Menggunakan untuk hal ilegal</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-x-circle-fill text-sky-400 mt-1"></i>
                  <span>Mengunggah konten yang melanggar hak cipta</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-x-circle-fill text-sky-400 mt-1"></i>
                  <span
                    >Mengunggah konten pornografi, kekerasan, atau
                    kebencian</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-x-circle-fill text-sky-400 mt-1"></i>
                  <span>Menggunakan virus atau malware</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-x-circle-fill text-sky-400 mt-1"></i>
                  <span>Spam atau mengirim pesan massal</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-x-circle-fill text-sky-400 mt-1"></i>
                  <span>Menjual kembali layanan tanpa izin</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-white mb-3">Konten Anda</h4>
              <ul class="space-y-2 text-white/80">
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                  <span
                    >Anda bertanggung jawab atas semua konten yang Anda
                    unggah</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                  <span
                    >Pastikan Anda memiliki hak untuk menggunakan foto/video
                    yang diunggah</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-check-circle-fill text-sky-400 mt-1"></i>
                  <span
                    >Kami berhak menghapus konten yang melanggar aturan</span
                  >
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-white mb-3">Konsekuensi</h4>
              <p class="text-white/80 leading-relaxed">
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
              <h4 class="text-lg font-semibold text-white mb-3">Milik Kami</h4>
              <p class="text-white/80 leading-relaxed">
                Template, desain, dan semua konten platform adalah milik
                eainvitation.com. Anda tidak boleh menyalin atau menggunakannya
                di luar platform.
              </p>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-white mb-3">Milik Anda</h4>
              <p class="text-white/80 leading-relaxed">
                Foto, teks, dan konten yang Anda buat tetap milik Anda. Namun,
                Anda memberi kami izin untuk menggunakannya seperlunya untuk
                menjalankan layanan.
              </p>
            </div>
          </div>
        </TermsAndConditionsTermSection>

        <!-- Section 7: Privasi -->
        <TermsAndConditionsTermSection title="7. Privasi">
          <p class="text-white/80 leading-relaxed">
            Kami melindungi data pribadi Anda sesuai Kebijakan Privasi kami.
            Kami tidak akan menjual data Anda kepada pihak ketiga.
          </p>
        </TermsAndConditionsTermSection>

        <!-- Section 8: Pembatalan -->
        <TermsAndConditionsTermSection title="8. Pembatalan">
          <div class="space-y-4">
            <div>
              <h4 class="text-lg font-semibold text-white mb-3">Oleh Anda</h4>
              <p class="text-white/80 leading-relaxed">
                Anda dapat membatalkan paket yang telah anda pilih selama anda
                belum menyelesaikan pembayaran.
              </p>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-white mb-3">Oleh Kami</h4>
              <p class="text-white/80 leading-relaxed mb-3">
                Kami dapat menangguhkan atau menghentikan akun Anda jika:
              </p>
              <ul class="space-y-2 text-white/80">
                <li class="flex items-start gap-2">
                  <i class="bi bi-dash-circle-fill text-sky-400 mt-1"></i>
                  <span>Anda melanggar syarat dan ketentuan ini</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-dash-circle-fill text-sky-400 mt-1"></i>
                  <span>Tidak membayar tagihan</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-dash-circle-fill text-sky-400 mt-1"></i>
                  <span>Kami mencurigai aktivitas penipuan</span>
                </li>
              </ul>
              <p
                class="text-white/70 text-sm leading-relaxed pt-4 border-t border-white/10"
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
              <h4 class="text-lg font-semibold text-white mb-3">
                Layanan "Sebagaimana Adanya"
              </h4>
              <p class="text-white/80 leading-relaxed">
                Kami menyediakan layanan sebagaimana adanya tanpa jaminan akan
                selalu tersedia 100% atau bebas dari kesalahan.
              </p>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-white mb-3">
                Batasan Ganti Rugi
              </h4>
              <p class="text-white/80 leading-relaxed mb-3">
                Kami tidak bertanggung jawab atas:
              </p>
              <ul class="space-y-2 text-white/80">
                <li class="flex items-start gap-2">
                  <i class="bi bi-dash-circle-fill text-sky-400 mt-1"></i>
                  <span>Kerugian tidak langsung atau kehilangan data</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-dash-circle-fill text-sky-400 mt-1"></i>
                  <span>Gangguan layanan atau downtime</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-dash-circle-fill text-sky-400 mt-1"></i>
                  <span>Kesalahan pada konten yang Anda buat</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="bi bi-dash-circle-fill text-sky-400 mt-1"></i>
                  <span>Masalah dengan pihak ketiga</span>
                </li>
              </ul>
              <p
                class="text-white/70 text-sm leading-relaxed pt-4 border-t border-white/10"
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
          <p class="text-white/80 leading-relaxed">
            Kami dapat mengubah syarat dan ketentuan ini kapan saja. Perubahan
            akan diberitahukan melalui email atau notifikasi di platform. Dengan
            terus menggunakan layanan setelah perubahan, berarti Anda menyetujui
            perubahan tersebut.
          </p>
        </TermsAndConditionsTermSection>

        <!-- Section 11: Hukum yang Berlaku -->
        <TermsAndConditionsTermSection title="11. Hukum yang Berlaku">
          <p class="text-white/80 leading-relaxed">
            Syarat dan ketentuan ini tunduk pada hukum Republik Indonesia.
            Sengketa akan diselesaikan melalui pengadilan yang berwenang di
            Indonesia.
          </p>
        </TermsAndConditionsTermSection>

        <!-- Section 12: Hubungi Kami -->
        <TermsAndConditionsTermSection title="12. Hubungi Kami">
          <p class="text-white/80 leading-relaxed mb-4">
            Jika ada pertanyaan tentang syarat dan ketentuan ini, hubungi kami
            di:
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
          </div>
        </TermsAndConditionsTermSection>
      </div>

      <!-- Footer Notice -->
      <div class="mt-16 text-center">
        <div
          class="inline-flex items-center px-6 py-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-full"
        >
          <i class="bi bi-calendar-check text-sky-400 mr-3"></i>
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
