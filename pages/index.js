import Layout from "components/Layout";
import Banner from "components/Banner";
import Container from "components/Container";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Container>
        <section id="about">
          <h2>About</h2>
          <p>
            Surround yourself with angels, positive energy, beautiful people,
            beautiful souls, clean heart, angel. The first of the month is
            coming, we have to get money, we have no choice. It cost money to
            eat and they don’t want you to eat.
          </p>
          <Image
            src="/images/guy.jpg"
            alt="Saiba Gang"
            width={500}
            height={500}
          />
        </section>
        <section id="roadmap">
          <h2>Roadmap</h2>
          <p>
            Surround yourself with angels, positive energy, beautiful people,
            beautiful souls, clean heart, angel. The first of the month is
            coming, we have to get money, we have no choice. It cost money to
            eat and they don’t want you to eat.
          </p>
          <Image
            src="/images/guy.jpg"
            alt="Saiba Gang"
            width={500}
            height={500}
          />
        </section>
        <section id="team">
          <h2>The Team</h2>
          <p>
            Surround yourself with angels, positive energy, beautiful people,
            beautiful souls, clean heart, angel. The first of the month is
            coming, we have to get money, we have no choice. It cost money to
            eat and they don’t want you to eat.
          </p>
          <Image
            src="/images/guy.jpg"
            alt="Saiba Gang"
            width={500}
            height={500}
          />
        </section>
      </Container>
      <div className="background-section"></div>
    </Layout>
  );
}
