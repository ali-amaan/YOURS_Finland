export const site = {
  name: "YOURS Finland",
  society: "Young Researchers Society",
  description:
    "YOURS Finland is the Finnish chapter of the Young Researchers Society. Dr. Nour leads the opening. The rest of the team seats are still open.",
  email: "mohamed.noureldin@aalto.fi",
  koreaFacebook: "https://www.facebook.com/YoungResearchersSociety",
  repo: "https://github.com/ali-amaan/YOURS_Finland",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const lead = {
  shortName: "Dr. Nour",
  name: "Dr. Mohamed Noureldin",
  alsoKnown: "Prof. Mohammad Nour El-Din",
  role: "Country lead",
  appointment: "Associate Professor of Structural Engineering, Aalto University",
  previous:
    "Assistant Professor of Structural Engineering, Sungkyunkwan University, 2015–2022",
  initials: "MN",
  links: [
    {
      label: "Aalto profile",
      href: "https://www.aalto.fi/en/people/mohamed-noureldin",
    },
    {
      label: "Research portal",
      href: "https://research.aalto.fi/en/persons/mohamed-noureldin/",
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0009-0001-2628-6401",
    },
  ],
  bio: [
    "He founded the Young Researchers Society and now heads the Finland chapter.",
    "He is Associate Professor in the Department of Civil Engineering at Aalto University, where he teaches structural engineering and supervises students working on resilient structures. His research uses artificial intelligence, digital twins, and structural health monitoring.",
    "Before Finland, he was Assistant Professor at Sungkyunkwan University in South Korea. There he helped early-career researchers find their footing, including a YOURS workshop on the Korean research environment for people who had just arrived.",
  ],
} as const;

export const openSeats = [
  {
    role: "Programmes",
    brief: "Shape the workshop calendar and host the first season of sessions.",
  },
  {
    role: "Arrivals & membership",
    brief: "Welcome people who are new to Finnish research life and keep the member list honest.",
  },
  {
    role: "Communications",
    brief: "Write the notes, keep the site current, and make events easy to find.",
  },
  {
    role: "Partnerships",
    brief: "Open doors to labs, doctoral schools, and sister researchers abroad.",
  },
] as const;

export const pillars = [
  {
    index: "01",
    title: "A way in",
    text: "Briefings on how research actually works in Finland: doctoral schools, supervision, funding paths, and the first months after arrival.",
  },
  {
    index: "02",
    title: "Craft",
    text: "Practical workshops in the YOURS tradition: writing, LaTeX, presentations, and how to ask for help before a week disappears.",
  },
  {
    index: "03",
    title: "Company",
    text: "Introductions across disciplines, and counsel from someone a few steps ahead in the same field.",
  },
] as const;

export const activities = [
  {
    id: "environment",
    index: "01",
    title: "Research life in Finland",
    summary:
      "A plain-language briefing for master's students, doctoral researchers, and postdocs who are new to the Finnish system, or new to a Finnish university.",
    points: [
      "How a doctoral place, a supervisor, and a research group usually fit together",
      "Where funding conversations start, including the Research Council of Finland and university schemes",
      "Everyday practicalities: language, credit, teaching, and asking for help",
    ],
  },
  {
    id: "craft",
    index: "02",
    title: "Methods studio",
    summary:
      "Short, free working sessions. The Korea chapter built YOURS on workshops like these: technical writing, LaTeX, and talks people could actually use the next day.",
    points: [
      "Paper structure and technical English",
      "LaTeX for people who would rather be in the lab",
      "How to present work to a room that is not your group",
    ],
  },
  {
    id: "counsel",
    index: "03",
    title: "Peer counsel",
    summary:
      "A conversation with a researcher further along in a nearby field. At launch this is a request, not a booking calendar. Dr. Nour reads what comes in and matches people as the circle grows.",
    points: [
      "One question, one hour, no fee",
      "Useful for topic choice, a stuck paper, or a first conference",
      "Volunteer time, so replies follow the pace of the people offering it",
    ],
  },
  {
    id: "society",
    index: "04",
    title: "Science and society",
    summary:
      "YOURS exists so interdisciplinary work can reach beyond a single lab. In Finland that means rooms where engineers, designers, natural scientists, and social researchers can hear each other.",
    points: [
      "Cross-field evenings once the programmes seat is filled",
      "A path toward public-facing notes, once there is something real to report",
      "A standing link with YOURS in South Korea",
    ],
  },
] as const;

export const events = [
  {
    id: "opening",
    title: "Opening gathering",
    when: "Winter 2026–27",
    where: "Helsinki region",
    status: "Planned" as const,
    summary:
      "The first in-person meeting of YOURS Finland. Short introductions, the shape of the season, and time to say what the chapter should become.",
  },
  {
    id: "briefing",
    title: "Research life in Finland",
    when: "To follow the opening",
    where: "In person or hybrid, to be set",
    status: "Planned" as const,
    summary:
      "A briefing for researchers who are new to Finland or new to a Finnish university. Date follows once a room and a host are confirmed.",
  },
  {
    id: "studio",
    title: "Methods studio: writing",
    when: "First season",
    where: "To be announced",
    status: "Planned" as const,
    summary:
      "The first craft workshop. Topic starts with research writing, because that is where most new chapters can help immediately.",
  },
] as const;

export const news = [
  {
    slug: "finland-chapter-opens",
    title: "YOURS opens a chapter in Finland",
    date: "2026-10-03",
    dek: "The Young Researchers Society, built by volunteers in South Korea, now has a home for early-career researchers in Finland.",
    paragraphs: [
      "YOURS Finland opens today as the Finnish chapter of the Young Researchers Society. The society began as a volunteer circle of researchers in South Korea, running free workshops and seminars so people from different fields could find one another.",
      "Dr. Mohamed Noureldin, known in the society as Dr. Nour, is the country lead. He founded YOURS while at Sungkyunkwan University and is now Associate Professor of Structural Engineering at Aalto University in Espoo.",
      "The chapter starts small on purpose. There is no office, no membership card, and no paid staff. There is a lead, a public programme for the first season, and open seats for the people who will run it.",
      "If you are a master's student, doctoral researcher, postdoc, or early-career researcher in Finland and you want in, write through the join page. The note goes to Dr. Nour.",
    ],
  },
  {
    slug: "first-season",
    title: "What the first season will actually do",
    date: "2026-10-03",
    dek: "Three sessions are planned. None of them has a locked date yet, and the site says so.",
    paragraphs: [
      "The opening season has three parts: a gathering in the Helsinki region, a briefing on research life in Finland, and a methods studio on writing. Each one is marked planned. Rooms and dates will be published when they are real.",
      "That order is deliberate. People should meet before the chapter pretends to have a calendar. The briefing comes next, because many researchers arrive in Finland without a map of doctoral schools, supervision, or funding. The studio comes after that, in the practical style YOURS used in Korea.",
      "Peer counsel is open as a request. It is not an automated booking system. Matches happen when someone further along has time.",
    ],
  },
  {
    slug: "open-seats",
    title: "Four team seats are still empty",
    date: "2026-10-03",
    dek: "Programmes, arrivals, communications, and partnerships are placeholders until someone is appointed.",
    paragraphs: [
      "Only one person is named on this site. Dr. Nour heads the chapter. The other cards are open seats: programmes, arrivals and membership, communications, and partnerships.",
      "Those cards are placeholders. They are not unnamed colleagues, and they are not stock portraits standing in for a team that does not exist yet.",
      "If one of those seats is work you can do, say so on the join form. Helping run the chapter is one of the options.",
    ],
  },
] as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/activities", label: "Activities" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/team", label: "Team" },
] as const;

export const interests = [
  "Workshops",
  "Arrival briefing",
  "Peer counsel",
  "Helping run the chapter",
] as const;

export const stages = [
  "Master's student",
  "Doctoral researcher",
  "Postdoctoral researcher",
  "Early-career faculty or staff",
  "Other",
] as const;

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Helsinki",
  }).format(new Date(`${iso}T12:00:00+02:00`));
}

export function getNews(slug: string) {
  return news.find((item) => item.slug === slug);
}
