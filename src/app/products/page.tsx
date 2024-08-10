import Link from "next/link";

const ProductList = () => {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <h1>
        <Link href={"/products/1"}>Product 1</Link>
      </h1>
      <h2> <Link href={"/products/2"}>Product 2</Link></h2>
      <h3>Product 1</h3>
      <h4>Product 1</h4>
      <h5>Product 1</h5>
    </>
  );
};

export default ProductList;
