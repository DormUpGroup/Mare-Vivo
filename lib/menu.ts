import type { Locale } from "@/lib/ui";

export type Dish = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

const menuImage = (id: string) =>
  `https://images.unsplash.com/${id}?q=70&w=480&auto=format&fit=crop`;

export const menuItemImages: Record<string, string> = {
  "Ostriche del Mediterraneo": menuImage(
    "photo-1679694140422-aecfd3d5dd0b"
  ),
  "Insalata di Polpo": menuImage("photo-1774451606775-68df417107b3"),
  "Carpaccio di Tonno": menuImage("photo-1554043592-e57c36970e01"),
  "Spaghetti alle Vongole": menuImage("photo-1768204038645-b50312187392"),
  "Linguine al Nero": menuImage("photo-1575449815943-7be0d4fe532b"),
  "Paccheri al Granchio": menuImage("photo-1590576502976-a7b6cd63f4dc"),
  "Orata alla Mediterranea": menuImage("photo-1716816211582-ef70b1cd2e70"),
  "Tonno Scottato": menuImage("photo-1622716029515-7eb5ced2090b"),
  "Calamari Ripieni": menuImage("photo-1559070135-f259b369bf87"),
};

export const featuredDishImages: Record<string, string> = {
  "Crudo di Mare": menuImage("photo-1654095221806-4340755b9922"),
  "Risotto ai Frutti di Mare": menuImage("photo-1778104683416-5fc7eba1799f"),
  "Branzino al Forno": menuImage("photo-1716816211582-ef70b1cd2e70"),
  "Gamberi alla Griglia": menuImage("photo-1723325697529-6e2679650b39"),
};

const withFeaturedImages = (dishes: Array<Omit<Dish, "image">>): Dish[] =>
  dishes.map((dish) => ({
    ...dish,
    image: featuredDishImages[dish.name],
  }));

const withImages = (
  items: Array<Omit<MenuItem, "image">>
): MenuItem[] =>
  items.map((item) => ({
    ...item,
    image: menuItemImages[item.name],
  }));

const featuredDishesByLocale: Record<Locale, Dish[]> = {
  en: withFeaturedImages([
    {
      name: "Crudo di Mare",
      description: "Amberjack, langoustine, citrus oil, Sicilian sea salt.",
      price: "€24",
    },
    {
      name: "Risotto ai Frutti di Mare",
      description: "Carnaroli rice, mussels, clams, and saffron broth.",
      price: "€22",
    },
    {
      name: "Branzino al Forno",
      description: "Whole sea bass, rosemary, olives, lemon, EVOO.",
      price: "€28",
    },
    {
      name: "Gamberi alla Griglia",
      description: "Grilled red prawns, garlic, parsley, smoked sea salt.",
      price: "€26",
    },
  ]),
  it: withFeaturedImages([
    {
      name: "Crudo di Mare",
      description: "Ricciola, scampo, olio agli agrumi, sale marino siciliano.",
      price: "€24",
    },
    {
      name: "Risotto ai Frutti di Mare",
      description: "Riso Carnaroli, cozze, vongole e brodo allo zafferano.",
      price: "€22",
    },
    {
      name: "Branzino al Forno",
      description: "Spigola intera, rosmarino, olive, limone, olio EVO.",
      price: "€28",
    },
    {
      name: "Gamberi alla Griglia",
      description: "Gamberi rossi alla griglia, aglio, prezzemolo, sale affumicato.",
      price: "€26",
    },
  ]),
};

const menuSectionsByLocale: Record<Locale, MenuSection[]> = {
  en: [
    {
      title: "Antipasti di Mare",
      items: withImages([
        {
          name: "Ostriche del Mediterraneo",
          description: "Six oysters, shallot vinaigrette, Amalfi lemon.",
          price: "€18",
        },
        {
          name: "Insalata di Polpo",
          description: "Tender octopus, celery, olives, citrus zest.",
          price: "€16",
        },
        {
          name: "Carpaccio di Tonno",
          description: "Bluefin tuna, capers, wild fennel oil.",
          price: "€19",
        },
      ]),
    },
    {
      title: "Primi",
      items: withImages([
        {
          name: "Spaghetti alle Vongole",
          description: "Clams, garlic, white wine, parsley.",
          price: "€20",
        },
        {
          name: "Linguine al Nero",
          description: "Squid ink, calamari, chili, basil.",
          price: "€21",
        },
        {
          name: "Paccheri al Granchio",
          description: "Blue crab, tomato, basil, olive oil.",
          price: "€23",
        },
      ]),
    },
    {
      title: "Secondi di Pesce",
      items: withImages([
        {
          name: "Orata alla Mediterranea",
          description: "Sea bream, cherry tomatoes, olives, herbs.",
          price: "€27",
        },
        {
          name: "Tonno Scottato",
          description: "Seared tuna, pistachio crust, caponata.",
          price: "€30",
        },
        {
          name: "Calamari Ripieni",
          description: "Stuffed squid, breadcrumbs, pine nuts.",
          price: "€25",
        },
      ]),
    },
  ],
  it: [
    {
      title: "Antipasti di Mare",
      items: withImages([
        {
          name: "Ostriche del Mediterraneo",
          description: "Sei ostriche, vinaigrette allo scalogno, limone di Amalfi.",
          price: "€18",
        },
        {
          name: "Insalata di Polpo",
          description: "Polpo tenero, sedano, olive, scorza di agrumi.",
          price: "€16",
        },
        {
          name: "Carpaccio di Tonno",
          description: "Tonno rosso, capperi, olio al finocchietto.",
          price: "€19",
        },
      ]),
    },
    {
      title: "Primi",
      items: withImages([
        {
          name: "Spaghetti alle Vongole",
          description: "Vongole, aglio, vino bianco, prezzemolo.",
          price: "€20",
        },
        {
          name: "Linguine al Nero",
          description: "Nero di seppia, calamari, peperoncino, basilico.",
          price: "€21",
        },
        {
          name: "Paccheri al Granchio",
          description: "Granchio blu, pomodoro, basilico, olio d'oliva.",
          price: "€23",
        },
      ]),
    },
    {
      title: "Secondi di Pesce",
      items: withImages([
        {
          name: "Orata alla Mediterranea",
          description: "Orata, pomodorini, olive, erbe aromatiche.",
          price: "€27",
        },
        {
          name: "Tonno Scottato",
          description: "Tonno scottato, crosta di pistacchio, caponata.",
          price: "€30",
        },
        {
          name: "Calamari Ripieni",
          description: "Calamari ripieni, pangrattato, pinoli.",
          price: "€25",
        },
      ]),
    },
  ],
};

export const getFeaturedDishes = (locale: Locale) =>
  featuredDishesByLocale[locale];
export const getMenuSections = (locale: Locale) =>
  menuSectionsByLocale[locale];
