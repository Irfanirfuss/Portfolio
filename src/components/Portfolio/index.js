import {Component} from 'react'
import {Link} from 'react-router-dom'
/* import PortfolioAbout from '../PortfolioAbout'
import PortfolioProjects from '../PortfolioProjects'
import PortfolioCertificates from '../PortfolioCertificates' */
import './index.css'

class Portfolio extends Component {
  state = {}

  render() {
    return (
      <div className="portfolio">
        <h1 className="names">Shaik Irfan</h1>
        <p className="role">Full Stack Developer</p>
        <Link to="/about">
          <button type="button" className="nav-btn">
            Click Here
          </button>
        </Link>
      </div>
    )
  }
}

export default Portfolio
