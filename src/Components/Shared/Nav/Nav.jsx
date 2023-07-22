import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div>
             <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href="https://flowbite-react.com">
        {/* <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/favicon.svg"
        /> */}
        <span className="self-center text-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Admission Express
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link className='btn' to="/login">
        Login
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          active
          to="/"
        >
         
            Home
    
        </Link>
        <Link href="#">
          Colleges
        </Link>
        <Link href="#">
          Admission
        </Link>
        <Link href="#">
         My College
        </Link>
        
      </Navbar.Collapse>
    </Navbar>
        </div>
    );
};

export default Nav;