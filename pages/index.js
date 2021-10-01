import Layout from "components/Layout";
import Section from "components/Section";
import Banner from "components/Banner";
import Container from "components/Container";
import Roadmap from "components/Roadmap";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import useWindowSize from "../src/hooks/useWindowSize";

export default function Home() {
  const size = useWindowSize();

  return (
    <Layout size={size}>
      <Banner size={size} />
      <Section id="lore">
        <Container className="mb-2">
          <h2>Lore</h2>
          <p>
            It is the year 2167 in Wintermoon City, and technology has advanced
            to the point where human cybernetic enhancement is commonplace in
            the underground community.
          </p>
          <p>
            The nefarious technocrats that control Wintermoon City, the Kaze
            Collective, make life on the streets a brutal existence. Teens are
            force to fight and steal to survive.
          </p>
          <p>
            Alone they struggle to get by, but together... they just might make
            it. That is why these cybernetically enhanced street punks came
            together to form the Saiba Gang.
          </p>
          <p>
            These eccentric rebels are bound to have some adventures. They might
            even be the only force that can topple the system and overthrow the
            Kaze Collective.
          </p>
        </Container>
        <div className="overflow-scroll">
          <Parallax
            x={[-50, 0]}
            disabled={size?.width < 720}
            styleInner={{ display: "flex" }}
          >
            <div className="gallery-img">
              <Image
                src="/images/blue-man.jpg"
                alt="Saiba Gang"
                height={300}
                width={300}
                layout="responsive"
              />
            </div>
            <div className="gallery-img">
              <Image
                src="/images/guy.jpg"
                alt="Saiba Gang"
                height={300}
                width={300}
                layout="responsive"
              />
            </div>
            <div className="gallery-img">
              <Image
                src="/images/Goku.png"
                alt="Saiba Gang"
                height={300}
                width={300}
                layout="responsive"
              />
            </div>
            <div className="gallery-img">
              <Image
                src="/images/Zooks.png"
                alt="Saiba Gang"
                height={300}
                width={300}
                layout="responsive"
              />
            </div>
            <div className="gallery-img">
              <Image
                src="/images/Leisure-Boi.png"
                alt="Saiba Gang"
                height={300}
                width={300}
                layout="responsive"
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
                src="/images/Zooks.png"
                alt="Zooks Saiba Gang"
                height={500}
                width={500}
              />
              <h3>Zooks – Founder / Visual Director</h3>
              <a
                className="twitterLink"
                rel="noreferrer"
                target="_blank"
                href="https://twitter.com/ZooksSol"
              >
                @zookssol
              </a>
            </div>
            <div>
              <Image
                src="/images/Leisure-Boi.png"
                alt="Saiba Gang"
                height={500}
                width={500}
              />
              <h3>LeisureBoi – Lead Developer</h3>
              <a
                className="twitterLink"
                rel="noreferrer"
                target="_blank"
                href="https://twitter.com/SaibaLeisureBoi"
              >
                @SaibaLeisureBoi
              </a>
            </div>
            <div>
              <Image
                src="/images/Goku.png"
                alt="Goku Saiba Gang"
                height={500}
                width={500}
              />
              <h3>Goku - Community Manager</h3>
              <a
                className="twitterLink"
                rel="noreferrer"
                target="_blank"
                href="https://twitter.com/goku_nft"
              >
                @goku_nft
              </a>
            </div>
          </div>
        </Section>
      </Container>
      <div className="background-section"></div>
    </Layout>
  );
}
