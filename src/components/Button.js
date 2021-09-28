import styles from "./Button.module.scss";

export default function Button({ className, children, icon }) {
  return (
    <button className={`${className || ""} ${styles["button"]}`}>
      {icon}
      {children}
    </button>
  );
}
