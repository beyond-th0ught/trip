import React from 'react'
import { Check } from 'react-feather'
import Story from './story'

export default function include() {
    const data=[
        {
            lab1:"Flight by plane",
            lab2:"Flight and transfer to the hotel"
        },
        {
            lab1:"WiFi",
            lab2:"Free wifi in reception, wifi in public area"
        },
        {
            lab1:"Smorgeshbord",
            lab2:"But i must explain to you how all"
        },
        {
            lab1:"Pool",
            lab2:"Beautiful and large Swimming pool at your service"
        }
    ]
  return (
    <div>
    <div>
        <div class="text-black text-3xl pt-8 font-semibold pb-3">
            Included
        </div>
        <div class="grid grid-cols-2 ">
        {data.map((val, index)=>{
            return(
                
            <div class="flex  items-center  py-4 border-b-[1px] border-gray-300" >
                <div class="h-7 w-7 rounded-full bg-green-500">
                    <Check color='white' size={15} class="mt-1.5 ml-1.5" />
                </div>
                <div class="grid grid-cols-1 text-gray-400 text-xs mx-2">
                <label class="text-sm text-black font-semibold">{val.lab1}</label>
                <label>{val.lab2}</label>
                </div>
            </div>
        
            )
        })}
        </div>
        
    </div>
    <div class="py-4">
        <Story/>
    </div>
    </div>
  )
}
