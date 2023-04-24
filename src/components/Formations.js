import {CardFormation} from './index'
const Formations = () => {
    const formations = [
        {
           
            diplome: 'Ingenierie informatique et réseaux Methodes informatique appliquées à la gestion des entreprises ',
            etablissement: 'EMSI  MARRAKECH',
            annees: '2021 - en cours',
        },
        {
           
            diplome: 'Baccalaureat Sciences Physiques-Chimie',
            etablissement: 'Lycée Al Manar',
            annees: '2019 - 2021',
        }
    ]; 
    const cardss = formations.map (cardFormation => {
        return < CardFormation  diplome={cardFormation.diplome} etablissement={cardFormation.etablissement} annees={cardFormation.annees}/>;
          }) 
  return (
    <>
    <div className='m-10 mx-20 p-15 '>
    <div className='flex flex-col space-y-4'>
    {cardss}
    </div>
    </div>
    </>
  )
}

export default Formations