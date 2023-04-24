import {Carousel} from './index'
const image1 = require('../assets/images/Cer10.png');
const image2 = require('../assets/images/cer11.png');
const image3 = require('../assets/images/cer12.png');
const image4 = require('../assets/images/cer13.png');

const Galerie = () => {
  
  const images = [
    {
        src: image1,
    },
    {
        src: image2,
    },
    {
        src: image3,
    },
    {
        src: image4, 
    }
];

const cardss = images.map (carousel => {
  return <Carousel src={carousel.src}/>;
    }) 
    
  return (
    <main>
      <div className='max-w-lg'>
      {cardss}
      </div>
    </main>
 )
}

export default Galerie