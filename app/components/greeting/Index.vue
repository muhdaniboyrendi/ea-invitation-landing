<template>
  <section id="greeting" class="py-16 overflow-hidden bg-light dark:bg-dark">
    <div class="px-4">
      <p class="text-primary text-sm font-bold uppercase tracking-widest mb-4">
        Mengapa EA Invitation?
      </p>

      <h2
        class="text-black dark:text-white text-4xl font-semibold tracking-tighter mb-4"
      >
        Standar Baru Undangan Pernikahan Modern
      </h2>

      <p
        class="max-w-3xl text-black/60 dark:text-white/60 md:text-lg font-medium leading-relaxed mb-14"
      >
        Kami mendefinisikan ulang cara Anda mengundang para tamu kehormatan.
        Menghadirkan harmoni sempurna antara kemewahan visual dan teknologi yang
        intuitif.
      </p>
    </div>

    <div class="md:px-4">
      <!-- Bento Grid -->
      <div
        class="bg-black/10 dark:bg-white/10 p-2 grid grid-cols-1 md:grid-cols-6 gap-2 max-w-7xl mx-auto mb-10"
      >
        <!-- Card 1: Design -->
        <div class="md:col-span-6">
          <div
            class="rounded-2xl bg-light dark:bg-dark p-2 border border-dark/20 dark:border-light/20 shadow-xl flex flex-col transition-all duration-300"
          >
            <div
              class="p-6 md:p-12 mb-4 flex flex-col md:flex-row md:items-center gap-8 gap-x-12"
            >
              <i class="bi bi-layers text-black dark:text-white text-7xl"></i>

              <div>
                <h3
                  class="text-black dark:text-white text-xl md:text-2xl font-semibold mb-2"
                >
                  Kurasi Desain Avant-Garde
                </h3>

                <p class="max-w-2xl text-black/60 dark:text-white/60">
                  Lupakan template konvensional yang monoton. Nikmati mahakarya
                  visual dengan estetika tinggi yang dirancang khusus untuk
                  merepresentasikan karakter unik Anda dan pasangan.
                </p>
              </div>
            </div>

            <div
              class="rounded-lg border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/3"
            >
              <div
                class="bg-light dark:bg-dark mt-3 mx-3 md:mt-6 md:mx-6 xl:p-8 xl:px-16 rounded-2xl rounded-b-none border border-b-0 border-black/10 dark:border-white/10 grid xl:grid-cols-2 gap-x-4"
              >
                <div class="xl:order-2 p-2 grid md:grid-cols-4 gap-2">
                  <NuxtImg
                    src="/img/themes/instagram.webp"
                    width="600"
                    quality="80"
                    loading="lazy"
                    placeholder
                    class="md:col-span-2 xl:col-span-4 w-full h-full max-h-40 object-cover object-center rounded-lg border border-black/10 dark:border-white/10"
                  />
                  <NuxtImg
                    src="/img/themes/javanese.webp"
                    width="600"
                    quality="80"
                    loading="lazy"
                    placeholder
                    class="hidden md:block xl:col-span-2 w-full h-full max-h-40 object-cover object-center rounded-lg border border-black/10 dark:border-white/10"
                  />
                  <NuxtImg
                    src="/img/themes/windows-11.webp"
                    width="600"
                    quality="80"
                    loading="lazy"
                    placeholder
                    class="hidden md:block xl:col-span-2 w-full h-full max-h-40 object-cover object-center rounded-lg border border-black/10 dark:border-white/10"
                  />
                </div>

                <div class="xl:order-1 p-6">
                  <span
                    class="text-black/40 dark:text-white/40 font-medium uppercase text-xs tracking-wider"
                    >Koleksi Tema</span
                  >
                  <div
                    class="flex flex-col md:flex-row md:justify-between md:items-center gap-y-4 mb-4 mt-1"
                  >
                    <h4
                      class="text-black dark:text-white text-xl md:text-2xl xl:text-3xl font-bold"
                    >
                      Tema Eksklusif
                    </h4>

                    <NuxtLink
                      to="#themes"
                      class="block xl:hidden py-2 px-4 w-full md:w-fit text-center text-white font-bold bg-primary rounded-lg hover:bg-primary/80 transition"
                    >
                      Jelajahi Koleksi Tema
                      <i class="bi bi-arrow-right ml-1"></i>
                    </NuxtLink>
                  </div>

                  <p class="text-black/60 dark:text-white/60">
                    Pilih dari berbagai kategori tema premium, mulai dari
                    minimalis modern, clean kontemporer, hingga adaptasi budaya
                    klasik yang anggun.
                  </p>

                  <NuxtLink
                    to="#themes"
                    class="hidden xl:block py-2 px-4 w-full md:w-fit text-center text-white font-bold bg-primary rounded-lg mt-6 hover:bg-primary/80 transition"
                  >
                    Jelajahi Koleksi Tema
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
            class="rounded-2xl bg-light dark:bg-dark p-2 border border-dark/20 dark:border-light/20 shadow-xl flex flex-col transition-all duration-300 h-full"
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
                  Penerbitan Instan & Efisien
                </h3>

                <p class="max-w-2xl text-black/60 dark:text-white/60">
                  Waktu Anda sangat berharga. Personalisasi dan siapkan undangan
                  megah Anda hanya dalam hitungan menit, siap dibagikan ke
                  lingkaran sosial terdekat kapan saja.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3: Limitless -->
        <div class="md:col-span-3">
          <div
            class="rounded-2xl bg-light dark:bg-dark p-2 border border-dark/20 dark:border-light/20 shadow-xl flex flex-col transition-all duration-300 h-full"
          >
            <div
              class="p-6 md:p-12 mb-4 flex flex-col md:flex-row md:items-center gap-8 gap-x-12"
            >
              <i class="bi bi-sliders2 text-black dark:text-white text-7xl"></i>

              <div>
                <h3
                  class="text-black dark:text-white text-xl md:text-2xl font-semibold mb-2"
                >
                  Fleksibilitas Tanpa Batas
                </h3>

                <p class="max-w-2xl text-black/60 dark:text-white/60">
                  Sesuaikan agenda atau perbarui detail susunan acara tanpa
                  cemas. Anda memiliki kendali penuh untuk mengubah informasi
                  dan mengganti tema kapan pun dibutuhkan, tanpa batas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 4: Analytics -->
        <div class="md:col-span-6">
          <div
            class="rounded-2xl bg-light dark:bg-dark p-2 border border-dark/20 dark:border-light/20 shadow-xl flex flex-col transition-all duration-300"
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
                  Wawasan Konfirmasi Tamu Terpadu
                </h3>

                <p class="max-w-2xl text-black/60 dark:text-white/60">
                  Kelola jalannya acara dengan proyeksi data yang akurat. Pantau
                  statistik kehadiran tamu, ucapan doa, dan konfirmasi RSVP
                  secara langsung melalui panel kendali intuitif yang elegan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
