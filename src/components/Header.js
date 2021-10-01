import styles from "styles/Header.module.scss";
import { Wallet, Twitter, Discord } from "./Icons";
import Image from "next/image";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
import LogoImg from "../../public/images/logo.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

// const MySwal = withReactContent(Swal);
const Logo = ({ ...restOfProps }) => (
  <div tabIndex={0} className={styles["header-logo"]} {...restOfProps}>
    <Image
      src={LogoImg}
      priority={true}
      alt="Saiba Gang Logo"
      layout="responsive"
      width={800}
      height={342}
    />
  </div>
);
// const ConnectWalletContent = () => {
//   return (
//     <div className="connect-wallet-wrapper">
//       <button className="connect-wallet-button">
//         <Image
//           src="/images/phantom.svg"
//           alt="Phantom Wallet"
//           width={20}
//           height={20}
//         />
//         <span>Phantom</span>
//       </button>
//       <button className="connect-wallet-button">
//         <Image
//           src="/images/solflare.svg"
//           alt="Solflare Wallet"
//           width={20}
//           height={20}
//         />
//         <span>Solflare</span>
//       </button>
//       <button className="connect-wallet-button">
//         <Image src="/images/sollet.svg" alt="Sollet" width={20} height={20} />
//         <span>Sollet</span>
//       </button>
//       <button className="connect-wallet-button">
//         <Image
//           src="/images/math-wallet.svg"
//           className="math-wallet-icon"
//           alt="MathWallet"
//           width={20}
//           height={20}
//         />
//         <span>MathWallet</span>
//       </button>
//     </div>
//   );
// };
// const ConnectButton = ({ ...restOfProps }) => {
//   const handleClick = () => {
//     return MySwal.fire({
//       title: <p>Choose your wallet</p>,
//       showCloseButton: true,
//       showConfirmButton: false,
//       html: <ConnectWalletContent />,
//     });
//   };
//   return (
//     <button
//       {...restOfProps}
//       className={styles["header-button"]}
//       onClick={handleClick}
//     >
//       <Wallet className={styles["header-button-icon"]} />
//       Connect
//     </button>
//   );
// };

export default function Header({ size }) {
  if (size?.width < 720) {
    return (
      <header className={styles["mobile-header"]}>
        <div className={styles["mobile-header-container"]}>
          <div className={styles["mobile-header-top"]}>
            <Logo onClick={() => scroll.scrollToTop()} />
            {/* <ConnectButton /> */}
            <a
              href="https://twitter.com/SaibaGang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className={styles["header-link-social"]} />
            </a>
            <a
              href="https://discord.gg/cS8QRb4y"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Discord className={styles["header-link-social"]} />
            </a>
          </div>
          <nav>
            <ul className={styles["header-links"]}>
              <li className={styles["header-link"]}>
                <ScrollLink
                  activeClass={styles["header-link--active"]}
                  to="lore"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={350}
                >
                  Lore
                </ScrollLink>
              </li>
              <li className={styles["header-link"]}>
                <ScrollLink
                  activeClass={styles["header-link--active"]}
                  to="roadmap"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={350}
                >
                  Roadmap
                </ScrollLink>
              </li>
              <li className={styles["header-link"]}>
                <ScrollLink
                  activeClass={styles["header-link--active"]}
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={350}
                >
                  Team
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <Logo onClick={() => scroll.scrollToTop()} />
        <nav>
          <ul className={styles["header-links"]}>
            <li className={styles["header-link"]}>
              <ScrollLink
                activeClass={styles["header-link--active"]}
                to="lore"
                spy={true}
                smooth={true}
                offset={-70}
                duration={350}
              >
                Lore
              </ScrollLink>
            </li>
            <li className={styles["header-link"]}>
              <ScrollLink
                activeClass={styles["header-link--active"]}
                to="roadmap"
                spy={true}
                smooth={true}
                offset={-70}
                duration={350}
              >
                Roadmap
              </ScrollLink>
            </li>
            <li className={styles["header-link"]}>
              <ScrollLink
                activeClass={styles["header-link--active"]}
                to="team"
                spy={true}
                smooth={true}
                offset={-70}
                duration={350}
              >
                Team
              </ScrollLink>
            </li>
            {/* <li className={styles["header-link"]}>
              <ConnectButton />
            </li> */}
          </ul>
        </nav>
        <div className={styles["header-social-section"]}>
          <a
            href="https://twitter.com/SaibaGang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className={styles["header-link-social"]} />
          </a>
          <a
            href="https://discord.gg/cS8QRb4y"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Discord className={styles["header-link-social"]} />
          </a>
        </div>
      </div>
    </header>
  );
}
