<template>
  <footer
    id="footer"
    class="relative bg-white dark:bg-white/3 border-t border-dark/20 dark:border-light/20 overflow-hidden"
  >
    <div class="relative">
      <!-- Main Footer Content -->
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-10">
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
