<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div :class="['order-1 lg:order-1']">
      <div
        class="relative group bg-white dark:bg-black rounded-3xl hover:scale-105 transition-transform duration-500"
      >
        <div
          class="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 blur-2xl rounded-3xl"
        ></div>
        <div
          class="relative bg-linear-to-r from-cyan-900/90 to-blue-900/90 dark:from-cyan-900/10 dark:to-blue-900/10 border border-white/20 rounded-3xl p-8"
        >
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold text-xl"
            >
              1
            </div>
            <h3 class="text-2xl font-bold text-white">Persiapan Data</h3>
          </div>

          <div class="space-y-4 mb-6">
            <p class="text-white/80 leading-relaxed">
              Siapkan semua informasi yang diperlukan untuk undangan Anda
              sebelum memulai proses pembuatan.
            </p>
          </div>

          <div class="space-y-3">
            <div class="flex items-start space-x-3">
              <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Data Mempelai</p>
                <p class="text-white/70 text-sm">
                  Nama lengkap kedua mempelai dan orang tua
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Detail Acara</p>
                <p class="text-white/70 text-sm">
                  Tanggal, waktu, dan lokasi acara pernikahan
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Foto Prewedding</p>
                <p class="text-white/70 text-sm">
                  Foto berkualitas tinggi untuk tampilan undangan
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Kisah Cinta (Opsional)</p>
                <p class="text-white/70 text-sm">
                  Cerita singkat tentang perjalanan cinta Anda
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-check-circle-fill text-cyan-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Amplop Digital (Opsional)</p>
                <p class="text-white/70 text-sm">
                  Nomor rekening atau nomor akun e-wallet untuk amplop digital
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="order-2 lg:order-2">
      <div class="relative">
        <div
          class="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-2xl rounded-3xl"
        ></div>
        <div
          class="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden"
        >
          <!-- Mock Interface -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h4 class="text-white font-semibold">Form Data Mempelai</h4>
              <div
                class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
              ></div>
            </div>

            <div class="space-y-3">
              <div class="bg-white/10 rounded-lg p-3">
                <p class="text-white/50 text-xs mb-1">Nama Mempelai Pria</p>
                <p class="text-white">Ahmad Rizky Pratama</p>
              </div>

              <div class="bg-white/10 rounded-lg p-3">
                <p class="text-white/50 text-xs mb-1">Nama Mempelai Wanita</p>
                <p class="text-white">Siti Nurhaliza</p>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div class="bg-white/10 rounded-lg p-3">
                  <p class="text-white/50 text-xs mb-1">Ayah Pria</p>
                  <p class="text-white text-sm">Bapak Suharto</p>
                </div>
                <div class="bg-white/10 rounded-lg p-3">
                  <p class="text-white/50 text-xs mb-1">Ibu Pria</p>
                  <p class="text-white text-sm">Ibu Sari</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
