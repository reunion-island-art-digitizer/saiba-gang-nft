import { ParallaxBanner } from "react-scroll-parallax";
import Container from "./Container";
import Button from "./Button";
import styles from "./Banner.module.scss";

export default function Banner({ title, description }) {
  const BannerContent = () => (
    <Container>
      <div className={styles["banner-content"]}>
        <h1 className={styles["banner-title"]}>{title}</h1>
        <p className={styles["banner-description"]}>{description}</p>
      </div>
    </Container>
  );

  return (
    <ParallaxBanner
      layers={[
        {
          image: "/images/cyberpunk-city.png",
          amount: -0.3,
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
            <Button>Mint</Button>
          </div>
        </Container>
      </div>
    </ParallaxBanner>
  );
}
