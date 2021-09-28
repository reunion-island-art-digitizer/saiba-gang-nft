import styles from "./Section.module.scss";
export default function Section({ children, ...restOfProps }) {
  return (
    <section className={styles["section"]} {...restOfProps}>
      {children}
    </section>
  );
}
