//import logo from './logo.svg';
//import './App.css';
//import './vendors/bootstrap/css/bootstrap.min.css';
//import './vendors/bootstrap/bootstrap.min.css';
//import './vendors/fontawesome/css/all.min.css';
import Labs from "./components/Labs/index.js";
import Tuiter from "./components/Tuiter/index.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/Tuiter/HomeScreen/HomeScreen.js";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen.js";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import who from "./components/Tuiter/reducers/who-reducer.js";
import tuits from "./components/Tuiter/reducers/tuits";
import ProfileInfo from "./components/Tuiter/reducers/profile";
import ProfileScreen from "./components/Tuiter/ProfileScreen/ProfileScreen.js";

const reducers = combineReducers({ who, tuits, ProfileInfo });
const store = createStore(reducers);
const App = () => {
  return (
  <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <Routes>
            <Route path="/labs" element = {<Labs/>} />
            <Route path="/" element = {<Tuiter/>} />
            <Route path="tuiter" element={<Tuiter />}>
                <Route path="home" element={<HomeScreen />} />
                <Route path="explore" element={<ExploreScreen />} />
                <Route path="profile" element={<ProfileScreen />} />
                <Route path="" element={<HomeScreen />} />
            </Route>
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
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