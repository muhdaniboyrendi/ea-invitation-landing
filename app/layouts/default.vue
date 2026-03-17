<template>
  <div class="bg-off-white dark:bg-dark">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
    <WhatsApp
      phone-number="6282220633024"
      message="Halo! Saya tertarik dengan layanan undangan digital EA Invitation. Bisakah Anda membantu saya?"
      :footer-offset="300"
    />
  </div>
</template>
