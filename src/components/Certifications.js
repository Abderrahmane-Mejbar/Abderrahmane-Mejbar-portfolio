import image1 from '../assets/images/cer1.png'
import image2 from '../assets/images/cer2.png'
import image3 from '../assets/images/cer3.png'
import image4 from '../assets/images/cer4.png'
import image5 from '../assets/images/cer5.png'

import {CardCertification} from './index'
const Certifications = () => {
   const certifications = [
      {
          image: image1,
          title: 'DevOps, Cloud, and Agile Foundations',
          issuer: 'Microsoft',
          date: 'déc. 2013',
          id: 'E780-5566'
      },
      {
        image: image2,
        title: 'Introduction to Cybersecurity Tools & Cyber Attacks',
        issuer: 'Microsoft',
        date: 'déc. 2013',
        id: 'E520-1780'
    },
    {
        image: image3,
        title: 'Introduction to HTML5',
        issuer: 'Microsoft',
        date: 'déc. 2013',
        id: 'E000-2570'
    },  {
        image: image4,
        title: 'Python for Data Science, AI & Development',
        issuer: 'Microsoft',
        date: 'déc. 2013',
        id: 'E520-2035'
    },
    {
        image: image5,
        title: 'Cybersecurity Compliance Framework & System Administration',
        issuer: 'Microsoft',
        date: 'déc. 2013',
        id: 'E520-1080'
    },
    {
        image: image4,
        title: 'Python for Data Science',
        issuer: 'Microsoft',
        date: 'déc. 2013',
        id: 'E565-1780'
    }
  ]; 
  const cards = certifications.map (cardCertification => {
return < CardCertification image={cardCertification.image} title={cardCertification.title} issuer={cardCertification.issuer} date={cardCertification.date} id={cardCertification.id} />;
  }) 
  
    return (
      <>
      <div className='m-8 mx-20 '>
      <div className='grid grid-cols-3 flex-nowrap gap-7'>
     {cards}
      </div>
      </div>
      </>
  )
}

export default Certifications