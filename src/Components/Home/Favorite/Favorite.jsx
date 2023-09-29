import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import favorite1 from "../../../image/favorite/favorite1.jpg";
import favorite2 from "../../../image/favorite/favorite2.jpg";
import styles from "./Favorite.module.css";

function Favorite() {
	return (
		<section className={styles.favorite}>
			<h2 className={styles.title}>Young's Favorite</h2>
			<div className={styles.container}>
				<div className={styles.left}>
					<div className={styles.picture}>
						<img src={favorite1} alt="favorite1" />
					</div>
					<div className={styles.textContent}>
						<div>
							<h3>Trending on instagram</h3>
							<h4>Explore Now!</h4>
						</div>
						<button>
							<NavLink to={`lookBook`}>
								<BsArrowRight />
							</NavLink>
						</button>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.picture}>
						<img src={favorite2} alt="favorite2" />
					</div>
					<div className={styles.textContent}>
						<div>
							<h3>Trending on instagram</h3>
							<h4>Explore Now!</h4>
						</div>
						<button>
							<NavLink to={`lookBook`}>
								<BsArrowRight />
							</NavLink>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Favorite;
