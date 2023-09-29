import contacts4 from "../../image/contacts/contacts4.jpg";
import styles from "./Contacts.module.css";

function Contacts() {
	return (
		<div className={styles.contacts}>
			<div className={styles.header}>
				<h2>Contacts</h2>
			</div>
			<div className={styles.body}>
				<div className={styles.left}>
					<img src={contacts4} alt="contacts4" />
				</div>
				<div className={styles.right}>
					<p>
						<span className={styles.goldSpan}>Store Address</span>
						<span>Moscow, Afimoll shopping center, 2nd floor, place B11 </span>
						<span>
							Mon-Thu from10:00 to 22:00, Fri-Sat from 10:00 to 23:00,{" "}
						</span>
						<span>Sun from 10:00 to 22:00</span>
					</p>
					<p>
						<span>Moscow, Vsevolozhsky lane 5</span>
						<span>+7 915 268 37 75</span>
						<span>Mon-Sun from 11:00 to 21:00</span>
					</p>
					<p>
						<span>Customer care service:</span>
						<span>+7 925 106 09 00</span>
						<span>
							Mon-Fri from 10:00 to 19:00, Sat-Sun from 11:00 to 18:00
						</span>
					</p>
					<p>
						<span className={styles.goldSpan}>Contact Customer Care</span>
						<span>+7 925 106 09 00</span>
					</p>

					<p>
						<span className={styles.goldSpan}>E-mail</span>
						<span>info@mavelty.com</span>
					</p>
					<p>
						<span className={styles.goldSpan}>
							Customer Service Hours of Operation
						</span>
						<span>
							Mon-Fri from 10:00 to 19:00, Sat-Sun from 11:00 to 18:00
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Contacts;
