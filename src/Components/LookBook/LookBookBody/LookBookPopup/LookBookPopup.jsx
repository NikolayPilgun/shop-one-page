import {
	AiOutlineArrowLeft,
	AiOutlineArrowRight,
	AiOutlineCloseSquare,
} from "react-icons/ai";
import styles from "./LookBookPopup.module.css";

function LookBookPopup({
	dataSummer,
	popup,
	setPopup,
	pathIndex,
	setPathIndex,
}) {
	const onClickPopupClose = () => {
		setPopup(styles.popup);
	};
	const onClickLeftArrow = () => {
		if (pathIndex === 0) {
			setPathIndex((pathIndex = dataSummer.length - 1));
		} else {
			setPathIndex((pathIndex = pathIndex - 1));
		}
	};
	const onClickRightArrow = () => {
		if (pathIndex === dataSummer.length - 1) {
			setPathIndex((pathIndex = 0));
		} else {
			setPathIndex((pathIndex = pathIndex + 1));
		}
	};
	return (
		<div className={popup}>
			<div className={styles.popupPicture}>
				<div onClick={onClickPopupClose} className={styles.popupClose}>
					<AiOutlineCloseSquare />
				</div>
				<div className={styles.leftArrow} onClick={onClickLeftArrow}>
					<AiOutlineArrowLeft />
				</div>
				<div className={styles.rightArrow} onClick={onClickRightArrow}>
					<AiOutlineArrowRight />
				</div>
				<img
					src={dataSummer[pathIndex].path}
					alt={dataSummer[pathIndex].path}
				/>
			</div>
		</div>
	);
}

export default LookBookPopup;
