export const navLinks = [
  {
    id: 1,
    path: "/",
    label: "Home",
  },
  {
    id: 2,
    path: "/about",
    label: "About Navis",
  },
  {
    id: 3,
    path: "/services",
    label: "Services",
  },
];

export const services = [
  {
    id: 1,
    image: "/t1.svg",
    title: "Ship Agency",
    description:
      "Full port agency, husbandry and protective agency services with disciplined, transparent port call management.",
    href: "/services/ship-agency",
  },
  {
    id: 2,
    image: "/t2.svg",
    title: "Maritime Consultancy",
    description:
      "Technical and commercial advisory drawn from seagoing command experience and international operations.",
    href: "/services/maritime-consultancy",
  },
  {
    id: 3,
    image: "/t3.svg",
    title: "HSSEQ & Compliance",
    description:
      "Health, safety, security, environment and quality assurance aligned with ISM, ISPS and industry best practice.",
    href: "/services/hsseq-compliance",
  },
];

export const navisWay = [
  {
    id: 1,
    tag: "N",
    title: "Navigating",
    description: "We connect clients to opportunities worldwide.",
  },
  {
    id: 2,
    tag: "A",
    title: "Assurance",
    description: "We protect people, property and the environment.",
  },
  {
    id: 3,
    tag: "V",
    title: "Vision",
    description: "We embrace new ideas to create better solutions.",
  },
  {
    id: 4,
    tag: "I",
    title: "Integrity",
    description: "We operate with honesty, transparency and strong ethics.",
  },
  {
    id: 5,
    tag: "S",
    title: "Steadfastness",
    description: "We deliver on our promises with consistency.",
  },
];

export const industries = [
  "ship owners",
  "ship managers",
  "charterers",
  "offshore energy",
  "marine insurers",
  "oil & gas",
  "p&i clubs",
  "government agencies",
];

export const leadership = [
  {
    id: 1,
    img: "/wheel.svg",
    title: "Master Mariner (UK Certified)",
    description:
      "UK-certified Master Mariner with over 16 years of international maritime experience across LNG/LPG, tanker and offshore operations.",
  },
  {
    id: 2,
    img: "/global.svg",
    title: "Global Exposure",
    description:
      "Extensive operation experience across international trades and multicultural environment.",
  },
  {
    id: 3,
    img: "/shield1.svg",
    title: "Operational & Commercial Leadership",
    description:
      "Strong background in operational management, commercial, negotiation, risk management and regulatory compliance.",
  },
  {
    id: 4,
    img: "/groups.svg",
    title: "Strategic Vision",
    description:
      "Drives Navis Marine Services Ltd with a long-term vision focused on excellence, innovation and sustainable growth.",
  },
  {
    id: 5,
    img: "/shake.svg",
    title: "Client Commitment",
    description:
      "Dedicated to creating lasting value for clients through integrity, transparency and exceptional services.",
  },
  {
    id: 6,
    img: "/award-line.svg",
    title: "Professional Memberships",
    description:
      "Associate Fellow, The Nautical Institute (AFNI), Associate Member Nigerian Gas Association (AMNGA)",
  },
];

export const servicelist = [
  {
    id: 1,
    image: "/sev1.svg",
    title: "Ship Agency",
    description:
      "Full port agency, husbandry and protective agency services with disciplined, transparent port call management.",
    href: "/services/ship-agency",
  },
  {
    id: 2,
    image: "/sev2.svg",
    title: "Maritime Consultancy",
    description:
      "Practical maritime expertise supporting safer operations, stronger compliance and better commercial decisions.",
    href: "/services/maritime-consultancy",
  },
  {
    id: 3,
    image: "/sev3.svg",
    title: "HSSEQ & Compliance",
    description:
      "Strengthening maritime safety, security, environmental performance and regulatory compliance.",
    href: "/services/hsseq-compliance",
  },
  {
    id: 4,
    image: "/sev4.svg",
    title: "Marine Procurement",
    description:
      "Reliable sourcing of vessel supplies, equipment, spares and operational essentials",
    href: "/services/marine-procurement",
  },
  {
    id: 5,
    image: "/sev5.svg",
    title: "Marine Logistics",
    description:
      "Coordinating cargo, transportation and shore-side logistics around your vessel's schedule.",
    href: "/services/marine-logistics",
  },

  {
    id: 6,
    image: "/sev6.svg",
    title: "Executive Concierge",
    description:
      "Discreet, responsive support for shipowners, senior executives and maritime professionals.",
    href: "/services/executive-concierge",
  },
];

