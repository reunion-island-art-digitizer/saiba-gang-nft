import styles from "styles/FAQ.module.scss";
import Collapse from "./Collapse";

export default function FAQ() {
  return (
    <div className={styles["faq-wrapper"]}>
      <Collapse title="Question 1">
        <p>blah blah blah blah blah blah blah blah blah blah blah blah</p>
      </Collapse>
      <Collapse title="Question 2">
        <p>blah blah blah blah blah blah blah blah blah blah blah blah</p>
      </Collapse>
      <Collapse title="Question 3">
        <p>blah blah blah blah blah blah blah blah blah blah blah blah</p>
      </Collapse>
      <Collapse title="Question 4">
        <p>blah blah blah blah blah blah blah blah blah blah blah blah</p>
      </Collapse>
      <Collapse title="Question 5">
        <p>blah blah blah blah blah blah blah blah blah blah blah blah</p>
      </Collapse>
    </div>
  );
}
