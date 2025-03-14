import ImageSlider from "../../components/image slider/ImageSlider"
import ProductItem from "../../components/product item/ProductItem"


function Home() {
  return (
    <div>
      <ImageSlider />

      <div className="w-full h-12 mt-8 flex justify-between items-center px-11">
        <h2 className="text-2xl font-bold">Shop The Latest</h2>
        <p className="text-gray-400 text-sm cursor-pointer">view all</p>
      </div>
      <div className="w-full h-max px-10 mt-10 grid grid-cols-3 gap-x-40 gap-y-10 mb-15">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      
    </div>

  )
}

export default Home
