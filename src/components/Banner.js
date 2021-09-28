import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import Container from "./Container";
import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <ParallaxBanner
      layers={[
        {
          image: "/images/cyber-bg.jpg",
          amount: 1,
          expanded: false,
        },
      ]}
      style={{
        height: "100vh",
      }}
    >
      <div className={styles["banner-container"]}>
        <Container>
          <Parallax y={[-25, 25]}>
            <div className={styles["banner-content"]}>
              <Parallax y={[50, -50]}>
                <h1 className={styles["banner-title"]}>
                  Saiba
                  <br />
                  Gang
                </h1>
              </Parallax>
            </div>
          </Parallax>
        </Container>
      </div>
    </ParallaxBanner>
  );
}
