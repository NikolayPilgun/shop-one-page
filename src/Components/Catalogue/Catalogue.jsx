import React, { useState } from "react";
import { dataCards } from "../../data/dataCards";
import {
	filteredArray,
	filteringStatus,
	inputCheck,
	mergeFilterResult,
} from "../../utils/filtration";
import CatalogCards from "./CatalogCards/CatalogCards";
import styles from "./Catalogue.module.css";

function Catalogue() {
	const selectSeason = ["summer", "spring", "winter", "autumn"];
	const chooseColor = ["red", "black", "white", "yellow"];
	const selectSize = ["long", "short", "thinnest"];

	let [dataCardsState, setDataCardsState] = useState(
		filteringStatus.firstBoot ? dataCards : filteredArray
	);

	const onChangeFilter = (value, event) => {
		filteringStatus.firstBoot = false;
		mergeFilterResult(value, event);
		setDataCardsState((dataCardsState = filteredArray));
	};

	return (
		<div className={styles.catalogue}>
			<div className={styles.header}>
				<h2>Catalogue</h2>
			</div>
			<div className={styles.container}>
				<div className={styles.left}>
					<h3>Filtration</h3>
					<div className={styles.filters}>
						<div className={styles.filter}>
							<h3>Select season</h3>
							{selectSeason.map((value, index) => (
								<label key={index}>
									<input
										defaultChecked={inputCheck[value]}
										type="checkbox"
										onChange={(event) =>
											onChangeFilter(value, event.target.checked)
										}
									/>
									<span>{value}</span>
								</label>
							))}
						</div>
						<div className={styles.filter}>
							<h3>Choose color</h3>
							{chooseColor.map((value, index) => (
								<label key={index}>
									<input
										defaultChecked={inputCheck[value]}
										type="checkbox"
										onChange={(event) =>
											onChangeFilter(value, event.target.checked)
										}
									/>
									<span>{value}</span>
								</label>
							))}
						</div>
						<div className={styles.filter}>
							<h3>Select size</h3>
							{selectSize.map((value, index) => (
								<label key={index}>
									<input
										defaultChecked={inputCheck[value]}
										type="checkbox"
										onChange={(event) =>
											onChangeFilter(value, event.target.checked)
										}
									/>
									<span>{value}</span>
								</label>
							))}
						</div>
					</div>
				</div>
				<div className={styles.right}>
					{dataCardsState.length > 0 ? (
						dataCardsState.map((value) => (
							<CatalogCards dataCard={value} key={value.id} />
						))
					) : (
						<h4>According to your request Nothing found</h4>
					)}
				</div>
			</div>
		</div>
	);
}

export default Catalogue;

// const onChangeFilter = (value, event) => {
// 	if (event.target.checked) {
// 		if (dataCardsState.length === dataCards.length) {
// 			setDataCardsState((dataCardsState = []));
// 			setDataCardsState(
// 				(dataCardsState = [
// 					...dataCardsState,
// 					...dataCards.filter(
// 						(card) =>
// 							card[Object.keys(card).find((key) => card[key] === value)] ===
// 							value
// 					),
// 				])
// 			);
// 		} else {
// 			setDataCardsState(
// 				(dataCardsState = [
// 					...dataCardsState,
// 					...dataCards.filter(
// 						(card) =>
// 							card[Object.keys(card).find((key) => card[key] === value)] ===
// 							value
// 					),
// 				])
// 			);
// 		}
// 	} else {
// 		setDataCardsState(
// 			(dataCardsState = dataCardsState.filter(
// 				(card) =>
// 					card[Object.keys(card).find((key) => card[key] === value)] !== value
// 			))
// 		);
// 		if (dataCardsState.length === 0) {
// 			setDataCardsState((dataCardsState = dataCards));
// 		}
// 	}
// };
