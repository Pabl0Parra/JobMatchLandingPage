import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "funcionalidades",
    title: "Funcionalidades",
  },
  {
    id: "descarga",
    title: "Descarga",
  },
  {
    id: "contacto",
    title: "Contacto",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Regístrate",
    content:
      "Una vez creado tu perfil como trabajador podrás ver ofertas de trabajo y postular a ellas. Si eres empresa, podrás crear ofertas de trabajo.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Haz match",
    content:
      "Puedes deslizar sobre el perfil que te gusta a la derecha o si no te gusta, a la izquierda.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Chatea con tu nuevo match",
    content:
      "Una vez existe un match, se abre un nuevo chat entre ambos usuarios.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "JobMatch me ayudó a encontrar un trabajo en el área que me gusta. ¡Gracias!",
    name: "Jessica Rodriguez",
    title: "Diseñadora gráfica",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Con JobMatch podemos encontrar nuevos candidatos que se ajusten a nuestro perfil.",
    name: "Luis Perez",
    title: "CEO & Fundador",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Gracias a JobMatch he encontrado un nuevo trabajo en remoto en USA.",
    name: "Alvaro Garcia",
    title: "Frontend Developer",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Usuarios activos",
    value: "3800",
    prefix: "",
    suffix: "+",
  },
  {
    id: "stats-2",
    title: "Personas contratadas",
    value: "230",
    prefix: "",
    suffix: "+",
  },
  {
    id: "stats-3",
    title: "Puestos disponibles",
    value: "230",
    prefix: "$",
    suffix: "M+",
  },
];

export const footerLinks = [
  {
    title: "Recursos",
    links: [
      {
        name: "Como funciona",
        link: "https://res.cloudinary.com/dcwx2biey/video/upload/v1677836047/video_Jobmatch_f05yhw.webm",
      },
      {
        name: "Descarga",
        link: "https://drive.google.com/file/d/1UD8evgeo8afK1Zifod-eAc6ROREokwjy/view?usp=share_link",
      },
    ],
  },
  {
    title: "Communidad",
    links: [
      {
        name: "Sugerencias",
        link: "https://github.com/No-Country/C9-47-ft-ReactNative/issues",
      },
      {
        name: "Reporta un problema",
        link: "https://github.com/No-Country/C9-47-ft-ReactNative/issues",
      },
    ],
  },
  {
    title: "Contacto",
    links: [
      {
        name: "Pablo Parra",
        link: "https://www.linkedin.com/in/pablo-parra-bcn/",
      },
      {
        name: "Nicolás Sepertino",
        link: "https://www.linkedin.com/in/nicolassepertino-/",
      },
      {
        name: "Nicolás Radin",
        link: "https://www.linkedin.com/in/nicolas-radin/",
      },
      {
        name: "Yesenia Moreno",
        link: "https://www.linkedin.com/in/yesenia-moreno-bernal/",
      },
      {
        name: "Tatiana Montoya",
        link: "https://www.linkedin.com/in/tatiana-montoya-73593654/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
