import { AuthContext } from "@/hooks/context/auth-context";
import { isLoggedIn } from "@/utils/is-logged-in";
import Footer from "@/widgets/footer/footer";
import Header from "@/widgets/header/header";
import { useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useFetcher } from "react-router-dom";
function App() {
	const [loggedIn, setLoggedIn] = useState(isLoggedIn());
	const fetcher = useFetcher({ key: "login" });

	useEffect(() => {
		if (fetcher.state === "idle" && fetcher.data?.ok) {
			setLoggedIn(isLoggedIn());
		}
	}, [fetcher.state, fetcher.data]);

	return (
		<AuthContext.Provider value={loggedIn}>
			<ScrollRestoration />
			<Header></Header>
			<Outlet></Outlet>
			<Footer></Footer>
		</AuthContext.Provider>
	);
}
export default App;
