import { dataLookBook } from "../../data/dataLookBook";
import styles from "./LookBook.module.css";
import LookBookBody from "./LookBookBody/LookBookBody";

function LookBook() {
	return (
		<div className={styles.lookBook}>
			<div className={styles.header}>
				<h2>LookBook</h2>
			</div>
			<div className={styles.container}>
				<LookBookBody dataSummer={dataLookBook.dataSummer} />
			</div>
		</div>
	);
}

export default LookBook;
