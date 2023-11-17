import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useAuth } from "../contexts/FakeAuthContext";

import styles from "./PageNav.module.css";

export default function PageNav() {
  const { isAuthenticated } = useAuth();

  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          {!isAuthenticated && (
            <NavLink to="/login" className={styles.ctaLink}>
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
