import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import arrivals1 from "../../../image/arrivals/arrivals1.jpg";
import arrivals2 from "../../../image/arrivals/arrivals2.jpg";
import arrivals3 from "../../../image/arrivals/arrivals3.jpg";

import styles from "./Arrivals.module.css";

function Arrivals() {
	return (
		<section className={styles.arrivals}>
			<h2 className={styles.title}>New Arrivals</h2>
			<div className={styles.container}>
				<div className={styles.column}>
					<div className={styles.pictures}>
						<img src={arrivals1} alt="arrivals1" />
					</div>
					<div className={styles.description}>
						<div>
							<p>Hoodies & Sweatshirt</p>
							<p>Explore Now</p>
						</div>
						<button>
							<NavLink to={`catalogue`}>
								<BsArrowRight />
							</NavLink>
						</button>
					</div>
				</div>
				<div className={styles.column}>
					<div className={styles.pictures}>
						<img src={arrivals2} alt="arrivals2" />
					</div>
					<div className={styles.description}>
						<div>
							<p>Coats & Parkas</p>
							<p>Explore Now</p>
						</div>
						<button>
							<NavLink to={`catalogue`}>
								<BsArrowRight />
							</NavLink>
						</button>
					</div>
				</div>
				<div className={styles.column}>
					<div className={styles.pictures}>
						<img src={arrivals3} alt="arrivals3" />
					</div>
					<div className={styles.description}>
						<div>
							<p>Tees & T-Shirt</p>
							<p>Explore Now</p>
						</div>
						<button>
							<NavLink to={`catalogue`}>
								<BsArrowRight />
							</NavLink>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Arrivals;
