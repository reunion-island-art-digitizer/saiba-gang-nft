import Banner from "components/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner
        title="Saiba Gang NFT"
        description="Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. The first of the month is coming, we have to get money, we have no choice. It cost money to eat and they don’t want you to eat."
      />
      <Image src="/images/guy.jpg" alt="Saiba Gang" width={500} height={500} />
    </>
  );
}
