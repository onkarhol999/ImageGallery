// App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PhotoGallery from "./components/PhotoGallery";
import PhotoDetail from "./components/PhotoDetail";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/photos/:id">
            <PhotoDetail />
          </Route>
          <Route path="/">
            <PhotoGallery />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
