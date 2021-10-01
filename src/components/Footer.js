import styles from "styles/Footer.module.scss";
import { Twitter, Discord } from "./Icons";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <p className={styles["footer-text-flex"]}>
        All rights reserved. Est {new Date().getFullYear()}.
      </p>
      <div className={styles["footer-flex"]}>
        <a
          href="https://twitter.com/SaibaGang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className={styles["footer-social-link"]} />
        </a>
        <a
          href="https://discord.gg/cS8QRb4y"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Discord className={styles["footer-social-link"]} />
        </a>
      </div>
    </footer>
  );
}
