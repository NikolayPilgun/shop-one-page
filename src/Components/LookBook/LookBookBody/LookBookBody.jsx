import React, { useState } from "react";

import styles from "./LookBookBody.module.css";
import LookBookPopup from "./LookBookPopup/LookBookPopup";
import stylesPopup from "./LookBookPopup/LookBookPopup.module.css";

function LookBookBody({ dataSummer }) {
	let [pathIndex, setPathIndex] = useState(0);
	let [animationPicture, setAnimationPicture] = useState("");
	let [popup, setPopup] = useState(stylesPopup.popup);

	const onClickPicture = (index) => {
		setAnimationPicture((animationPicture += ` ${styles.animationPicture}`));
		setTimeout(() => setPathIndex((pathIndex = index)), 250);
		setTimeout(() => setAnimationPicture((animationPicture = "")), 500);
	};
	const onClickPopup = () => {
		setPopup((popup += ` ${stylesPopup.show}`));
	};

	return (
		<div className={styles.body}>
			<div className={styles.left} onClick={onClickPopup}>
				<div className={styles.picture}>
					<img
						src={dataSummer[pathIndex].path}
						alt={dataSummer[pathIndex].path}
					/>
					<div className={animationPicture}></div>
				</div>
				<h3 className={styles.description}>Summer collection</h3>
			</div>
			<div className={styles.right}>
				<div className={styles.smallPicture}>
					{dataSummer.map((value, index) => (
						<div key={value.id} onClick={() => onClickPicture(index)}>
							<img src={value.path} alt={value.title} />
						</div>
					))}
				</div>
				<h3 className={styles.description}>View summer collection</h3>
			</div>
			<LookBookPopup
				dataSummer={dataSummer}
				popup={popup}
				setPopup={setPopup}
				pathIndex={pathIndex}
				setPathIndex={setPathIndex}
			/>
		</div>
	);
}

export default LookBookBody;
