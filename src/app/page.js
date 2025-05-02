
import Menue from '@/component/Menue';
import React from 'react';

const page = () => {
  return (
    <div>
     <h1 className="text-3xl font-bold underline">
    this is home page
  </h1>
  <Menue></Menue>
  <h2>{process.env.API_KEY}</h2>
    </div>
  );
};

export default page;