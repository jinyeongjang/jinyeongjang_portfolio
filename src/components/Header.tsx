import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-gray-500 p-4 text-white shadow-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4">
        <div className="text-xl font-bold sm:text-2xl">
          <Link to="/" className="custom-hover-cursor transition-colors hover:text-gray-300">
            JinYeong Portfolio
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
