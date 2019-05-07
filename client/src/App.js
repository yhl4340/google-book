import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import SearchInput from "./components/SearchInput";
import API from "./utils/API";
import Navtab from "./components/Navtab";
import Saved from "./pages/Saved";
import ResultCard from "./components/ResultCard";
import Books from "./components/Books";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navtab />
          <Jumbotron />
          <Switch>
            <Route exact path="/saved" component={Saved} />
            {/* <Route exact path='/search' component={Search}/> */}
          </Switch>
        </div>
      </Router>

      <SearchInput />
      {/* {this.state.books.map(book => )} */}
      <ResultCard />
    </div>
  );
}

export default App;
