import Container from "./Container";
import styles from "./Banner.module.scss";

import { ParallaxBanner } from "react-scroll-parallax";
export default function Banner({ title, description }) {
  return (
    <ParallaxBanner
      layers={[
        {
          image: "/images/background.jpg",
          amount: 0.3,
        },
      ]}
      style={{
        height: "700px",
      }}
    >
      <div className={styles["banner-container"]}>
        <Container>
          <div className={styles["banner-content"]}>
            <h1 className={styles["banner-title"]}>{title}</h1>
            <p className={styles["banner-description"]}>{description}</p>
          </div>
        </Container>
      </div>
    </ParallaxBanner>
  );
}
