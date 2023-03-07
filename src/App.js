import Contactus from "./components/contact/Contact";
import Home from "./components/home/Home";
import Journey from "./components/Journey/journey";
import Locate from "./components/locate/Locate";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div>
      <Home />
      <Locate />
      <Skills />
      <Journey />
      <Contactus />
    </div>
  );
}

export default App;
