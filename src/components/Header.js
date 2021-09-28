import styles from "./Header.module.scss";
import { Logo, Wallet, Twitter, Discord } from "./Icons";
import Image from "next/image";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const MySwal = withReactContent(Swal);
const ConnectWalletContent = () => {
  return (
    <div className="connect-wallet-wrapper">
      <button className="connect-wallet-button">
        <Image
          src="/images/phantom.svg"
          alt="Phantom Wallet"
          width={20}
          height={20}
        />
        <span>Phantom</span>
      </button>
      <button className="connect-wallet-button">
        <Image
          src="/images/solflare.svg"
          alt="Solflare Wallet"
          width={20}
          height={20}
        />
        <span>Solflare</span>
      </button>
      <button className="connect-wallet-button">
        <Image src="/images/sollet.svg" alt="Sollet" width={20} height={20} />
        <span>Sollet</span>
      </button>
      <button className="connect-wallet-button">
        <Image
          src="/images/math-wallet.svg"
          className="math-wallet-icon"
          alt="MathWallet"
          width={20}
          height={20}
        />
        <span>MathWallet</span>
      </button>
    </div>
  );
};
const ConnectButton = ({ ...restOfProps }) => {
  const handleClick = () => {
    return MySwal.fire({
      title: <p>Choose your wallet</p>,
      showCloseButton: true,
      showConfirmButton: false,
      html: <ConnectWalletContent />,
    });
  };
  return (
    <button
      {...restOfProps}
      className={styles["header-button"]}
      onClick={handleClick}
    >
      <Wallet className={styles["header-button-icon"]} />
      Connect
    </button>
  );
};

export default function Header() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className={styles["header"]}>
      <div className={styles["header-container"]}>
        <Logo className={styles["header-logo"]} onClick={() => scrollToTop()} />
        <ul className={styles["header-links"]}>
          <li className={styles["header-link"]}>
            <ScrollLink
              activeClass={styles["header-link--active"]}
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={350}
            >
              About
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
          <li className={styles["header-link"]}>
            <ConnectButton />
          </li>
        </ul>
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
    </nav>
  );
}