export type ServiceScope = {
  id: number;
  cover: string;
  title: string;
  subTitle: string;
  slug: string;
  logo: string;
  detail: string[];
  scope: {
    id: number;
    title: string;
    subTitle: string;
    image: string;
  }[];
};

export const serviceScope: ServiceScope[] = [
  {
    id: 1,
    cover:"https://res.cloudinary.com/ceenobi/image/upload/f_auto,q_auto/v1787000921/clientproject/navis/photo-1670121180583-39ab653a071c_qktzoq.jpg",
    logo: "/services/anchor1.svg",
    title: "Ship Agency",
    slug: "ship-agency",
    subTitle: "Full port agency, husbandry and protective agency services with disciplined, transparent port call management.",
    detail: ["NAVIS acts as your trusted local representative, coordinating vessel arrivals, port operations, documentation, authorities, terminals and departure requirements.", "We keep shipowners, operators and charterers informed while focusing on efficient operations, regulatory compliance and minimizing delays."],
    scope: [
      {
        id: 1,
        title: "Port & Protective Agency",
        subTitle: "We represent your vessel throughout its port stay. Our team manages documentation, authorities, and port coordination for smooth operations.",
        image:"/services/agency1.svg"
      },
      {
        id: 2,
        title: "Husbandry Services",
        subTitle: "Comprehensive support for crew, repairs, and vessel requirements. We ensure every operational need is handled efficiently.",
        image:"/services/agency2.svg"
      },
      {
        id: 3,
        title: "Crew Changes",
        subTitle: "We coordinate seamless crew embarkation and disembarkation. Immigration, transport, and logistics are managed with minimal delays.",
        image:"/services/agency3.svg"
      },
      {
        id: 4,
        title: "Bunkering Coordination",
        subTitle: "Safe and timely bunker operations coordinated with trusted suppliers. We prioritize efficiency and operational compliance.",
        image:"/services/agency4.svg"
      },
      {
        id: 5,
        title: "Cargo & Logistics Coordination",
        subTitle: "We synchronize cargo movement and shore-side logistics. Our coordination helps reduce delays and improve turnaround time.",
        image:"/services/agency5.svg"
      },
      {
        id: 6,
        title: "Import & Export Support",
        subTitle: "We facilitate customs documentation and cargo clearance. Our local expertise ensures compliant import and export processes.",
        image:"/services/agency6.svg"
      },
    ]
  },
  {
    id: 2,
    cover:"https://res.cloudinary.com/ceenobi/image/upload/f_auto,q_auto/v1787001259/clientproject/navis/image_16_ppdjnj.png",
    logo: "/services/ship-wheel.svg",
    title: "Maritime Consultancy",
    slug: "maritime-consultancy",
    subTitle: "Practical maritime expertise supporting safer operations, stronger compliance and better commercial decisions.",
    detail: ["Our Maritime Consultancy service provides practical technical, operational, and commercial advisory tailored to the evolving needs of the shipping and offshore industries.", "Backed by extensive international maritime experience, we help clients improve operational performance, strengthen compliance, manage risk, and support strategic decision-making.", "Every recommendation is built on real-world maritime expertise and industry best practice."],
    scope: [
      {
        id: 1,
        title: "Marine Operations Advisory",
        subTitle: "Expert guidance to improve vessel performance and operational efficiency. We support informed decision-making across maritime operations.",
        image:"/services/mari1.svg"
      },
      {
        id: 2,
        title: "Compliance Advisory",
        subTitle: "We help organizations meet international maritime regulations. Our advice strengthens compliance and operational confidence.",
        image:"/services/mari2.svg"
      },
      {
        id: 3,
        title: "Operational Reviews",
        subTitle: "We assess existing procedures and identify improvement opportunities. Practical recommendations drive better operational outcomes.",
        image:"/services/mari3.svg"
      },
      {
        id: 4,
        title: "Risk Management",
        subTitle: "We identify, evaluate, and reduce operational risks. Our approach protects people, assets, and business continuity.",
        image:"/services/mari4.svg"
      },
      {
        id: 5,
        title: "Project & Technical Support",
        subTitle: "Technical expertise for marine projects and specialized operations. We provide dependable support from planning to execution.",
        image:"/services/mari5.svg"
      },
      {
        id: 6,
        title: "Commercial Maritime Advisory",
        subTitle: "Strategic advice for commercial and operational maritime decisions. We help clients maximize value and minimize risk.",
        image:"/services/mari6.svg"
      },
    ]
  },
]
