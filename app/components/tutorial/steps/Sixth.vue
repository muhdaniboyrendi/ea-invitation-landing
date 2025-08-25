<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div class="order-2 lg:order-1">
      <div class="relative">
        <div
          class="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-pink-500/20 blur-2xl rounded-3xl"
        ></div>
        <div
          class="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden"
        >
          <!-- Guest List Interface -->
          <div class="space-y-6">
            <div class="flex items-center justify-between">
              <h4 class="text-white font-semibold text-lg">
                Manajemen Daftar Tamu
              </h4>
              <div class="flex items-center space-x-2">
                <i class="bi bi-people-fill text-purple-400"></i>
                <span class="text-purple-400 text-sm font-medium">25 Tamu</span>
              </div>
            </div>

            <!-- Add Guest Form -->
            <div class="bg-white/10 rounded-lg p-4">
              <h5 class="text-white font-medium mb-3 flex items-center">
                <i class="bi bi-person-plus text-purple-400 mr-2"></i>
                Tambah Tamu Baru
              </h5>

              <div class="space-y-3">
                <div class="bg-white/5 rounded-lg p-3">
                  <p class="text-white/50 text-xs mb-1">Nama Lengkap</p>
                  <input
                    type="text"
                    placeholder="Masukkan nama tamu..."
                    class="bg-transparent text-white text-sm w-full outline-none placeholder:text-white/30"
                  />
                </div>

                <div class="bg-white/5 rounded-lg p-3">
                  <p class="text-white/50 text-xs mb-1">
                    Nomor WhatsApp (Opsional)
                  </p>
                  <input
                    type="text"
                    placeholder="+62 812-3456-7890"
                    class="bg-transparent text-white text-sm w-full outline-none placeholder:text-white/30"
                  />
                </div>

                <div class="flex items-center space-x-3">
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      class="w-4 h-4 rounded border-white/30 bg-white/10 text-purple-500 focus:ring-purple-500"
                    />
                    <span class="text-white/70 text-sm"
                      >Tamu Grup (Keluarga/Rombongan)</span
                    >
                  </label>
                </div>

                <button
                  class="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
                >
                  <i class="bi bi-plus-circle mr-1"></i>
                  Tambah Tamu
                </button>
              </div>
            </div>

            <!-- Guest List -->
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h5 class="text-white font-medium">Daftar Tamu (25)</h5>
                <div class="flex space-x-2">
                  <button class="text-purple-400 text-xs hover:text-purple-300">
                    <i class="bi bi-download mr-1"></i>Export
                  </button>
                  <button class="text-purple-400 text-xs hover:text-purple-300">
                    <i class="bi bi-upload mr-1"></i>Import
                  </button>
                </div>
              </div>

              <!-- Guest Items -->
              <div class="space-y-2 max-h-48 overflow-y-auto">
                <div
                  class="bg-white/5 rounded-lg p-3 flex items-center justify-between"
                >
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center"
                    >
                      <span class="text-white font-bold text-xs">A</span>
                    </div>
                    <div>
                      <p class="text-white font-medium text-sm">Ahmad Rahman</p>
                      <p class="text-white/50 text-xs">+62 812-1234-5678</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span
                      class="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full"
                      >Individu</span
                    >
                    <button class="text-red-400 hover:text-red-300">
                      <i class="bi bi-trash text-xs"></i>
                    </button>
                  </div>
                </div>

                <div
                  class="bg-white/5 rounded-lg p-3 flex items-center justify-between"
                >
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-8 h-8 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center"
                    >
                      <span class="text-white font-bold text-xs">K</span>
                    </div>
                    <div>
                      <p class="text-white font-medium text-sm">
                        Keluarga Besar Sutrisno
                      </p>
                      <p class="text-white/50 text-xs">+62 813-9876-5432</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span
                      class="bg-pink-500/20 text-pink-300 text-xs px-2 py-1 rounded-full"
                      >Grup</span
                    >
                    <button class="text-red-400 hover:text-red-300">
                      <i class="bi bi-trash text-xs"></i>
                    </button>
                  </div>
                </div>

                <div
                  class="bg-white/5 rounded-lg p-3 flex items-center justify-between"
                >
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center"
                    >
                      <span class="text-white font-bold text-xs">S</span>
                    </div>
                    <div>
                      <p class="text-white font-medium text-sm">Sari Dewi</p>
                      <p class="text-white/50 text-xs">Tanpa WhatsApp</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span
                      class="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full"
                      >Individu</span
                    >
                    <button class="text-red-400 hover:text-red-300">
                      <i class="bi bi-trash text-xs"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Guest Statistics -->
            <div class="grid grid-cols-2 gap-3">
              <div
                class="bg-purple-500/10 border border-purple-400/20 rounded-lg p-3"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-purple-300 text-xs">Tamu Individu</p>
                    <p class="text-white font-bold">18</p>
                  </div>
                  <i class="bi bi-person text-purple-400"></i>
                </div>
              </div>

              <div
                class="bg-pink-500/10 border border-pink-400/20 rounded-lg p-3"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-pink-300 text-xs">Tamu Grup</p>
                    <p class="text-white font-bold">7</p>
                  </div>
                  <i class="bi bi-people text-pink-400"></i>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex space-x-3 pt-2">
              <button
                class="flex-1 bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-xl transition-all border border-white/20"
              >
                <i class="bi bi-whatsapp mr-1"></i>
                Kirim via WhatsApp
              </button>
              <button
                class="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Selesai
                <i class="bi bi-check-circle ml-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="order-1 lg:order-2">
      <div
        class="relative group bg-white dark:bg-black rounded-3xl hover:scale-105 transition-transform duration-500"
      >
        <div
          class="absolute -inset-4 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-purple-400/30 blur-2xl rounded-3xl"
        ></div>
        <div
          class="relative bg-linear-to-r from-purple-900/90 to-pink-900/90 dark:from-purple-900/10 dark:to-pink-900/10 border border-white/20 rounded-3xl p-8"
        >
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-4 text-white font-bold text-xl"
            >
              6
            </div>
            <h3 class="text-2xl font-bold text-white">Buat Daftar Tamu</h3>
          </div>

          <div class="space-y-4 mb-6">
            <p class="text-white/80 leading-relaxed">
              Kelola daftar tamu undangan dengan mudah. Tambahkan tamu individu
              atau grup keluarga, lengkapi dengan kontak WhatsApp untuk
              kemudahan pengiriman undangan.
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <i class="bi bi-person-plus text-purple-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Tambah Tamu Individu</p>
                <p class="text-white/70 text-sm">
                  Masukkan nama lengkap dan nomor WhatsApp untuk tamu perorangan
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-people text-purple-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Tambah Tamu Grup</p>
                <p class="text-white/70 text-sm">
                  Tandai sebagai grup untuk keluarga besar atau rombongan teman
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-whatsapp text-purple-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">
                  Kirim Otomatis via WhatsApp
                </p>
                <p class="text-white/70 text-sm">
                  Undangan langsung terkirim ke WhatsApp tamu yang memiliki
                  nomor
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i
                class="bi bi-file-earmark-spreadsheet text-purple-400 mt-1"
              ></i>
              <div>
                <p class="text-white font-medium">Import/Export Excel</p>
                <p class="text-white/70 text-sm">
                  Import daftar dari Excel atau export untuk backup dan editing
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-graph-up text-purple-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Statistik Tamu</p>
                <p class="text-white/70 text-sm">
                  Lihat jumlah tamu individu dan grup, serta status pengiriman
                  undangan
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-shield-check text-purple-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Data Aman & Private</p>
                <p class="text-white/70 text-sm">
                  Semua data tamu tersimpan aman dan tidak dibagikan ke pihak
                  lain
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
