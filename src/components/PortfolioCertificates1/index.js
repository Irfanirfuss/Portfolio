import {v4} from 'uuid'
import CertificatesData from '../CertificatesData'
import './index.css'

const settings = {
  dots: false,
  infinite: false,
  autoplay: true,
  slidesToScroll: 1,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const certificatesData = [
  {
    id: v4(),
    name: 'Data Science Workshop',
    link:
      'https://res.cloudinary.com/dqudhmfyo/image/upload/v1703944610/IMG-20231230-WA0001_1_aft9mr.jpg',
    imageUrl:
      'https://res.cloudinary.com/dqudhmfyo/image/upload/v1703944610/IMG-20231230-WA0001_1_aft9mr.jpg',
  },
  {
    id: v4(),
    name: 'Build Your Own Responsive Websites',
    link:
      'https://certificates.ccbp.in/intensive/responsive-website?id=CRVHISFDAX',
    imageUrl:
      'https://res.cloudinary.com/dqudhmfyo/image/upload/v1701440804/IMG_20231201_195233_1_br9yxv.jpg',
  },
  {
    id: v4(),
    name: 'Responsive Web Design Using FlexBox',
    link: 'https://certificates.ccbp.in/intensive/flexbox?id=JSDZYNBQFC',
    imageUrl:
      'https://res.cloudinary.com/dqudhmfyo/image/upload/v1701440838/IMG_20231201_195200_1_jpmyk8.jpg',
  },
  {
    id: v4(),
    name: 'Build Your Own Dynamic Web Application',
    link:
      'https://certificates.ccbp.in/intensive/dynamic-web-application?id=KQCAQNKKZH',
    imageUrl:
      'https://res.cloudinary.com/dqudhmfyo/image/upload/v1701440852/IMG_20231201_195144_1_cuhr1w.jpg',
  },
  {
    id: v4(),
    name: 'Python',
    link:
      'https://certificates.ccbp.in/intensive/programming-foundations?id=PBZNGAJLMC',
    imageUrl:
      'https://res.cloudinary.com/dqudhmfyo/image/upload/v1701440907/IMG_20231201_195045_1_sbrr3r.jpg',
  },
  {
    id: v4(),
    name: 'SQL',
    link:
      'https://certificates.ccbp.in/intensive/introduction-to-databases?id=YFGKLDISZE',
    imageUrl:
      'https://res.cloudinary.com/dqudhmfyo/image/upload/v1701440786/IMG_20231201_194936_1_h4ogtu.jpg',
  },
  {
    id: v4(),
    name: 'Node Js',
    link: 'https://certificates.ccbp.in/intensive/node-js?id=SRCKVEDATU',
    imageUrl:
      'https://res.cloudinary.com/dqudhmfyo/image/upload/v1701440938/IMG_20231201_195024_1_ganl8x.jpg',
  },
  {
    id: v4(),
    name: 'React Js',
    link: 'https://certificates.ccbp.in/intensive/react-js?id=MAKJWMSIEF',
    imageUrl:
      'https://res.cloudinary.com/dqudhmfyo/image/upload/v1701440869/IMG_20231201_195120_1_fm1udt.jpg',
  },
  {
    id: v4(),
    name: 'JavaScript Essentials',
    link:
      'https://certificates.ccbp.in/intensive/javascript-essentials?id=VSTXEQSCXC',
    imageUrl:
      'https://res.cloudinary.com/dqudhmfyo/image/upload/v1701440925/IMG_20231201_194957_1_hjtrbb.jpg',
  },
  {
    id: v4(),
    name: 'Developer Foundations',
    link:
      'https://certificates.ccbp.in/intensive/developer-foundations?id=CVIWQSMPHT',
    imageUrl:
      'https://res.cloudinary.com/dqudhmfyo/image/upload/v1701440819/IMG_20231201_195217_1_jx9mse.jpg',
  },
  {
    id: v4(),
    name: 'XPM 4.0 Fundamentals',
    link:
      'https://certificates.ccbp.in/intensive/xpm-4-0-fundamentals?id=NSOUJGTZJM',
    imageUrl:
      'https://res.cloudinary.com/dqudhmfyo/image/upload/v1701440889/IMG_20231201_195103_1_hmixjb.jpg',
  },
]

const PortfolioCertificates1 = () => {
  console.log('hello')
  return (
    <div className="apps mt">
      <h1 className="head1">Certificates</h1>
      <ul {...settings} className="ul-list">
        {certificatesData.map(each => (
          <CertificatesData data={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}

export default PortfolioCertificates1
