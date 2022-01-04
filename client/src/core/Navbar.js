import React from 'react'


const Navbar = () => {

    return (
    <div className="bg-blue-500 flex items-center justify-between p-7 text-white">
        <div className="cursor-pointer">Real connect</div>
        <div className="flex items-center">
            <div className="mx-2 cursor-pointer">login</div>
            <div className="mx-2 cursor-pointer">Register</div>
        </div>
    </div>
    )
}

export default Navbar;