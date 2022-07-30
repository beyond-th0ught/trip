import React from 'react'
import {ChevronRight, Home, Settings} from 'react-feather'

export default function subTitle() {
  return (
    <div class="flex justify-between items-center">
        <div class="flex py-4 items-center text-sm ">
        <div class="text-2xl pr-4 text-gray-600 border-r-[1px] border-gray-300">
        Apex Chart
        </div>
        <div class="mx-2 text-[#7367f0] flex items-center">
            <Home size={16}  class=" mt-1 hover:cursor-pointer" />
            <ChevronRight size={14} color='gray' class="ml-1 mt-1"/>
        </div>
        <div class="text-[#7367f0] flex items-center">
            <div class="hover:cursor-pointer">Extensions</div>
            <ChevronRight size={14} color='gray' class="mx-1 mt-1"/>
        </div>
        <div class="text-gray-500 flex items-center">
            <div>Apex Chart</div>
        </div>
        
        </div>
        <div class=" bg-[#7367f0] p-2.5 w-9 h-9 text-center rounded-md hover:shadow-xl hover:cursor-pointer">
            <Settings size={14} color='white' />
        </div>
    </div>
    
  )
}
