import React from 'react'
import Msg from './msg'
import Msg2 from './msg2'
import Msg3 from './msg3'

export default function review() {
  return (
    <div>
        <div class="pt-16 flex space-x-3 items-center ">
        <div class="w-12 h-12  bg-red-600 rounded-full relative ">
            <label class="text-white font-bold mt-2.5 ml-3 absolute text-center ">5.0</label>
        </div>
        <div class="text-2xl font-semibold">
            Reviews
        </div>
        <div class="text-2xl font-semibold text-gray-500">
            12
        </div>
        
    </div>
    <div>
            <Msg/>
            <Msg2/>
            <Msg3/>
        </div>
    </div>
  )
}
