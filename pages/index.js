import Layout from "components/Layout";
import Section from "components/Section";
import Banner from "components/Banner";
import Container from "components/Container";
import Roadmap from "components/Roadmap";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Section id="about">
        <Container>
          <h2>About</h2>
          <p>
            Surround yourself with angels, positive energy, beautiful people,
            beautiful souls, clean heart, angel. The first of the month is
            coming, we have to get money, we have no choice. It cost money to
            eat and they don’t want you to eat.
          </p>
        </Container>
        <div className="overflow-scroll">
          <Parallax
            x={[-125, 75]}
            styleInner={{ display: "flex", marginTop: "2rem" }}
          >
            <div className="gallery-img">
              <Image
                src="/images/guy.jpg"
                alt="Saiba Gang"
                width={500}
                height={500}
              />
            </div>
            <div className="gallery-img">
              <Image
                src="/images/guy.jpg"
                alt="Saiba Gang"
                width={500}
                height={500}
              />
            </div>
            <div className="gallery-img">
              <Image
                src="/images/guy.jpg"
                alt="Saiba Gang"
                width={500}
                height={500}
              />
            </div>
            <div className="gallery-img">
              <Image
                src="/images/guy.jpg"
                alt="Saiba Gang"
                width={500}
                height={500}
              />
            </div>
            <div className="gallery-img">
              <Image
                src="/images/guy.jpg"
                alt="Saiba Gang"
                width={500}
                height={500}
              />
            </div>
          </Parallax>
        </div>
      </Section>
      <Container>
        <Section id="roadmap">
          <h2>Roadmap</h2>
          <Roadmap />
        </Section>
        <Section id="team">
          <h2>The Team</h2>
          <div className="grid">
            <div>
              <Image
                src="/images/guy.jpg"
                alt="Saiba Gang"
                width={500}
                height={500}
              />
              <h3>John Doe</h3>
            </div>
            <div>
              <Image
                src="/images/guy.jpg"
                alt="Saiba Gang"
                width={500}
                height={500}
              />
              <h3>John Doe</h3>
            </div>
            <div>
              <Image
                src="/images/guy.jpg"
                alt="Saiba Gang"
                width={500}
                height={500}
              />
              <h3>John Doe</h3>
            </div>
          </div>
        </Section>
      </Container>
      <div className="background-section"></div>
    </Layout>
  );
}
