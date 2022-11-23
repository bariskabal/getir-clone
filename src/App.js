import Campaigns from "./components/Campaigns";
import Categories from "./components/Categories";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MobileApp from "./components/MobileApp";
import Header from "./components/Header";
import Cards from "./components/Cards";
import { useWindowWidth } from '@react-hook/window-size'

function App() {
  const width = useWindowWidth()

  return (
    <>
      <Header/>
      {width < 640 && <Campaigns />}
      <HeroSection />
      <Categories />
      <div className="bg-gray-100">
        <div className="grid gap-y-6 py-6 pb-14 container mx-auto">
          {width > 640 && <Campaigns />}
          <Favorites />
          <MobileApp />
          <Cards />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
