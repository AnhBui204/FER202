import React from 'react'

const Header = () => {
    return (
        <header className='p-4 bg-black flex item-center justify-between'>
            <div className='flex items-center space-x-4'>
                <h1 className='text-[40px] uppercase font-blod text-red-700'>MOVIE</h1>
                <nav className='flex items-center space-x-4'>
                    <a href='#' className='text-white'>Home</a>
                    <a href='#' className='text-white'>About</a>
                    <a href='#' className='text-white'>Contact</a>
                </nav>
            </div>
            <div className='flex items-center space-x-4'>
                <input type='text' placeholder='Search' className='form-control p-2 rounded-lg' />
                <button type='submit' className='bg-red-600 text-white btn p-1 rounded-lg' >Search</button>
            </div>
        </header>
    )
}

export default Header