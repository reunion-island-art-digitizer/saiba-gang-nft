import Layout from "components/Layout";
import Section from "components/Section";
import Banner from "components/Banner";
import Container from "components/Container";
import Image from "next/image";
import FAQ from "components/FAQ";
import { Parallax } from "react-scroll-parallax";
import useWindowSize from "../src/hooks/useWindowSize";
import { Twitter } from "components/Icons";

export default function Home() {
  const size = useWindowSize();

    return (
      <Layout >
            <Banner />            
      <Section id="RIA Boys">
        <Container className="mb-2">
          <h2>RIA Geck</h2>
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
            We created RIA Geck in order to bring together enough people interested in art and ready to participate in this project.
          </p>
          <p>
            You made the right decision in seeking employment with us and as such you
            will be tested to make sure you are made to be a RIA Geck.
            You will start as an insider and will need to prove yourself to rise in our ranks.
          </p>
          <p>
            The RIA Geck have very limited places for recruiting and will not be accepting any
            more insiders once we have recruited 9 740 members.
          </p>
          <p>
            If you want to be part of this adventure with us and be respected,
            make sure you are one of the 9 740 to be part of the RIA Geck.
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
                src="/images/Slider1.png"
                alt="RIA Superman"
                height={300}
                width={300}
                layout="responsive"
              />
            </div>
            <div className="gallery-img">
              <Image
                src="/images/Slider2.png"
                alt="RIA Batman"
                height={300}
                width={300}
                layout="responsive"
              />
            </div>
            <div className="gallery-img">
              <Image
                src="/images/Slider3.png"
                alt="RIA Hulk"
                height={300}
                width={300}
                layout="responsive"
              />
            </div>
            <div className="gallery-img">
              <Image
                src="/images/Slider4.png"
                alt="RIA Jack Sparrow"
                height={300}
                width={300}
                layout="responsive"
              />
            </div>
          </Parallax>
        </div>
      </Section>

    <Container >
       <Section id="own">
         <h2>Own to Earn</h2>
                    <p>Owning a #RIA Geck allows you to regularly get benefits when we launch future artist #NFTs, RIAD Token, RIAD Marketplace, IDOs and more.</p>
                    <p>This system, which is called Own to Earn, is set up to create a real community around artists.</p>
                    <p>For this, an entire ecosystem will be created around this community through the RIAD project (Reunion Island Artist Digitizer) of which RIA Geck is the first stone.</p>
                    <p>We will develop a marketplace, a token dips and une virtual gallery. All holders #NFT with Reunion Island's colors will be abble to win some giveawoys, airdrops.</p>
                    <p>The community is the most important in this project. For that, all holders will have the right to vote on decisions concerning the progress of the project.</p>
                    <div>
                        <Image
                src="/images/Earn.png"
                alt="Own To Earn"
                height={600}
                width={800}
                        />
                    </div>
       </Section>
    </Container>
                 
    <Container >
       <Section id="mint">
         <h2>Mint</h2>
                    <p>9 730 RIA Geck drawn by hand and generated randomly will be available during the mint.</p>
                    <p>The various attributes will be distributed randomly with more or less rarity.</p>
                    <p>Some attributes using the colors of the Reunion Island flag will be extremely rare.</p>
                    <p>They will be accompanied by 10 RIA Geck representing famous characters.</p>
                    <p>Possessing one of its specific attributes or one of the known characters will bring even more benefits to the holders.</p>
                    <p>Lucky owners will be able to access unique artist #NFTs, private sales, IRL meetings and more.</p>
       </Section>
    </Container>
            <Container>
                <Section id="roadmap">
                    <h2>Roadmap</h2>
                </Section>
            </Container>
            <Section id="timeline">
                
                <div className="tl-item">

                    <div className="tl-bg" >
                       
                    </div>
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif">Nov 2021</p>
                    </div>

                    <div className="tl-content">
                        <h1>Mint</h1>
                        <p>9740 RIA Geck come alive and will be added to Rarity Tools.</p>
                    </div>

                </div>

                <div className="tl-item">
                    <div className="tl-bg1" >
                        
                    </div>
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif">Dec 2021</p>
                    </div>

                    <div className="tl-content">
                        <h1 className="f3 text--accent ttu">Giweavays Holder</h1>
                        <p> 5 random RIA Geck holders will receive 1 more NFT as a gift.</p>
                    </div>

                </div>

                <div className="tl-item">
                    <div className="tl-bg2">
                    </div>
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif">Janv 2022</p>
                    </div>

                    <div className="tl-content">
                        <h1 className="f3 text--accent ttu">Association</h1>
                        <p>Creation of the association for the promotion of Reunion Island Artists.</p>
                    </div>

                </div>

                <div className="tl-item">
                    <div className="tl-bg3" >
                        
                    </div>
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif">Fev 2022</p>
                    </div>

                    <div className="tl-content">
                        <h1 className="f3 text--accent ttu">Giveaway</h1>
                        <p>3 giveaways for twitter, discord, and holders in partnership with our artists.</p>
                    </div>

                </div>
                <div className="tl-item">
                    <div className="tl-bg4" >
                        
                    </div>
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif">Mar 2022</p>
                    </div>

                    <div className="tl-content">
                        <h1 className="f3 text--accent ttu">Marketplace</h1>
                        <p>Creation of marketplace for our Reunion Island Artists.
                            Creation of RIAD Coin for tips artist.
                            Birth of an other RIA #NFT project.</p>
                    </div>

                </div>
                <div className="tl-item">
                    <div className="tl-bg5" >
                        
                    </div>
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif">After</p>
                    </div>

                    <div className="tl-content">
                        <h1 className="f3 text--accent ttu">Life of project</h1>
                        <p>Launch of the global RIAD project: Reunion Island Art Digitizer.</p>
                    </div>

                </div>
            </Section>
            <Container>
        <Section id="faq">
          <h2>FAQs</h2>
          <FAQ />
        </Section>
                </Container>
       <Container>
        <Section id="team">
          <h2>The Team</h2>
          <div className="grid">
            <div>
              <Image
                src="/images/TEAM1.png"
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
                src="/images/TEAM2.png"
                alt="RIA Team"
                height={500}
                width={500}
              />
              <a
                rel="noreferrer"
                target="_blank"
                href="https://twitter.com/974_Or_et_Li"
                className="twitterLink"
              >
                <Twitter />
                Lili974
                <br />
                Founder / Visual Artist / Community Manager
              </a>
            </div>
            <div>
              <Image
                src="/images/TEAM2.png"
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
                SOON
                <br />
                Encodeur
              </a>
            </div>
          </div>
        </Section>
      </Container>
      <div className="background-section"></div>
    </Layout>
  );
}
