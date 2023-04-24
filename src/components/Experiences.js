import image1 from '../assets/images/cer20.png'
import image2 from '../assets/images/cer21.png'


import {CardExperiences} from './index'
const Experiences = () => {
    const experiences = [
        {
            image: image1,
            title: 'Stage de fin d\'année 2022',
            issuer: 'Status: Stagiaire',
            date: 'Sujet : Conception, Réalisation Et Développement d\'un Site Web RollPack Events',
            id: 'Période: Juillet-Suptembre',
            technologie: 'Technologies: React js,Next js, MySQl'
        },        {
          image: image2,
          title: 'Stage de fin d\'année 2021',
          issuer: 'Status: Stagiaire',
          date: 'Sujet : Réalisation d\'un Site Web Statique d\'une association',
          id: 'Période: Juillet-Suptembrert',
          technologie: 'Technologies: Wordpress , Elementor '
        }
    ]; 
    const cardss = experiences.map (cardExperience => {
  return <CardExperiences image={cardExperience.image} title={cardExperience.title} issuer={cardExperience.issuer} date={cardExperience.date}   id={cardExperience.id} technologie={cardExperience.technologie}/>;
    }) 
    
      return (
        <>
        <div className='m-8 mx-20 '>
        <div className='grid grid-cols-2 flex-nowrap gap-7'>
       {cardss}
        </div>
        </div>
        </>
    )
}

export default Experiences