import "./App.css";
import Login from "./Components/Login/Login";
import Logged from "./Components/Logged/Logged";
import Forget from "./Components/Forget/Forget";
import Sign from "./Components/Sign/Sign";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />

          <Route path="/sign">
            <Sign />
          </Route>
          <Route path="/Forget">
            <Forget />
          </Route>
          <Route path="/Logged">
            <Logged />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
