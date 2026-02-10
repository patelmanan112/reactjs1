import React from 'react'
import { useEffect , useState} from 'react'
export default function Product() {
    var[product , setProduct] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/")
         .then((res)=> res.json())
        .then((data)=>{
           setProduct(data);
        })
    },[])
    console.log(product);
  return (
    <div>
      {product.map((element)=>(
        <div>
           <img src={element.image} height={"140px"} alt="" />
           <h3>{element.title}</h3>
           <p>{element.price}</p>
           <p>{element.category}</p>
        </div>
      ))}
    </div>
  )
}
