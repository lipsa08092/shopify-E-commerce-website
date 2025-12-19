import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
