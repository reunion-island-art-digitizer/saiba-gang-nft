import Layout from "components/Layout";
import Section from "components/Section";
import Mint from "components/Mint";
import Banner from "components/Banner";
import Container from "components/Container";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import useWindowSize from "../src/hooks/useWindowSize";
import { Twitter } from "components/Icons";
import Timelines from "components/Timelines";

export default function Home() {
  const size = useWindowSize();

    return (
      <Layout >
            <Banner />            
      <Section id="RIA Boys">
        <Container className="mb-2">
          <h2>RIA Boys</h2>
          <p>
            The art of Reunion Island has been unknown to ordinary people for years.
            Our mission is to promote this wonderful art to the whole world.                              
          </p>
          <p>
            To achieve this, we will create an association to help promote artists.
            Once gathered in this place, we will be able to launch their careers in Web 3.0 with NFTs. 
            We will create an NFT Market with Coin tips for the artists of Reunion Island .            
          </p>
          <h3> For that, we need you !</h3>
          <p>
            We created RIA BOYS in order to bring together enough people interested in art and ready to participate in this project.
          </p>
          <p>
            You made the right decision in seeking employment with us and as such you
            will be tested to make sure you are made to be a RIA BOYS.
            You will start as an insider and will need to prove yourself to rise in our ranks.
          </p>
          <p>
            The RIA BOYS have very limited places for recruiting and will not be accepting any
            more insiders once we have recruited 9 740 members.
          </p>
          <p>
            If you want to be part of this adventure with us and be respected,
            make sure you are one of the 9 740 to be part of the RIA BOYS.
          </p>
                </Container>
        <div className="overflow-scroll">
          <Parallax
            x={[-40, 20]}
            disabled={size?.width < 720}
            styleInner={{ display: "flex" }}
          >
            <div className="gallery-img">
              <Image
                src="/images/Slider1.jpg"
                alt="RIA Superman"
                height={300}
                width={300}
                layout="responsive"
              />
            </div>
            <div className="gallery-img">
              <Image
                src="/images/Slider2.jpg"
                alt="RIA Batman"
                height={300}
                width={300}
                layout="responsive"
              />
            </div>
            <div className="gallery-img">
              <Image
                src="/images/Slider3.jpg"
                alt="RIA Hulk"
                height={300}
                width={300}
                layout="responsive"
              />
            </div>
            <div className="gallery-img">
              <Image
                src="/images/Slider4.jpg"
                alt="RIA Jack Sparrow"
                height={300}
                width={300}
                layout="responsive"
              />
            </div>
            <div className="gallery-img">
              <Image
                src="/images/Slider5.jpg"
                alt="RIA Deadpool"
                height={300}
                width={300}
                layout="responsive"
              />
            </div>
          </Parallax>
        </div>
      </Section>

    <Container >
       <Section id="Roadmap">
         <h2>Roadmap</h2>
         <Timelines /> 
       </Section>
            </Container>

      <Container>
        <Section id="team">
          <h2>The Team</h2>
          <div className="grid">
            <div>
              <Image
                src="/images/TEAM1.jpg"
                alt="RIA Team"
                height={500}
                width={500}
              />
              <a
                rel="noreferrer"
                target="_blank"
                href="https://twitter.com/Fonzy974"
                className="twitterLink"
              >
                <Twitter />
                Fonzy974
                <br />
                Founder / Visual Director / Community Manager
              </a>
            </div>
            <div>
              <Image
                src="/images/TEAM2.jpg"
                alt="RIA Team"
                height={500}
                width={500}
              />
              <a
                rel="noreferrer"
                target="_blank"
                href="https://twitter.com/"
                className="twitterLink"
              >
                <Twitter />
                Lili974
                <br />
                Founder / Visual Artist / Community Manager
              </a>
            </div>
          </div>
        </Section>
      </Container>
      <div className="background-section"></div>
    </Layout>
  );
}
