import { NavLink } from "react-router-dom";
import sale1 from "../../../image/sale/sale1.jpg";
import styles from "./Sale.module.css";
function Sale() {
	return (
		<section className={styles.sale}>
			<div className={styles.saleLeft}>
				<img src={sale1} alt="sale1" />
			</div>
			<div className={styles.saleRight}>
				<h2>
					<p className={styles.yellowLine}>
						<span>Payday</span>
					</p>
					<p> Sale now</p>
				</h2>
				<div>
					<p>
						Spend minimal $100 get 30% off voucher code for your next purchase
					</p>
					<p>
						<span>1 June - 10 June 2021</span>
					</p>
					<p>*Terms & Conditions apply</p>
				</div>

				<button>
					<NavLink to={`lookBook`}>Shop Now</NavLink>
				</button>
			</div>
		</section>
	);
}

export default Sale;
