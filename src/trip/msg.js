import React from 'react'
import Cat from '../assest/cat.jpg'

export default function msg() {
  return (
    <div>
        <div class="bg-gray-200 p-2.5 rounded-t-3xl rounded-r-3xl mt-6">
        <p class="text-sm my-4 mx-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
        <div class="flex justify-between items-center mt-3">
            <div class="flex items-center">
            <img src={Cat} class="h-8 w-8 rounded-full" alt='images' />
            <label class="text-xs text-gray-400 font-semibold ml-2">21.09.2021 by Khushboo Yadav</label>
            </div>
            <div class="  bg-gray-300 text-orange-600 font-semibold text-xs p-1 px-2 rounded-sm">
                <label>Reply</label>
            </div>
        </div>
    </div>
  )
}
