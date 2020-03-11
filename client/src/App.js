import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Clients from "./pages/Clients";
import ClientDetail from "./pages/ClientDetail";
import ClientForm from "./pages/ClientForm";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/clients"]}>
            <Clients />
          </Route>
          <Route exact path="/clients/:id">
            <ClientDetail />
          </Route>
          <Route exact path="/clientsform">
            <ClientForm />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;