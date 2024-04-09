import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { DarkThemeToggle, Flowbite } from "flowbite-react";


function NavbarApp() {
  return (
    <Navbar fluid roundeds className="dark:bg-darkTer">
      <Navbar.Brand>
        <Link to="/">
          <img
            src="images/logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="Sample website logo"
          />
        </Link>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>
          <Link to="/contact">Contact</Link>
        </Button>
        <DarkThemeToggle />

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="#" active>
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="#/portfolio">Portfolio</Link>
        </Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarApp;
