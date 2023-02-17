export const SITE = {
  title: "Astro Design System",
  description: "Tips, Tricks and Taunts.",
  defaultLanguage: "en_US",
  github: "Szelma139",
  linkedin: "radosław-niedbała-b061a01a7",
};

export const OPEN_GRAPH = {
  image: {
    src: "",
    alt: "",
  },
  twitter: "",
};

export const SIDEBAR = [
  { text: "Core", header: true },
  { text: "Introduction", link: "/core/introduction" },
  { text: "Colors", link: "/core/colors" },
  { text: "Typography", link: "/core/typography" },
  { text: "Shadows", link: "/core/shadows" },

  { text: "Components", header: true },
  { text: "Buttons", link: "/components/buttons" },
  { text: "Input", link: "/components/input" },
  { text: "Status pills", link: "/components/status-pill" },
  { text: "Table", link: "/components/table" },

  { text: "Patterns", header: true },
  { text: "Introduction", link: "/patterns/introduction" },

  { text: "Git", header: true} ,
  { text: "Tipy", link: "/git/tips"},

  { text: "Przypominajka", header: true},
  { text: "Jak czytać taby gitarowe", link: "/przypominajka/tabs"},
  { text: "Przepisy", link: "/przypominajka/recipes"},
  { text: "Azure", link: "/przypominajka/azure"},
  { text: "Rust", link: "/przypominajka/rust"},
  { text: "Wymagania programowanie", link: "/przypominajka/requirements"},

  { text: "Piosenki", header: true} ,
  { text: "Seishun Complex", link: "/piosenki/seishun_complex"},
];
