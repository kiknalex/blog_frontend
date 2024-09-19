import Footer from "@/widgets/footer/footer";
import Header from "@/widgets/header/header";
import { Outlet, ScrollRestoration } from "react-router-dom";

function App() {
	return (
		<>
			<ScrollRestoration />
			<Header></Header>
			<Outlet></Outlet>
			<Footer></Footer>
		</>
	);
}
export default App;
