import Footer from "@/widgets/footer/footer";
import Header from "@/widgets/header/header";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<Header></Header>
			<Outlet></Outlet>
			<Footer></Footer>
		</>
	);
}
export default App;
