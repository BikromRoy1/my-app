function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error('error loading receive');
  }
  return (
    <>
      {children}
      <h2>Features Products</h2>
      {/* Carousel Here */}
    </>
  );
}
