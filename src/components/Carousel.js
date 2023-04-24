const Carousel = (props) => {
  return (
    <div className="overflow-hidden ">
    <div className="flex">
    <img src={props.src} alt="" />
    </div> 
    </div> 
  )
}

export default Carousel