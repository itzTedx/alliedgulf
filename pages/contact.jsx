import Head from "next/head";
import Image from "next/future/image";

import SocialMedia from "../components/SocialMedia";
import ContactForm from "../components/ContactForm";

import { ToastContainer } from "react-toastify";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Just one more step - Contact now</title>
        <meta
          name="description"
          content="Looking for specialty materials for your construction? You are one step closer to build or renovate your perfect building. Write us a few words about your project and product we'll get back to you within 24 hours."
          priority
        />
      </Head>
      <div className="bg-neutral-800">
        <div className="h-80 max-w-7xl mx-auto flex flex-col justify-between p-5">
          <div className="text-white py-8 flex flex-col gap-y-3">
            <h1 className="text-3xl md:text-7xl font-bold">Contact us</h1>
            <p className="text-lg text-neutral-400 font-light ">
              Looking for specialty materials for your construction?
              <br />
              Just one more step.
            </p>
          </div>
          <div className="">
            <div className="flex gap-3 text-gray-500">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl p-5 flex flex-col-reverse md:flex-row justify-between">
        <div className="max-w-sm">
          <div className="pb-8">
            <h1 className="font-bold text-4xl py-6">
              What will <br />
              be next step?
            </h1>
            <p>
              You are one step closer to build or
              <br />
              renovate your perfect building
            </p>
          </div>
          <div className="flex gap-3 ">
            <svg
              className="hidden md:block "
              width="30"
              height="232"
              viewBox="0 0 20 228"
              fill="none"
            >
              <g id="steps-loader">
                <path
                  id="Line-BG"
                  d="M10 17L9.99999 218"
                  stroke="#E8E8E8"
                  strokeWidth="2"
                />
                <path
                  id="Line"
                  d="M10 17L9.99999 218"
                  stroke="#858585"
                  strokeWidth="2"
                />
                <g id="Bottom">
                  <circle
                    id="Ellipse-6"
                    cx="10"
                    cy="218"
                    r="10"
                    fill="#26A8E4"
                  />
                  <circle
                    id="Ellipse-9"
                    cx="10"
                    cy="218"
                    r="3"
                    stroke="#E8E8E8"
                    strokeWidth="2"
                  />
                </g>
                <g id="Middle">
                  <circle
                    id="Ellipse-5"
                    cx="10"
                    cy="114"
                    r="10"
                    fill="#26A8E4"
                  />
                  <circle
                    id="Ellipse-8"
                    cx="10"
                    cy="114"
                    r="3"
                    stroke="#E8E8E8"
                    strokeWidth="2"
                  />
                </g>
                <g id="Top">
                  <circle
                    id="Ellipse-4"
                    cx="10"
                    cy="10"
                    r="10"
                    fill="#26A8E4"
                  />
                  <circle
                    id="Ellipse-7"
                    cx="10"
                    cy="10"
                    r="3"
                    stroke="#E8E8E8"
                    strokeWidth="2"
                  />
                </g>
              </g>
            </svg>
            <ol className="">
              <li className="font-bold flex flex-col pb-2">
                1. We{`'`}ll prepare a proposal
                <span className="font-light py-2">
                  Required scope, timeline and aprox. price will be included
                </span>
              </li>
              <li className="font-bold flex flex-col py-2">
                2. Together we discuss it
                <span className="font-light py-2">
                  Let{`'`}s get acquainted and discuss all the possible variants
                  and options.
                </span>
              </li>
              <li className="font-bold flex flex-col py-2">
                3. Let{`'`}s start building&nbsp;
                <span className="font-light py-2">
                  When the contract is signed and all goals are set we can start
                  the first sprint.
                </span>
              </li>
            </ol>
          </div>
        </div>
        <div className="bg-[#d4e1e7] md:-translate-y-32">
          <div className="md:p-9">
            <div className="flex flex-row">
              <div className=" bg-sky-700 mb-5">
                <div className="flex items-center justify-center h-14 w-14">
                  <Image
                    src="/Mail.svg"
                    alt="Contact Allied Gulf Construction services"
                    height={32}
                    width={32}
                  />
                </div>
              </div>
              <p className="text-sm md:text-base max-w-lg leading-4 md:leading-6 px-3 md:py-1">
                Write us a few words about your project and product we{`'`}ll
                get back to you within 24 hours.
              </p>
            </div>
            <div className="py-3 md:py-6">
              <ContactForm />
            </div>
          </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}
