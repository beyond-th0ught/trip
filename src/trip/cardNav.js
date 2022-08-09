import React from 'react'
import {ArrowRight,ArrowLeft,Bookmark, Circle } from 'react-feather'


export default function CardNav() {
  return (
    
    <div class="mx-6 py-2">
        <div class="text-white flex items-center">
                    <Circle fill='red' color='red' size={10} class="mr-1"/>
                    Northern pole
        </div>
        <div class="flex justify-between ">
        <div class="w-[65%]" > 
            <label class=" text-white text-4xl font-bold">
                Tour to the Arctic is an axotic journey on the verge of extreme
            </label>
        </div>

        <div class="flex items-center hover:cursor-pointer ">
        <div class="bg-white rounded-full p-2 mx-8 ">
        <Bookmark size={18} color='red' fill='red' class="" />
        </div>
        <div class=" grid grid-flow-col auto-cols-max gap-2  ">
        <div class="bg-gray-500  rounded-full p-2">
        <ArrowLeft size={18} color='white'  />
        </div>
        <div class="bg-gray-500  rounded-full p-2">
        <ArrowRight size={18} color='white'  />
        </div>

        </div>
            
        </div>
        </div>
        
    </div>
  )
}
