import React from 'react'
import Sub1page2 from './sub1page2'
import Sub2page1 from './sub2page1'

export default function card2page1() {
  return (
    <div>
        <div class="pt-8">
            <h1 class="text-black text-3xl font-semibold pb-3">Overview</h1>
            <p class="text-gray-500 text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div>
            <Sub1page2/>
            <Sub2page1/>
        </div>
    </div>
  )
}
