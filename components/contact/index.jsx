import React from 'react';

const Contact = () => {
  return (
    <>




      <div className='container py-10'>
        <div>
          <h2>Contact US</h2>
          <p>We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
        </div>

        <div className='flex '>


          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
              </div>
              <div>
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company</label>
                <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." defaultValue={""} />
              </div>
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>

<div>
  
</div>


        </div>
      </div>







      {/* 
    // <div className="container mx-auto flex items-center py-10 lg:py-16">
    //   <div className="mx-auto space-x-4">
    //     <div className="flex items-center justify-center space-x-2 py-8">
    //       <h3 className="text-2xl md:text-4xl xl:text-5xl text-center text-black dark:text-white">
    //         Let&apos;s connect
    //       </h3>
    //     </div>
    //     <div className="flex items-center space-x-4 py-2 px-4 lg:py-6 xl:pt-10">
    //       <div className="w-56 sm:w-64 md:w-96 bg-white rounded-lg border-2">
    //         <input
    //           className="bg-transparent rounded-lg focus:outline focus:outline-[#3393bc] focus:outline-2 w-full p-3 truncate"
    //           type="email"
    //           placeholder="Type your email address"
    //         />
    //       </div>
    //       <div>
    //         <button
    //           className="mx-auto cursor-pointer rounded-lg bg-black py-4 px-8
    //         text-xs md:text-sm font-medium text-white shadow-md
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
