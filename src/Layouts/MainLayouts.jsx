import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
