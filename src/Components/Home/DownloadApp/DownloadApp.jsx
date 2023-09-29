import apple from "../../../image/downloadApp/apple.png";
import downloadApp from "../../../image/downloadApp/downloadApp.jpg";
import google from "../../../image/downloadApp/google.png";
import styles from "./DownloadApp.module.css";
function DownloadApp() {
	return (
		<section className={styles.downloadApp}>
			<div className={styles.left}>
				<h2>Download app & get the voucher!</h2>
				<h3>
					get 30% off for first transaction using. Rondovision mobile app for
					now
				</h3>
				<div className={styles.button}>
					<button>
						<img src={apple} alt="apple" />
						<p>
							<span>Download on the</span>
							<span>App Store</span>
						</p>
					</button>
					<button>
						<img src={google} alt="google" />
						<p>
							<span>Get it on</span>
							<span>Google Play</span>
						</p>
					</button>
				</div>
			</div>
			<div className={styles.right}>
				<img src={downloadApp} alt="downloadApp" />
			</div>
		</section>
	);
}

export default DownloadApp;
