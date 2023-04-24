import image from '../assets/Abdou.png'
const Hero = () => {
  return (
    <div className="mx-auto w-full px-2 sm:px-6 lg:px-8 flex justify-center items-center bg-gradient-to-r from-gray-400 to-indigo-500 py-4">
      <div>
        <div className="flex justify-center" >
        <img class="rounded-t-lg " src={image} alt="" />
        </div>

        <h1 className="flex justify-center text-4xl ">Mejbar Abderrahmane</h1>
        <h2 className="flex justify-center text-2xl">Etudiant en IIR4 EMSI Marrakech</h2>
     </div>    
    </div>
  )
}

export default Hero