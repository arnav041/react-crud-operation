import "./styles.css";
import Create from "./components/create";
import Update from "./components/update";
import Edit from "./components/edit";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h2 className="title"> React CRUD Operation</h2>
        <div className="links">
          <Link to="/create">Create</Link>
          <Link to="/edit">Edit</Link>
        </div>

        <div>
          <Route path="/create" component={Create} />
          <Route path="/update" component={Update} />
          <Route path="/edit" component={Edit} />
        </div>
      </div>
    </Router>
  );
}
