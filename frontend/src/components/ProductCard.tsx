import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/data/productData/productData";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-full max-w-xs shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="p-0">
        <img
          src={product.imageURL}
          alt="Product Image"
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
        <p className="text-gray-500">RM {product.price}</p>
      </CardContent>
      <CardFooter className="flex justify-between p-4">
        <Button variant="outline">Add to Cart</Button>
        <Button>Buy</Button>
      </CardFooter>
    </Card>
  );
}
