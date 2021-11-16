import styles from "styles/Footer.module.scss";
import { Financement, Facebook, Instagram, Twitter, Discord } from "./Icons";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <p className={styles["footer-text-flex"]}>
        COPYRIGHT RIAD {new Date().getFullYear()}.
      </p>
      <div className={styles["footer-flex"]}>
          <a
            href="https://www.okpal.com/riad-promotion-de-l-art-de-la-reunion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Financement className={styles["header-link-social"]} />
          </a>
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
