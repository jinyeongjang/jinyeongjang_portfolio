import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-500 text-white p-4 shadow-md">
      <div className="w-[1500px] flex justify-between items-center">
        <div className="ml-2 text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300 transition-colors custom-hover-cursor">
            JinYeong Portfolio
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
