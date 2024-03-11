function Card(props){
   return(
    <div className="card">
        <img src={props.img} className="card-img" alt="" />
        <div className="flex">
             <h4 className="name">{props.title}</h4>
            <p className={props.type=='nonveg'?"nonveg":"veg" }></p>
        </div>
       <p className="price">Rs {props.price}</p>
       <p className="decs">{props.desc}</p>
    </div>
   )
}

export default Card; 