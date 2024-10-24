import Link from 'next/link';

const ProductList = () => {
  const productId = 100;

  return (
    <>
      <Link href='/'>Home</Link>
      <h1>Product List</h1>
      <h2>
        <Link href='products/1'>Product 01</Link>
      </h2>
      <h2>
        <Link href='products/2'>Product 02</Link>
      </h2>
      <h2>
        <Link href='products/3'>
          Product 03
        </Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  );
};

export default ProductList;
