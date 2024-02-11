import {FaLinkedin, FaInstagramSquare, FaGithub} from 'react-icons/fa'

import {SiIndeed} from 'react-icons/si'

import './index.css'

const PortfolioAbout = () => {
  console.log('hello')
  return (
    <>
      <div className="about-main">
        <div className="about-app">
          <div className="about-ls">
            <div className="about-pic-container">
              <img
                src="https://res.cloudinary.com/dqudhmfyo/image/upload/v1683118755/IMG_20230503_182740_zwotqf.jpg"
                alt="profile"
                className="profile"
              />
              <div className="name-container">
                <p>
                  Name : <span>Shaik Irfan</span>
                </p>
                <p>
                  Profile : <span>Full Stack Developer </span>
                </p>
                <p>
                  Phone No : <span>9573866216</span>
                </p>
                <p>
                  Email : <span> irfanirfuss2000@gmail.com</span>
                </p>
                <div className="icons">
                  <a
                    href="https://www.linkedin.com/in/shaik-irfan-1716a4254/"
                    target="blank"
                    className="linked"
                  >
                    <FaLinkedin size={25} className="icon" />
                  </a>
                  <a href="https://github.com/Irfanirfuss" target="blank">
                    <FaGithub size={25} className="icon linked" color="#000" />
                  </a>
                  <SiIndeed size={25} className="icon linked" />
                  <a
                    href="https://www.instagram.com/ezy_code_?igsh=MzNlNGNkZWQ4Mg=="
                    target="blank"
                    className="icon linked"
                  >
                    <FaInstagramSquare size={25} color="#d30d6d" />
                  </a>
                </div>
              </div>
            </div>
            <div className="sk">
              <h1 className="skill">Skills</h1>
              <ul className="skills">
                <li className="lli">HTML</li>
                <li className="lli">CSS</li>
                <li className="lli">JavaScript</li>
                <li className="lli">Python</li>
                <li className="lli">SQL</li>
                <li className="lli">Node JS</li>
                <li className="lli">React JS</li>
                <li className="lli">Express Js</li>
                <li className="lli">Bootstrap</li>
              </ul>
            </div>
          </div>
          <div className="about-container">
            <h1 className="about-head">About Me</h1>
            <p className="about-me-section">
              Aspiring MERN Stack Developer | working in the information
              technology and services industry . To Acquire and improve coding
              and other necessary technical skills . React js Node js JavaScript
              Python SQL . I came across a program at NxtWave and joined, Where
              I have been learning the necessary technologies continuously and
              upskillng myself to succeed in this field
            </p>
            <p>
              My Resume :{' '}
              <a
                href="https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/ccbp_prod/media/resume_generated/Shaik_2023-12-20-161804.pdf"
                target="blank"
              >
                {' '}
                Full Stack Developer.pdf
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PortfolioAbout
