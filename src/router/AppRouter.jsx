import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loading from "../components/sidebar/Loader/Loading";
import Dashboard from "../pages/Dashboard/Dashboard";
const Projects = lazy(() => import("../pages/Projects/Projects"));
const Board = lazy(() => import("../pages/Board/Board"));
/* const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard")); */

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />}>
					<Route
						path="projects"
						element={
							<Suspense fallback={<Loading />}>
								<Projects />
							</Suspense>
						}
					/>
					<Route
						path="projects/:idBoard"
						element={
							<Suspense fallback={<Loading />}>
								<Board />
							</Suspense>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
