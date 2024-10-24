'use client';

import { useRouter } from 'next/navigation';
const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log('placing your order');
    router.replace('/');
  };

  return (
    <>
      <h1>order Product</h1>
      <button onClick={handleClick}>place order</button>
    </>
  );
};

export default OrderProduct;
