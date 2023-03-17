import Home from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";
import SearchPage from "./pages/search/search";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/search", element: <SearchPage /> },
{ path: "*", element:  <NotFound /> },
];

export default routes;