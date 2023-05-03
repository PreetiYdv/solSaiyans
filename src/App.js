import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import { SolNavBar } from "./components/SolNavBar";
import Header from "./components/Header";
import Story from "./components/Story";
import Tempor from "./components/Tempor";
import Timeline from "./components/Timeline";
import OurTeam from "./components/OurTeam";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <div className="header_bg">
        <div className="d-flex min_vh100 flex-column">
          <SolNavBar />
          <div className="flex-grow-1 d-flex align-items-center justify-content-center">
            <Header />
          </div>
        </div>
      </div>
      <div className=" bg-black">
        <Story />
        <Tempor />
        <Timeline />
        <OurTeam />
        <FAQ />
        <Footer />
        <BackToTop/>
      </div>
    </>
  );
}

export default App;
