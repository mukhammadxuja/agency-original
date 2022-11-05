import { useState } from 'react';

import { CheckIcon, ErrorIcon } from '../../'

const Toggle = ({ trueOrFalse, no, yes }) => {
  const [enabled, setEnabled] = useState(trueOrFalse);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="flex">
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={() => {
              setEnabled(!enabled);
            }}
            className="w-12 h-7 bg-gray-200 rounded-full peer peer-focus:ring-black peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-black"
          ></div>
          <div className="flex items-center">
            <span className="ml-2 text-base md:text-lg">
              {enabled ? `${yes}` : `${no}`}
            </span>
            {enabled ? <CheckIcon /> : <ErrorIcon />}
          </div>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
