import React from 'react';
import {Link} from "react-router-dom";


const Login: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white shadow h-13 relative">
                <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                    <div className="flex items-center">
                        <img src="logo.png" alt="Football Fantasy" className="h-7 w-8"/>
                        <span className="ml-3 text-xl font-bold">Football Fantasy</span>
                    </div>
                    <div className="space-x-10 ml-44 relative flex items-center">
                        <a href="#" className="text-gray-700 hover:text-gray-900 font-semibold ml-4">FIXTURES</a>
                        <div className="relative group ml-4">
                            <a href="#"
                               className="text-gray-700 hover:text-gray-900 font-semibold flex items-center">
                                ANALUSIS
                                <img src="/triangle.svg" alt="Triangle"
                                     className="w-2.5 h-2.5 ml-2 transform transition-transform group-hover:rotate-180"/>
                            </a>
                            <div
                                className="absolute bg-center mt-8 w-56 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none">
                                <a href="#"
                                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Standings</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Articles</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Find and
                                    analyze match</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">AI
                                    forecast</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Trends
                                    analysis</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Football
                                    player comparison</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Team
                                    comparison</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Personal
                                    advices</a>
                            </div>
                        </div>
                        <div className="relative group ml-4">
                            <a href="#"
                               className="text-gray-700 hover:text-gray-900 font-semibold flex items-center">PLAY
                                NOW
                                <img src="/triangle.svg" alt="Triangle"
                                     className="w-2.5 h-2.5 ml-2 transform transition-transform group-hover:rotate-180"/>
                            </a>
                            <div
                                className="absolute  bg-center mt-8 w-56 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">How to
                                    play</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Start a new
                                    game</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Load manager
                                    game </a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Join online
                                    game </a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Drafts list
                                    status </a>
                            </div>
                        </div>
                        <div className="relative group ml-4">
                            <a href="#"
                               className="text-gray-700 hover:text-gray-900 font-semibold flex items-center">
                                SOCIAL MEDIA
                                <img src="/triangle.svg" alt="Triangle"
                                     className="w-2.5 h-2.5 ml-2 transform transition-transform group-hover:rotate-180"/>
                            </a>
                            <div
                                className="absolute  bg-center mt-8 w-56 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Forums</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Chat
                                    game</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Lorem ipsum
                                    game </a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Friends
                                    Score</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Create user
                                    league</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Watch
                                    live</a>
                            </div>
                        </div>
                        <div className="relative group ml-4">
                            <a href="#"
                               className="text-gray-700 hover:text-gray-900 font-semibold flex items-center">
                                REWARDS
                                <img src="/triangle.svg" alt="Triangle"
                                     className="w-2.5 h-2.5 ml-2 transform transition-transform group-hover:rotate-180"/>
                            </a>
                            <div
                                className="absolute bg-center mt-8 w-40 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Daily
                                    task</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Weekly
                                    task</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Reward
                                    list</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/login">
                            <button
                                className="bg-[linear-gradient(to_right,_#C4D665_6%,_#8FDA6C_62%,_#799245_100%)] text-white px-10 py-2 rounded-full transition-transform transform hover:-translate-y-1 active:-translate-y-0.5">LOGIN
                            </button>
                        </Link>
                        <div className="relative">
                            <img src="bells1.svg" alt="Notifications" className="h-6 w-6"/>
                            <span
                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">2</span>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Login;