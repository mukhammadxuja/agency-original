import Image from 'next/image';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import img1 from './location.png';
import img2 from './call.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  // const [telephone, setTelephone] = useState("");
  // const [email, setEmail] = useState("");
  // const [areaText, setAreaText] = useState("");

  const [inputs, setInputs] = useState({});

  const form = useRef();

  console.log(inputs);

  const handleChange = (e) =>
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ehwyfsf',
        'template_4fnw3cw',
        form.current,
        'dqmWfjKjx0kj0b5np'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Habar Jo'natildi");
          setInputs(() => ({}));
        },
        (error) => {
          console.log(error.text);
          toast.error("Serverda hato bo'ldi");
        }
      );
  };

  return (
    <>
      <div className="py-10">
        <div className="text-center">
          <h2 className="text-3xl my-5">Contact US</h2>
          <p className="text-xl font-sans mb-10 !font-normal text-[#4b5563]">
            We use an agile approach to test assumptions and connect <br /> with
            the needs of your audience early and often.
          </p>
        </div>

        <div className="lg:flex  ">
          <form className="lg:w-[60%] lg:my-32" ref={form} onSubmit={sendEmail}>
            <ToastContainer />
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  First name
                </label>
                <input
                  name="first_name"
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ism"
                  value={inputs.first_name || ''}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Last name
                </label>
                <input
                  name="last_name"
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Familiya"
                  value={inputs.last_name || ''}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="yourname@mail.com"
                  value={inputs.email || ''}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Phone number
                </label>
                <input
                  name="phone_number"
                  type="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="91-654-42-35"
                  value={inputs.phone_number || ''}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
                value={inputs.message || ''}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="mx-auto mt-4 cursor-pointer rounded-lg bg-black py-3 px-8
        text-xs md:text-sm font-medium text-white shadow-md
        duration-300 ease-in-out active:scale-95 active:bg-opacity-80"
            >
              Submit
            </button>
          </form>

          <div className="mx-auto pt-10">
            <div>
              <div className="dark:bg-[#1F2937FF] mx-auto bg-[#f3f4f6] justify-center items-center flex rounded-xl w-[62px] h-[62px]">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 4C4 2.89543 4.89543 2 6 2H14C15.1046 2 16 2.89543 16 4V16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H13C12.4477 18 12 17.5523 12 17V15C12 14.4477 11.5523 14 11 14H9C8.44772 14 8 14.4477 8 15V17C8 17.5523 7.55228 18 7 18H4C3.44772 18 3 17.5523 3 17C3 16.4477 3.44772 16 4 16V4ZM7 5H9V7H7V5ZM9 9H7V11H9V9ZM11 5H13V7H11V5ZM13 9H11V11H13V9Z"
                    fill="#4A5568"
                  />
                </svg>
              </div>
              <div className="text-center my-5">
                <h2 className="text-xl my-2">Company information:</h2>
                <p>
                  DotSoft LLC <br />A Software Company
                </p>
              </div>
            </div>
            <div>
              <div className="dark:bg-[#1F2937FF] mx-auto bg-[#f3f4f6] justify-center items-center flex rounded-xl w-[62px] h-[62px]">
                <Image width={30} height={30} src={img1} alt="asdas" />
              </div>
              <div className="text-center my-5">
                <h2 className="text-xl my-2">Address:</h2>
                <p>
                  Uzbekistan, Jizzakh neighborhood Zilol <br />
                  Zip Code/Postal code:130100
                </p>
              </div>
            </div>
            <div>
              <div className="dark:bg-[#1F2937FF] mx-auto bg-[#f3f4f6] justify-center items-center flex rounded-xl w-[62px] h-[62px]">
                <Image src={img2} width={30} height={30} />
              </div>
              <div className="text-center my-5">
                <h2 className="text-xl my-2">Call us:</h2>
                <p>
                  Call us to speak to a member of our team. We are <br /> always
                  happy to help. <br />{' '}
                  <a
                    href="tel:+998992666545"
                    className="text-xl hover:text-[#086E99FF] transition-all"
                  >
                    +998992666545
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
    // <div className="container mx-auto flex items-center py-10 lg:py-16">
    //   <div className="mx-auto space-x-4">
    //     <div className="flex items-center justify-center space-x-2 py-8">
    //       <h3 className="text-2xl lg:text-4xl xl:text-5xl text-center text-black dark:text-white">
    //         Let&apos;s connect
    //       </h3>
    //     </div>
    //     <div className="flex items-center space-x-4 py-2 px-4 lg:py-6 xl:pt-10">
    //       <div className="w-56 sm:w-64 lg:w-96 bg-white rounded-lg border-2">
    //         <input
    //           className="bg-transparent rounded-lg focus:outline focus:outline-[#3393bc] focus:outline-2 w-full p-3 truncate"
    //           type="email"
    //           placeholder="Type your email address"
    //         />
    //       </div>
    //       <div>
    //         <button
    //           className="mx-auto cursor-pointer rounded-lg bg-black py-4 px-8
    //         text-xs lg:text-sm font-medium text-white shadow-lg
    //         duration-300 ease-in-out active:scale-95 active:bg-opacity-80"
    //         >
    //           Send
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div> */}
    </>
  );
};

export default Contact;
