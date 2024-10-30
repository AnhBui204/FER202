import React from 'react'
import IconRating from "../images/star.png"
import IconRatingHaft from "../images/haftStar.png"
import Joker from "../images/Joker.jpg"
import Play from "../images/play.png"

const Banner = () => {
    return (
        <div className="bg-banner bg-no-repeat bg-cover bg-center w-full h-[600px] relative">
            <div className='absolute w-full h-full top-0 left-0 bg-black opacity-40' />
            <div className='row w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20'>
                <div className='w-[50%] flex justify-center flex-col space-x-5 space-y-4 items-baseline'>
                    <p className='text-white bg-gradient-to-r from-red-600 to-red-300 py-1 px-3 rounded-sm'>
                        TV Show
                    </p>
                    <div className='flex flex-col space-y-4'>
                        <h2 className='text-white text-[40px] font-bold'>Joker: Super Saiya</h2>
                        <div className='flex items-center space-x-3'>
                            <img src={IconRating} className='w-8 h-8' />
                            <img src={IconRating} className='w-8 h-8' />
                            <img src={IconRating} className='w-8 h-8' />
                            <img src={IconRating} className='w-8 h-8' />
                            <img src={IconRatingHaft} className='w-8 h-8' />
                        </div>
                    </div>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, eius! Corrupti laudantium magni velit sit pariatur a nisi tenetur repellat enim et, tempore aliquam aliquid fuga at beatae excepturi quam?</p>
                    <div className='flex items-center space-x-4'>
                        <button type='submit' className='bg-white text-blacsk py-1 px-2 rounded-sm'>Chi tiết</button>
                        <button type='submit' className='bg-red-600 text-white py-1 px-2 rounded-sm'>Xem Phim</button>
                    </div>
                </div>
                <div className='w-[50%] flex items-center justify-center'>
                    <div className='flex justify-center w-[300px] h-[400px] relative group'>
                        <img src={Joker} className='w-full h-full object-cover' />
                        <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
                            <img src={Play} className='w-16 h-16 relative z-20 ' />
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Banner