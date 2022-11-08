import React, { useRef, useState } from 'react';

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-[#006B98]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>
  );
};

const Accordion = (props) => {
  const { title, children } = props;

  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('transform duration-700 ease');

  const contentSpace = useRef(null);

  const toggleAccordion = () => {
    setActive((prevState) => !prevState);
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      active
        ? 'transform duration-700 ease'
        : 'transform duration-700 ease rotate-180'
    );
  };

  return (
    <>
      <div className="rounded-md pb-1">
        <div className="py-2 px-4 md:py-3 border-2 border-black rounded-md hover:bg-neutral-50 group">
          <div
            onClick={toggleAccordion}
            className="flex items-center cursor-pointer"
          >
            <Icon />
            <h2 className="text-base md:text-lg ml-4 flex-grow">{title}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                active ? 'rotate-180 duration-200' : 'rotate-0 duration-200'
              } h-8 w-8 p-2 rounded-full group-hover:border group-hover:border-black`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div
            ref={contentSpace}
            style={{ maxHeight: `${height}` }}
            className="overflow-auto duration-500 ease-in-out px-4"
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;

// const Default = () => {
//   return (
//     <div
//       className="w-[18rem] md:w-[25rem] bg-gray-100 bg-clip-padding backdrop-filter
//   backdrop-blur-sm bg-opacity-40 py-2 flex flex-col border border-blue-400 rounded-lg"
//     >
//       <Accordion
//         title="Connected devices"
//         paragraph="Two issues to fix right now"
//         content="Lorem ipsum, dolor sit amet consectetur"
//         Icon={'Use your Icon here!'}
//       />
//       <Accordion
//         title="Started Items"
//         paragraph="Bookmarked for the future"
//         content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dolorum, consequuntur quam repudiandae facere deleniti"
//         Icon={'Use your Icon here!'}
//       />
//       <Accordion
//         title="Statement Expended"
//         paragraph="Purchase our design kits"
//         Icon={'Use your Icon here!'}
//       >
//         <div className="py-2 px-4 bg-blue-100 w-full rounded-lg">
//           <div className="flex items-center">
//             <h3 className="font-semibold text-gray-800">
//               Purchase UI kits to boost your design process
//             </h3>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-7 w-7 bg-white rounded-full p-1.5 cursor-pointer"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
//               />
//             </svg>
//           </div>
//           <div className="flex items-center cursor-pointer py-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-9 w-9 text-blue-500 bg-blue-200 p-2 rounded-lg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
//               />
//             </svg>
//             <div className="ml-4 flex-grow">
//               <h2 className="text-sm font-semibold">Design system tokens</h2>
//               <p className="text-xs font-light text-gray-600">15 march, 2022</p>
//             </div>
//           </div>
//           <div className="flex items-center cursor-pointer py-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-9 w-9 text-blue-500 bg-blue-200 p-2 rounded-lg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
//               />
//             </svg>
//             <div className="ml-4 flex-grow">
//               <h2 className="text-sm font-semibold">Design system tokens</h2>
//               <p className="text-xs font-light text-gray-600">15 march, 2022</p>
//             </div>
//           </div>
//           <p className="text-xs py-2 text-gray-500 font-light">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
//             fuga maiores voluptatum.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center my-2">
//             <a className="w-full md:w-fit text-center mx-auto rounded-xl py-2 px-8 bg-white cursor-pointer active:scale-95 shadow-md text-sm duration-500 ease-in-out hover:bg-blue-500 hover:bg-opacity-30 md:text-sm text-[#1a5cff]">
//               Purchase Me
//             </a>
//             <a className="w-full md:w-fit text-center mx-auto rounded-lg py-2 px-8 font-medium overflow-hidden relative shadow-md text-sm duration-500 active:bg-opacity-80 cursor-pointer ease-in-out active:scale-95 bg-[#1a5cff] dark:bg-[#1a5cff] md:text-sm text-white hover:shadow-md">
//               I Want this kit
//             </a>
//           </div>
//         </div>
//       </Accordion>
//       <Accordion
//         title="Connected devices"
//         paragraph="Two issues to fix right now"
//         content="Lorem ipsum, dolor sit amet consectetur"
//         Icon={'Use your Icon here!'}
//       />
//       <Accordion
//         title="Connected devices"
//         paragraph="Two issues to fix right now"
//         content="Lorem ipsum, dolor sit amet consectetur"
//         Icon={'Use your Icon here!'}
//       />
//     </div>
//   );
// };

// export default Default;
