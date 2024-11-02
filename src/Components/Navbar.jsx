import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-white/30 backdrop-blur-2xl ">
      <div className="flex-1">
        <Link to="/" className=" font-thin text-2xl">
          COFFEE_BOOK
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-8 font-light text-lg">
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/coffee"> Coffee </NavLink>
          <NavLink to="/dashboard"> Dashboard </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
