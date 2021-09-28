import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import Container from "./Container";
import styles from "./Banner.module.scss";

export default function Banner({ title, description }) {
  return (
    <ParallaxBanner
      layers={[
        {
          image: "/images/cyber-bg.jpg",
          amount: 0.8,
          expanded: false,
        },
      ]}
      style={{
        height: "100vh",
      }}
    >
      <div className={styles["banner-container"]}>
        <Container>
          <div className={styles["banner-content"]}>
            <Parallax y={[-100, 100]}>
              <h1 className={styles["banner-title"]}>
                Saiba
                <br />
                Gang
              </h1>
            </Parallax>
          </div>
        </Container>
      </div>
    </ParallaxBanner>
  );
}
