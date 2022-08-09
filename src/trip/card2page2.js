import React from 'react'
import Circle1 from './circle'

export default function card2page2() {
  return (
    <div class="flex flex-col justify-center items-center ml-4 pt-10">
    <div class="bg-black text-white p-5 px-16 rounded-lg ">
    <h1>Photo/Video</h1>
        <ul>
            <li class="hover:text-red-500 hover:cursor-pointer hover:fill-red-500">Overview</li>          
            <li class="hover:text-red-500 hover:cursor-pointer">Include</li>
            <li class="hover:text-red-500 hover:cursor-pointer">Location</li>
            <li class="hover:text-red-500 hover:cursor-pointer">Stories</li>
            <li class="hover:text-red-500 hover:cursor-pointer">Review</li>
        </ul>
    </div>
    <div class="mt-3">
    <button class="bg-red-500 text-center text-sm text-white py-1 px-16 rounded-md">
            Book Now <br/>
            <label class="text-white text-lg font-md pt-1">from $356</label>
        </button>
    </div>
    </div>
  )
}
