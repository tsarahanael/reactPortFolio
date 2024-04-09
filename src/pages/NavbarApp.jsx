import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { DarkThemeToggle, Flowbite } from "flowbite-react";


function NavbarApp() {
  return (
    <Navbar fluid roundeds className="dark:bg-darkFour bg-lightFour text-black">
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
        <Button className="dark:bg-darkPri dark:hover:bg-darkTer">
          <Link to="/contact">Contact</Link>
        </Button>
        <DarkThemeToggle className="text-black dark:hover:bg-darkSec hover:bg-lightSec mx-2" />

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link className="text-black text-2xl underline decoration-wavy decoration-darkPri" to="./" active>
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link className="text-black text-2xl underline decoration-wavy decoration-darkPri" to="./portfolio">Portfolio</Link>
        </Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarApp;
