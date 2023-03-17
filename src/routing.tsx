import Home from "./pages/home/home";
import SearchPage from "./pages/search/search";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/search", element: <SearchPage /> },
];

export default routes;