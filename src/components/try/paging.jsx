import React, { useState } from 'react';



const PaginationExample = () => {
  

  return (
    <div className='relative w-screen h-screen'>
      <div className='w-28 h-28 bg-lime-300 absolute top-0 left-0'></div>
      <div className='w-28 h-28 bg-sky-200 absolute bottom-0 left-0'></div>
      <div className='w-28 h-28 bg-lime-200 absolute bottom-0 right-0'></div>
      <div className='w-28 h-28 bg-blue-400 absolute top-0 right-0 '></div>
    </div>
  );
};

export default PaginationExample;
