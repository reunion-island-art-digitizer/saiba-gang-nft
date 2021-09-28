import styles from "./Header.module.scss";
import { Logo } from "./Icons";
import Image from "next/image";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link, animateScroll as scroll } from "react-scroll";

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
            <Link
              activeClass={styles["header-link--active"]}
              to="about"
              spy={true}
              smooth={true}
              offset={-60}
              duration={350}
            >
              About
            </Link>
          </li>
          <li className={styles["header-link"]}>
            <Link
              activeClass={styles["header-link--active"]}
              to="roadmap"
              spy={true}
              smooth={true}
              offset={-60}
              duration={350}
            >
              Roadmap
            </Link>
          </li>
          <li className={styles["header-link"]}>
            <Link
              activeClass={styles["header-link--active"]}
              to="team"
              spy={true}
              smooth={true}
              offset={-60}
              duration={350}
            >
              Team
            </Link>
          </li>
          <li className={styles["header-link"]}>
            <ConnectButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}
