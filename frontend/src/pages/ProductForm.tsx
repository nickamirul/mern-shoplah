import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    imageURL: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch('/v1/user/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...formData, price: Number(formData.price)}),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center min-h-screen p-4">
        <Card className="w-full max-w-lg p-6 md:p-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Product Form</CardTitle>
          </CardHeader>
          <CardContent>
              <div className="grid w-full gap-6">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="name" className="text-lg">Name</Label>
                  <Input id="name" placeholder="Enter product name" className="p-3 text-lg" onChange={handleChange} />
                </div>
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="price" className="text-lg">Price</Label>
                  <Input id="price" placeholder="Enter product price" className="p-3 text-lg" onChange={handleChange} />
                </div>
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="imageURL" className="text-lg">Image URL</Label>
                  <Input id="imageURL" placeholder="Enter image URL" className="p-3 text-lg" onChange={handleChange} />
                </div>
              </div>
          </CardContent>
          <Button className="w-full" >Create Product</Button>
        </Card>
      </div>
    </form>
  );
};

export default ProductForm;