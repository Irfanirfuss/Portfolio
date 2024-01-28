import {Component} from 'react'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {IoMdClose} from 'react-icons/io'
import './index.css'

class PortfolioHeader extends Component {
  state = {isDisplay: false, isContentDisplay: false}

  changeContent = () => {
    this.setState(prevState => ({
      isDisplay: !prevState.isDisplay,
      isContentDisplay: !prevState.isContentDisplay,
    }))
  }

  render() {
    const {isDisplay, isContentDisplay} = this.state
    return (
      <div className="header-main">
        <h1 className="name-irfan">Shaik Irfan.in</h1>
        <div className="none">
          {!isDisplay ? (
            <button type="button" className="btn" onClick={this.changeContent}>
              <FaBars size={25} className="bars" />
            </button>
          ) : (
            <button
              type="button"
              className="btn btn1"
              onClick={this.changeContent}
            >
              <IoMdClose size={25} className="bars" />
            </button>
          )}
          {!isContentDisplay ? (
            ''
          ) : (
            <ul className="ul-header1">
              <Link to="/">
                <li className="li">Home</li>
              </Link>

              <Link to="/about">
                <li className="li">About</li>
              </Link>

              <Link to="/projects">
                <li className="li">Projects</li>
              </Link>

              <Link to="/certificates">
                <li className="li">Certificates</li>
              </Link>
            </ul>
          )}
        </div>
        <ul className="ul-header">
          <Link to="/">
            <li className="li">Home</li>
          </Link>

          <Link to="/about">
            <li className="li">About</li>
          </Link>

          <Link to="/projects">
            <li className="li">Projects</li>
          </Link>

          <Link to="/certificates">
            <li className="li">Certificates</li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default PortfolioHeader
