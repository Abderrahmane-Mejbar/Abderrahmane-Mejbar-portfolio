
const ListCertifications = (props) => {
    return (
      <div className=" bg-white border-2 border-neutral-950 rounded-lg  dark:bg-gray-800">
      <div className="Formation-Iteam">
      <img src={props.image} alt="" />
      <div >
       <h1 className="px-5 py-3 mb-2 text-2xl dark:text-white "> {props.title} </h1>
       <h6 className="px-5  mb-2  dark:text-white " >{props.issuer}</h6>
       <h6 className="px-5  mb-2  dark:text-white ">{props.date}</h6>
       <h6 className="px-5  mb-2  dark:text-white ">{props.id}</h6>
      </div>
      </div> 
   </div> 
      
  )
}

export default ListCertifications