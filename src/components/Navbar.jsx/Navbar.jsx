import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { CiLogin } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";


const Navbar = () => {

    const { userSignOut, user, Name, photo, } = useContext(AuthContext)

    const NabList = <>
        <NavLink to='/' className=' mr-3 text-sm font-montserrat '><a>Home</a></NavLink>
        <NavLink to='/travel' className='  mr-3 text-sm font-montserrat'><a>TravelTips</a></NavLink>
        <NavLink to='/privateEvents' className='  mr-3 text-sm font-montserrat'><a>PrivateEvents</a></NavLink>
        {

            user && (
                <>
                    <NavLink to='/userProfile' className='  mr-3 text-sm font-montserrat'><a> UserProfile</a></NavLink>
                    <NavLink to='/updateProfile' className='  mr-3 text-sm font-montserrat'><a>UpdateProfile</a></NavLink>
                </>
            )
        }
    </>

    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown z-10">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NabList}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <div className=' w-10 md:w-16  -m-2  lg:w-20 '>
                        <img src="https://i.ibb.co/tYShWGR/depositphotos-183079166-stock-illustration-hotel-tourism-holiday-summer-beach.webp" alt="" />
                    </div>
                    <a className="text-xl md:text-2xl pl-2  lg:text-3xl font-bold font-montserrat flex items-center"> Stay<span className=' text-[#90B0B7]'>Sage</span></a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NabList}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <><a className="flex gap-1 items-center font-bold  text-sm lg:text-lg font-montserrat  btn btn-outline btn-info " onClick={() => userSignOut()}> <FiLogOut className='text-xl ' /> Logout</a>
                    <div className="">
                        <div className="group relative cursor-pointer py-2">

                            <div className="flex items-center justify-between space-x-5 bg-white px-4">
                                <a className="menu-hover  " onClick="">
                                    <div className="avatar">
                                        <div className="w-12  rounded-full">
                                            <img src={user.photoURL || photo} />
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div
                                className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                                <a className="my-2 block border-b  w-full border-gray-100  font-semibold text-gray-500 hover:text-black ">
                                    {user.displayName || Name}
                                </a>

                            </div>
                        </div>
                    </div></> : <Link to='./login'><button className='flex gap-1 items-center font-bold text-base lg:text-lg font-montserrat  btn btn-outline btn-info '><CiLogin className='text-xl' /> Login</button></Link>}
            </div>
        </div>
    )
}

export default Navbar

