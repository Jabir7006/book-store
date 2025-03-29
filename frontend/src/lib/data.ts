export interface Book {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  slug: string;
}

export const discountedBooks: Book[] = [
  {
    id: 1,
    title: "চার নম্বর প্ল্যাটফর্ম",
    author: "দিকপাল বসাক",
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Herculi_Poyrot_2-Agatha_Christie-41e37-429824.jpg",
    originalPrice: 400,
    discountedPrice: 320,
    discountPercentage: 20,
    slug: "char-nombor-platform",
  },
  {
    id: 2,
    title: "অসমাপ্ত আত্মজীবনী",
    author: "শেখ মুজিবুর রহমান",
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Babu_Mew_Rahasya_Samagra-Shantipriyo_Bondopaddhay_-e044c-372587.jpg",
    originalPrice: 600,
    discountedPrice: 480,
    discountPercentage: 20,
    slug: "oshomapto-attojiboni",
  },
  {
    id: 3,
    title: "রিফাত মার্ডার মিস্ট্রি",
    author: "শাহরিয়ার তাপস",
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/4020c1729_81738.jpg",
    originalPrice: 350,
    discountedPrice: 245,
    discountPercentage: 30,
    slug: "rifat-murder-mystery",
  },
  {
    id: 4,
    title: "হিমু সমগ্র",
    author: "হুমায়ুন আহমেদ",
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/f1b1d4cd3_43775.jpg",
    originalPrice: 1200,
    discountedPrice: 960,
    discountPercentage: 20,
    slug: "himu-shomogro",
  },
  {
    id: 5,
    title: "বাঙালির ইতিহাস",
    author: "এ এফ সালাহউদ্দিন আহমদ",
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Babu_Mew_Rahasya_Samagra-Shantipriyo_Bondopaddhay_-e044c-372587.jpg",
    originalPrice: 550,
    discountedPrice: 440,
    discountPercentage: 20,
    slug: "bangalir-itihas",
  },
  {
    id: 6,
    title: "ফেলুদা সমগ্র",
    author: "সত্যজিৎ রায়",
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Feluda_Shomogro-Satyajit_Ray-9a62a-257241.jpg",
    originalPrice: 900,
    discountedPrice: 720,
    discountPercentage: 20,
    slug: "feluda-shomogro",
  },
  {
    id: 7,
    title: "একাত্তরের দিনগুলি",
    author: "জাহানারা ইমাম",
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Ekattoerer_Dinguli-Jahanara_Imam-b60ea-250341.jpg",
    originalPrice: 350,
    discountedPrice: 245,
    discountPercentage: 30,
    slug: "ekattoerer-dinguli",
  },
  {
    id: 8,
    title: "দেবী",
    author: "হুমায়ুন আহমেদ",
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Debi-Humayun_Ahmed-e21e8-233003.jpg",
    originalPrice: 250,
    discountedPrice: 175,
    discountPercentage: 30,
    slug: "debi",
  },
  {
    id: 9,
    title: "চোখের বালি",
    author: "রবীন্দ্রনাথ ঠাকুর",
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Chokher_Bali-Rabindranath_Tagore-7ebdd-253005.jpg",
    originalPrice: 200,
    discountedPrice: 160,
    discountPercentage: 20,
    slug: "chokher-bali",
  },
  {
    id: 10,
    title: "শঙ্খনীল কারাগার",
    author: "হুমায়ুন আহমেদ",
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Shonkhonil_Karagar-Humayun_Ahmed-caf87-230963.jpg",
    originalPrice: 300,
    discountedPrice: 240,
    discountPercentage: 20,
    slug: "shonkhonil-karagar",
  },
];
