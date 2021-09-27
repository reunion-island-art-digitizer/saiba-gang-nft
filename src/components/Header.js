import styles from "./Header.module.scss";
import { Logo } from "./Icons";

export default function Header() {
  return (
    <nav className={styles["header"]}>
      <div className={styles["header-container"]}>
        <Logo className={styles["header-logo"]} />
        <ul className={styles["header-links"]}>
          <li className={styles["header-link"]}>Lorem</li>
          <li className={styles["header-link"]}>Ipsum</li>
          <li className={styles["header-link"]}>Dolor</li>
        </ul>
      </div>
    </nav>
  );
}
