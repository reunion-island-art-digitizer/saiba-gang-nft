import Header from "components/Header";
import Footer from "components/Footer";

const Layout = ({ children, className }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
