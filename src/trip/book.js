import React from 'react'
import BookButton from './bookButton'

export default function Book() {
    const data=[
        {
            lab:"Check In",
            num:4,
            month:"August",
            year:2022
        },
        {
            lab:"Check Out",
            num:4,
            month:"August",
            year:2022
        }
    ]
    const data1=[
        {
            lab:"Adult",
            num:3,
            month:"+",
            year:"-"
        },
        {
            lab:"Children",
            num:3,
            month:"+",
            year:"-"
        }
    ]
  return (
    <div class="flex justify-between justify-center mx-6"> 
        <div class="flex">
        {data.map((val, index)=>{
            return(
                <div class="border-r-[1px] border-gray-300 mr-4">
            <label class="text-gray-400 font-semibold ">{val.lab}</label>
            <div class="flex text-white justify-center items-center mr-8 pt-4" >
                <label class="text-5xl">{val.num}</label>
                <div class="grid grid-cols-1 gap-1 text-xs mx-2">
                <label>{val.month}</label>
                <label>{val.year}</label>
                </div>
            </div>
        </div>
            )
        })}
        {data1.map((val, index)=>{
            return(
                <div class="border-r-[1px] border-gray-300 mr-4">
            <label class="text-gray-400 font-semibold">{val.lab}</label>
            <div class="flex text-white justify-center items-center mr-8 pt-4" >
                <div class="grid grid-cols-1 gap-1 text-xs mx-2">
                <label>{val.month}</label>
                <label>{val.year}</label>
                </div>
                <label class="text-5xl">{val.num}</label>
            </div>
        </div>
            )
        })}
        </div>
        <div>
            <BookButton/>
        </div>
        
    </div>
  )
}
