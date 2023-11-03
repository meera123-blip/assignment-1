import React from 'react'

const Shimmer = () => {
  return (
    <div className="animate-pulse space-y-4 p-4 flex flex-col justify-center">
    <div className="bg-gray-300 h-8 w-2/3 rounded"></div>
    <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
    <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
    <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
    <div className="flex justify-center mt-4">
      <div className="bg-gray-300 h-10 w-24 rounded-full"></div>
    </div>
  </div>
  )
}

export default Shimmer