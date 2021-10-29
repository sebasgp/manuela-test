import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SalesPVideo from "./pages/SalesPVideo/SalesPVideo";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/SalesPVideo">
            <SalesPVideo/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
