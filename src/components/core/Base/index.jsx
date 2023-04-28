import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";

const Base = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex flex-1 p-2">{children}</main>
      <Footer />
    </div>
  );
};

export default Base;
