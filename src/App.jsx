import "./App.css";
import { Display } from "./components/Display";
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="wrapper">
      {/* hero section */}
      <Hero />

      {/* display section */}
      <Display />
    </div>
  );
}

export default App;
