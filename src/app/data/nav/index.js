import productMenu from "./product";
import solutionsMenu from "./solutions";
import resourcesMenu from "./resources";
import companyMenu from "./company";

const navItems = [
  productMenu,
  solutionsMenu, 
  resourcesMenu,
  companyMenu,
   { label: "Customers", href: "/customers" },
  { label: "Pricing", href: "/pricing" },
];

export default navItems;
