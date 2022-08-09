import React from 'react'
import Image1 from "../assest/image1.jpg"
import Image2 from "../assest/image2.jpg"
import Image3 from "../assest/image3.jpg"
import Image4 from "../assest/image4.png"
import icon1 from '../assest/russia.png'
import icon2 from '../assest/maldives.png'
import icon3 from '../assest/australia.png'
import icon4 from '../assest/madagascar.png'
import Review from './review'


export default function story() {
    const data=[
        {
            img1:Image1,
            img2:icon2
        },
        {
            img1:Image4,
            img2:icon1
        },
        {
            img1:Image3,
            img2:icon3
        },
        {
            img1:Image2,
            img2:icon4
        }
    ]
  return (
    <div>
        <div>
        <div class="py-4 flex justify-between">
            <label class="text-3xl font-semibold">Stories</label>
            <label class="text-sm text-gray-500 font-semibold">All stories</label>
        </div>
        <div class="grid grid-cols-4 gap-5 ">
            {data.map((val, index)=>{
                return(
                    <div class="hover:cursor-pointer">
                        <img class="absolute rounded-lg  w-[16%] h-[55%]" src={val.img1} alt='images'  />
                        <img class="relative rounded-lg mt-60 ml-24 w-20 h-15" src={val.img2} alt='images'  />
                    </div>
                )
            })}
        </div>
    </div>
    <div>
        <Review/>
    </div>
    </div>
  )
}
