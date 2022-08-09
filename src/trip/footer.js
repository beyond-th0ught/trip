import React from 'react'

import FooterImage from './footerImage'



export default function footer() {   
    return (
    <div >
                <div className='bg-[#0d0d0d] text-white'>
                <FooterImage/>
        <div className='flex'>
            <div className='text-stone-500 basis-[20%] ml-9 b-12 text-left'>
                <div className='text-white text-2xl font-bold'>Travel List</div>
                <div className='mt-7'>
                    Travel List Fullwidth
                </div>
                <div className='mt-4'>
                    Travel List Right Sidebar
                </div>
                <div className='mt-4'>
                    Travel List Fullwidth Image
                </div>
                <div className='mt-4'>
                    Travel List left Sidebar
                </div>
                <div className='mt-4'>
                    Search Results
                </div>
                <div className='mt-4'>
                    Search Nothing Found
                </div>
                <div className='mt-4'>
                    Tour Page Left Sidebar
                </div>
                <div className='mt-4'>
                    Tour Page Right Sidebar
                </div>
            </div>
            <div className='text-stone-500 basis-[20%] ml-6  text-left'>
                <div className='text-white text-2xl font-bold'>Page</div>
                <div className='mt-7'>
                    Stories Fullwidth
                </div>
                <div className='mt-3'>
                    Stories Single
                </div>
                <div className='mt-3'>
                    Stories Right Sidebar
                </div>
                <div className='mt-3'>
                    Stories Left Sidebar
                </div>
                <div className='mt-3'>
                    Gallery
                </div>
                <div className='mt-3'>
                    Gallery Single
                </div>
                <div className='mt-3'>
                    404 Page
                </div>
                <div className='mt-3'>
                    Static Page Right Sidebar
                </div>
                <div className='mt-3'>
                    Static Page Left Sidebar
                </div>
                <div className='mt-3'>
                    Abount Us
                </div>
            </div>
            <div className='text-stone-500 basis-[20%] ml-6  text-left'>
                <div className='text-white text-2xl font-bold'>Blog</div>
                <div className='mt-7'>
                    Blog Fullwidth
                </div>
                <div className='mt-4'>
                    Blog Right Sidebr
                </div>
                <div className='mt-4'>
                    Blog Left Sidebr
                </div>
                <div className='mt-4'>
                    Search Result
                </div>
                <div className='mt-4'>
                    Search Nothing Found
                </div>
                <div className='mt-4'>
                    Blog Single Right Sidebar
                </div>
                <div className='mt-4'>
                    Blog Single Left Sidebar
                </div>
            </div>
            <div className='text-stone-500 basis-[40%] mx-6  text-left'>
                <div className='text-white text-2xl font-bold'>Contact</div>
                <div className='flex mt-7 text-white items-center'>
                    <div>
                        <div className='text-[27px] font-bold'>+ 1909 202 0119</div>
                        <div className='text-stone-400'>Round the clock support</div>
                    </div>
                    <div className='ml-5 '>
                        <div className='text-2xl my-1'>info@hellodg.ru</div>
                        <div className='text-stone-400'>For any questions</div>
                    </div>
                </div>
                <div className='flex mt-10  items-center'>
                        <img className='h-7' src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/24/ffffff/external-map-pin-user-interface-smashingstocks-glyph-smashing-stocks.png"/>
                        <div className='ml-5 text-white'>
                            <div>1355 Digistrict St, Suite 909 San, Francisco, CA 10001</div>  
                            <div>United States</div>
                        </div>
                </div>
                <div className='flex mt-8'>
                    <div>
                        <img src="https://img.icons8.com/fluency/45/000000/facebook-new.png"/>
                    </div>
                    <div className='rounded-full ml-3'>
                        <img src="https://img.icons8.com/3d-fluency/45/ffffff/3d-fluency-instagram-logo.png"/>
                    </div>
                    <div className=' ml-3'>
                        <img src="https://img.icons8.com/color/45/000000/pinterest--v1.png"/>
                    </div>
                    <div className='rounded-full  ml-3'>
                        <img src="https://img.icons8.com/color/45/000000/twitter--v1.png"/>
                    </div>
                    <div className='rounded-full  ml-3'>
                        <img src="https://img.icons8.com/color/45/000000/youtube-play.png"/>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-between items-center mx-10 text-stone-500 pt-4 pb-10'>
                <div>Privacy Policy</div>
                <div>Copyright © 2019 by Digistrict</div>
        </div>
    </div>
    </div>
  )
}
