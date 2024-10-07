import logo from '../assets/imgs/logo.png';
import { useState } from 'react';
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import offline from '../assets/imgs/offline.png';
import online from '../assets/imgs/online.png';
import { useSelector } from 'react-redux';


const Header = () => {

    //subscribing to the STORE
    const cartItems = useSelector((store) => store.cart.items);


    const [authButton , setAuthButton] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return(
    <div className=''>
        <div className='p-4 bg-[#FFEA5F] fixed top-0 left-0 right-0 z-[1000] 570px:relative 570px:z-[1] 570px:top-0 flex justify-between items-center 570px:flex-col '>
            <Link to="/">
            <div className='flex items-center'>
                <img className='mx-2 h-16' src={logo} alt="logo" />
                <h1 className='text-5xl text-[#073263] font-bold'>YuTreat!</h1>
            </div>
            </Link>
            <div className='print-hidden'>
                <ul className='flex items-center px-4 font-[600] 350px:flex-col 350px:justify-center 350px:items-center 350px:text-center '>
                {console.log(offline, online)}
                    <li className='px-4 350px:w-full 350px:my-2 '> {onlineStatus?<img src={online} alt="online" />:<img src={offline} alt="offline" />} </li>
                    <li className='px-4 350px:w-full 350px:my-2'><Link to="/">Home</Link></li>
                    <li className='px-4 350px:w-full 350px:my-2'><Link to="/about">About</Link></li>
                    <li className='px-4 350px:w-full 350px:my-2'><Link to="/contacts">Contacts</Link></li>
                    <li className='px-4 350px:w-full 350px:my-2'><Link to="/cart">Cart ({cartItems.length})</Link></li>
                    <li className='px-4 350px:w-full 350px:my-2'>
                        <button className='bg-[orange] text-white px-4 py-2 rounded-3xl border border-blue-900'
                                             onClick = {()=>{
                            setAuthButton(authButton==="Login" ? "Logout" : "Login");
                        }}>{authButton}</button>
                    </li>
                </ul>
            </div>
        </div>
        <div className="header-spacer h-[90px] 570px:h-0"></div>
    </div>
)};

export default Header;