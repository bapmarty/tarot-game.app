import { NavLink } from "react-router-dom";
import "../assets/scss/layouts/Navbar.scss";

const Navbar = () => {

	return (
		<>
			<section className="navbar">
				<section className="navbar-logo-top">
					<div className="title">
						<h3>TarotApp</h3>
						<span>Du tarot, point.</span>
					</div>
					<section className="navbar-nav">
						<ul className="navbar-nav-list">
							<li className="navbar-nav-item"><NavLink exact to="/" activeClassName="active"> Accueil</NavLink></li>
							<li className="navbar-nav-item"><NavLink exact to="/rules" activeClassName="active">Règles du jeu</NavLink></li>
							<li className="navbar-nav-item"><NavLink exact to="/support" activeClassName="active">Support</NavLink></li>
						</ul>
					</section>
				</section>
				<section className="navbar-nav-login">
					<ul className="navbar-nav-login-list">
						<li className="login-btn"><NavLink to="/login" activeClassName="active">Connexion</NavLink></li>
					</ul>
				</section>
			</section>
		</>
	)
}

export default Navbar;