import React from 'react'
import Bg from '../assest/bg.jpg'
import Nav from './nav'
import Nav2 from './nav2'
import CardImage from './cardImage'
import Card2 from './card2'
import Footer from './footer'

export default function main() {
  return (
    <div class="h-[100%] w-[100%]  bg-gray-50 ">
    <div>
    <div class="relative mx-4 ">
        <img src={Bg} class="bg-cover absolute " alt='images' />
        </div>
        
    <div class=" mx-4 pt-3  rounded-md h-[100%] ">
    <div class="px-3 py-2  h-full w-full backdrop-invert-0 ">
    <Nav/> 
    <Nav2/>
    <div>
        <CardImage/>
    </div>
    </div>
    </div>
    </div> 
    <div class=" mx-3  rounded-md h-[100%]">
    <Card2/>
    </div>
    <div>
        <Footer/>
    </div>
    
    </div>
  )
}
