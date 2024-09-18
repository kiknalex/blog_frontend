import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

import App from "./app";
import HomePage from "./routes/home";
import PostPage from "./routes/post";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<App />}>
			<Route element={<HomePage />} path="/" />
			<Route element={<PostPage />} path="/posts/:postId" />
		</Route>
	)
);

export default router;
