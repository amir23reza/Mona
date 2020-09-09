import React from 'react'
import './styles/burgerMenuStyles.css'
import './App.css'
import HomePage from './pages/homePage'
import LoadingPage from './pages/loadingPage'
import ArchProjects from './pages/archProjects'
import UIProjects from './pages/uiProjects'
import PhotoGraphy from './pages/photoGraphy'
import OtherProjects from './pages/otherProjects'
import ThesisProject from './pages/thesisProject'
import {Route , BrowserRouter} from 'react-router-dom'

//http://preview.themeforest.net/item/ramsay-creative-personal-onepage-html-template/full_screen_preview/25435830?_ga=2.92566299.701328240.1596265290-1176782746.1596264616

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/arch" exact>
        <ArchProjects />
      </Route>
      <Route path="/ui" exact>
        <UIProjects />
      </Route>
      <Route path="/photo" exact>
        <PhotoGraphy />
      </Route>
      <Route path="/other" exact>
        <OtherProjects />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/thesis" exact>
        <ThesisProject />
      </Route>
    </BrowserRouter>
  )
}

export default App