import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href='/products'>Products</Link>
      <Link href='/blog'>blogs</Link>
    </div>
  );
};

export default Home;
