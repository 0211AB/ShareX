import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from '../../assets/logo.png'
import { categories } from '../../utils/data'

const isNotActiveStyle = 'flex items-center px-5 gap-3 flex p-2 items-center bg-white rounded-lg shadow-lg mx-3 hover:text-sky-500 transition-all duration-200 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize';

const SideBar = ({ closeToggle, user }) => {
    const handleCloseSideBar = () => {
        if (closeToggle) closeToggle(false);
    };

    return (
        <div className="flex flex-col justify-between bg-sky-500 h-full overflow-y-scroll min-w-210 hide-scrollbar">
            <div className="flex flex-col px-2">
                <Link
                    to="/"
                    className="flex px-5 gap-2 my-6 pt-1 items-center justify-center"
                    onClick={handleCloseSideBar}
                >
                    <img src={logo} alt="logo" className="w-20" />
                    <h1 className="mt-2 px-5 text-white" style={{fontSize:"2rem"}}>SHAREX</h1>
                </Link>
                <div className="flex flex-col gap-5">
                    {categories.slice(0, categories.length - 1).map((category) => (
                        <NavLink
                            to={`/category/${category.name}`}
                            className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
                            onClick={handleCloseSideBar}
                            key={category.name}
                        >
                            <img src={category.image} className="w-10 h-10 rounded-full shadow-sm" />
                            {category.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            {user && (
                <Link
                    to={`user-profile/${user._id}`}
                    className="flex my-5 mb-3 gap-2 p-2 items-center justify-end divide-gray-300/50 rounded-lg shadow-lg mx-3"
                    onClick={handleCloseSideBar}
                >
                    <img src={user.image} className="w-10 h-10 rounded-full" alt="user-profile" />
                    <p>{user.username}</p>
                </Link>
            )}
        </div>
    );
};

export default SideBar;