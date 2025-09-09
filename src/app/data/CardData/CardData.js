// data/cardsData.js
import { Sun, Target } from "lucide-react";

export const cardsData = [
  {
    icon: <Sun className="w-6 h-6" />,
    title: (
      <>
        Complete <span className="font-bold">control</span>{" "}
        <span className="text-violet-600">and oversight</span>
      </>
    ),
    description:
      "Define and track everything related to content access, workflows, and approvals, so that everyone can work transparently and collaborate together in one CMS. With governance built into every single action, your content will always be super high quality, accurate, consistent, and compliant.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: (
      <>
        Efficiency everywhere, <span className="text-violet-600">always</span>
      </>
    ),
    description:
      "Create and publish content in record time in a CMS that makes every aspect of your daily workflow more efficient. Easy content discovery and reuse. Smooth content creation, reviews, and approvals. Publishing to any channel, device, or system of your choice. It all happens here.",
  },
];
