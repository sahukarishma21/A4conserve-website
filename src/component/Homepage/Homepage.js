import Card from "./Card/Card";

import Data from "./Data/Data";
import Greeting from "./Greeting/Greeting";
import Header from "./Header/Header";
import Home from "./Home";
import Landing from "./Lastlandingpage/Lastlandingpage";
import Meter from "./Meter/Meter";
import Recognized from "./Recognized/Recognized";
import SliderComponent from "./Reliablepartner/Reliablepartner";

function Homepage() {
  return (
    <div className="App">
     
    
     <Header/>
    <Home/>
    <Card/>
    <Data/>
    <Greeting/>
    <Meter/>
    <SliderComponent/>
    <Recognized/>
    <Landing/>
    </div>
  );
}

export default Homepage;