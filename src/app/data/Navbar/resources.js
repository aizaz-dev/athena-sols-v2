import { 
  FaBox, FaChartBar, FaRobot, FaStar, FaGift, FaFlask
} from "react-icons/fa";

const resourcesMenu = {
  label: "Resources",
  type: "resources", // 👈 yeh add kar diya
  links: [
    {
      title: "Resources",
      items: [
        { label: "TCO calculator", href: "/resources/tco-calulator", icon: <FaBox /> },
        { label: "Blog", href: "/resources/blog", icon: <FaChartBar /> },
        { label: "Events and webinars", href: "/resources/eventsandwebinars", icon: <FaRobot /> },
        { label: "Resource library", href: "/resources/resource-library", icon: <FaStar /> },
        { label: "The Experts Circle", href: "/resources/the-experts-circle", icon: <FaGift /> },
        { label: "Documentation", href: "/resources/documentation", icon: <FaFlask /> },
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

export default resourcesMenu;
