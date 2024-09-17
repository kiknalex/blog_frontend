import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

import App from "./app";
import HomePage from "./routes/home";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<App />}>
			<Route element={<HomePage />} path="/" />
		</Route>
	)
);

export default router;
