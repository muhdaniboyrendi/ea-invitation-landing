export const usePackageStore = defineStore("package", () => {
  // const config = useRuntimeConfig();
  // const apiBaseUrl = config.public.apiBaseUrl;

  // const {
  //   data: packages,
  //   error,
  //   pending,
  //   refresh,
  // } = useFetch(`${apiBaseUrl}/packages`, {
  //   method: "GET",
  //   key: "landing-packages-data",
  //   transform: (response) => {
  //     return response.data;
  //   },
  // });

  const packages = ref([
    {
      id: 1,
      name: "Economy",
      price: "100000.00",
      discount: null,
      features: [
        "50 tamu undangan + grup",
        "4 foto galeri (max)",
        "Informasi acara",
        "Background musik (list)",
        "Timer countdown",
        "Maps lokasi",
        "Tambah ke kalender",
        "Story",
        "RSVP",
        "Ucapan tamu",
        "3 bulan masa aktif",
      ],
    },
    {
      id: 2,
      name: "Premium",
      price: "200000.00",
      discount: 25,
      features: [
        "200 tamu undangan + grup",
        "10 foto galeri (max)",
        "1 video",
        "Informasi acara",
        "Background musik custom",
        "Timer countdown",
        "Maps lokasi",
        "Tambah ke kalender",
        "Story",
        "RSVP",
        "Ucapan tamu",
        "Kirim hadiah",
        "6 bulan masa aktif",
      ],
    },
    {
      id: 3,
      name: "Business",
      price: "300000.00",
      discount: 15,
      features: [
        "500 tamu undangan + grup",
        "20 foto galeri (max)",
        "5 video (max)",
        "Informasi acara",
        "Background musik custom",
        "Timer countdown",
        "Maps lokasi",
        "Tambah ke kalender",
        "Story",
        "RSVP",
        "Ucapan tamu",
        "Kirim hadiah",
        "6 bulan masa aktif",
      ],
    },
  ]);

  return {
    packages,
    // error,
    // pending,
    // refresh,
  };
});
