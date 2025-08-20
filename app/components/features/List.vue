<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
    <!-- Feature 1 - Informasi Mempelai Pria -->
    <div class="group relative">
      <div
        class="absolute -inset-1 bg-gradient-to-r from-blue-400/30 to-indigo-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
      ></div>
      <div
        class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:bg-white/10 dark:hover:bg-black/15"
      >
        <div
          class="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl mb-4 flex items-center justify-center shadow-lg"
        >
          <i class="bi bi-person-standing text-white text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-white mb-2">
          Profil Mempelai Pria
        </h3>
        <p class="text-white/70 text-sm">
          Tampilkan biodata lengkap mempelai pria dengan foto berkualitas tinggi
          dan informasi personal yang menarik dalam desain yang maskulin dan
          elegan.
        </p>
      </div>
    </div>

    <!-- Feature 2 - Informasi Mempelai Wanita -->
    <div class="group relative">
      <div
        class="absolute -inset-1 bg-gradient-to-r from-pink-400/30 to-rose-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
      ></div>
      <div
        class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:bg-white/10 dark:hover:bg-black/15"
      >
        <div
          class="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-600 rounded-xl mb-4 flex items-center justify-center shadow-lg"
        >
          <i class="bi bi-person-standing-dress text-white text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-white mb-2">
          Profil Mempelai Wanita
        </h3>
        <p class="text-white/70 text-sm">
          Sajikan profil cantik mempelai wanita dengan sentuhan feminin yang
          memukau, dilengkapi foto portrait dan detail personal yang menawan.
        </p>
      </div>
    </div>

    <!-- Feature 3 - Informasi Acara -->
    <div class="group relative">
      <div
        class="absolute -inset-1 bg-gradient-to-r from-amber-400/30 to-orange-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
      ></div>
      <div
        class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:bg-white/10 dark:hover:bg-black/15"
      >
        <div
          class="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl mb-4 flex items-center justify-center shadow-lg"
        >
          <i class="bi bi-calendar-event text-white text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-white mb-2">Detail Acara</h3>
        <p class="text-white/70 text-sm">
          Informasi lengkap jadwal pernikahan dengan countdown timer real-time,
          lokasi venue, dan rundown acara yang detail dan mudah dipahami.
        </p>
      </div>
    </div>

    <!-- Feature 4 - Love Story -->
    <div class="group relative">
      <div
        class="absolute -inset-1 bg-gradient-to-r from-purple-400/30 to-violet-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
      ></div>
      <div
        class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:bg-white/10 dark:hover:bg-black/15"
      >
        <div
          class="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-600 rounded-xl mb-4 flex items-center justify-center shadow-lg"
        >
          <i class="bi bi-heart-fill text-white text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-white mb-2">Kisah Cinta</h3>
        <p class="text-white/70 text-sm">
          Bagikan perjalanan romantis hubungan Anda melalui timeline interaktif
          dengan milestone penting yang berkesan dan penuh makna.
        </p>
      </div>
    </div>

    <!-- Feature 5 - Galeri -->
    <div class="group relative">
      <div
        class="absolute -inset-1 bg-gradient-to-r from-emerald-400/30 to-teal-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
      ></div>
      <div
        class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:bg-white/10 dark:hover:bg-black/15"
      >
        <div
          class="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl mb-4 flex items-center justify-center shadow-lg"
        >
          <i class="bi bi-camera-fill text-white text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-white mb-2">
          Galeri Foto & Video
        </h3>
        <p class="text-white/70 text-sm">
          Koleksi momen berharga dalam galeri multimedia yang responsif, lengkap
          dengan slideshow otomatis dan efek transisi yang memukau.
        </p>
      </div>
    </div>

    <!-- Feature 6 - RSVP -->
    <div class="group relative">
      <div
        class="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-sky-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
      ></div>
      <div
        class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:bg-white/10 dark:hover:bg-black/15"
      >
        <div
          class="w-12 h-12 bg-gradient-to-br from-cyan-400 to-sky-600 rounded-xl mb-4 flex items-center justify-center shadow-lg"
        >
          <i class="bi bi-person-check-fill text-white text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-white mb-2">Konfirmasi RSVP</h3>
        <p class="text-white/70 text-sm">
          Sistem konfirmasi kehadiran yang user-friendly dengan notifikasi
          real-time dan tracking jumlah tamu untuk memudahkan perencanaan acara.
        </p>
      </div>
    </div>

    <!-- Feature 7 - Hadiah Digital -->
    <div class="group relative">
      <div
        class="absolute -inset-1 bg-gradient-to-r from-yellow-400/30 to-gold-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
      ></div>
      <div
        class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:bg-white/10 dark:hover:bg-black/15"
      >
        <div
          class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl mb-4 flex items-center justify-center shadow-lg"
        >
          <i class="bi bi-gift-fill text-white text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-white mb-2">Amplop Digital</h3>
        <p class="text-white/70 text-sm">
          Fitur hadiah digital yang aman dan praktis, memungkinkan tamu
          memberikan kado dalam bentuk transfer bank dengan QR code
          terintegrasi.
        </p>
      </div>
    </div>

    <!-- Feature 8 - Buku Tamu -->
    <div class="group relative">
      <div
        class="absolute -inset-1 bg-gradient-to-r from-lime-400/30 to-green-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
      ></div>
      <div
        class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:bg-white/10 dark:hover:bg-black/15"
      >
        <div
          class="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-600 rounded-xl mb-4 flex items-center justify-center shadow-lg"
        >
          <i class="bi bi-chat-heart-fill text-white text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-white mb-2">Buku Tamu Digital</h3>
        <p class="text-white/70 text-sm">
          Koleksi doa dan ucapan selamat dari kerabat tersayang dalam format
          digital yang dapat disimpan sebagai kenangan indah selamanya.
        </p>
      </div>
    </div>

    <!-- Feature 9 - Dashboard Admin -->
    <div class="group relative">
      <div
        class="absolute -inset-1 bg-gradient-to-r from-slate-400/30 to-gray-600/30 blur-lg rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-50 group-hover:opacity-75"
      ></div>
      <div
        class="relative backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:bg-white/10 dark:hover:bg-black/15"
      >
        <div
          class="w-12 h-12 bg-gradient-to-br from-slate-400 to-gray-600 rounded-xl mb-4 flex items-center justify-center shadow-lg"
        >
          <i class="bi bi-graph-up-arrow text-white text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-white mb-2">
          Dashboard Analytics
        </h3>
        <p class="text-white/70 text-sm">
          Panel kontrol komprehensif untuk monitoring statistik undangan, data
          tamu, dan insights mendalam dengan visualisasi yang informatif.
        </p>
      </div>
    </div>
  </div>
</template>
