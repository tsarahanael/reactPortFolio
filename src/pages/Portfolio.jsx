import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <section className="bg-lightPri dark:bg-gradient-to-b from-darkPri from-85% to-darkSec lg:py-13 md-pl-2 xl-pl-16 xl:py-22  py-6 pl-8 md:px-14 md:py-12 lg:py-14 2xl:pl-28">
        <h2 className="mb-1 text-3xl font-semibold tracking-tight text-black dark:text-darkFour md:mb-4 md:max-w-2xl md:text-5xl lg:mb-6 lg:max-w-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
          Portfolio page
        </h2>
        <p
          className="text-lg leading-relaxed text-black dark:text-white md:max-w-2xl md:text-2xl
        md:leading-relaxed lg:max-w-3xl lg:text-2xl lg:leading-relaxed xl:max-w-4xl xl:text-3xl xl:leading-relaxed
        2xl:max-w-4xl 2xl:text-3xl 2xl:leading-relaxed"
        >
          Below you can see a selection of my web design and front-end development projects.
        </p>
      </section>

      <section
        class="bg-lightSec dark:dark:bg-darkSec grid grid-cols-1 mx-auto md:grid-cols-3
      xl:px-32

      md:gap-6 
      pt-20
      pb-20
      "
      >

        <img
          className="hover:scale-125 transition duration-500"
          src="../public/images/project-fashion.jpg"
          alt="Fashion web page project"
        />
        <img
          className="hover:scale-125 transition duration-500"
          src="../public/images/project-smoothie.jpg"
          alt="Smoothie web page project"
        />

        <img
          className="hover:scale-125 transition duration-500"
          src="../public/images/project-crypto-wallet.jpg"
          alt="Crypto wallet web page project"
        />

        <img
          className="hover:scale-125 transition duration-500"
          src="../public/images/project-hero.png"
          alt="Hero blocks web page project"
        />

        <img
          className="hover:scale-125 transition duration-500"
          src="../public/images/project-multi-col.png"
          alt="Multi-column web page project"
        />

        <img
          className="hover:scale-125 transition duration-500"
          src="../public/images/store.png"
          alt="Amazon affiliate web page project"
        />
      </section>
    </>
  );
};

export default Portfolio;
