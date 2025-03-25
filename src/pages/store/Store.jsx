import { useEffect, useRef, useState } from "react"
import { getProducts } from "../../services/api"
import { Link } from "react-router-dom"
import ProductItem from "../../components/product item/ProductItem"


function Store() {
    const [products, setProducts] = useState([])
      const fetched = useRef(false);
    useEffect(() => {
      if (fetched.current) return;
      fetched.current = true;
  
      const fetchProducts = async () => {
        try {
          const result = await getProducts();
          setProducts(result);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchProducts();
    }, []);
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
