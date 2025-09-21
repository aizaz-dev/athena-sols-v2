import { 
  FaBox, FaChartBar, FaRobot, FaStar, FaGift, FaFlask, FaFolder, 
  FaBullseye, FaPen, FaUsers, FaCode, FaCube, FaProjectDiagram, 
  FaShieldAlt, FaLayerGroup, FaGlobe, FaBook, FaExpandArrowsAlt, 
  FaLanguage, FaHeartbeat, FaUserShield, FaUniversity, FaIndustry, 
  FaGraduationCap, FaCarSide 
} from "react-icons/fa";
import { FaAward, FaBriefcase, FaHandshake, FaHeadset } from "react-icons/fa6";

/* ============================================================
   PRODUCT MENU
   ------------------------------------------------------------
   - Contains "The platform" and "Designed for" categories
   - Includes a single promo card with CTA
   ============================================================ */
const productMenu = {
  label: "Product",
  links: [
    {
      title: "The platform",
      items: [
        { label: "The platform", href: "/product/platform", icon: <FaBox /> },
        { label: "Mission Control", href: "/product/mission-control", icon: <FaChartBar /> },
        { label: "AI accelerators", href: "/product/ai-accelerators", icon: <FaRobot /> },
        { label: "Features", href: "/product/features", icon: <FaStar /> },
        { label: "What’s new", href: "/product/whats-new", icon: <FaGift /> },
        { label: "Innovation Lab", href: "/product/innovation", icon: <FaFlask /> },
        { label: "Integrations", href: "/product/integrations", icon: <FaFolder /> },
      ],
    },
    {
      title: "Designed for",
      items: [
        {
          label: "Content-driven organizations",
          href: "/product/for-organizations",
          desc: "Handle the complexity of modern content management",
          icon: <FaBullseye />,
        },
        {
          label: "Content creators",
          href: "/product/for-creators",
          desc: "Create and publish content independently from developers",
          icon: <FaPen />,
        },
        {
          label: "Managers and teams",
          href: "/product/for-teams",
          desc: "Speed up production through better collaboration",
          icon: <FaUsers />,
        },
        {
          label: "Development and IT",
          href: "/product/for-developers",
          desc: "Get freedom to design great digital experiences",
          icon: <FaCode />,
        },
      ],
    },
  ],
  promo: {
    text: "Experience better content delivery. Free for 30 days.",
    cta: "Start free trial",
    href: "/product/free-trial",
    image: "/images/free-trial.jpg", 
  },
};

/* ============================================================
   SOLUTIONS MENU
   ------------------------------------------------------------
   - 3 categories: Solutions, Use cases, Industries
   - Each category has items + optional footer link
   - Promo here is an ARRAY of case studies (multi-card layout)
   ============================================================ */
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

/* ============================================================
   RESOURCES MENU
   ------------------------------------------------------------
   - Sidebar menu with key resource links
   - Right-hand side: featured articles, guides, reports
   ============================================================ */
const resourcesMenu = {
  label: "Resources",
  type: "resources", 
  sidebar: [
    { label: "TCO calculator", href: "/resources/tco-calulator", icon: <FaBox /> },
    { label: "Blog", href: "/resources/blog", icon: <FaChartBar /> },
    { label: "Events and webinars", href: "/resources/eventsandwebinars", icon: <FaRobot /> },
    { label: "Resource library", href: "/resources/resource-library", icon: <FaStar /> },
    { label: "The Experts Circle", href: "/resources/the-experts-circle", icon: <FaGift /> },
    { label: "Documentation", href: "/resources/documentation", icon: <FaFlask /> },
  ],
  cards: [
    {
      tag: "Article",
      title: "Headless CMS explained: The ultimate guide",
      image: "/images/cms-guide.jpg",
      href: "/resources/headless-cms-guide",
    },
    {
      tag: "Ebooks & guides",
      title: "The ultimate guide to modernizing content operations",
      image: "/images/content-ops.jpg",
      href: "/resources/content-ops",
    },
    {
      tag: "Reports",
      title: "The Total Economic Impact™ of Kontent.ai CMS Platform",
      image: "/images/roi-report.jpg",
      href: "/resources/roi",
    },
  ],
};

/* ============================================================
   COMPANY MENU
   ------------------------------------------------------------
   - Simple grid of company-related links
   ============================================================ */
const companyMenu = {
  label: "Company",
  type: "company",
  items: [
    { label: "About us", href: "/about", icon: <FaUsers /> },
    { label: "Security and trust", href: "/security", icon: <FaShieldAlt /> },
    { label: "Partners", href: "/partners", icon: <FaHandshake /> },
    { label: "Awards", href: "/awards", icon: <FaAward /> },
    { label: "Customer success services", href: "/customer-success", icon: <FaHeadset /> },
    { label: "Careers", href: "/careers", icon: <FaBriefcase /> },
  ],
};

/* ============================================================
   FINAL NAVIGATION ITEMS
   - Exported for Navbar & DropdownMenu components
   ============================================================ */
const navItems = [
  productMenu,
  solutionsMenu,
  { label: "Customers", href: "/customers" },
  { label: "Pricing", href: "/pricing" },
  resourcesMenu,
  companyMenu,
];

export default navItems;
