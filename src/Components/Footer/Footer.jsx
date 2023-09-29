import social1 from "../../image/footer/social1.png";
import social2 from "../../image/footer/social2.png";
import social3 from "../../image/footer/social3.png";
import social4 from "../../image/footer/social4.png";
import styles from "./Footer.module.css";
function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.left}>
				<h2>Fashion</h2>
				<p>Complete your style with awesome clothes from us</p>
				<div className={styles.social}>
					<a href="#!">
						<img src={social1} alt="social1" />
					</a>
					<a href="#!">
						<img src={social2} alt="social2" />
					</a>
					<a href="#!">
						<img src={social3} alt="social3" />
					</a>
					<a href="#!">
						<img src={social4} alt="social4" />
					</a>
				</div>
			</div>
			<div className={styles.right}>
				<ul className={styles.column}>
					<li>Company</li>
					<li>About</li>
					<li>Contact us</li>
					<li>Support</li>
					<li>Careers</li>
				</ul>
				<ul className={styles.column}>
					<li>Quick Link</li>
					<li>Share Location</li>
					<li>Orders Traaking</li>
					<li>Size Guide</li>
					<li>FAQ</li>
				</ul>
				<ul className={styles.column}>
					<li>Legal</li>
					<li>Terms & conditions</li>
					<li>Privacy</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
