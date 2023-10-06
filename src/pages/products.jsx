import CardProduct from "../components/Fragments/CardProduct";

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

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <div>
          <CardProduct>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
