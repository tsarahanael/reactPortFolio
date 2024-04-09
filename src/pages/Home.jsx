import { Link } from "react-router-dom";
import { Card, Button } from "flowbite-react";

const Home = () => {
  return (
    <>
      <section class="bg-gradient-to-b from-lightPri from-85% to-lightSec dark:bg-gradient-to-b dark:from-darkPri from-85% dark:to-darkSec">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-darkFour text-lightFour">Sarah Tsangou</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-white text-black">I am an innovative front-end developer who loves to build human-friendly interfaces.</p>
            <a href="#/portfolio" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-900 dark:focus:ring-primary-300 dark:text-darkFour text-lightFour">
              View my work
              <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#/contact" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  border text-lightFour border-lightFour rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-darkFour dark:border-darkFour dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Get in Touch
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img className="border-4 border-lightFour dark:border-darkFour w-3/4 rounded-full my-4 md:p-4" src="images/my-face-no-bg.png" alt="mockup" />
          </div>
        </div>
      </section>

      <section className="bg-lightSec dark:bg-darkSec lg:py-13 lg:px-42 px-8 py-6 text-center md:px-40 md:py-12 lg:py-14 xl:px-64 xl:py-16 2xl:px-72">
        <h2 className="mb-1 text-3xl dark:text-darkTer text-lightTer font-semibold tracking-tight text-black md:mb-4 md:text-5xl lg:mb-6 lg:text-5xl xl:text-6xl 2xl:text-6xl">
          Recent projects
        </h2>
        <p
          className="dark:text-white text-lg leading-relaxed text-black md:text-2xl md:leading-relaxed
        lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-relaxed"
        >
          Below you can see some examples of my recent work. Check out my complete portfolio of {" "}
          <a
            href="./portfolio"
            class="dark:text-darkTer text-lightTer font-medium text-blue-600 underline underline-offset-4 hover:text-blue-500 hover:underline"
          >
            web design
            
          </a>
          {" "
          }projects. Have a project you would like to discuss?
          {" "}
          <a
            href="#/contact"
            class="dark:text-darkTer text-lightTer font-medium text-blue-600 underline underline-offset-4 hover:text-blue-500 hover:underline"
          >
            Let's make something great together!
          </a>
          {" "}
        </p>
      </section>

      <section
        class="bg-lightSec dark:dark:bg-darkSec grid grid-cols-1 mx-auto md:grid-cols-3 gap-12 pt-2 p
      xl:px-32
      lg:px-24 
      md:px-14 
      px-12 
      ml-0 mr-0 

      md:gap-6 
      lg-gap-12 
      pb-20
      "
      >
        <Card
          className="max-w-sm mx-auto bg-lightPri dark:bg-darkPri"
          imgAlt="Fashion retailer project"
          imgSrc="images/project-fashion.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-lightFour dark:text-darkFour">
            Snazzy Fashion
          </h5>
          <p className="font-normal text-gray-700 dark:text-white">
            A web page for a fashion retailer with a background video that plays in a continuous loop.
          </p>
          <Button href="portfolio/fashion/index.html">View project</Button>
        </Card>
        <Card
          className="max-w-sm mx-auto bg-lightPri dark:bg-darkPri"
          imgSrc="images/project-hero.png"
        >
          <h5 className="text-2xl font-bold tracking-tight text-lightFour dark:text-darkFour">
            Hero Block Gallery
          </h5>
          <p className="font-normal text-black dark:text-white">
            A gallery of hero block elements with split-screen layouts and duotone images.
          </p>
          <Button href="portfolio/project-hero/index-1.html">View project</Button>
        </Card>
        <Card
          className="max-w-sm mx-auto bg-lightPri dark:bg-darkPri"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="images/project-smoothie.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-lightFour dark:text-darkFour">
            Smooth Smoothies
          </h5>
          <p className="font-normal text-black dark:text-white">
            A multi-column, flexbox-based page layout and hero image with a tinted overlay.
          </p>
          <Button href="portfolio/smoothies/index.html">View project</Button>
        </Card>
      </section>
    </>
  );
};

export default Home;
