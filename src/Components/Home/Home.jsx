import Arrivals from "./Arrivals/Arrivals";
import Brands from "./Brands/Brands";
import DownloadApp from "./DownloadApp/DownloadApp";
import Favorite from "./Favorite/Favorite";
import FormEmail from "./FormEmail/FormEmail.";
import Promo from "./Promo/Promo";
import Sale from "./Sale/Sale";

function Home() {
	return (
		<div className="App">
			<Promo />
			<Brands />
			<Arrivals />
			<Sale />
			<Favorite />
			<DownloadApp />
			<FormEmail />
		</div>
	);
}

export default Home;
