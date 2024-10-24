import { Metadata } from 'next';

type Props = {
  params: { productid: string };
};

export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`Iphone ${params.productid}`), 100);
  });

  return {
    title: `product ${title}`,
  };
};

const ProductDetails = ({ params }: Props) => {
  return (
    <div>
      <h1>Details about Product {params.productid}</h1>
    </div>
  );
};

export default ProductDetails;
