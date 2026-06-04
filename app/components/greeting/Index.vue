<template>
  <section id="greeting" class="py-16 overflow-hidden bg-light dark:bg-dark">
    <div class="px-4">
      <p class="text-primary text-sm font-bold uppercase tracking-widest mb-4">
        Mengapa EA Invitation?
      </p>

      <h2
        class="text-black dark:text-white text-4xl font-semibold tracking-tighter mb-4"
      >
        Fitur Cerdas untuk Momen Istimewamu
      </h2>

      <p
        class="max-w-3xl text-black/60 dark:text-white/60 md:text-lg font-medium leading-relaxed mb-14"
      >
        Bukan sekadar undangan digital biasa. Kami menggabungkan kebebasan
        berekspresi dengan kepraktisan teknologi untuk memastikan hari bahagiamu
        berjalan sempurna.
      </p>
    </div>

    <!-- Bento Grid -->
    <div
      class="bg-black/10 dark:bg-white/10 p-2 md:p-4 grid grid-cols-1 md:grid-cols-6 gap-2 max-w-7xl mx-auto mb-10"
    >
      <!-- Card 1: Design -->
      <div class="md:col-span-6">
        <div
          class="rounded-2xl bg-light dark:bg-dark p-2 border border-dark/20 dark:border-light/20 flex flex-col transition-all duration-300"
        >
          <div
            class="p-6 md:p-12 mb-4 flex flex-col md:flex-row md:items-center gap-8 gap-x-12"
          >
            <i class="bi bi-layers text-black dark:text-white text-7xl"></i>

            <div>
              <h3
                class="text-black dark:text-white text-xl md:text-2xl font-semibold mb-2"
              >
                Koleksi Desain Anti-Mainstream
              </h3>

              <p class="max-w-2xl text-black/60 dark:text-white/60">
                Hari pernikahanmu itu spesial, jadi undangannya gak boleh pakai
                desain sejuta umat. Kami mengurasi pilihan tema unik
                berkarakter—mulai dari gaya ala Instagram, layout etnik modern,
                hingga tampilan OS masa kini yang kreatif banget.
              </p>
            </div>
          </div>

          <div
            class="rounded-lg border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/3"
          >
            <div
              class="bg-light dark:bg-dark mt-3 mx-3 md:mt-6 md:mx-6 xl:p-8 xl:px-16 rounded-2xl rounded-b-none border border-b-0 border-black/10 dark:border-white/10 grid lg:grid-cols-2 gap-x-4"
            >
              <div class="lg:order-2 p-2">
                <div
                  class="w-full aspect-4/3 rounded-lg border border-black/10 dark:border-white/10 overflow-hidden"
                >
                  <NuxtImg
                    src="/img/greeting/themes.webp"
                    width="1000"
                    quality="80"
                    loading="lazy"
                    placeholder
                    alt="anti-mainstream design theme image"
                    class="rotate-x-60 -rotate-z-45 scale-240"
                  />
                </div>
              </div>

              <div class="lg:order-1 p-6">
                <span
                  class="text-black/40 dark:text-white/40 font-medium uppercase text-xs tracking-wider"
                  >Pilihan Tema</span
                >
                <div
                  class="flex flex-col md:flex-row md:justify-between md:items-center gap-y-4 mb-4 mt-1"
                >
                  <h4
                    class="text-black dark:text-white text-xl md:text-2xl md:text-3xl font-bold"
                  >
                    Koleksi Unik & Berkelas
                  </h4>

                  <NuxtLink
                    to="#themes"
                    class="block lg:hidden py-2 px-4 w-full md:w-fit text-center text-white font-bold bg-primary rounded-lg hover:bg-primary/80 transition"
                  >
                    Lihat Desain Unik Kami
                    <i class="bi bi-arrow-right ml-1"></i>
                  </NuxtLink>
                </div>

                <p class="text-black/60 dark:text-white/60">
                  Temukan tema idamanmu, mulai dari minimalis modern yang clean,
                  gaya interaktif yang seru, hingga adaptasi budaya klasik yang
                  dikemas secara kekinian.
                </p>

                <NuxtLink
                  to="#themes"
                  class="hidden lg:block py-2 px-4 w-full md:w-fit text-center text-white font-bold bg-primary rounded-lg mt-6 hover:bg-primary/80 transition"
                >
                  Lihat Desain Unik Kami
                  <i class="bi bi-arrow-right ml-1"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 2: Instant -->
      <div class="md:col-span-3">
        <div
          class="rounded-2xl bg-light dark:bg-dark p-2 border border-dark/20 dark:border-light/20 flex flex-col transition-all duration-300 h-full"
        >
          <div
            class="p-6 md:p-12 mb-4 flex flex-col md:flex-row md:items-center gap-8 gap-x-12"
          >
            <i
              class="bi bi-lightning-charge text-black dark:text-white text-7xl"
            ></i>

            <div>
              <h3
                class="text-black dark:text-white text-xl md:text-2xl font-semibold mb-2"
              >
                Bikin Instan & Tanpa Ribet
              </h3>

              <p class="max-w-2xl text-black/60 dark:text-white/60">
                Mempersiapkan pernikahan itu sudah cukup menyita waktu. Makanya,
                sistem kami dibuat seefisien mungkin agar undangan kerenmu siap
                dibagikan hanya dalam hitungan menit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 3: Limitless -->
      <div class="md:col-span-3">
        <div
          class="rounded-2xl bg-light dark:bg-dark p-2 border border-dark/20 dark:border-light/20 flex flex-col transition-all duration-300 h-full"
        >
          <div
            class="p-6 md:p-12 mb-4 flex flex-col md:flex-row md:items-center gap-8 gap-x-12"
          >
            <i class="bi bi-sliders2 text-black dark:text-white text-7xl"></i>

            <div>
              <h3
                class="text-black dark:text-white text-xl md:text-2xl font-semibold mb-2"
              >
                Bebas Kustomisasi Kapan Saja
              </h3>

              <p class="max-w-2xl text-black/60 dark:text-white/60">
                Ada perubahan jadwal, lokasi, atau mendadak mau ganti musik
                latar? Tenang, gak perlu cemas. Kamu punya kendali penuh buat
                perbarui detail informasi sesukamu tanpa batas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 4: Analytics -->
      <div class="md:col-span-6">
        <div
          class="rounded-2xl bg-light dark:bg-dark p-2 border border-dark/20 dark:border-light/20 flex flex-col transition-all duration-300"
        >
          <div
            class="p-6 md:p-12 mb-4 flex flex-col md:flex-row md:items-center gap-8 gap-x-12"
          >
            <i
              class="bi bi-graph-up-arrow text-black dark:text-white text-7xl"
            ></i>

            <div>
              <h3
                class="text-black dark:text-white text-xl md:text-2xl font-semibold mb-2"
              >
                Pantau Tamu & RSVP Jadi Mudah
              </h3>

              <p class="max-w-2xl text-black/60 dark:text-white/60">
                Kelola jalannya acara dengan rapi. Pantau konfirmasi kehadiran
                (RSVP), jumlah rombongan, hingga ucapan doa dari para tamu
                secara langsung (*real-time*) lewat dasbor kendali yang elegan.
              </p>
            </div>
          </div>

          <!-- <div
            class="rounded-lg border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/3"
          >
            <div
              class="bg-light dark:bg-dark mt-3 mx-3 md:mt-6 md:mx-6 xl:p-8 xl:px-16 rounded-2xl rounded-b-none border border-b-0 border-black/10 dark:border-white/10 grid lg:grid-cols-2 gap-x-4"
            >
              <div class="lg:order-2 p-2">
                <div
                  class="w-full aspect-4/3 rounded-lg border border-black/10 dark:border-white/10 overflow-hidden"
                >
                  <NuxtImg
                    src="/img/greeting/themes.webp"
                    width="1000"
                    quality="80"
                    loading="lazy"
                    placeholder
                    alt="anti-mainstream design theme image"
                    class="rotate-x-60 -rotate-z-45 scale-240"
                  />
                </div>
              </div>

              <div class="lg:order-1 p-6">
                <span
                  class="text-black/40 dark:text-white/40 font-medium uppercase text-xs tracking-wider"
                  >Pilihan Tema</span
                >
                <div
                  class="flex flex-col md:flex-row md:justify-between md:items-center gap-y-4 mb-4 mt-1"
                >
                  <h4
                    class="text-black dark:text-white text-xl md:text-2xl md:text-3xl font-bold"
                  >
                    Koleksi Unik & Berkelas
                  </h4>

                  <NuxtLink
                    to="#themes"
                    class="block lg:hidden py-2 px-4 w-full md:w-fit text-center text-white font-bold bg-primary rounded-lg hover:bg-primary/80 transition"
                  >
                    Lihat Desain Unik Kami
                    <i class="bi bi-arrow-right ml-1"></i>
                  </NuxtLink>
                </div>

                <p class="text-black/60 dark:text-white/60">
                  Temukan tema idamanmu, mulai dari minimalis modern yang clean,
                  gaya interaktif yang seru, hingga adaptasi budaya klasik yang
                  dikemas secara kekinian.
                </p>

                <NuxtLink
                  to="#themes"
                  class="hidden lg:block py-2 px-4 w-full md:w-fit text-center text-white font-bold bg-primary rounded-lg mt-6 hover:bg-primary/80 transition"
                >
                  Lihat Desain Unik Kami
                  <i class="bi bi-arrow-right ml-1"></i>
                </NuxtLink>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>
