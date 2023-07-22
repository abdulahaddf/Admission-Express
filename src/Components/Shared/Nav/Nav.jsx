import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div>
             <Navbar
      fluid
      rounded
    >
      <Link to="/">
       
        <span className="self-center text-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Admission Express
        </span>
      </Link>
      <div className="flex md:order-2">
        <Link className='btn' to="/login">
        Login
        </Link>
        <Navbar.Toggle />
      </div>
      
      <Navbar.Collapse >
        <Link className="text-lg hover:text-green transition duration-300 transform hover:-translate-y-1 rounded"
        
          active
          to="/"
        >
         
            Home
    
        </Link>
        <Link className="text-lg hover:text-green transition duration-300 transform hover:-translate-y-1 rounded" to="/colleges">
          Colleges
        </Link>
        <Link className="text-lg hover:text-green transition duration-300 transform hover:-translate-y-1 rounded" to="/admission">
          Admission
        </Link>
        <Link className="text-lg hover:text-green transition duration-300 transform hover:-translate-y-1 rounded" to="/my-college">
         My College
        </Link>
        
      </Navbar.Collapse>
    </Navbar>
        </div>
    );
};

export default Nav;