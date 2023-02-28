import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import "./App.css";

import FLutter from "./components/Cld_copy";
import Kondition from "./components/TestRender";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/pay-with-flutter" element={<FLutter />} />
        <Route path="/paymentForm" element={<Kondition />} />
      </Switch>
    </Router>
  );
}

export default App;
