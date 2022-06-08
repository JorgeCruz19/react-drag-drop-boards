import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loading from "../components/sidebar/Loader/Loading";
import Dashboard from "../pages/Dashboard/Dashboard"
const Home = lazy(() => import("../pages/Home/Home"));
/* const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard")); */

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route
            path="/kanban"
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
