export interface Profile {
  id: string;
  name: string;
  age: number;
  bio: string;
  location: string;
  photo: string;
  likesUser: boolean;
}

export const mockProfiles: Profile[] = [
  {
    id: "1",
    name: "Sophie Martin",
    age: 26,
    bio: "Passionnée de voyage et de photographie. Cherche quelqu'un pour explorer le monde ensemble 🌍",
    location: "Paris, France",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    likesUser: true,
  },
  {
    id: "2",
    name: "Lucas Dubois",
    age: 28,
    bio: "Développeur le jour, chef le soir. J'adore cuisiner pour mes amis 👨‍🍳",
    location: "Lyon, France",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    likesUser: false,
  },
  {
    id: "3",
    name: "Emma Bernard",
    age: 24,
    bio: "Yoga et méditation sont mes rituels quotidiens. À la recherche de sérénité 🧘‍♀️",
    location: "Bordeaux, France",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    likesUser: true,
  },
  {
    id: "4",
    name: "Thomas Petit",
    age: 30,
    bio: "Amateur de vin et de bonne cuisine. Connaisseur des meilleurs restaurants 🍷",
    location: "Nice, France",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    likesUser: false,
  },
  {
    id: "5",
    name: "Camille Leroy",
    age: 27,
    bio: "Artiste peintre. Je trouve l'inspiration dans chaque rencontre 🎨",
    location: "Marseille, France",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
    likesUser: true,
  },
  {
    id: "6",
    name: "Hugo Moreau",
    age: 29,
    bio: "Sportif et aventurier. Toujours prêt pour une nouvelle challenge 🏔️",
    location: "Grenoble, France",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    likesUser: false,
  },
  {
    id: "7",
    name: "Chloé Roux",
    age: 25,
    bio: "Bibliothécaire et amatrice de littérature classique 📚",
    location: "Toulouse, France",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop",
    likesUser: true,
  },
  {
    id: "8",
    name: "Antoine Simon",
    age: 31,
    bio: "Musicien passionné. Le jazz est ma raison de vivre 🎷",
    location: "Nantes, France",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    likesUser: false,
  },
];