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
        "10 tamu undangan + grup",
        "4 foto galeri (max)",
        "Informasi acara",
        "Background musik (list)",
        "Timer countdown",
        "Maps lokasi",
        "Story",
        "RSVP",
        "Ucapan tamu",
        "1 bulan masa aktif",
      ],
      created_at: "2026-01-06T03:45:06.000000Z",
      updated_at: "2026-01-06T03:45:06.000000Z",
      final_price: "100000.00",
    },
    {
      id: 2,
      name: "Premium",
      price: "150000.00",
      discount: null,
      features: [
        "100 tamu undangan + grup",
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
      created_at: "2026-01-06T03:45:06.000000Z",
      updated_at: "2026-01-06T03:45:06.000000Z",
      final_price: "150000.00",
    },
    {
      id: 3,
      name: "Business",
      price: "250000.00",
      discount: null,
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
      created_at: "2026-01-06T03:45:06.000000Z",
      updated_at: "2026-01-06T03:45:06.000000Z",
      final_price: "250000.00",
    },
  ]);

  return {
    packages,
    // error,
    // pending,
    // refresh,
  };
});
