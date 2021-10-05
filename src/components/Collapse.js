import { CaretDown, CaretUp } from "./Icons";
import useCollapse from "react-collapsed";
import styles from "styles/Collapse.module.scss";

export default function Collapse({ title, children }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const classes = `${styles["collapse-section"]}
    ${isExpanded ? styles["collapse-section--expanded"] : ""}
  }`;
  return (
    <div className={classes}>
      <button {...getToggleProps()} className={styles["collapse-button"]}>
        {isExpanded ? (
          <>
            <CaretUp className="collapse-icon" />
            {title}
          </>
        ) : (
          <>
            <CaretDown className="collapse-icon" />
            {title}
          </>
        )}
      </button>
      <section
        {...getCollapseProps({
          style: { backgroundColor: "#a851b2" },
        })}
      >
        <div className={styles["collapse-content"]}>{children}</div>
      </section>
    </div>
  );
}
