import "./App.scss";
import HomeBar from "./components/HomeBar/HomeBar";
import Navbar from "./components/Navbar/Navbar";
import backgroundImage from './components/HomeBar/images/HomeBackground.jpg'
import OfferCarousel from "./components/OfferBar/OfferBar";
import BrowseBar from "./components/BrowseBar/BrowseBar";
import ConnectBar from "./components/ConnectBar/ConnectBar";


function App() {
  return (
    <div className="app">
      <div className="wrapper" style={{backgroundImage: `url(${backgroundImage})`}}>
        <Navbar />
        <HomeBar />
        <OfferCarousel/>
        <BrowseBar/>
        <ConnectBar/>
      </div>
    </div>
  );
}

export default App;
