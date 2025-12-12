import React from 'react'

function Error() {
  return (
    <div className='py-20 px-5 sm:px-10 lg:px-20'>
      <h1 className="text-gray-500 text-sm sm:text-base mb-10">
        Home / <span className="text-gray-900 font-medium">404 Error</span>
      </h1>
      <div className='items-center justify-center space-y-6 mt-20'>
        <h1 className='font-bold text-7xl leading-relaxed'>404 Not Found</h1>
        <p className='text-md mt-8'>Your Visited page not found you may go Home Page</p>
      </div>
      <button className='bg-red-600 hover:bg-red-500 text-white py-2 px-3 rounded-sm mt-16'>Back to home page</button>
    </div>
  )
}

export default Error
