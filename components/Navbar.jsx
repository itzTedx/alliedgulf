import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { Disclosure, Transition } from "@headlessui/react";
import logo from "../public/allied-gulf.png";
import { Sling as Hamburger } from "hamburger-react";

const navigationRoutes = [
  "home",
  "services",
  "products",
  "projects",
  "about",
  "contact",
];

const Navbar = () => {
  const router = useRouter();

  return (
    <div>
      <Disclosure as="nav" className="bg-neutral-800 sticky top-0 z-50">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-20 items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
                  <Link href="/">
                    <a>
                      <div className="flex flex-shrink-0 items-center gap-2">
                        <div className="hidden md:block">
                          <Image
                            src={logo}
                            height={54}
                            width={42}
                            alt="Allied Gulf Construction Services"
                            priority
                          />
                        </div>

                        <div className="text-neutral-500 font-bold uppercase text-xs lg:text-base">
                          <span className="text-sky-700">Allied</span> Gulf{" "}
                          <span className="text-sky-700">construction</span>{" "}
                          services <span className="text-sky-700">W.L.L</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                  <div className="inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:bg-sky-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <Hamburger
                          size={24}
                          direction="left"
                          duration={0.6}
                          easing="ease-in-out"
                          className="w-8"
                        />
                      ) : (
                        <Hamburger
                          size={24}
                          direction="right"
                          duration={0.6}
                          easing="ease-in-out"
                          rounded
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 text-neutral-400">
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
              </div>
            </div>
            <Transition
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="sm:hidden">
                <div className="px-3 pt-2 pb-5 flex flex-col text-center space-y-8 text-neutral-400">
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
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;

function NavigationLink({ href, text, router }) {
  const isActive = router.asPath === (href === "/home" ? "/" : href);

  const [isHidden, setIsHidden] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    setIsHidden(false);
  }, [pathname]);

  return (
    <Link href={href === "/home" ? "/" : href} passHref>
      <a
        onClick={() => setIsHidden(!isHidden)}
        href={href === "/home" ? "/" : href}
        className={`${
          isActive && "bg-sky-700 text-white"
        }  hover:bg-sky-800 hover:text-white capitalize px-3 py-2 text-sm font-medium`}
      >
        {text}
      </a>
    </Link>
  );
}
