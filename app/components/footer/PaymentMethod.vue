<script setup>
const paymentMethodList = [
  // { icon: "bca.webp", name: "BCA" },
  { icon: "bri.webp", name: "BRI" },
  { icon: "bni.webp", name: "BNI" },
  { icon: "mandiri.webp", name: "Mandiri" },
  { icon: "bsi.webp", name: "BSI" },
  { icon: "qris.webp", name: "QRIS" },
  { icon: "seabank.webp", name: "SeaBank" },
  { icon: "dana.webp", name: "DANA" },
  { icon: "gopay.webp", name: "GoPay" },
  { icon: "shopeepay.webp", name: "ShopeePay" },
  // { icon: "alfamidi.webp", name: "Alfamidi" },
  // { icon: "alfamart.webp", name: "Alfamart" },
  // { icon: "indomaret.webp", name: "Infomaret" },
  // { icon: "visa.webp", name: "Visa" },
  // { icon: "mastercard.webp", name: "Mastercard" },
  // { icon: "danamon.webp", name: "Danamon" },
  // { icon: "cimb.webp", name: "CIMB Niaga" },
  // { icon: "permata.webp", name: "Permata" },
];
</script>

<template>
  <div class="mt-10 pt-10 border-t border-black/20 dark:border-white/20">
    <div class="flex flex-wrap gap-6 justify-center">
      <!-- Payment Method Icons -->
      <FooterPaymentIcon
        v-for="(paymentMethod, index) in paymentMethodList"
        :key="index"
        :icon="paymentMethod.icon"
        :name="paymentMethod.name"
      />
    </div>
  </div>
</template>
