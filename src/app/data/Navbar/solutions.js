import { 
  FaCube, FaProjectDiagram, FaShieldAlt, FaLayerGroup,
  FaGlobe, FaBook, FaExpandArrowsAlt, FaLanguage,
  FaHeartbeat, FaUserShield, FaUniversity, FaIndustry, 
  FaGraduationCap, FaCarSide 
} from "react-icons/fa";

const solutionsMenu = {
  label: "Solutions",
  links: [
    {
      title: "Solutions",
      items: [
        {
          label: "Content hub",
          desc: "Consolidate all your content and customize it for any purpose",
          href: "/solutions/content-hub",
          icon: <FaCube />,
        },
        {
          label: "Content operations",
          desc: "Bring everyone together in one team-friendly workspace",
          href: "/solutions/content-operations",
          icon: <FaProjectDiagram />,
        },
        {
          label: "Content audit",
          desc: "Make content easier to find, monitor, and organize",
          href: "/solutions/content-audit",
          icon: <FaShieldAlt />,
        },
        {
          label: "Modern tech stack",
          desc: "Future-proof your content with flexible architecture",
          href: "/solutions/modern-tech-stack",
          icon: <FaLayerGroup />,
        },
      ],
      footer: { label: "See all solutions", href: "/solutions" },
    },
    {
      title: "Use cases",
      items: [
        {
          label: "Multiple websites",
          desc: "Reuse content across brands and regions",
          href: "/use-cases/multiple-websites",
          icon: <FaGlobe />,
        },
        {
          label: "Knowledge bases and portals",
          desc: "Unify and govern all your content in a single CMS",
          href: "/use-cases/knowledge-bases",
          icon: <FaBook />,
        },
        {
          label: "Anywhere deployment",
          desc: "Deploy structured content for any context, channel, device, or system",
          href: "/use-cases/anywhere-deployment",
          icon: <FaExpandArrowsAlt />,
        },
        {
          label: "Localization",
          desc: "Reach local audiences with accurate and authentic messages",
          href: "/use-cases/localization",
          icon: <FaLanguage />,
        },
      ],
      footer: { label: "See all use cases", href: "/use-cases" },
    },
    {
      title: "Industries",
      items: [
        { label: "Healthcare", href: "/solution/healthcare", icon: <FaHeartbeat /> },
        { label: "Insurance", href: "/solution/insurance", icon: <FaUserShield /> },
        { label: "Banking and finance", href: "/solution/banking", icon: <FaUniversity /> },
        { label: "Manufacturing", href: "/solution/manufacturing", icon: <FaIndustry /> },
        { label: "Education", href: "/solution/education", icon: <FaGraduationCap /> },
        { label: "Travel and tourism", href: "/solution/travel", icon: <FaCarSide /> },
      ],
      footer: { label: "See all industries", href: "/industries" },
    },
  ],
  promo: [
    {
      text: "100+ marketers managing 30 websites",
      href: "/case-studies/elanco",
      image: "/images/promo-elanco.jpg",
    },
    {
      text: "30% decrease in production time",
      href: "/case-studies/neilson",
      image: "/images/promo-neilson.jpg",
    },
    {
      text: "24 languages managed with ease",
      href: "/case-studies/kramp",
      image: "/images/promo-kramp.jpg",
    },
  ],
};

export default solutionsMenu;
