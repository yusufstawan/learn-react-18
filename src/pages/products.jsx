import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Sepatu Boot",
    price: 1000000,
    image: "/images/shoes-1.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates accusamus laborum tempora, nostrum facere inventore perspiciatis, veritatis debitis earum minima ipsum eius illo asperiores dignissimos aliquid ad autem impedit?",
  },
  {
    id: 2,
    name: "Sepatu Baru",
    price: 2000000,
    image: "/images/shoes-1.jpg",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
  },
  {
    id: 3,
    name: "Sepatu Lama",
    price: 3000000,
    image: "/images/shoes-1.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates accusamus laborum tempora, nostrum facere inventore perspiciatis, veritatis debitis earum minima ipsum eius illo asperiores dignissimos aliquid ad autem impedit?",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + item.quantity * product.price;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        })
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          quantity: 1,
        },
      ]);
    }
  };

  // useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  // useRef to manipulate DOM
  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogut}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
              <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find((product) => product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>Rp {product.price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</td>
                    <td>{item.quantity}</td>
                    <td>Rp {(item.quantity * product.price).toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</td>
                  </tr>
                );
              })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>Rp {totalPrice.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
