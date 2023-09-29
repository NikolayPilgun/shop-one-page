import brand1 from "../../../image/brands/brand1.png";
import brand2 from "../../../image/brands/brand2.png";
import brand3 from "../../../image/brands/brand3.png";
import brand4 from "../../../image/brands/brand4.png";
import brand5 from "../../../image/brands/brand5.png";
import brand6 from "../../../image/brands/brand6.png";
import styles from "./Brands.module.css";

function Brands() {
	return (
		<section className={styles.brands}>
			<ul>
				<li>
					<img src={brand1} alt="brand1" />
				</li>
				<li>
					<img src={brand2} alt="brand2" />
				</li>
				<li>
					<img src={brand3} alt="brand3" />
				</li>
				<li>
					<img src={brand4} alt="brand4" />
				</li>
				<li>
					<img src={brand5} alt="brand5" />
				</li>
				<li>
					<img src={brand6} alt="brand6" />
				</li>
			</ul>
		</section>
	);
}

export default Brands;
