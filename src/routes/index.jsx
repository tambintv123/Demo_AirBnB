import Loader from "components/Loader";
import { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// layout
const MainLayout = lazy(() => import("layouts/mainLayout"));

// pages
const HomePage = lazy(() => import("pages/HomePage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const DetailRoomPage = lazy(() => import("pages/DetailRoomPage"));
const DemoListRooms = lazy(() => import("pages/DemoListRoom"));
const PersonalPage = lazy(() => import("pages/PersonalPage"));
const routes = [
  // {
  //   path: "",
  //   layout: MainLayout,
  //   element: HomePage,
  // },
  {
    path: "/detail-room/:id",
    layout: MainLayout,
    element: DetailRoomPage,
  },
  {
    path: "",
    layout: MainLayout,
    element: DemoListRooms,
  },
  {
    path: "/personal-page",
    layout: MainLayout,
    element: PersonalPage,
  },
  {
    path: "/login",
    element: LoginPage,
  },
];
function RouteMain() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((routeItem, index) => {
            let { path, element, layout } = routeItem;
            const Component = element;
            const Layout = layout || Fragment;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Layout>
                    <Component />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default RouteMain;
