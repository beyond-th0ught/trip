import React from 'react'
import Component2 from './component2'
import Subtitle2 from './subtitle2'
import Chart from './chart.js'
import { Heart } from 'react-feather'


export default function componentblog() {
  return (
    <div class="h-[100%] w-[100%]  bg-gray-50">
    <div class=" mx-4 pt-3  rounded-md h-[100%] ">
    <div class="px-3 py-2 h-full w-full bg-white rounded-md shadow-md">
    <Component2/>  
    </div>
    <div>
    <Subtitle2/>
    </div>
    <Chart/>
    
    
    <div class="flex justify-between text-md text-gray-400 py-3">
      <div>
      COPYRIGHT © 2022 Pixinvent, All rights Reserved
      </div>
      <div class="flex justify-center items-center ">
      Hand-crafted & Made with
      <Heart color='#ea5455' size={20} class="ml-2"/>
      </div>
    </div>
    </div> 
    </div>
  )
}
