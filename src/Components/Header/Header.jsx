import { NavLink } from "react-router-dom";
import logo from "../../image/header/logo.png";
import styles from "./Header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src={logo} alt="Logo" />
				<span>Fashion</span>
			</div>
			<nav className={styles.nav}>
				<ul>
					<li>
						<NavLink to={`/`}>Home</NavLink>
					</li>
					<li>
						<NavLink to={`catalogue`}>Catalogue</NavLink>
					</li>
					<li>
						<NavLink to={`aboutUs`}>About Us</NavLink>
					</li>
					<li>
						<NavLink to={`lookBook`}>LookBook</NavLink>
					</li>
					<li>
						<NavLink to={`contacts`}>Contacts</NavLink>
					</li>
					<li className={styles.active}>
						<NavLink to={`signUp`}>Sign Up</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
