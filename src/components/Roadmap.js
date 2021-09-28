import styles from "./Roadmap.module.scss";
import classNames from "classnames";
import { Checkmark, Circle } from "./Icons";

const RoadmapStep = ({ status, title, description }) => {
  const classes = classNames(
    styles["roadmap-step"],
    styles[`roadmap-step--${status}`]
  );

  return (
    <div className={classes}>
      {status === "complete" && (
        <Checkmark className={styles["roadmap-step-icon"]} />
      )}
      {status === "active" && (
        <Circle className={styles["roadmap-step-icon"]} />
      )}
      <p className={styles["roadmap-step-title"]}>{title}</p>
      <p className={styles["roadmap-step-description"]}>{description}</p>
    </div>
  );
};

export default function Roadmap() {
  return (
    <div className={styles["roadmap"]}>
      <RoadmapStep
        title="Create Discord Community and Twitter account"
        description="Lorem ipsum dolor eget etat"
        status="complete"
      />
      <RoadmapStep
        title="Create Discord Community and Twitter account"
        description="Lorem ipsum dolor eget etat"
        status="complete"
      />
      <RoadmapStep
        title="Create Discord Community and Twitter account"
        description="Lorem ipsum dolor eget etat"
        status="active"
      />
      <RoadmapStep
        title="Create Discord Community and Twitter account"
        description="Lorem ipsum dolor eget etat"
        status="incomplete"
      />
      <RoadmapStep
        title="Create Discord Community and Twitter account"
        description="Lorem ipsum dolor eget etat"
        status="incomplete"
      />
      <RoadmapStep
        title="Create Discord Community and Twitter account"
        description="Lorem ipsum dolor eget etat"
        status="incomplete"
      />
    </div>
  );
}
