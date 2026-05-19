import coverFlowerImage from "../assets/images/coverFlower.png";

export const weddingData = {
  groom: {
    name: "Adam Maulana",
    nickname: "Adam",
    parents: "Putra dari Bpk. Budi Susanto & Ibu Ani Rahmawati",
    instagram: "@adamm",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
  bride: {
    name: "Hawa Safitri",
    nickname: "Hawa",
    parents: "Putri dari Bpk. Ahmad Yani & Ibu Siti Aminah",
    instagram: "@hawa",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  quote: {
    text: '"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang."',
    source: "(QS. Ar-Rum: 21)",
  },
  event: {
    dateText: "Minggu, 20 Desember 2026",
    dateIso: "2026-12-20T08:00:00+07:00",
    akad: {
      title: "Akad Nikah",
      time: "08:00 - 10:00 WIB",
    },
    resepsi: {
      title: "Resepsi",
      time: "11:00 - 13:00 WIB",
    },
    location: "Gedung Serbaguna Senayan",
    address:
      "Jl. Pintu Satu Senayan, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat",
    mapUrl: "https://maps.google.com",
  },
  banks: [
    { name: "BCA", account: "1234567890", owner: "Adam Maulana" },
    { name: "Mandiri", account: "0987654321", owner: "Hawa Safitri" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
  ],
  initialWishes: [
    {
      name: "Andi & Keluarga",
      attendance: "Hadir",
      message: "Selamat menempuh hidup baru! Semoga samawa selalu.",
    },
    {
      name: "Siska",
      attendance: "Hadir",
      message: "Lancar sampai hari H yaa cantik! Nggak sabar.",
    },
  ],
  assets: {
    coverFlower: coverFlowerImage,
    heroBackground:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    flowerPetal:
      "https://cdn-icons-png.flaticon.com/512/3209/3209040.png",
    music:
      "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=romantic-piano-112135.mp3",
  },
  footer: {
    note: "Terima kasih atas doa dan restu yang telah diberikan.",
    subnote: "Merupakan suatu kehormatan bagi kami.",
    credit: "Created using Template Viding-Style",
  },
};

export const navigationItems = [
  { id: "home", label: "Home", icon: "Heart" },
  { id: "couple", label: "Couple", icon: "Heart" },
  { id: "event", label: "Event", icon: "CalendarHeart" },
  { id: "gallery", label: "Gallery", icon: "Camera" },
  { id: "rsvp", label: "RSVP", icon: "MessageCircle" },
];
