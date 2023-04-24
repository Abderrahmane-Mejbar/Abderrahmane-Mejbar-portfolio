const CardFormation = (props) => {
  return (


<div className=" bg-white border-2 border-neutral-950 rounded-lg  dark:bg-gray-800">
<div >
 <h1 className="px-5 py-3 mb-2 text-2xl dark:text-white "> {props.diplome} </h1>
 <h6 className="px-5  mb-2  dark:text-white " >{props.etablissement}</h6>
 <h6 className="px-5  mb-2  dark:text-white ">{props.annees}</h6>
</div> 
</div> 

  )
}

export default CardFormation