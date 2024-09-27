import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

import { login, register } from "./actions/auth";
import { addComment } from "./actions/comment";
import { createPost, deletePost, editPost } from "./actions/post";
import App from "./app";
import ErrorElementGeneral from "./error-elements/error-element-general";
import HomePage from "./routes/home";
import LoginPage from "./routes/login";
import PostPage from "./routes/post";
import PostNew from "./routes/post-new";
import ProfilePage from "./routes/profile";
import RegisterPage from "./routes/register";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<App />}>
			<Route
				element={<HomePage />}
				errorElement={<ErrorElementGeneral />}
				path="/"
			/>
			<Route
				element={<PostPage />}
				errorElement={<ErrorElementGeneral />}
				path="/posts/:postId"
			>
				<Route action={editPost} path="edit" />
				<Route action={deletePost} path="delete" />
				<Route action={addComment} path="comments" />
			</Route>
			<Route
				action={createPost}
				element={<PostNew />}
				errorElement={<ErrorElementGeneral />}
				path="/posts/new"
			/>
			<Route
				action={login}
				element={<LoginPage />}
				errorElement={<ErrorElementGeneral />}
				path="/login"
			/>
			<Route
				action={register}
				element={<RegisterPage />}
				errorElement={<ErrorElementGeneral />}
				path="/register"
			/>
			<Route
				element={<ProfilePage />}
				errorElement={<ErrorElementGeneral />}
				path="/profile"
			/>
		</Route>
	)
);

export default router;
