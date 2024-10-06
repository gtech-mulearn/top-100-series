import "./App.css";
import Navbar from "./components/navBar";
import Landing from "./sections/landing";
import TimeLine from "./sections/TimeLine";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Landing />
      <TimeLine />
    </div>
  );
}

export default App;
