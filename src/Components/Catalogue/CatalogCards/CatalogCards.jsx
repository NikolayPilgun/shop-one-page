import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import styles from "./CatalogCards.module.css";

function CatalogCards({ dataCard }) {
	const pageParams = `${dataCard.season}_${dataCard.name}`;

	return (
		<div className={styles.card}>
			<div className={styles.pictures}>
				<img src={dataCard.path} alt={dataCard.title} />
			</div>
			<div className={styles.description}>
				<div>
					<p>{dataCard.title}</p>
					<p>{dataCard.subTitle}</p>
				</div>
				<button>
					<BsArrowRight />
				</button>
			</div>

			<NavLink
				className={styles.linkClick}
				to={`/catalogue/${pageParams}`}
			></NavLink>
		</div>
	);
}

export default CatalogCards;
