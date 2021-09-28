import styles from "./Button.module.scss";

export default function Button({ className, children }) {
  return (
    <button className={`${className || ""} ${styles["button"]}`}>
      {children}
    </button>
  );
}
