import "./App.css";
import Sign from "./Components/Sign/Sign";
import Logged from "./Components/Logged/Logged";
import Forget from "./Components/Forget/Forget";
import Signup from "./Components/Signup/Signup";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/sign">
            <Sign />
          </Route>

          <Route path="/signup">
            <Signup />
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
