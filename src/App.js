import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import StudentDetail from "./components/StudentDetail"

export default function App() {
  return (
    <Router>
      <div>
        <ul>{/*  */}</ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/studentdetail/:id">
            <StudentDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
