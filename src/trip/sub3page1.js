import React from 'react'
import First from '../assest/bird.jpg'
import Second from '../assest/beach.jpg'
import Third from '../assest/mountain.jpg'

export default function sub3page1() {
    const data=[
        {
            url:First
        },
        {
            url:Second
        },
        {
            url:Third
        }
    ]
  return (
    <div>
        <div  class="grid grid-flow-col gap-5 py-5 ">
            {data.map((val,index)=>{
                return(
                    <div class="w-[100%] h-[100%] flex flex-col   rounded-md  overflow-hidden"> 
                        <img class="bg-cover h-full w-full hover:-translate-y-1 hover:scale-110 duration-700 hover:cursor-pointer hover:skew-y-0" src={val.url} alt="" />
                        <label class="text-gray-500 text-sm mt-2 ">Signature under photo </label>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
