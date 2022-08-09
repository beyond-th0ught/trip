import React from 'react'
import i1 from '../assest/img1.jpg'
import i2 from '../assest/img2.jpg'
import i3 from '../assest/img3.jpg'
import i4 from '../assest/img4.jpg'
import i5 from '../assest/img5.jpg'


export default function footerImage() {
    const data=[
        {
            url:i1
        },
        {
            url:i2
        },
        {
            url:i3
        },
        {
            url:i4
        },
        {
            url:i5
        }
    ]
  return (
    <div  class="grid grid-cols-5">
            {data.map((val,index)=>{
                return(
                    <div class="w-[100%] h-[100%] overflow-hidden"> 
                        <img class="bg-cover h-[70%] w-[100%] hover:cursor-pointer" src={val.url} alt="images" />
                        
                    </div>
                )
            })}
        </div>
  )
}
