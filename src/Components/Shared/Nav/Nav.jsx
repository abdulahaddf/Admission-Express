import { Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
const Nav = () => {
    const {user} = useContext(AuthContext);
  return (
    <div>
      <Navbar fluid rounded 
       className="bg-transparent z-40">
        <Link className="flex justify-center items-center" to="/">
          <img
            className="h-12"
            src="https://i.ibb.co/CP02H69/express.png"
            alt=""
          />
        </Link>
        <div className="flex md:order-2">
          <Link className="btn" to="/login">
            Login
          </Link>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Link
            className="text-lg hover:text-green transition duration-300 transform hover:-translate-y-1 rounded"
            active
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-lg hover:text-green transition duration-300 transform hover:-translate-y-1 rounded"
            to="/colleges"
          >
            Colleges
          </Link>
          <Link
            className="text-lg hover:text-green transition duration-300 transform hover:-translate-y-1 rounded"
            to="/admission"
          >
            Admission
          </Link>
          <Link
            className="text-lg hover:text-green transition duration-300 transform hover:-translate-y-1 rounded"
            to="/my-college"
          >
            My College
          </Link>
        </Navbar.Collapse>
      </Navbar>
      
    </div>
  );
};

export default Nav;
