import React from 'react'
import { Plus } from 'react-feather'
import Second from '../assest/icon1.jpg'
import Third from '../assest/icon2.jpg'
import Include from './include'
import Map from './map'

export default function sub4page2() {
    const data=[
        {
            url:Third,
            label1:"Day 2-4",
            label2:"Sightseeing Tour"
        },
        {
            url:Second,
            label1:"Day 5",
            label2:"Free Time"
        }
    ]
  return (
    <div>
    {data.map((val,index)=>{
        return(
            <div class="mt-2 flex justify-between items-center pb-2 border-gray-300 border-b-[1px]">
            <div class="flex  items-center ">
            <img src={val.url} class="h-10 w-10 rounded-full"  alt='images' />
            <label class="text-lg font-semibold ml-2">{val.label1}</label>
        </div>
        <div>
            <label class="font-semibold">{val.label2}</label>
        </div>
        <div class="h-8 w-8 bg-gray-400 rounded-full ">
            <Plus size={20} class="mt-1.5 ml-1.5" /> 
        </div>
        </div>
        )
    })}
    <Map/>
    <Include/>
    
   </div>
  )
}
