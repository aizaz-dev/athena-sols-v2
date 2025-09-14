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
      section: "Designed for",
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
  },
};

export default productMenu;
