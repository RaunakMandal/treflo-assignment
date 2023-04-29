import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";

const Base = ({ children }) => {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <div className="flex flex-1 flex-col p-2">{children}</div>
      <Footer />
    </div>
  );
};

export default Base;
