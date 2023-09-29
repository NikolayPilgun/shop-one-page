import styles from "./FormEmail.module.css";
function FormEmail() {
	return (
		<section className={styles.formEmail}>
			<h2>Join shopping community to get monthly promo</h2>
			<p>Type your email down below and be young wald generation</p>
			<form className={styles.formInput}>
				<input type="email" placeholder="Add your email here" />
				<button type="submit">Send</button>
			</form>
		</section>
	);
}

export default FormEmail;
