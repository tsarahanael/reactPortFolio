import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

const Contact = () => {
  return (
    <>
      <section className="bg-lightPri dark:bg-gradient-to-b from-darkPri from-85% to-darkSec lg:py-13 md-pl-2 xl-pl-16 xl:py-22  py-6 pl-8 md:px-14 md:py-12 lg:py-14 2xl:pl-28">
        <h2 className="mb-1 text-3xl font-semibold tracking-tight text-black dark:text-darkFour md:mb-4 md:max-w-2xl md:text-5xl lg:mb-6 lg:max-w-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
          Contact page
        </h2>
        <p
          className="max-w-2xl mb-6 font-normal text-black lg:mb-8 md:text-lg lg:text-xl dark:text-white text-black"
        >
          Have a project you would like to discuss? Let's make something great together! Email me at
          <a className="dark:text-darkFour text-lightFour" href="mailto:tsarahanael@gmail.com?subject=Mail from my Personal Website"> tsarahanael@gmail.com </a>
          or use the form below to let me know a little more about your objectives and I'll get back to you.
        </p>
      </section>

      <section class="bg-lightSec dark:dark:bg-darkSec pb-20 pt-20">
        <form id="email-form" name="email-form" charset="utf-8" method="post" action="https://formspree.io/f/mrgnpyqq">

          <div class="px-5 pb-5 grid grid-cols-2 gap-4 content-center">

            <input placeholder="Name" data-validate="email" aria-required="true" name="email_address" id="email_address" required="" class=" text-black placeholder-gray-600 w-full mx-2 px-4 py-2.5 mt-2 rounded-lg   focus:bg-lightPri dark:focus:bg-darkFour" />
            <input placeholder="Email" class=" text-black placeholder-gray-600 w-full  px-4 py-2.5 mt-2 rounded-lg   focus:bg-lightPri dark:focus:bg-darkFour" />
          </div>
          <div class="grid grid-cols-1 gap-4 px-5 pb-5">
            <div class="rounded-full">

              <textarea aria-required="true" rows="5" name="form_message" id="form_message" required="" placeholder="How can I help you?" class=" mb-3 block w-full text-black placeholder-gray-600  px-4 py-2.5  rounded-lg   focus:bg-lightPri dark:focus:bg-darkFour" />

              <Button id="btn-submit" type="submit" data-validate="submit" aria-label="Send message" className=" dark:bg-darkTer dark:hover:bg-darkFour">
              <span>Send</span><i class="fas fa-arrow-right"></i>
            </Button>
            </div>

            
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
