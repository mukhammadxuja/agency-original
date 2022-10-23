import { useState, useEffect } from 'react';
import { BsChevronUp } from 'react-icons/bs';

const Totop = () => {
  const [show, setShow] = useState(true);
  // scroll animation
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  // scroll animation
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <div>
      {/* to top icon */}
      <div
        className={
          show
            ? 'fixed bottom-8 right-8 sm:right-12 text-white hidden'
            : 'fixed bottom-8 right-8 sm:right-12 text-white group'
        }
      >
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-14 stoke-2 p-3 rounded-full bg-black  group-hover:bg-opacity-70 group-hover:text-gray-200 duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Totop;
