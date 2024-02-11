import {Component} from 'react'
import {v4} from 'uuid'

import ProjectsData1 from '../ProjectsData1'

import './index.css'

const projectsList = [
  {
    id: v4(),
    projectLink: 'https://irfangaming.ccbp.tech/',
    thumbnail:
      'https://res.cloudinary.com/dqudhmfyo/image/upload/v1701521912/Screenshot_2023-12-02_180204_nlbrym.png',
    name: 'Rock Paper Scissors Game',
    username: '',
    password: '',
  },
  {
    id: v4(),
    projectLink: 'https://irfanapp.ccbp.tech/',
    thumbnail:
      'https://res.cloudinary.com/dqudhmfyo/image/upload/v1701521907/Screenshot_2023-12-02_180246_bnlgqi.png',
    name: 'Prime Video',
    username: '',
    password: '',
  },
  {
    id: v4(),
    projectLink: 'https://irfanemojigame.ccbp.tech/',
    thumbnail:
      'https://res.cloudinary.com/dqudhmfyo/image/upload/v1701521876/Screenshot_2023-12-02_180327_nspgtr.png',
    name: 'Emoji Game',
    username: '',
    password: '',
  },
  {
    id: v4(),
    projectLink: 'https://irfannxttrendz.ccbp.tech/',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkYViA6fnwahy9u6Nr-ay1kl-ap03zABSv4Pn5kLMwAUSOJc6cBKbQp6j32A&s',
    name: 'Nxt Trendz',
    username: 'saira',
    password: 'princess@9',
  },
  {
    id: v4(),
    projectLink: 'https://irfanjobbyapp.ccbp.tech/',
    thumbnail:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAmAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwECBAUGAwj/xAA8EAABAwMDAgQFAQYCCwAAAAABAAIDBAURBhIhMUETIlFhBxRxgaEVJDKRscHwI5IWNDZDRFJicnSy0f/EABoBAQADAQEBAAAAAAAAAAAAAAACAwQBBgX/xAAoEQACAgEDAwQBBQAAAAAAAAAAAQIRAxITIQQxQQUiUWEUFTJxkcH/2gAMAwEAAhEDEQA/AJxREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBEVkkjY2OfI4NY0Zc4nAAQF6FaKl1dYaqodBBdIHyDOAD+9jrt9enZWu1fYDRVFVBdqSoZTs3vbDM17gOg4HPJ4S+LJOEk1Frlm93DKuXLaMrau+wy3qtHhxyvLaSDtHGDgk+pJB5/guoHRcTsTg4ScX3KoiLpEIiIAiIgCIiAIiIAiK0nCArkJkKPdWa7Yy6Nsdmf+0P3xTVQ6QvLSGhvqd2M9uq1ujviDXVdMKOu8OWugY5w8QFpqgOwI4DxzxjzdsKzalp1FW7HVpJHu9zpLRQTV1fKIoIhlxxkn2A7kqM6+96h1PZrxcWUzqWyNpy2Jg/ek8zdxPc+UO6cD3WZc33LVN1msktVZpqilHjGlkopXMj4HV5OM+YDp6+68Llf9X6YYyG40NtdRY2MMcJ8PHYZB4+hCqlNRi00bsGCU8qcJJ14sjtj3MeHRvc17Tua4HBaR0IXRarfSQUlDFR0zaeargZW120nzyOHHHYcuOBx5lhvuVq8V1SbE0yDzCAVBEGc924zj2ysC53CW6Vk9dPjdMd21vRoxgNHsBwsqtQdPhnoJVlzxco04qzv5KzUmi20taI21mnzDEHwt6weUbj6gk5Oeh74Uh2W7Ud5t0NfQSiSCUZB6EHuCOxHovVscNTQtjcxr4JIgCxwyC0jofso608H6M1/JYS536Xc/wDEpc9GOwSB+C3/ACrdFKUftHk5ylHI2+zJQRUCqoEwiIgCIiAIiIAiIgCoVVEBEHxK0U+3zvv9laWw7vEqImDJidnO9vtnkjt1XHUbKe9XCOOmhq6a4Tv3NNM3xWOf13BuQ5nPPBIHsvo1zA8EOALSMEEcFaayaVs9jqqipt1I2OadxLnnnaP+Vueg9gtEM9RpmafT3K0cz8M44pLvfajxvmKlpigqZsECSVu7e4A9if5LuqymgraWSmqYmyQytLXscOCFHujn/ofxGv1nm8ra0mpgz0Jzu/k4/wCUqSFXl/cWYXS48Hz/AKtsrrBep6IkmHh8Lj3Yen3HT7LQRO2ufEfUqUvjLTsDrXU4853xn6cFRmGN3bgPN6rHqjDVFrueoxLLnhizRfK7/a8k/wCja4XHTNvqM5d4IY7/ALm+U/yXKfFZoguema2PiaOr2g+2Wn+ir8Hbh4lurbe48wSCRg/6XDn8g/xWu+KF4pTquy0lQ4+BQvE9RtG4jLhjj6N/K1dN7mmef9QhtZJR+yVgqrlrJr7T14nMENZ4E+SGx1DTHv54wTwfpnPsuoDgVxxa7lUZJrgqiIuEgiIgCIiAIiIAiIgCFEQHEfEXTtVXNpr3ZctutvO9ob1kYOce5Hb1yR3WfozWNHqWkDSWwXCPiamdwQR3bnqPyO66fquR1RoG23uY1tPI+33LqKqDjJ7Fw4z9Rg+6sUk1pkVSi07ic18Y6tr6q3UbT5o2vld7ZwB/IrnodMudoiovsm4SCYGIdvCHBJ+5/C2F4+HurZqh0stbT3F+0NEr5C1xA6cH/wCrav0/r65ULbbUVtBQUAjEZjiYD5R24BP5Cp/HuTbkj6kPU1iwwxwi7T5OU0lqWPS81dUvY6SWWn2QxAfvSZ4z6DldPZ/h9PfLRW3HUL3Mu1wd4kTnZ/wPTIyOT6dhhdBpX4eWuwyMqp3Gur28iaVuGsPq1vb6nJXZN6KyFY41D+zF1OR9VleSar6Pny/aEv1kD3zUnzNMP99S5eMepGMj+C8LBrO+WPa2irjLTg/6vP52fQdx9ivoo8hc5qDRNjvu59TSCKoP/EQHY7Pvjg/dXrOnxNGKXTuPMGabS3xMorzVQUFbSy0tbMQ1mwb43u9Aeo+4x7rvQo/0l8ORYNQ/qM1Yyrhia75YGPa9rjxk9uASOPXopACpyaNXtL8euvcVREUCwIiIAiKmUBi3at/TrZVVuzxPl4nSbM43YGcZXO6H1oNVyVjBQupflgw+aQO3bs+3stvqz/Zm6/8AiSf+pUNaHu81jsepK2mIE4hgZE4jO1znOAOPbqroQUoN+SjJkcZr4J6yuW1vrAaUZRudRGp+ZLhxIG7cY9vdRVsvbtNO1Qb5WbxV+Dt8Z2fr1x17YWVrG71F70jp2rq3B9RvmjkfjG4twM/U91OOD3K3ZB57i64Jmslw/VbRSV4jMXzETZNhOduR0ytNqvWVFpt8cEsck9S9u8RM4w31J/voVEtz/X7HQWS5i7zBlTAHU7InkCJrcYaW9DwR+VuNdR1k1fb9QthJp6mmhkDw3LWPAzg+yz54vHG0fQ9OUOoy6J/B2Ni+ItHcrhFQ1VHLRyyu2sc47mknoD3C7cKK7TddM6nvNNPeKOalup2BkjZXCJzh06Hg/UKzU2oLjcdXOtEF0NuoopPCMjXbQCBkuJ7+ioWSlbdmzJ0ank0wWmlbv/CVifRVB7BRPpfVtdbKy6UlxrDXU9NTzSxyE7uYxng9wQtRHeb3c6S43KfULqaWmAcymEmzxPZoHp913dVEV6dk1NN8KvnySjqzU8Omqenmnp5JhM8sAjIGMDPdbCyXJl3tdNXxsdG2dm8MceQFEGoL3UXvR9ukrXb6inrXxPkxjf5AQfrgr1o73dq9tksVgqJYTHEGSOZ3cTkkn0aP6rm77iz9Pe18NN2/pE0ZTKizW98udBcaSwUVylibHHGJqlzvPI5x6l3YDrxjqvLT99uNr1jFapru65Ucrgzfv3gkjIIPqDxjKluq6KF0M3j134sljKqCoPs171VdaqWgoK6omnmYR5ngbG5GSD2+qmCwQVdNZqOG4OLqtkLRM4v3Zdjnnuuxnq7EOo6V4K1NWbFFQKqmZQvKpa90EjYnbZC0hrvQ44K9UQEFx60utuivdp1PPVVE0sLoImyNa3w35IJPA4PYjPReendPV9Xoi+1TKeQtl8F0DdpzIIyXOLfXr+FOM9JTTkOnp4ZCOhewEhatl1mhovFqqeKN3jGFrRIGty0HJLj0GWnH2V+9S4Rn2HfLISbqCn/0Gdp7Y81ZrvFzjjHXHrnPGFmant89r0XpuKrYYpZJJ5nMcMFu7BAPvjCmBtbbnVcX7Gz5iVjXgljQ/aWOdn1424+uFkVdTI6xvrmQRCYQmVkco3gcZwcLu/zaRz8fimyCtR3p1ztditIo5op6GnDPMOZdwG0tA5wQPyuzvOoLxpae32qaKD9ObTQgh8WS8BoDwDnGeCu7krKeO509PLTwuqPIwSANBBIJ8oPOOF4TXKmuLTDNQwTsEsLS2XbIMSPLeR2cMHhVZZ64pLg1dKo4cjlNakRJchR3jVLG6apnxRzPZsY1mMOz5nY7Dv8AZZ17paS36+nbfYnOoZJjK7r5muHUY5PPopPt8lDSOhFHbIIhK1hfJDE2PbucWjgcnkL0pZ6DUDp4am3xytgdgePG13cjoeh4Wba4PqfqXKSXFV35I2s8NLfZb1TWSywwRijnZFUNe8u8wIaCCcZK0lmnslLb7gbxRCor2Fvy0b9zQD0cDgjGOql+hrYqaubRU8NJTwmV8QpoYsPaWjO52OAD16dCOVjTVNnnhmrp7RTTSsdH5jGx585wNzseUjuD0TaIr1BcqnTrzzwRtexGNHW+pFBFQsmr5HsYxzsPAjADvMT6H+Cw/lqvTjLJfYJctqB4rSBgZB5Z75b/AF9FM0NVR3CWkp5qOMiWn+YjbK1rto4GMc+o5/secs8Tq/8ATn2yN1LHKGteWNLG5jLuB6/Qd02iUPUtMdOni3f8Mi7W01PVagobw9pfbq6KJ+4dCBw9ufULYWOaz1ms4Kaw2WE00bw9tQXybmgDJdgnjnjld3S1tBcaZkAtURifOIxE9jdoy0uzjHBwDkLIsM1vdUVVNQW6KlETiCWRtbuw4jkD6Jt82V/nLbUafCruRn8JS06ql24P7M/p28zVM6x4KGkp376elgidjG5kYacfZZCshHSqM3VZ1mnqSoIiKRnCIiAK0saRhwBH0VyICzYC4OwMjurscY7KqIC3Y3OSBnovGno4KYvMMbWl5y7HdZCIC3aPZAwAkjAJ6q5EBYI2h27AzjGcc4Tw24IwMHqMK9EBaGDOcDOMZwqhoVUQFgjaP3QBnngd1VrGtJIABJyeOquRAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQFhcdyuHIREBQqp6IiAoCmURAV6q3uiICnc+wVSSMqiIAD/f8Vc1EQFyIiAIiID//2Q==',
    name: 'Jobby App',
    username: 'saira',
    password: 'princess@9',
  },

  {
    id: v4(),
    projectLink: 'https://irfuminiproject.ccbp.tech/',
    thumbnail:
      'https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg',
    name: 'Books App',
    username: 'saira',
    password: 'princess@9',
  },
  {
    id: v4(),
    projectLink: 'https://irfantodoslist.ccbp.tech/',
    thumbnail:
      'https://t3.ftcdn.net/jpg/02/59/31/70/360_F_259317013_nJJaBgGGzvXMd6cAyLd6yMJtbdnd61wk.jpg',
    name: 'TodoList',
    username: '',
    password: '',
  },
  {
    id: v4(),
    projectLink: 'https://irfansappstore.ccbp.tech/',
    thumbnail:
      'https://res.cloudinary.com/dqudhmfyo/image/upload/v1707634943/Screenshot_2024-02-11_123006_e3hf9t.png',
    username: '',
    password: '',
  },
]

class PortfolioProjects1 extends Component {
  render() {
    return (
      <div className="p-main1">
        <h1 className="head-1">Projects</h1>
        <ul className="ul-list">
          {projectsList.map(each => (
            <ProjectsData1 key={each.id} data={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default PortfolioProjects1
