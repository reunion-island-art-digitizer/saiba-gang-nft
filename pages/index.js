import Layout from "components/Layout";
import Section from "components/Section";
import Banner from "components/Banner";
import Container from "components/Container";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import useWindowSize from "../src/hooks/useWindowSize";
import { Twitter } from "components/Icons";
import Faq from "components/Faq";

export default function Home() {
  const size = useWindowSize();

    return (
      <Layout >
            <Banner />
            <Container>
            <div id="translator_659"><noscript>Javascript is disable - <a href="http://www.supportduweb.com/">http://www.supportduweb.com/</a> - <a href="http://www.supportduweb.com/generateur-boutons-traduction-translation-google-gratuit-html-code=script-boutons-traduire-page-web.html">Générateur de boutons de traduction</a></noscript></div><script type="text/javascript" src="http://services.supportduweb.com/translator/659-4-yyyyyyyyy.js"></script>
            </Container>
      <Section id="RIA Boys">
        <Container className="mb-2">
          <h2>RIA Geck</h2>
          <p>
            L'art réunionnais est méconnu du commun des mortels depuis des années.
            Notre mission est de promouvoir cet art merveilleux dans le monde entier. L'art réunionnais est méconnu du commun des mortels depuis des années.
            Notre mission est de promouvoir cet art merveilleux dans le monde entier.
          </p>
          <p>
            Pour y parvenir, nous allons créer une association pour aider à promouvoir les artistes.
            Une fois réunis dans ce lieu, nous pourrons lancer leurs carrières dans le Web 3.0 avec les NFT.
            Nous allons créer un Marché NFT avec des bons plans Coin pour les artistes de La Réunion.
          </p>
          <h3> Pour cela, nous avons besoin de vous !</h3>
          <p>
            Nous avons créé RIA Geck afin de réunir suffisamment de personnes intéressées par l'art et intéressés pour participer à ce projet.
          </p>
          <p>
            Vous avez pris la bonne décision en cherchant une place chez nous et, en tant que tel, vous serez testé pour s'assurer que vous êtes bien un RIA Geck.
            Vous commencerez en tant qu'initié et devrez faire vos preuves pour monter dans nos rangs.
          </p>
          <p>
            Les RIA Geck ont ​​trés peu de places pour le recrutement et n'accepteront aucun
            initiés de plus une fois les 9 740 membres recrutés.
          </p>
          <p>
            Si vous voulez faire partie de cette aventure avec nous et être respecté,
            assurez-vous que vous êtes l'un des 9 740 RIA Geck.
          </p>
          <h3>Pour ce projet, nous voulons : :</h3>
          <p>                        
                        - créer une association de promotion des artistes afin de les accompagner dans notre procéssus,
          </p>
          <p>                        
                        - ouvrir une plateforme en ligne de création et de vente de NFT (Non Fongible Token)
          </p>
          <p>                        
                        - créer une cryptomonnaie utilisable afin d'acheter des oeuvre d'artistes ou pour laisser des poubroires,
          </p>
          <p>                        
                        - acquérir une salle d'exposition d'oeuvres réelles et virtuelles,
          </p>
          <p>                        
                        - créer un métaverse (monde virtuel 3D crypté) permettant la rencontre des artistes et de leurs fans ainsi que l'exposition des oeuvres.
          </p>
                </Container>
        <Container>
            <div>
              <Image
                src="/images/Ulule asso-01.png"
                alt="Association"
                height={400}
                width={800}
                layout="responsive"
              />
              <Image
                src="/images/Ulule market-01.png"
                alt="Association"
                height={400}
                width={800}
                layout="responsive"
              />
              <Image
                src="/images/Ulule crypto-01.png"
                alt="Association"
                height={400}
                width={800}
                layout="responsive"
              />
              <Image
                src="/images/Ulule salle d'expo-01.png"
                alt="Association"
                height={400}
                width={800}
                layout="responsive"
              />
              <Image
                src="/images/Ulule metaverse-01.png"
                alt="Association"
                height={400}
                width={800}
                layout="responsive"
              />
                </div>
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
                width={400}
                layout="responsive"
              />
            </div>
            <div className="gallery-img">
              <Image
                src="/images/Slider3.png"
                alt="RIA Batman"
                height={300}
                width={400}
                layout="responsive"
              />
            </div>
            <div className="gallery-img">
              <Image
                src="/images/Slider2.png"
                alt="RIA Hulk"
                height={300}
                width={400}
                layout="responsive"
              />
            </div>
            <div className="gallery-img">
              <Image
                src="/images/Slider4.png"
                alt="RIA Jack Sparrow"
                height={300}
                width={400}
                layout="responsive"
              />
            </div>
          </Parallax>
        </div>
      </Section>

    <Container >
       <Section id="own">
         <h2>Own to Earn</h2>
                    <p>Posséder un RIA Geck vous permettra d'obtenir régulièrement des avantages lorsque nous lancerons de futurs artistes NFT, RIAD Token, RIAD Marketplace, IDO et plus encore.</p>
                    <p>Ce système, qui s'appelle Own to Earn, est mis en place pour créer une véritable communauté autour des artistes.</p>
                    <p>Pour cela, tout un écosystème sera créé autour de cette communauté à travers le projet RIAD (Reunion Island Artist Digitizer) dont RIA Geck est la première pierre.</p>
                    <p>Nous développerons une marketplace, un token tips, une galerie virtuelle et un métaverse. Tous les détenteurs aux couleurs de La Réunion pourront gagner des cadeaux, des airdrops et plus encore.</p>
                    <p>La communauté est la plus importante dans ce projet. Pour cela, tous les titulaires auront le droit de voter sur les décisions concernant l'avancement du projet.</p>
                    <p>Tous les détenteurs de NFT aux couleurs du drapeau réunionnais auront une place VIP dans notre future île du métaverse.</p>
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
                    <p>9 730 RIA Geck dessinés à la main et générés aléatoirement seront disponibles lors du mint.</p>
                    <p>Les différents attributs seront répartis aléatoirement avec plus ou moins de rareté.</p>
                    <p>Certains attributs utilisant les couleurs du drapeau réunionnais seront extrêmement rares.</p>
                    <p>Ils seront accompagnés de 20 RIA Geck représentant des personnages célèbres.</p>
                    <p>Détenir l'un de ses attributs spécifiques ou l'un des personnages connus apportera encore plus d'avantages aux détenteurs.</p>
                    <p>Les propriétaires chanceux pourront accéder à des #NFT d'artistes uniques, à des ventes privées, à des réunions IRL et plus encore.</p>
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
                        <p>9740 RIA Geck naîtront et seront ajoutés à un Rarity Tools.</p>
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
                        <p> 10 détenteurs aléatoires de RIA Geck recevront 1 NFT supplémentaire.</p>
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
                        <p>Création de l'association pour la promotion des artistes réunionnais.</p>
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
                        <p>6 cadeaux pour twitter, discord et les détenteurs en partenariat avec nos artistes.</p>
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
                        <p>Livraison de la marketplace pour nos artistes réunionnais.
                            Codage du RIAD Coin.
                            Naissance d'un autre projet RIAD #NFT.</p>
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
                        <p>Lancement du projet global RIAD : Reunion Island Art Digitizer.
                            Achat et création d'une véritable salle d'exposition.
                            Construction du métaverse RIAD à l'image de la Réunion pour
                            organiser des rencontres entre les artistes et leurs fans.</p>
                    </div>

                </div>
            </Section>
       <Container>                
                <Section id="faq">
                    <h2>Frequency Ask Question</h2>
                    <Faq />
                </Section>               
                </Container>
       <Container>
        <Section id="team">
          <h2>The Team</h2>
          <div className="grid">
            <div >
              <Image
                src="/images/TEAM1.png"
                alt="RIA Team"
                height={300}
                width={400}
                layout="responsive"
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
            <div >
              <Image
                src="/images/TEAM2.png"
                alt="RIA Team"
                height={300}
                width={400}
                layout="responsive"
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
          </div>
        </Section>
      </Container>
      <div className="background-section2"></div>
    </Layout>
  );
}
