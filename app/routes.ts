import type { RouteConfig } from "@react-router/dev/routes";

export default [
    { path: "/", file: "routes/home.tsx" },  
    { path: "/browse", file: "routes/browse.tsx" },
    { path: "/my-learning", file: "routes/my-learning.tsx" },
    { path: "/wishlist", file: "routes/wishlist.tsx" },
    { path: "/login", file: "routes/login.tsx" },
] satisfies RouteConfig;
