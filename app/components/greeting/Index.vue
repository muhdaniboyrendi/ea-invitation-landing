<template>
  <section id="greeting" class="py-16 overflow-hidden bg-light dark:bg-dark">
    <div class="px-4">
      <p class="text-primary text-sm font-bold uppercase tracking-wide mb-4">
        Mengapa EA Invitation?
      </p>

      <h2
        class="text-black dark:text-white text-4xl font-semibold tracking-tighter mb-4"
      >
        Dibuat untuk pasangan masa kini.
      </h2>

      <p class="max-w-3xl text-black/60 dark:text-white/60 md:text-lg mb-14">
        EA Invitation merupakan sebuah platform undangan digital modern yang
        membawa desain undangan yang berbeda yang belum pernah ada sebelumnya.
      </p>
    </div>

    <div class="md:px-4">
      <!-- Bento Grid -->
      <div
        class="bg-black/10 dark:bg-white/10 p-2 grid grid-cols-1 md:grid-cols-6 gap-2 max-w-7xl mx-auto mb-10"
      >
        <!-- Card 1 -->
        <div class="md:col-span-6">
          <div
            class="rounded-2xl bg-off-white dark:bg-dark p-2 border border-dark/20 dark:border-light/20 shadow-xl flex flex-col h transition-all duration-300"
          >
            <div
              class="p-6 md:p-12 mb-4 flex flex-col md:flex-row md:items-center gap-8 gap-x-12"
            >
              <i class="bi bi-layers text-black dark:text-white text-7xl"></i>

              <div>
                <h3
                  class="text-black dark:text-white text-xl md:text-2xl font-semibold mb-2"
                >
                  Anti-mainstream design
                </h3>

                <p class="max-w-2xl text-black/60 dark:text-white/60">
                  Rasakan tema undangan dengan desain yang unik dan belum pernah
                  terbayangkan sebelumnya
                </p>
              </div>
            </div>

            <div
              class="rounded-lg border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/3"
            >
              <div
                class="bg-off-white dark:bg-dark mt-3 mx-3 md:mt-6 md:mx-6 xl:p-8 xl:px-16 rounded-2xl rounded-b-none border border-b-0 border-black/10 dark:border-white/10 grid xl:grid-cols-2 gap-x-4"
              >
                <div class="xl:order-2 p-2 grid md:grid-cols-4 gap-2">
                  <NuxtImg
                    src="/img/themes/instagram.webp"
                    width="600"
                    quality="80"
                    loading="lazy"
                    placeholder
                    class="md:col-span-2 xl:col-span-4 w-full h-full max-h-40 object-cover object-center rounded-lg border border--black/10 dark:border-white/10"
                  />
                  <NuxtImg
                    src="/img/themes/javanese.webp"
                    width="600"
                    quality="80"
                    loading="lazy"
                    placeholder
                    class="hidden md:block xl:col-span-2 w-full h-full max-h-40 object-cover object-center rounded-lg border border--black/10 dark:border-white/10"
                  />
                  <NuxtImg
                    src="/img/themes/windows-11.webp"
                    width="600"
                    quality="80"
                    loading="lazy"
                    placeholder
                    class="hidden md:block xl:col-span-2 w-full h-full max-h-40 object-cover object-center rounded-lg border border--black/10 dark:border-white/10"
                  />
                </div>

                <div class="xl:order-1 p-6">
                  <span class="text-black/40 dark:text-white/40 font-medium"
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
                      Lihat keloksi tema
                      <i class="bi bi-arrow-right ml-1"></i>
                    </NuxtLink>
                  </div>

                  <p class="text-black/60 dark:text-white/60">
                    Beragam pilihan tema mulai dari desain modern, clean,
                    budaya, klasik, dll.
                  </p>

                  <NuxtLink
                    to="#themes"
                    class="hidden xl:block py-2 px-4 w-full md:w-fit text-center text-white font-bold bg-primary rounded-lg mt-6 hover:bg-primary/80 transition"
                  >
                    Lihat keloksi tema
                    <i class="bi bi-arrow-right ml-1"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="md:col-span-3">
          <div
            class="rounded-2xl bg-off-white dark:bg-dark p-2 border border-dark/20 dark:border-light/20 shadow-xl flex flex-col h transition-all duration-300"
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
                  Instant
                </h3>

                <p class="max-w-2xl text-black/60 dark:text-white/60">
                  Undangan jadi dalam hitungan menit dan langsung sebarkan ke
                  orang tercinta.
                </p>
              </div>
            </div>

            <div
              class="rounded-lg border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/3"
            >
              <div
                class="bg-off-white dark:bg-dark mt-3 mx-3 md:mt-6 md:mx-6 xl:p-8 xl:px-16 rounded-2xl rounded-b-none border border-b-0 border-black/10 dark:border-white/10 grid xl:grid-cols-2 gap-x-4"
              ></div>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="md:col-span-3">
          <div
            class="rounded-2xl bg-off-white dark:bg-dark p-2 border border-dark/20 dark:border-light/20 shadow-xl flex flex-col h transition-all duration-300"
          >
            <div
              class="p-6 md:p-12 mb-4 flex flex-col md:flex-row md:items-center gap-8 gap-x-12"
            >
              <i class="bi bi-sliders2 text-black dark:text-white text-7xl"></i>

              <div>
                <h3
                  class="text-black dark:text-white text-xl md:text-2xl font-semibold mb-2"
                >
                  Limitless
                </h3>

                <p class="max-w-2xl text-black/60 dark:text-white/60">
                  REdit konten undangan dan ubah tema kapanpun anda mau.
                </p>
              </div>
            </div>

            <div
              class="rounded-lg border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/3"
            >
              <div
                class="bg-off-white dark:bg-dark mt-3 mx-3 md:mt-6 md:mx-6 xl:p-8 xl:px-16 rounded-2xl rounded-b-none border border-b-0 border-black/10 dark:border-white/10 grid xl:grid-cols-2 gap-x-4"
              ></div>
            </div>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="md:col-span-6">
          <div
            class="rounded-2xl bg-off-white dark:bg-dark p-2 border border-dark/20 dark:border-light/20 shadow-xl flex flex-col h transition-all duration-300"
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
                  Dashboard Analytics
                </h3>

                <p class="max-w-2xl text-black/60 dark:text-white/60">
                  Pantau performa undangan Anda dengan dashboard analytics yang
                  lengkap.
                </p>
              </div>
            </div>

            <div
              class="rounded-lg border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/3"
            >
              <div
                class="bg-off-white dark:bg-dark mt-3 mx-3 md:mt-6 md:mx-6 xl:p-8 xl:px-16 rounded-2xl rounded-b-none border border-b-0 border-black/10 dark:border-white/10 grid xl:grid-cols-2 gap-x-4"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
