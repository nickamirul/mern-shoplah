import ProductCard from '@/components/ProductCard'
import { productData } from '@/data/productData/productData'

const Home = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <h1 className="text-4xl font-bold text-center pt-10">Welcome to ShopLah</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {productData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home