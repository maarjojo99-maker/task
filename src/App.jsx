import About from "./components/About";
import ContactUs from "./components/ContectUS";
import Details from "./components/Details";
import Good from "./components/good";
import GooodEvening from "./components/goodEvening";
import GooodMorning from "./components/GoodMorning";
import Help from "./components/Help";
import Home from "./components/Home";
import HomePage from "./components/WelcomeScreen";
import WorkScreen from "./components/workScreen";

function App() {

  return (
    <>
    <HomePage/>
    <WorkScreen/> 
    <About/>   
    <ContactUs/>
    <Help/>
    <Home/>
    <Good/>
    <Details/>
    <GooodEvening/>
    <GooodMorning/>
  </>
 
  );
}

export default App;
