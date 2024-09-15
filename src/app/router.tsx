import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

import App from "./app";

const router = createBrowserRouter(
	createRoutesFromElements(<Route element={<App />} path="/"></Route>)
);

export default router;
