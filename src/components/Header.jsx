import React from 'react'
import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';
import { MdShoppingBasket } from "react-icons/md";
import { app } from "../firsebase.config";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const login = async () => {
        const response = await signInWithPopup(firebaseAuth, provider);
        console.log(response);
    }
    return (
        <header className='fixed z-50 w-screen p-6 px-16'>
            {/* desktop or Tablet */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={Logo} className="w-10 object-cover" alt="logo" />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </div>
                <div className='flex items-center gap-8'>
                    <ul className='flex items-center gap-8'>
                        <Link to={'/'} className='text-base text-textColor hover:text-headingColor duration-100 
            trasition-all ease-in-out cursor-pointer'>Home</Link>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 
            trasition-all ease-in-out cursor-pointer'>Menu</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 
            trasition-all ease-in-out cursor-pointer'>About</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 
            trasition-all ease-in-out cursor-pointer'>Service</li>
                    </ul>
                    <div className='relative flex items-center justify-center'>
                        <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                        <div className=' absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className='text-xs text-white font-semibold'>2</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <motion.img
                            whileTap={{ scale: 0.6 }}
                            src={Avatar}
                            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer"
                            alt="userProfile"
                            onClick={login}
                        />
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className='flex md:hidden w-full h-full bg-blue-600 p-4'>

            </div>
        </header>
    )
}

export default Header;