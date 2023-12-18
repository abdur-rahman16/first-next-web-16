import Link from "next/link";


const Nav = () => {
  return (
    <nav>
      <div className="bg-blue-500 flex justify-around py-5">
        <div className="cursor-pointer text-lg font-bold text-white bg-orange-300 hover:bg-orange-500 rounded-xl p-2 ">
        <Link href="/">  Home </Link>
        </div>
        <div className="cursor-pointer text-lg font-bold text-white bg-orange-300 hover:bg-orange-500 rounded-xl p-2">
        <Link href="/products">Products</Link>
        </div>
        <div className="cursor-pointer text-lg font-bold text-white bg-orange-300 hover:bg-orange-500 rounded-xl p-2">
        <Link href="/about">About Me</Link>
        </div>
        <div className="cursor-pointer text-lg font-bold text-white bg-orange-300 hover:bg-orange-500 rounded-xl p-2">
        <Link href="/contact">Contact Me</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
