import { FiBarChart2 } from "react-icons/fi";
import { TbArrowsShuffle } from "react-icons/tb";
import { LuGem } from "react-icons/lu";

export const getInsightsData = [
  {
    icon: <FiBarChart2 className="text-3xl text-white" />,
    title: "Analyze everything from one home base",
    desc: "Get insight into everything that’s happening with your teams and content in one place. Stay in the loop about the status and pace of content production with easy-to-analyze widgets, filters, and time frames.",
  },
  {
    icon: <TbArrowsShuffle className="text-3xl text-white" />,
    title: "Take action based on data insights",
    desc: "Turn data signals and patterns into next steps. By measuring and comparing key markers of efficiency, spot frustrating bottlenecks that need your attention and make meaningful changes to how your teams work.",
  },
  {
    icon: <LuGem className="text-3xl text-white" />,
    title: "Allocate resources more strategically",
    desc: "Understand how much time it takes to create, review, and publish specific types of content. By weighing the investment against anticipated returns, it’s much easier to avoid time sinks and allocate resources to high-impact activities.",
  },
];
