import "./App.css";
import Navbar from "./components/navBar";
import Landing from "./sections/landing";
import Partners from "./components/Partners";
import THM from "./components/THM";
import TimeLine from "./sections/TimeLine";
import About from "./components/about";

function App() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <Landing />
      <About />
      <Partners />
      <THM />
      <TimeLine />
    </div>
  );
}

export default App;
