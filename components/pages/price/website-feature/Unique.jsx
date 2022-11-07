import React from 'react';
import { websitesData } from '../../../data/website';

import { CheckIcon, ErrorIcon } from '../../..';

const Unique = (props) => {
  const { index } = props;
  return (
    <React.Fragment>
      {websitesData.map((website) => {
        return (
          <div className="">
            {website.id === index && (
              <div className="p-8 space-y-2">
                <div className="flex items-center justify-between border-b">
                  <h5 className="text-lg md:text-base lg:text-lg">
                    - Sayt Turi:
                  </h5>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <h6 className="text-base">{website.name}</h6>
                    <CheckIcon />
                  </div>
                </div>
                <div className="flex items-center justify-between border-b">
                  <h5 className="text-lg md:text-base lg:text-lg">
                    - Sahifalar soni
                  </h5>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <h6 className="text-base">1</h6>
                    <CheckIcon />
                  </div>
                </div>
                <div className="flex items-center justify-between border-b">
                  <h5 className="text-lg md:text-base lg:text-lg">
                    - Sayt dizayni:
                  </h5>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <h6 className="text-base">Shablon</h6>
                    <CheckIcon />
                  </div>
                </div>
                <div className="flex items-center justify-between border-b">
                  <h5 className="text-lg md:text-base lg:text-lg">
                    - Ijtimoiy tugmalar:
                  </h5>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <h6 className="text-base">Bor</h6>
                    <CheckIcon />
                  </div>
                </div>
                <div className="flex items-center justify-between border-b">
                  <h5 className="text-lg md:text-base lg:text-lg">
                    - Saytning Mobil Shakli:
                  </h5>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <h6 className="text-base">Bor</h6>
                    <CheckIcon />
                  </div>
                </div>
                <div className="flex items-center justify-between border-b">
                  <h5 className="text-lg md:text-base lg:text-lg">
                    - Tungi rejim:
                  </h5>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <h6 className="text-base">Yo&lsquo;q</h6>
                    <ErrorIcon />
                  </div>
                </div>
                <div className="flex items-center justify-between border-b">
                  <h5 className="text-lg md:text-base lg:text-lg">
                    - Online obuna tizimi:
                  </h5>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <h6 className="text-base">Yo&lsquo;q</h6>
                    <ErrorIcon />
                  </div>
                </div>
                <div className="flex items-center justify-between border-b">
                  <h5 className="text-lg md:text-base lg:text-lg">
                    - Reklama joylari:
                  </h5>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <h6 className="text-base">Yo&lsquo;q</h6>
                    <ErrorIcon />
                  </div>
                </div>
                <div className="flex items-center justify-between border-b">
                  <h5 className="text-lg md:text-base lg:text-lg">
                    - Pullik obuna:
                  </h5>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <h6 className="text-base">Yo&lsquo;q</h6>
                    <ErrorIcon />
                  </div>
                </div>
                <div className="flex items-center justify-between border-b">
                  <h5 className="text-lg md:text-base lg:text-lg">
                    - Ro‘yxatdan o‘tish qismi:
                  </h5>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <h6 className="text-base">Yo&lsquo;q</h6>
                    <ErrorIcon />
                  </div>
                </div>
                <div className="flex items-center justify-between border-b">
                  <h5 className="text-lg md:text-base lg:text-lg">
                    - Matlarni Kiritish:
                  </h5>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <h6 className="text-base">Yo&lsquo;q</h6>
                    <ErrorIcon />
                  </div>
                </div>
                <div className="flex items-center justify-between border-b">
                  <h5 className="text-lg md:text-base lg:text-lg">
                    - Tashqi API integratsiyasi :
                  </h5>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <h6 className="text-base">Yo&lsquo;q</h6>
                    <ErrorIcon />
                  </div>
                </div>
                <div className="flex items-center justify-between border-b">
                  <h5 className="text-lg md:text-base lg:text-lg">
                    - SEO Hizmati:
                  </h5>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <h6 className="text-base">Yo&lsquo;q</h6>
                    <ErrorIcon />
                  </div>
                </div>
                <div className="flex items-center justify-between border-b">
                  <h5 className="text-lg md:text-base lg:text-lg">
                    - Tillar soni:
                  </h5>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <h6 className="text-base">O&lsquo;zbek</h6>
                    <CheckIcon />
                  </div>
                </div>
                <div className="flex items-center justify-between border-b">
                  <h5 className="text-lg md:text-base lg:text-lg">
                    - Bepul Domain:
                  </h5>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <h6 className="text-base">Bor</h6>
                    <CheckIcon />
                  </div>
                </div>
                <div className="flex items-center justify-between border-b">
                  <h5 className="text-lg md:text-base lg:text-lg">
                    - Brending:
                  </h5>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <h6 className="text-base">Yo‘q</h6>
                    <ErrorIcon />
                  </div>
                </div>
                <div className="flex items-center justify-between border-b">
                  <h5 className="text-lg md:text-base lg:text-lg">
                    - 3D va animatsiya:
                  </h5>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <h6 className="text-base">Yo‘q</h6>
                    <ErrorIcon />
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Unique;
