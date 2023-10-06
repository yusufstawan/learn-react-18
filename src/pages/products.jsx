import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Boot">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates accusamus laborum tempora, nostrum facere inventore perspiciatis, veritatis debitis earum minima ipsum eius illo asperiores dignissimos aliquid ad autem
          impedit?
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Boot">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates accusamus laborum tempora, nostrum facere inventore perspiciatis, veritatis debitis earum minima ipsum eius illo asperiores dignissimos aliquid ad autem
          impedit?
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
