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
        title="Establish a Saiba Gang community."
        description="We want to source ideas straight from the community leading up to our mint. We will be holding community events and revealing more lore of the Saiba Gang universe leading up to launch."
        status="complete"
      />
      <RoadmapStep
        title="Mint Launch"
        description="At the moment, our current thoughts are to mint 8,888 Saiba Gang members. The price is to be determined based on $SOL prices when the launch arrives. Our goal for launching is end of October / early November."
        status="active"
      />
      <RoadmapStep
        title="Revenue Sharing"
        description="We plan to take a percentage of royalties and feed it right back into the community. We will determine the exact numbers as we get closer to launch."
        status="incomplete"
      />
      <RoadmapStep
        title="DAO"
        description="After our launch, our first priority will be establishing a DAO. We want verified members to dictate what happens with our revenue share. We also want the DAO to help lore build for a manga / comic series."
        status="incomplete"
      />
      <RoadmapStep
        title="Air Drops"
        description="Our team plans to air drop NFTs based on what division your Saiba Gang member is in. We will announce more details as we approach our launch date."
        status="incomplete"
      />
      <RoadmapStep
        title="Manga / Comic Series"
        description="Our plan is, with the help of the community, to crowd idea source a manga series. We will have votes for Saiba Gang holders to determine different plot details, and then have our artist and lead director create a manga / comic volume to air drop to NFT holders."
        status="incomplete"
      />
    </div>
  );
}
