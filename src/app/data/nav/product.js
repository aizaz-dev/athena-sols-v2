const productMenu = {
  label: "Product",
  links: [
    {
      section: "The platform",
      items: [
        { label: "📦 The platform", href: "/platform" },
        { label: "📊 Mission Control", href: "/mission-control" },
        { label: "🤖 AI accelerators", href: "/ai-accelerators" },
        { label: "✨ Features", href: "/features" },
        { label: "🆕 What’s new", href: "/whats-new" },
        { label: "🔬 Innovation Lab", href: "/innovation-lab" },
        { label: "📂 Integrations", href: "/integrations" },
      ],
    },
    {
      section: "Designed for",
      items: [
        {
          label: "🎯 Content-driven organizations",
          href: "/for-organizations",
          desc: "Handle the complexity of modern content management",
        },
        {
          label: "✍️ Content creators",
          href: "/for-creators",
          desc: "Create and publish content independently from developers",
        },
        {
          label: "👥 Managers and teams",
          href: "/for-teams",
          desc: "Speed up production through better collaboration",
        },
        {
          label: "💻 Development and IT",
          href: "/for-developers",
          desc: "Get freedom to design great digital experiences",
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
