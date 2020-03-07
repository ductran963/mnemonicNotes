import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Clients from "./pages/Clients";
import ClientDetail from "./pages/ClientDetail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App2() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/clients"]}>
            <Clientss />
          </Route>
          <Route exact path="/clients/:id">
            <ClientDetail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App2;