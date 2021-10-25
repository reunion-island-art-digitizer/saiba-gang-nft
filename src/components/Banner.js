import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import Container from "./Container";
import styles from "styles/Banner.module.scss";
import Image from "next/image";
import BannerImage from "../../public/images/HeaderImage.jpg";
import LogoImage from "../../public/images/rapslogowhite.png";

export default function Banner({ size }) {
  if (size?.width < 720) {
    return (
      <div className={styles["mobile-banner"]}>
        <Image
          src={BannerImage}
          alt="RIA Boys"
          width={550}
          height={200}
          placeholder="blur"
          layout="responsive"
          priority
        />
        <div className={styles["mobile-banner-content"]}>
          <div className={styles["mobile-banner-title"]}>
            <Image
              priority={true}
              alt="RIA Geck Logo"
              layout="responsive"
              width={800}
              height={500}
              src={LogoImage}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <ParallaxBanner
      layers={[
        {
              image: "/images/HeaderImage.jpg",
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
            <div className={styles["banner-title"]}>
              <Image
                priority={true}
                alt="RIA Boys Logo"
                layout="responsive"
                width={800}
                height={342}
                src={LogoImage}
              />
            </div>
          </div>
        </Container>
      </div>
    </ParallaxBanner>
  );
}
