import React from 'react'
import {Search, User } from 'react-feather'
import Logo from '../assest/logo.png'

export default function Nav() {
  return (
    
    <div class="flex justify-between ">
        <div class="flex items-center  mx-2 "> 
        <div class="bg-gray-400 rounded-full px-2 py-3 mx-4 text-white text-xs font-bold ">
            USD
        </div>
            <div class="bg-gray-300 rounded-full p-3 ">
            <Search size={16} color='white' />
            </div>
            <img class="h-14 w-32 mx-4 rounded-full " src={Logo} alt='images' /> 
        </div>
        <div class="flex justify-center items-center mx-4">
            <ul class="text-white grid grid-flow-col auto-cols-max gap-7">
                <li>Home</li>
                <li>Travel List</li>
                <li>Page</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
        <div class="flex items-center  mx-4 ">
        <label class=" mx-4 text-white text-sm font-bold text-center">
            +91 9136827371
        </label>
        <div class=" mx-2 text-white text-xs font-bold ">
            <label class="bg-red-600 rounded-full p-3.5 text-center">
            14
            </label> 
            <label class= " mx-3 ">
                Favorite
            </label>
        </div>
            <div class="bg-gray-400 rounded-full p-3 mx-2 ">
        <User size={18} color='white' class="" />
        </div>
            
        </div>
    </div>
  )
}
