import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import SocialMedia from "../components/SocialMedia";

const navigationRoutes = [
  "home",
  "services",
  "products",
  "projects",
  "about",
  "contact",
];

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="bg-neutral-800 text-neutral-400">
      <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row lg:grid-flow-col max-w-7xl mx-auto py-16 px-0 md:px-5 text-center justify-center lg:justify-between space-y-5 lg:space-y-0">
        <div className="flex flex-col justify-between lg:text-left">
          <div className="space-y-2 ">
            <h4 className="font-bold text-sky-600 text-xl">
              Allied Gulf Construction Services W.L.L
            </h4>
            <p className="font-light text-sm w-80 mx-auto">
              For all Construction Services and Construction Specialty Materials
            </p>
          </div>
          <div className="pt-6">
            <Link href="/privacypolicy">
              <a
                className="text-xs font-thin hover:text-sky-400 transition-all duration-300"
                rel="nofollow"
              >
                <h6>Terms of Service and Privacy Policy</h6>
              </a>
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold text-sky-600 text-xl">Follow Us</h3>
          <SocialMedia />
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-sky-600 text-xl">Quick links</h3>
          <div className="">
            {navigationRoutes.map((singleRoute) => {
              return (
                <NavigationLink
                  key={singleRoute}
                  href={`/${singleRoute}`}
                  text={singleRoute}
                  router={router}
                />
              );
            })}
          </div>
        </div>
        <div className="space-y-2 ">
          <h3 className="font-bold text-sky-600 lg:text-left px-0 lg:px-6 text-xl">
            Contact
          </h3>
          <div className="lg:text-left space-y-2">
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start space-x-2">
              <svg
                className="h-5 w-5 fill-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
              </svg>
              <Link href="https://goo.gl/maps/djSrXwAjCSwqGefi7" passHref>
                <a
                  className="cursor-pointer hover:text-sky-500 transition duration-300"
                  target="_blank"
                >
                  P.o. box: 21341, Manama, <br />
                  Kingdom Of Bahrain.
                </a>
              </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start space-x-2">
              <svg
                className="h-5 w-5 fill-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <p>
                <Link href="tel:+97317791317">
                  <a className="cursor-pointer hover:text-sky-500 transition duration-300">
                    +973-17791317
                  </a>
                </Link>
                <br />
                <Link href="tel:+97334685656">
                  <a className="cursor-pointer hover:text-sky-500 transition duration-300">
                    +973-34685656
                  </a>
                </Link>
                <br />
                <Link href="tel:+97333860718">
                  <a className="cursor-pointer hover:text-sky-500 transition duration-300">
                    +973-33860718
                  </a>
                </Link>
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start space-x-2">
              <svg
                className="h-5 w-5 fill-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              <p>
                <Link href="mailto:info@alliedgulf.me">
                  <a className="cursor-pointer hover:text-sky-500 transition duration-300">
                    info@alliedgulf.me
                  </a>
                </Link>
                <br />
                <Link href="mailto:sales@alliedgulf.me">
                  <a className="cursor-pointer hover:text-sky-500 transition duration-300">
                    sales@alliedgulf.me
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-5 border-t border-neutral-500">
        <p className="text-neutral-600 font-light text-sm">
          Copyright © 2022. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

function NavigationLink({ href, text, router }) {
  return (
    <Link href={href === "/home" ? "/" : href} passHref>
      <a
        href={href === "/home" ? "/" : href}
        className={`hover:text-sky-400 transition-all duration-300 capitalize flex py-1 justify-center`}
      >
        {text}
      </a>
    </Link>
  );
}
