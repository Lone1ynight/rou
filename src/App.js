import './App.css';
import {Intro} from "./components/intro/Intro";
import {About} from "./components/about/About";
import {Service} from "./components/service/Service";
import {Work} from "./components/work/Work";

function App() {
  return (
      <div className="wrapper">
        <Intro/>
        <About/>
        <Service />
        <Work />
      </div>
  );
}

export default App;
