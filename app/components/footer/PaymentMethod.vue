<script setup>
const paymentMethodList = [
  { icon: "bca.webp", name: "BCA" },
  { icon: "bri.webp", name: "BRI" },
  { icon: "mandiri.webp", name: "Mandiri" },
  { icon: "bni.webp", name: "BNI" },
  { icon: "qris.webp", name: "QRIS" },
  { icon: "alfamidi.webp", name: "Alfamidi" },
  { icon: "alfamart.webp", name: "Alfamart" },
  { icon: "indomaret.webp", name: "Infomaret" },
  // { icon: "visa.webp", name: "Visa" },
  // { icon: "mastercard.webp", name: "Mastercard" },
];
</script>

<template>
  <div class="mt-16 pt-12 border-t border-white/10">
    <div class="text-center mb-12">
      <h3
        class="text-2xl lg:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-purple-200 to-pink-200"
      >
        Metode Pembayaran
      </h3>

      <div class="flex flex-wrap gap-6 justify-center mt-6">
        <!-- Payment Method Icons -->
        <FooterPaymentIcon
          v-for="(paymentMethod, index) in paymentMethodList"
          :key="index"
          :icon="paymentMethod.icon"
          :name="paymentMethod.name"
        />
      </div>
    </div>
  </div>
</template>
