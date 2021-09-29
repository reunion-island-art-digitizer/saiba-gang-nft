import Header from "components/Header";
import Footer from "components/Footer";

const Layout = ({ children, size, className }) => (
  <>
    <Header size={size} />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
