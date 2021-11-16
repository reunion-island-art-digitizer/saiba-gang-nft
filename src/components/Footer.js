import styles from "styles/Footer.module.scss";
import { Twitter, Discord } from "./Icons";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <p className={styles["footer-text-flex"]}>
        COPYRIGHT RIAD {new Date().getFullYear()}.
      </p>
      <div className={styles["footer-flex"]}>
        <a
          href="https://twitter.com/ReunionArt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className={styles["footer-social-link"]} />
        </a>
        <a
          href="https://discord.gg/8XVQGVqfbb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Discord className={styles["footer-social-link"]} />
        </a>
          <a
            href="https://www.facebook.com/riageck"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className={styles["header-link-social"]} />
          </a>
          <a
            href="https://www.instagram.com/reunion.island.art.digitizer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className={styles["header-link-social"]} />
          </a>
      </div>
    </footer>
  );
}
