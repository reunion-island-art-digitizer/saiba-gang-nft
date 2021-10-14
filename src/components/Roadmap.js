import styles from "styles/Roadmap.module.scss";
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
              title="20%"
              description="The collection will be added to Rarity Tools."
        status="incomplete"
      />
      <RoadmapStep
        title="35%"
              description="5 random RIA Boys holders will receive 1 more NFT as a gift."
        status="incomplete"
      />
      <RoadmapStep
        title="50%"
              description="Creation of the association for the promotion of Reunion Island Artists."
        status="incomplete"
      />
      <RoadmapStep
        title="60%"
              description="3 giveaways for twitter, discord, and holders in partnership with our artists."
        status="incomplete"
      />
      <RoadmapStep
        title="100%"
              description="Creation of marketplace for our Reunion Island Artists Birth of the RIA Girls project with Token creation.."
        status="incomplete"
      />
      <RoadmapStep
        title="AFTER"
        description="Launch of the global RIAD project: Reunion Island Art Digitizer."
        status="incomplete"
      />
    </div>
  );
}
