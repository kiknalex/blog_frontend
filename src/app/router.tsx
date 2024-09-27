import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

import { login, register } from "./actions/auth";
import { addComment } from "./actions/comment";
import { deletePost, editPost } from "./actions/post";
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
			<Route element={<PostPage />} path="/posts/:postId">
				<Route action={editPost} path="edit" />
				<Route action={deletePost} path="delete" />
				<Route action={addComment} path="/posts/:postId/comments" />
			</Route>
			<Route action={login} element={<LoginPage />} path="/login" />
			<Route action={register} element={<RegisterPage />} path="/register" />
			<Route element={<ProfilePage />} path="/profile" />
		</Route>
	)
);

export default router;
