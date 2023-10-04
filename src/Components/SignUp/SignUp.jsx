import { dataInput } from "../../data/dataInput";
import signUp1 from "../../image/signUp/signUp1.jpeg";
import InputWrap from "./InputWrap/InputWrap";
import styles from "./SignUp.module.css";

function SignUp() {
	const handleSearch = (e) => {
		e.preventDefault();
		console.log("Форма отправлена");
	};

	return (
		<div className={styles.signUp}>
			<div className={styles.header}>
				<h2>Sign Up</h2>
			</div>
			<div className={styles.body}>
				<div className={styles.left}>
					<img src={signUp1} alt="signUp1" />
				</div>
				<div className={styles.right}>
					<h3>
						If you would like to become part of our community, please register
						using the form below.
					</h3>
					<form action="" method="post" onSubmit={handleSearch}>
						<div className={styles.container}>
							{dataInput.map((value) => (
								<InputWrap dataInput={value} key={value.id} />
							))}
						</div>
						<div>
							<input className={styles.button} type="submit" value="Register" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
