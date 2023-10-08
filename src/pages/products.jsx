import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Sepatu Boot",
    price: "Rp 1.000.000",
    image: "/images/shoes-1.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates accusamus laborum tempora, nostrum facere inventore perspiciatis, veritatis debitis earum minima ipsum eius illo asperiores dignissimos aliquid ad autem impedit?",
  },
  {
    id: 2,
    name: "Sepatu Baru",
    price: "Rp 2.000.000",
    image: "/images/shoes-1.jpg",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
  },
  {
    id: 3,
    name: "Sepatu Lama",
    price: "Rp 3.000.000",
    image: "/images/shoes-1.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates accusamus laborum tempora, nostrum facere inventore perspiciatis, veritatis debitis earum minima ipsum eius illo asperiores dignissimos aliquid ad autem impedit?",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogut}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductsPage;
