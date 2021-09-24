import Items from "../components/Items/Items";
import Users from "../components/Users/users";

const adminRoutes = [
  { path: "/admin/items", label: "Items", commponent: Items },
  { path: "/admin/users", label: "Users", commponent: Users },
];

export default adminRoutes;
