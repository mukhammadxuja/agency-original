// import Image from 'next/image';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// import img1 from './location.png';
// import img2 from './call.png';

import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [inputs, setInputs] = useState({});
  const form = useRef();

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
          toast.success('Habaringiz muvaffaqiyatli jo`natildi.');
          setInputs(() => ({}));
        },
        (error) => {
          console.log(error.text);
          toast.error('Serverda xato yuz berdi.');
        }
      );
  };

  return (
    <>
      <section className="container mx-auto py-10 md:py-14 lg:py-16 xl:py-20">
        <div className="flex items-center justify-center space-x-2">
          <h3 className="pb-10 text-2xl lg:text-4xl xl:text-5xl text-center text-black dark:text-white">
            Let&apos;s connect
          </h3>
        </div>

        <div>
          <form
            className="lg:w-[60%] lg:my-20 w-full mx-auto"
            ref={form}
            onSubmit={sendEmail}
          >
            <Toaster />
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
                  className="bg-neutral-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  className="bg-neutral-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  className="bg-neutral-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  className="bg-neutral-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="block p-2.5 w-full text-sm text-gray-900 bg-neutral-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        </div>
      </section>
    </>
  );
};

export default Contact;
