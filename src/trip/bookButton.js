import React from 'react'

export default function bookButton() {
  return (
    <div>
        <div class="pb-4">
            <label class="text-gray-400 text-sm border-gray-300 border-r-[1px] pr-2">5 days</label>
            <label class="text-white text-sm ml-2">from $356</label>
        </div>

        <button class="bg-red-500 text-center text-white font-md py-1 px-4 rounded-md">
            Book Now
        </button>
    </div>
  )
}
