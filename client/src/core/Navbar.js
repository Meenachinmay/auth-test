import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
    <div className="bg-blue-500 flex items-center justify-between p-7 text-white">
        <Link to="/">Real connect</Link>
        <div className="flex items-center">
            <Link to='/register' className="mx-2 cursor-pointer">Register</Link>
            <Link to='/login' className="mx-2 cursor-pointer">Login</Link>
        </div>
    </div>
    )
}

export default Navbar;