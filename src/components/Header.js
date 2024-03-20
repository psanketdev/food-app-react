import Nav from "./Nav";
import urls from '../utils/utils';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="shadow-lg">
        <div className="container flex items-center">
          <h1 className="logo w-3/12">
            <Link to="/">
            <figure className="w-[150] h-[70]">
              <img
                src={urls.LOGO_UIL}
                alt="logo"
                className="h-[70]"
              />
            </figure>
            </Link>
          </h1>
          <Nav />
        </div>
      </header>
    </>
  );
};

export default Header;
