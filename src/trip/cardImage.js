import React from 'react'
import CardNav from './cardNav'
import Book from './book'
import First from '../assest/bird.jpg'
import Second from '../assest/beach.jpg'
import Third from '../assest/mountain.jpg'

export default function CardImage() {
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
        <div>
            <CardNav/>
        </div>
        <div  class="grid grid-flow-col gap-5 py-5 mx-6">
            {data.map((val,index)=>{
                return(
                    <div class="w-[100%] h-[100%]  rounded-md  overflow-hidden"> 
                        <img class="bg-cover h-full w-full hover:-translate-y-1 hover:scale-110 duration-700 hover:cursor-pointer hover:skew-y-0" src={val.url} alt="" />
                        
                    </div>
                )
            })}
        </div>
        <div class="py-5">
            <Book/>
        </div>
    </div>
  )
}
