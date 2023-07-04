import {BrowserRouter,Switch,Route} from "react-router-dom";


import LoginForm from "./components/LoginForm";
import Home from "./components/Home";

const App=()=>(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/home" component={Home} />
    </Switch>
  
  </BrowserRouter>
)

export default App