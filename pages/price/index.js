import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Breadcrumb } from '../../components';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'footer'])),
    },
  };
}

const price = () => {
  return (
    <div className="container mx-auto h-screen">
      <Breadcrumb page="Price" link="/price" />
    </div>
  );
};

export default price;
