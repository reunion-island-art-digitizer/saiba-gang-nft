import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import Container from "./Container";
import styles from "styles/Banner.module.scss";
import Image from "next/image";

export default function Banner({ size }) {
  if (size?.width < 720) {
    return (
      <div className={styles["mobile-banner"]}>
        <Image
          src="/images/cyber-bg.jpg"
          alt="Saiba Gang NFT Project"
          layout="responsive"
          width={720}
          height={405}
        />
        <div className={styles["mobile-banner-content"]}>
          <h1 className={styles["mobile-banner-title"]}>Saiba Gang</h1>
        </div>
      </div>
    );
  }

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
          <div className={styles["banner-content"]}>
            <Parallax disabled={size?.width < 720} y={[50, -50]}>
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
