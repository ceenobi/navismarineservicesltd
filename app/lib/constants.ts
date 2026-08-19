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
  {
    id: 4,
    image: "/sev4.svg",
    title: "Marine Procurement",
    description:
      "Reliable sourcing of vessel supplies, equipment, spares and operational essentials through a trusted supplier network.",
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
      "Discreet, responsive support for shipowners, senior executives and maritime professionals in Nigeria.",
    href: "/services/executive-concierge",
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
  processSteps: {
    id: number;
    title: string;
    subTitle: string;
  }[];
};

export const serviceScope: ServiceScope[] = [
  {
    id: 1,
    cover:
      "https://res.cloudinary.com/ceenobi/image/upload/f_auto,q_auto/v1787000921/clientproject/navis/photo-1670121180583-39ab653a071c_qktzoq.jpg",
    logo: "/services/anchor1.svg",
    title: "Ship Agency",
    slug: "ship-agency",
    subTitle:
      "Full port agency, husbandry and protective agency services with disciplined, transparent port call management.",
    detail: [
      "NAVIS acts as your trusted local representative, coordinating vessel arrivals, port operations, documentation, authorities, terminals and departure requirements.",
      "We keep shipowners, operators and charterers informed while focusing on efficient operations, regulatory compliance and minimizing delays.",
    ],
    scope: [
      {
        id: 1,
        title: "Port & Protective Agency",
        subTitle:
          "We represent your vessel throughout its port stay. Our team manages documentation, authorities, and port coordination for smooth operations.",
        image: "/services/agency1.svg",
      },
      {
        id: 2,
        title: "Husbandry Services",
        subTitle:
          "We provide comprehensive support for crew, repairs, and vessel requirements. Every operational need is handled efficiently, keeping your vessel on schedule.",
        image: "/services/agency2.svg",
      },
      {
        id: 3,
        title: "Crew Changes",
        subTitle:
          "We coordinate seamless crew embarkation and disembarkation. Immigration, transport, and logistics are managed with minimal delays.",
        image: "/services/agency3.svg",
      },
      {
        id: 4,
        title: "Bunkering Coordination",
        subTitle:
          "We coordinate safe and timely bunker operations with trusted suppliers. Efficiency and operational compliance are prioritized at every step.",
        image: "/services/agency4.svg",
      },
      {
        id: 5,
        title: "Cargo & Logistics Coordination",
        subTitle:
          "We synchronize cargo movement and shore-side logistics. Our coordination helps reduce delays and improve turnaround time.",
        image: "/services/l2.svg",
      },
      {
        id: 6,
        title: "Import & Export Support",
        subTitle:
          "We facilitate customs documentation and cargo clearance. Our local expertise ensures compliant import and export processes.",
        image: "/services/agency6.svg",
      },
    ],
    processSteps: [
      {
        id: 1,
        title: "01",
        subTitle: "Vessel Nomination",
      },
      {
        id: 2,
        title: "02",
        subTitle: "Pre-Arrival Planning",
      },
      {
        id: 3,
        title: "03",
        subTitle: "Port Coordination",
      },
      {
        id: 4,
        title: "04",
        subTitle: "Operational Support",
      },
      {
        id: 5,
        title: "05",
        subTitle: "Departure & Reporting",
      },
    ],
  },
  {
    id: 2,
    cover:
      "https://res.cloudinary.com/ceenobi/image/upload/f_auto,q_auto/v1787001259/clientproject/navis/image_16_ppdjnj.png",
    logo: "/services/ship-wheel.svg",
    title: "Maritime Consultancy",
    slug: "maritime-consultancy",
    subTitle:
      "Practical maritime expertise supporting safer operations, stronger compliance and better commercial decisions.",
    detail: [
      "Our Maritime Consultancy service provides practical technical, operational, and commercial advisory tailored to the evolving needs of the shipping and offshore industries.",
      "Backed by extensive international maritime experience, we help clients improve operational performance, strengthen compliance, manage risk, and support strategic decision-making.",
      "Every recommendation is built on real-world maritime expertise and industry best practice.",
    ],
    scope: [
      {
        id: 1,
        title: "Marine Operations Advisory",
        subTitle:
          "Expert guidance to improve vessel performance and operational efficiency. We support informed decision-making across maritime operations.",
        image: "/services/mari1.svg",
      },
      {
        id: 2,
        title: "Compliance Advisory",
        subTitle:
          "We help organizations meet international maritime regulations. Our advice strengthens compliance and operational confidence.",
        image: "/services/mari2.svg",
      },
      {
        id: 3,
        title: "Operational Reviews",
        subTitle:
          "We assess existing procedures and identify improvement opportunities. Practical recommendations drive better operational outcomes.",
        image: "/services/mari3.svg",
      },
      {
        id: 4,
        title: "Risk Management",
        subTitle:
          "We identify, evaluate, and reduce operational risks. Our approach protects people, assets, and business continuity.",
        image: "/services/mari4.svg",
      },
      {
        id: 5,
        title: "Project & Technical Support",
        subTitle:
          "Technical expertise for marine projects and specialized operations. We provide dependable support from planning to execution.",
        image: "/services/mari5.svg",
      },
      {
        id: 6,
        title: "Commercial Maritime Advisory",
        subTitle:
          "Strategic advice for commercial and operational maritime decisions. We help clients maximize value and minimize risk.",
        image: "/services/mari6.svg",
      },
    ],
    processSteps: [
      {
        id: 1,
        title: "01",
        subTitle: "Understand",
      },
      {
        id: 2,
        title: "02",
        subTitle: "Assess",
      },
      {
        id: 3,
        title: "03",
        subTitle: "Analyze",
      },
      {
        id: 4,
        title: "04",
        subTitle: "Recommend",
      },
      {
        id: 5,
        title: "05",
        subTitle: "Support",
      },
    ],
  },
  {
    id: 3,
    cover:
      "https://res.cloudinary.com/ceenobi/image/upload/f_auto,q_auto/v1787045785/clientproject/navis/photo-1768839719921-6a554fb3e847_snpcok.jpg",
    logo: "/services/hcheck.svg",
    title: "HSSEQ & Compliance",
    slug: "hsseq-compliance",
    subTitle:
      "Strengthening maritime safety, security, environmental performance and regulatory compliance.",
    detail: [
      "NAVIS supports organizations in building safer, more compliant maritime operations through effective HSSEQ systems and regulatory advisory.",
      "Our practical approach strengthens safety, environmental responsibility, and continuous operational improvement.",
    ],
    scope: [
      {
        id: 1,
        title: "ISM & Safety Management",
        subTitle:
          "We develop and strengthen effective safety management systems. Our solutions align with international ISM requirements.",
        image: "/services/h2.svg",
      },
      {
        id: 2,
        title: "ISPS & Maritime Security",
        subTitle:
          "Enhance vessel and port security through practical compliance measures. We support secure and resilient maritime operations.",
        image: "/services/h3.svg",
      },
      {
        id: 3,
        title: "MLC Compliance",
        subTitle:
          "We help ensure compliance with Maritime Labour Convention standards. Our focus is crew welfare and regulatory readiness.",
        image: "/services/h4.svg",
      },
      {
        id: 4,
        title: "Internal Audits & Reviews",
        subTitle:
          "Independent audits evaluate compliance and operational performance. We identify gaps and recommend practical improvements.",
        image: "/services/h5.svg",
      },
      {
        id: 5,
        title: "Risk Assessment",
        subTitle:
          "Comprehensive hazard identification and risk evaluation for maritime activities. We implement effective controls to improve safety.",
        image: "/services/h6.svg",
      },
      {
        id: 6,
        title: "Environmental & Quality Systems",
        subTitle:
          "Promoting sustainable operations through environmental protection and quality management practices.",
        image: "/services/h7.svg",
      },
    ],
    processSteps: [
      {
        id: 1,
        title: "01",
        subTitle: "Review",
      },
      {
        id: 2,
        title: "02",
        subTitle: "Identify",
      },
      {
        id: 3,
        title: "03",
        subTitle: "Assess",
      },
      {
        id: 4,
        title: "04",
        subTitle: "Improve",
      },
      {
        id: 5,
        title: "05",
        subTitle: "Monitor",
      },
    ],
  },
  {
    id: 4,
    cover:
      "https://res.cloudinary.com/ceenobi/image/upload/f_auto,q_auto/v1787046857/clientproject/navis/image_14_qczwrf.png",
    logo: "/services/p-cart.svg",
    title: "Marine Procurement",
    slug: "marine-procurement",
    subTitle:
      "Reliable sourcing of vessel supplies, equipment, spares and operational essentials",
    detail: [
      "NAVIS provides reliable procurement solutions for vessels, offshore installations, and maritime businesses through a trusted network of verified suppliers. From technical spare parts and safety equipment to provisions and marine consumables, we coordinate sourcing, quality assurance, documentation, and delivery with efficiency and transparency. Our goal is to keep your operations supplied without compromising quality or timelines.",
    ],
    scope: [
      {
        id: 1,
        title: "Vessel Spares",
        subTitle:
          "We source genuine spare parts for vessels and marine equipment. Quality and timely delivery are our priority.",
        image: "/services/p1.svg",
      },
      {
        id: 2,
        title: "Provisions & Bonded Stores",
        subTitle:
          "Fresh provisions and bonded supplies delivered to support crew welfare. We ensure reliable and efficient supply coordination.",
        image: "/services/p2.svg",
      },
      {
        id: 3,
        title: "Deck & Engine Supplies",
        subTitle:
          "Essential technical stores supplied for deck and engine operations. Our products meet operational and quality standards.",
        image: "/services/p3.svg",
      },
      {
        id: 4,
        title: "Safety Equipment",
        subTitle:
          "Certified PPE, firefighting, and lifesaving equipment sourced from trusted suppliers. We support safe vessel operations.",
        image: "/services/p4.svg",
      },
      {
        id: 5,
        title: "Lubricants & Consumables",
        subTitle:
          "Reliable supply of lubricants, chemicals, and operational consumables. We keep vessels equipped for uninterrupted performance.",
        image: "/services/p5.svg",
      },
      {
        id: 6,
        title: "Supplier & Delivery Management",
        subTitle:
          "We coordinate trusted suppliers from sourcing to delivery. Our process ensures transparency and timely fulfillment.",
        image: "/services/p6.svg",
      },
    ],
    processSteps: [
      {
        id: 1,
        title: "01",
        subTitle: "Requirement",
      },
      {
        id: 2,
        title: "02",
        subTitle: "Source",
      },
      {
        id: 3,
        title: "03",
        subTitle: "Evaluate",
      },
      {
        id: 4,
        title: "04",
        subTitle: "Coordinate",
      },
      {
        id: 5,
        title: "05",
        subTitle: "Deliver",
      },
    ],
  },
  {
    id: 5,
    cover:
      "https://res.cloudinary.com/ceenobi/image/upload/f_auto,q_auto/v1787047446/clientproject/navis/image_12_oohcxq.png",
    logo: "/services/package.svg",
    title: "Marine Logistics",
    slug: "marine-logistics",
    subTitle:
      "Coordinating cargo, transportation and shore-side logistics around your vessel’s schedule.",
    detail: [
      "NAVIS coordinates cargo movement, inland transportation, terminal operations, customs interfaces, and supply delivery to ensure vessels receive the right support at the right time.",
      "By connecting ports, suppliers, and transport providers, we deliver dependable logistics solutions that reduce delays and improve operational visibility.",
    ],
    scope: [
      {
        id: 1,
        title: "Cargo Coordination",
        subTitle:
          "Efficient coordination of cargo movement across ports and terminals. We keep operations aligned with vessel schedules.",
        image: "/services/l1.svg",
      },
      {
        id: 2,
        title: "Inland Transportation",
        subTitle:
          "Reliable transportation for cargo, equipment, and marine supplies. We connect ports with inland destinations seamlessly.",
        image: "/services/l2.svg",
      },
      {
        id: 3,
        title: "Terminal Coordination",
        subTitle:
          "We liaise with terminals to optimize loading and unloading activities. Our coordination improves vessel turnaround efficiency.",
        image: "/services/l3.svg",
      },
      {
        id: 4,
        title: "Customs Interface",
        subTitle:
          "Managing customs communication and documentation for smooth clearance. We simplify regulatory processes for our clients.",
        image: "/services/l4.svg",
      },
      {
        id: 5,
        title: "Storage Support",
        subTitle:
          "Secure warehousing and temporary storage for cargo and equipment. Flexible solutions support changing operational needs.",
        image: "/services/l5.svg",
      },
      {
        id: 6,
        title: "Supply Movement",
        subTitle:
          "Timely delivery of operational supplies to vessels and offshore locations. We ensure critical materials reach their destination efficiently.",
        image: "/services/l6.svg",
      },
    ],
    processSteps: [
      {
        id: 1,
        title: "01",
        subTitle: "Plan",
      },
      {
        id: 2,
        title: "02",
        subTitle: "Coordinate",
      },
      {
        id: 3,
        title: "03",
        subTitle: "Move",
      },
      {
        id: 4,
        title: "04",
        subTitle: "Monitor",
      },
      {
        id: 5,
        title: "05",
        subTitle: "Report",
      },
    ],
  },
  {
    id: 6,
    cover:
      "https://res.cloudinary.com/ceenobi/image/upload/f_auto,q_auto/v1787050819/clientproject/navis/Gemini_Generated_Image_i16jkri16jkri16j_vm02ml.jpg",
    logo: "/services/concierge-bell.svg",
    title: "Executive Concierge",
    slug: "executive-concierge",
    subTitle:
      "Discreet, responsive support for shipowners, senior executives and maritime professionals.",
    detail: [
      "Our Executive Concierge service is designed for shipowners, senior executives, and maritime professionals requiring personalized support while operating in Nigeria. We manage transportation, accommodation, airport assistance, meeting logistics, and bespoke concierge services with discretion and professionalism.",
      "Every arrangement is tailored to provide a seamless and comfortable experience from arrival to departure.",
    ],
    scope: [
      {
        id: 1,
        title: "Executive Transportation",
        subTitle:
          "Premium transportation tailored for shipowners and senior executives. We provide comfort, reliability, and professionalism.",
        image: "/services/s1.svg",
      },
      {
        id: 2,
        title: "Accommodation Support",
        subTitle:
          "We arrange quality hotel reservations to match client schedules. Every stay is planned for convenience and comfort.",
        image: "/services/s2.svg",
      },
      {
        id: 3,
        title: "Airport Assistance",
        subTitle:
          "Meet-and-greet services with seamless airport transfer coordination. We ensure a smooth arrival and departure experience.",
        image: "/services/s3.svg",
      },
      {
        id: 4,
        title: "Meeting & Event Support",
        subTitle:
          "Professional coordination of business meetings and corporate events. We manage logistics so you can focus on business.",
        image: "/services/s4.svg",
      },
      {
        id: 5,
        title: "Business Assistance",
        subTitle:
          "Local executive support for visiting maritime professionals. We help coordinate appointments, travel, and administrative needs.",
        image: "/services/s5.svg",
      },
      {
        id: 6,
        title: "Bespoke Concierge Services",
        subTitle:
          "Personalized concierge solutions designed around individual requirements. Every service is tailored to deliver a seamless experience.",
        image: "/services/s6.svg",
      },
    ],
    processSteps: [
      {
        id: 1,
        title: "01",
        subTitle: "Understand",
      },
      {
        id: 2,
        title: "02",
        subTitle: "Plan",
      },
      {
        id: 3,
        title: "03",
        subTitle: "Arrange",
      },
      {
        id: 4,
        title: "04",
        subTitle: "Support",
      },
      {
        id: 5,
        title: "05",
        subTitle: "Follow Through",
      },
    ],
  },
];

