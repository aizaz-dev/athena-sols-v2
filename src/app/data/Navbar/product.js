import { 
  FaBox, FaChartBar, FaRobot, FaStar, FaGift, FaFlask, FaFolder, 
  FaBullseye, FaPen, FaUsers, FaCode 
} from "react-icons/fa";

const productMenu = {
  label: "Product",
  links: [
    {
      section: "The platform",
      items: [
        { label: "The platform", href: "/product", icon: <FaBox /> },
        { label: "Mission Control", href: "/mission-control", icon: <FaChartBar /> },
        { label: "AI accelerators", href: "/ai-accelerators", icon: <FaRobot /> },
        { label: "Features", href: "/features", icon: <FaStar /> },
        { label: "What’s new", href: "/whats-new", icon: <FaGift /> },
        { label: "Innovation Lab", href: "/innovation-lab", icon: <FaFlask /> },
        { label: "Integrations", href: "/integrations", icon: <FaFolder /> },
      ],
    },
    {
      section: "Designed for",
      items: [
        {
          label: "Content-driven organizations",
          href: "/for-organizations",
          desc: "Handle the complexity of modern content management",
          icon: <FaBullseye />,
        },
        {
          label: "Content creators",
          href: "/for-creators",
          desc: "Create and publish content independently from developers",
          icon: <FaPen />,
        },
        {
          label: "Managers and teams",
          href: "/for-teams",
          desc: "Speed up production through better collaboration",
          icon: <FaUsers />,
        },
        {
          label: "Development and IT",
          href: "/for-developers",
          desc: "Get freedom to design great digital experiences",
          icon: <FaCode />,
        },
      ],
    },
  ],
  promo: {
    text: "Experience better content delivery. Free for 30 days.",
    cta: "Start free trial",
    href: "/free-trial",
  },
};

export default productMenu;
