<template>
  <footer
    id="footer"
    class="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-dark overflow-hidden"
  >
    <div class="relative z-10">
      <!-- Main Footer Content -->
      <div class="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          <!-- Brand Section -->
          <FooterBrand />

          <!-- Quick Links -->
          <FooterLinks />

          <!-- Support & Info -->
          <FooterSupportInfo />
        </div>

        <!-- Payment Method Section -->
        <FooterPaymentMethod />

        <!-- Social Media & Contact Info -->
        <FooterSocials />
      </div>

      <!-- Bottom Bar -->
      <FooterBottomBar />
    </div>
  </footer>
</template>
