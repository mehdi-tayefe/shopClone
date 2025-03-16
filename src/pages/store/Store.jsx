import { useEffect, useState } from "react"
import { getProducts } from "../../services/api"
import { Link } from "react-router-dom"
import ProductItem from "../../components/product item/ProductItem"


function Store() {
    const [products, setProducts] = useState([])
    useEffect(() => {
      getProducts().then(result => {
        setProducts(result)
       
        
      }, [])
    }) 
  return (
    <div className="w-full min-h-dvh px-10 grid grid-cols-3 gap-x-40 gap-y-15 mt-15 mb-25">
      {
        products.map(item =>(
          <Link key={item.id} to={`/store/${item.id}`}><ProductItem {...item} /></Link>
        ))
      }
      
    </div>
  )
}

export default Store
