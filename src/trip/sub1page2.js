import React from 'react'
import Airoplan from '../assest/airplane.jpg'
import { Minus } from 'react-feather'

export default function sub1page2() {
  return (
    <div class="mt-8 mr-4 flex justify-between items-center pb-2 border-gray-300 border-b-[1px]">
        <div class="flex  items-center ">
            <img src={Airoplan} class="h-10 w-10 rounded-full" alt='images'  />
            <label class="text-lg font-semibold ml-2">Day1</label>
        </div>
        <div>
            <label class="font-semibold">Transfer to hotel</label>
        </div>
        <div class="h-8 w-8 bg-gray-400 rounded-full ">
            <Minus size={20} class="mt-1.5 ml-1.5" /> 
        </div>
    </div>
  )
}
