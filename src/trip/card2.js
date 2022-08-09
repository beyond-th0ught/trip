import React from 'react'
import Card2page1 from './card2page1'
import Card2page2 from './card2page2'

export default function card2() {
  return (
    <div class="flex mx-10 pt-8">
        <div class="">
            <Card2page1/>
        </div>
        <div class="">
            <Card2page2/>
        </div>
    </div>
  )
}