export type ServiceFaq = {
  question: string;
  answer: string;
};

export const serviceFaqs: Record<string, ServiceFaq[]> = {
  "ship-agency": [
    {
      question: "Where does NAVIS provide ship agency services in Nigeria?",
      answer:
        "NAVIS acts as your trusted local representative across Nigerian ports, coordinating vessel arrivals, port operations, documentation, authorities, terminals and departure requirements with disciplined, transparent port call management.",
    },
    {
      question: "What does your port agency service include?",
      answer:
        "We cover port and protective agency, husbandry services, crew changes, bunkering coordination, cargo and logistics coordination, and import and export support — keeping shipowners, operators and charterers informed throughout the port stay.",
    },
    {
      question: "How do you minimize vessel delays in port?",
      answer:
        "Our team manages documentation, authorities and port coordination proactively, focusing on efficient operations and regulatory compliance to reduce turnaround times and avoid unnecessary delays.",
    },
  ],
  "maritime-consultancy": [
    {
      question: "What does NAVIS maritime consultancy cover?",
      answer:
        "We provide practical technical, operational and commercial advisory — marine operations advisory, compliance advisory, operational reviews, risk management, project and technical support, and commercial maritime advisory.",
    },
    {
      question: "Who benefits from your consultancy services?",
      answer:
        "Shipowners, operators, charterers and offshore industries benefit from our seagoing command experience and international operational knowledge, supporting safer operations, stronger compliance and better commercial decisions.",
    },
    {
      question: "Do you help with operational risk management?",
      answer:
        "Yes. We identify, evaluate and reduce operational risks, protecting people, assets and business continuity with recommendations built on real-world maritime expertise.",
    },
  ],
  "hsseq-compliance": [
    {
      question: "What HSSEQ services does NAVIS provide?",
      answer:
        "We strengthen maritime safety, security, environmental performance and regulatory compliance through ISM safety management, ISPS maritime security, MLC compliance, internal audits, risk assessment, and environmental and quality systems.",
    },
    {
      question: "Do you support ISM and ISPS compliance?",
      answer:
        "Yes. We develop and strengthen safety management systems aligned with ISM requirements and support vessel and port security through practical ISPS compliance measures.",
    },
    {
      question: "Can NAVIS conduct internal HSSEQ audits?",
      answer:
        "Yes. Our independent audits evaluate compliance and operational performance, identify gaps and recommend practical improvements for continuous improvement.",
    },
  ],
  "marine-procurement": [
    {
      question: "What can NAVIS source for vessels?",
      answer:
        "We source vessel spares, provisions and bonded stores, deck and engine supplies, safety equipment, and lubricants and consumables through a trusted network of verified suppliers.",
    },
    {
      question: "How do you ensure quality and timely delivery?",
      answer:
        "We coordinate sourcing, quality assurance, documentation and delivery with efficiency and transparency, ensuring your operations stay supplied without compromising quality or timelines.",
    },
    {
      question: "Do you deliver to offshore installations?",
      answer:
        "Yes. In addition to vessels, we support offshore installations and maritime businesses, coordinating supplier and delivery management from sourcing to fulfillment.",
    },
  ],
  "marine-logistics": [
    {
      question: "What does NAVIS marine logistics cover?",
      answer:
        "We coordinate cargo movement, inland transportation, terminal operations, customs interfaces, storage support and supply delivery around your vessel's schedule.",
    },
    {
      question: "Do you handle customs documentation?",
      answer:
        "Yes. We manage customs communication and documentation for smooth clearance, simplifying regulatory processes for our clients.",
    },
    {
      question: "How do you reduce logistics delays?",
      answer:
        "By connecting ports, suppliers and transport providers, we deliver dependable logistics solutions that reduce delays and improve operational visibility.",
    },
  ],
  "executive-concierge": [
    {
      question: "Who is the executive concierge service for?",
      answer:
        "It is designed for shipowners, senior executives and maritime professionals requiring personalized support while operating in Nigeria.",
    },
    {
      question: "What does the service include?",
      answer:
        "We manage executive transportation, accommodation support, airport assistance, meeting logistics and bespoke concierge services with discretion and professionalism.",
    },
    {
      question: "How is the service delivered?",
      answer:
        "Every arrangement is tailored to provide a seamless and comfortable experience, delivered with discretion from arrival to departure.",
    },
  ],
};

