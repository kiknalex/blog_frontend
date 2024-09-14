import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";

function App() {
	createRoot(document.querySelector("#root")!).render(
		<StrictMode>
			<></>
		</StrictMode>
	);
}
export default App;
