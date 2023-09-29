import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Headers from "./Components/Header/Header";
import "./styles/App.css";

function App() {
	return (
		<div className="App">
			<Headers />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
