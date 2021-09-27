import Image from "next/image";
import styles from "./Banner.module.scss";

export default function Banner({ title, description }) {
  return (
    <div className={styles["banner"]}>
      <div className={styles["banner-img-wrapper"]}>
        <Image
          className={styles["banner-img"]}
          src="/images/guy.jpg"
          width={300}
          height={300}
          alt="Saiba Gang NFT"
        />
      </div>
      <div className={styles["banner-content"]}>
        <h1 className={styles["banner-title"]}>{title}</h1>
        <p className={styles["banner-description"]}>{description}</p>
      </div>
    </div>
  );
}
