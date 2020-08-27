const escapeData = {
  brands: [
    {
      brand_id: 1,
      name: "Escape Games",
      logo: "/assets/logos/escape_games.png",
      enabled: true,
    },
  ],
};

const locations = {
  brand_id: 1,
  name: "Escape Games",
  locations: [
    {
      brand: "Escape Games",
      location_id: 1,
      name: "Nuñez",
      enabled: true,
      rooms: [1, 2],
    },
    {
      brand: "Escape Games",
      location_id: 2,
      name: "San Telmo",
      enabled: true,
      rooms: [3, 4],
    },
    {
      brand: "Escape Games",
      location_id: 1,
      name: "Palermo",
      enabled: true,
      rooms: [5, 6],
    },
  ],
};

const rooms = {
  location_id: 1,
  name: "Nuñez",
  rooms: [
    {
      id: 1,
      name: "Juego del Miedo",
      images: ["/assets/rooms/juego_del_miedo1.png"],
      difficulty: 7,
      surprise_factor: 5,
      community_score: 8,
      players_max: 5,
      players_min: 2,
      enabled: true,
    },
    {
      id: 1,
      name: "Que paso ayer",
      images: ["/assets/rooms/que_paso_ayer1.png"],
      difficulty: 5,
      community_score: 7,
      players_max: 4,
      players_min: 2,
      enabled: true,
    },
  ],
};
