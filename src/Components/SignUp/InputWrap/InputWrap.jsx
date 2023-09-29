import React, { useState } from "react";
import styles from "./InputWrap.module.css";

function InputWrap({ dataInput }) {
	const idInput = `${dataInput.title}_${dataInput.id}`.replace(/\s/g, "_");
	let [inputLabel, setInputLabel] = useState(styles.inputLabel);

	const onFocusInput = () => {
		setInputLabel((inputLabel += ` ${styles.inputLabelActive}`));
	};

	const onBlurInput = (value) => {
		if (value) return;
		setInputLabel((inputLabel = `${styles.inputLabel}`));
	};

	return (
		<div className={styles.inputWrap}>
			<label className={inputLabel} htmlFor={idInput}>
				{dataInput.title}:
			</label>
			<input
				id={idInput}
				type="text"
				name={dataInput.title}
				onFocus={onFocusInput}
				onBlur={(event) => onBlurInput(event.target.value)}
			/>
		</div>
	);
}

export default InputWrap;
