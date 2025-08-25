<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div class="order-1 lg:order-1">
      <div
        class="relative group bg-white dark:bg-black rounded-3xl hover:scale-105 transition-transform duration-500"
      >
        <div
          class="absolute -inset-4 bg-gradient-to-r from-green-400/30 via-teal-400/30 to-green-400/30 blur-2xl rounded-3xl"
        ></div>
        <div
          class="relative bg-linear-to-r from-green-900/90 to-teal-900/90 dark:from-green-900/10 dark:to-teal-900/10 border border-white/20 rounded-3xl p-8"
        >
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mr-4 text-white font-bold text-xl"
            >
              3
            </div>
            <h3 class="text-2xl font-bold text-white">Bayar Paket</h3>
          </div>

          <div class="space-y-4 mb-6">
            <p class="text-white/80 leading-relaxed">
              Selesaikan pembayaran dengan mudah melalui berbagai metode
              pembayaran yang tersedia. Proses pembayaran aman dan terpercaya.
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <i class="bi bi-bank text-green-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Transfer Bank</p>
                <p class="text-white/70 text-sm">
                  BCA, BRI, Mandiri, BNI, dan bank lainnya
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-qr-code text-green-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">QRIS</p>
                <p class="text-white/70 text-sm">
                  Bayar mudah dengan scan QR code dari e-wallet apapun
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-wallet2 text-green-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">E-Wallet</p>
                <p class="text-white/70 text-sm">
                  GoPay, OVO, DANA, ShopeePay, LinkAja
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-credit-card text-green-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Kartu Kredit/Debit</p>
                <p class="text-white/70 text-sm">
                  Visa, Mastercard, JCB - Cicilan 0% tersedia
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-shield-check text-green-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Pembayaran Aman</p>
                <p class="text-white/70 text-sm">
                  SSL encryption dan sistem keamanan berstandar internasional
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <i class="bi bi-clock-history text-green-400 mt-1"></i>
              <div>
                <p class="text-white font-medium">Proses Instan</p>
                <p class="text-white/70 text-sm">
                  Undangan langsung aktif setelah pembayaran berhasil
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
          class="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-teal-500/20 blur-2xl rounded-3xl"
        ></div>
        <div
          class="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden"
        >
          <!-- Payment Interface -->
          <div class="space-y-6">
            <div class="flex items-center justify-between">
              <h4 class="text-white font-semibold text-lg">Checkout</h4>
              <div class="flex items-center space-x-2">
                <div
                  class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                ></div>
                <span class="text-green-400 text-sm font-medium">Secure</span>
              </div>
            </div>

            <!-- Order Summary -->
            <div class="bg-white/10 rounded-lg p-4">
              <h5 class="text-white font-medium mb-3">Ringkasan Pesanan</h5>
              <div class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-white/70 text-sm">Paket Premium</span>
                  <span class="text-white">Rp 150.000</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-white/70 text-sm">Biaya Admin</span>
                  <span class="text-white">Rp 2.500</span>
                </div>
                <div class="border-t border-white/10 pt-2 mt-2">
                  <div class="flex justify-between items-center">
                    <span class="text-white font-semibold">Total</span>
                    <span class="text-green-400 font-bold text-lg"
                      >Rp 152.500</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Payment Methods -->
            <div class="space-y-3">
              <h5 class="text-white font-medium">Metode Pembayaran</h5>

              <!-- Selected Payment Method -->
              <div
                class="bg-green-500/20 border-2 border-green-400/50 rounded-lg p-4"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center"
                    >
                      <span class="text-white font-bold text-xs">BCA</span>
                    </div>
                    <div>
                      <p class="text-white font-medium text-sm">
                        Transfer Bank BCA
                      </p>
                      <p class="text-green-300 text-xs">Dipilih</p>
                    </div>
                  </div>
                  <i class="bi bi-check-circle-fill text-green-400"></i>
                </div>
              </div>

              <!-- Other Payment Options -->
              <div class="grid grid-cols-2 gap-2">
                <div
                  class="bg-white/5 border border-white/10 rounded-lg p-3 cursor-pointer hover:bg-white/10 transition-all"
                >
                  <div class="flex items-center space-x-2">
                    <div
                      class="w-6 h-6 bg-red-500 rounded flex items-center justify-center"
                    >
                      <span class="text-white font-bold text-xs">QR</span>
                    </div>
                    <span class="text-white/70 text-xs">QRIS</span>
                  </div>
                </div>

                <div
                  class="bg-white/5 border border-white/10 rounded-lg p-3 cursor-pointer hover:bg-white/10 transition-all"
                >
                  <div class="flex items-center space-x-2">
                    <div
                      class="w-6 h-6 bg-green-600 rounded flex items-center justify-center"
                    >
                      <span class="text-white font-bold text-xs">GP</span>
                    </div>
                    <span class="text-white/70 text-xs">GoPay</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Payment Info -->
            <div
              class="bg-blue-500/10 border border-blue-400/20 rounded-lg p-4"
            >
              <div class="flex items-start space-x-3">
                <i class="bi bi-info-circle text-blue-400 mt-0.5"></i>
                <div>
                  <p class="text-blue-300 text-sm font-medium">
                    Nomor Rekening BCA
                  </p>
                  <p class="text-white font-mono text-sm">1234567890</p>
                  <p class="text-blue-200 text-xs mt-1">a.n. Digital Wedding</p>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="space-y-3">
              <button
                class="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Konfirmasi Pembayaran
              </button>

              <button
                class="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-6 rounded-xl transition-all duration-300 border border-white/20"
              >
                Ubah Metode Pembayaran
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
