import { NavLink } from "react-router-dom";
import general1 from "../../../image/general/general1.png";
import promoImg1 from "../../../image/promo/promo1.jpg";
import styles from "./Promo.module.css";
function Promo() {
	return (
		<div className={styles.promo}>
			<div className={styles.promoLeft}>
				<h1>
					let's explore
					<span className={styles.yellowLine}>
						<span>unique</span>
					</span>
					clothes
				</h1>
				<p>Live for influential and innovative fashion!</p>
				<div>
					<span>
						<img src={general1} alt="promoImg1" />
					</span>
					<button>
						<NavLink to={`catalogue`}>Shop Now</NavLink>
					</button>
				</div>
			</div>
			<div className={styles.promoRight}>
				<img src={promoImg1} alt="promoImg1" />
			</div>
		</div>
	);
}

export default Promo;
