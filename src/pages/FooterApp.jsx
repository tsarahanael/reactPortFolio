import { Footer } from "flowbite-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const FooterApp = () => {
  return (
    <Footer container className="dark:bg-darkTer">
      <div className="w-full text-center">
        <Footer.Brand
          src="../public/images/logo.png"
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
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="https://www.linkedin.com/in/sarah-tsangou-858a45198/" icon={BsLinkedin} />
          <Footer.Icon href="https://github.com/tsarahanael" icon={BsGithub} />
        </div>
      </div>
    </Footer>
  );
};

export default FooterApp;
