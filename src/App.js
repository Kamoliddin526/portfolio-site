import "./App.scss";
import HomeBar from "./components/HomeBar/HomeBar";
import Navbar from "./components/Navbar/Navbar";
import backgroundImage from './components/HomeBar/images/HomeBackground.jpg'
import OfferCarousel from "./components/OfferBar/OfferBar";


function App() {
  return (
    <div className="app">
      <div className="wrapper" style={{backgroundImage: `url(${backgroundImage})`}}>
        <Navbar />
        <HomeBar />
        <OfferCarousel/>
      </div>
    </div>
  );
}

export default App;
