import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/HelloWorld.js";
import Labs from "./components/Labs/index.js";
import Tuiter from "./components/Tuiter/index.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/Tuiter/HomeScreen/HomeScreen.js";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen.js";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
            <Route path="/hello" element = {<HelloWorld/>} />
            <Route path="/labs" element = {<Labs/>} />
            <Route path="/tuiter1" element = {<Tuiter/>} />
            <Route path="/tuiter/home" element={<HomeScreen/>}/>
            <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}
//
//export default App;