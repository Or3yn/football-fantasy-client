import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/login.tsx';
import './index.css';

const App: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
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
                                    ANALYSIS
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
                                <div className="absolute bg-center mt-8 w-40 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none">
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
                <main className="flex-1 flex flex-col items-center justify-center relative" style={{
                    backgroundImage: 'url("background.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="text-center z-10">
                        <h1 className="text-5xl font-bold text-gray-900">Football Fantasy Game</h1>
                        <p className="text-xl mt-4 text-gray-700">Tournaments, news, wide community, football league,
                            tactics, analysis of matches and teams – here’s everything to simulate real manager’s
                            work.</p>
                    </div>
                    <div className="mt-12 flex justify-center space-x-8 w-full text-center z-10">
                        <div className="inline-block max-w-xs">
                            <h2 className="text-2xl font-bold">1. Sign up</h2>
                            <hr className="my-2 border-gray-300"/>
                            <p className="text-left text-xl mt-2 text-gray-700">Create your account, tell us about your
                                preferences and start building your dream team.</p>
                        </div>
                        <div className="inline-block max-w-xs">
                            <h2 className="text-2xl font-bold">2. Manage team</h2>
                            <hr className="my-2 border-gray-300"/>
                            <p className="text-left text-xl mt-2 text-gray-700">Take on the role of a manager.
                                Strategize and optimise your team of 15 people for maximum points.</p>
                        </div>
                        <div className="inline-block max-w-xs">
                            <h2 className="text-2xl font-bold">3. Compete</h2>
                            <hr className="my-2 border-gray-300"/>
                            <p className="text-left text-xl mt-2 text-gray-600">Join or create competitions and
                                challenge other players. Score the most points throughout the season.</p>
                        </div>
                    </div>
                </main>
                {showModal && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-500">
                        <div className="bg-white p-6 rounded-3xl shadow-2xl z-50 bg-cover bg-center w-3/6 h-4/6" style={{backgroundImage: 'url("cookies.png")'}}>
                            <h2 className="mt-6 text-center text-4xl font-bold text-gray-900">We Care About Your Privacy</h2>
                            <p className="text-left text-xl mt-16 text-gray-700 text-justify mx-16">We ask you to consent to the use of cookies to store and access personal data on your device, such as unique identifiers and standard information sent by a device for personalised ads and contents, as well to develop and improve products. You don’t have to consent in order to view content on this site. You can change settings at any time by clicking at the “Cookie settings” down in footer.</p>
                            <div className="flex items-center justify-center space-x-4 mt-12">
                                <button className="flex items-center bg-[linear-gradient(to_right,_#C4D665_6%,_#8FDA6C_62%,_#799245_100%)] text-white px-10 py-2 rounded-full transition-transform transform hover:-translate-y-1 active:-translate-y-0.3" onClick={() => setShowModal(false)}>Okay</button>
                                <button className="flex items-center border border-black text-black px-10 py-2 rounded-full transition-transform transform hover:-translate-y-1 active:-translate-y-0.3" onClick={() => setShowModal(false)}>Skip</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Routes>
                <Route path="/login" Component={Login} />

            </Routes>
        </Router>
    );
};

export default App;