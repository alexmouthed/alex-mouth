import "../styles/styles.css"

import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"

// Import components
import LoadingDotsIcon from "./modules/LoadingDotsIcon"
import NotFound from "./modules/NotFound"
import Header from "./modules/Header"
import Footer from "./modules/Footer"
import Landing from "./modules/Landing"
import About from "./modules/About"
import Contact from "./modules/Contact"
import VideoReel from "./modules/VideoReel"
import Mnet from "./modules/Mnet"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<LoadingDotsIcon />}>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/video-reel">
            <VideoReel />
          </Route>
          <Route path="/mnet-movies">
            <Mnet />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))

if (module.hot) {
  module.hot.accept()
}
