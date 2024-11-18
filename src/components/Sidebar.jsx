import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();


    return (
        <div className="w-[25%] h-full p-2 flex flex-col gap-2 text-white lg:flex bg-[#121212]">
            {/* Top Section: Home and Search */}
            <div className="h-[15%] rounded flex flex-col justify-around">
                <div onClick={()=>navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img className="w-6" src={assets.home_icon} alt="Home" />
                    <p className="font-bold">Home</p>
                </div>
                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img className="w-6" src={assets.search_icon} alt="Search" />
                    <p className="font-bold">Search</p>
                </div>
            </div>

            {/* Main Section: Your Library */}
            <div className="h-[85%] rounded flex flex-col p-4 bg-[#121212]">
                {/* Your Library Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <img className="w-8" src={assets.stack_icon} alt="Your Library" />
                        <p className="font-semibold">Your Library</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img className="w-5" src={assets.arrow_icon} alt="Arrow" />
                        <img className="w-5" src={assets.plus_icon} alt="Plus" />
                    </div>
                </div>

                {/* Create Playlist Section */}
                <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start">
                    <h1 className="text-lg">Create your first playlist</h1>
                    <p className="font-light text-sm">It's easy, we will help you</p>
                    <button className="px-4 py-2 bg-white text-[15px] text-black rounded-full mt-4">
                        Create Playlist
                    </button>
                </div>

                {/* Browse Podcast Section */}
                <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start">
                    <h1 className="text-lg">Let's find some podcasts to follow</h1>
                    <p className="font-light text-sm">We'll keep you updated on new episodes</p>
                    <button className="px-4 py-2 bg-white text-[15px] text-black rounded-full mt-4">
                        Browse Podcasts
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
