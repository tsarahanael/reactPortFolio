import { Footer } from "flowbite-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const FooterApp = () => {
  return (
    <Footer container className="dark:bg-darkTer bg-lightTer">
      <div className="w-full text-center">
        <Footer.Brand
          src="images/logo.png"
          alt="Sample website logo"
          href="#"
          width={300} 
          height={300}
        />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.LinkGroup>
            <Footer.Link href="#">Home</Footer.Link>
            <Footer.Link href="#/portfolio">Portfolio</Footer.Link>
            <Footer.Link href="#/store">Store</Footer.Link>
            <Footer.Link href="#/contact">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Flowbite™" year={2022} className="text-lightPri  dark:text-darkPri"/>
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
          <Footer.Icon href="https://www.linkedin.com/in/sarah-tsangou-858a45198/" icon={BsLinkedin} className="text-lightPri  dark:text-darkPri dark:hover:bg-darkSec hover:bg-lightSec mx-2"/>
          <Footer.Icon href="https://github.com/tsarahanael" icon={BsGithub} className="text-lightPri  dark:text-darkPri"/>
        </div>
      </div>
    </Footer>
  );
};

export default FooterApp;
