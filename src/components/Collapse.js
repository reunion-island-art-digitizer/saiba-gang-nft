import { CaretDown, CaretUp } from "./Icons";
import useCollapse from "react-collapsed";
import styles from "styles/Collapse.module.scss";

export default function Collapse({ title, children }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className={styles["collapse-section"]}>
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
      <section {...getCollapseProps()}>
        <div className={styles["collapse-content"]}>{children}</div>
      </section>
    </div>
  );
}
