import { useEffect, useRef, useState } from "react"
import ImageSlider from "../../components/image slider/ImageSlider"
import ProductItem from "../../components/product item/ProductItem"
import { getProducts } from "../../services/api"
import { Link } from "react-router-dom"
import Loading from "../../components/loading/Loading"



function Home() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    const fetchProducts = async () => {
      try {
        const result = await getProducts();
        setProducts(result);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);


  if (isLoading) {
    return <Loading />
  }
  else {
    return (
      <div>
        <ImageSlider />

        <div className="w-full h-12 mt-8 flex justify-between items-center px-11">
          <h2 className="text-2xl font-bold">Shop The Latest</h2>
          <Link to={"/store"} className="text-gray-400 text-sm cursor-pointer">view all</Link>
        </div>
        <div className="w-full h-max px-10 mt-10 grid grid-cols-3 gap-x-40 gap-y-10 mb-15">

          {
            products.slice(0, 6).map((item) => (
              <Link key={item.id} to={`/store/${item.id}`}><ProductItem {...item} /></Link>
            ))
          }
        </div>

      </div>

    )
  }
}

export default Home
