import styles from "styles/Footer.module.scss";
import { HeartIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <p className={styles["footer-text-flex"]}>
        Made with <HeartIcon className="heart" /> for the Saiba Gang. &copy;{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
