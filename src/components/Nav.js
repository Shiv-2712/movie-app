import React from 'react';
import Logo from "../movie-logo.png"
import {Link}from 'react-router-dom';  //to prevent page from reloading again and again
function NavBar(){
    return<>
       <div className='border pl-8 py-4 flex space-x-8 items-center'>
            <img className = 'w-[100px] md:w-[180px] h-[30px]' src = {Logo} alt='logo'></img>
            <Link to='/' className='text-black-1000 font-bold text-xl md:text-3xl'>Movies</Link>
            <Link to ='favourites' className='text-black-1000 font-bold text-xl md:text-3xl'>Favourites</Link>
       </div>
        
    </> ;
}
export default NavBar;