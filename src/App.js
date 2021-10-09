import { Route, Switch } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import WorkSpace from "./pages/WorkSpace";
import Projects from "./pages/Projects";
import ShowProjects from "./pages/ShowProjects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/work" exact>
          <WorkSpace />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/projects/:id" >
          <ShowProjects/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
