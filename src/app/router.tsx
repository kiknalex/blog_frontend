import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

import { addComment, login, register } from "./actions/actions";
import App from "./app";
import HomePage from "./routes/home";
import LoginPage from "./routes/login";
import PostPage from "./routes/post";
import ProfilePage from "./routes/profile";
import RegisterPage from "./routes/register";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<App />}>
			<Route element={<HomePage />} path="/" />
			<Route action={addComment} element={<PostPage />} path="/posts/:postId" />
			<Route action={login} element={<LoginPage />} path="/login" />
			<Route action={register} element={<RegisterPage />} path="/register" />
			<Route element={<ProfilePage />} path="/profile" />
		</Route>
	)
);

export default router;
