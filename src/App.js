import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Portfolio from './components/Portfolio'
import PortfolioAbout from './components/PortfolioAbout'
import PortfolioCertificates1 from './components/PortfolioCertificates'
import PortfolioHeader from './components/PortfolioHeader'
import PortfolioProjects1 from './components/PortfolioProjects'

import './App.css'

const App = () => (
  <BrowserRouter>
    <PortfolioHeader />
    <Switch>
      <Route exact path="/" component={Portfolio} />
      <Route exact path="/about" component={PortfolioAbout} />
      <Route exact path="/certificates" component={PortfolioCertificates1} />
      <Route exact path="/projects" component={PortfolioProjects1} />
    </Switch>
  </BrowserRouter>
)

export default App
