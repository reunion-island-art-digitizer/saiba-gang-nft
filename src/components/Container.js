import styles from "./Container.module.scss";

export default function Container({ className, children }) {
  return (
    <div className={`${className || ""} ${styles["container"]}`}>
      {children}
    </div>
  );
}
