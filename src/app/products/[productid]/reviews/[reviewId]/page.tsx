'use client';

import { notFound } from 'next/navigation';

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const ReviewDetails = ({
  params,
}: {
  params: {
    productid: string;
    reviewId: string;
  };
}) => {
  // const random = getRandomInt(2);

  // if (random === 1) {
  //   throw new Error('error loading receive');
  // }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      Review {params.reviewId} for Product {params.productid}
    </h1>
  );
};

export default ReviewDetails;
