import "../styles/styles.css"

import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import { useImmerReducer } from "use-immer"
import { BrowserRouter, Route, Switch } from "react-router-dom"

// Import components
import LoadingDotsIcon from "./modules/LoadingDotsIcon"
import NotFound from "./modules/NotFound"
import Test from "./modules/Test"

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingDotsIcon />}>
        <Switch>
          <Route path="/" exact>
            <Test />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))

if (module.hot) {
  module.hot.accept()
}
