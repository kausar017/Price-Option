
import PropTypes from 'prop-types';
import LInk from '../Link/LInk';
import { HiMenuAlt1 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen]=useState(false)

    const userData = [
        { id: 1, path: "/users/alice", name: "Home" },
        { id: 2, path: "/users/bob", name: "Avout" },
        { id: 3, path: "/users/charlie", name: "Service" },
        { id: 4, path: "/users/diana", name: "Contract" },
        { id: 5, path: "/users/edward", name: "Projects" }
    ];

    return (
        <nav>
            <div className=' md:hidden text-3xl cursor-pointer pt-6' onClick={()=> setOpen(!open)}>
                {
                    open === true ? <IoCloseSharp></IoCloseSharp> : <HiMenuAlt1 className=''></HiMenuAlt1>
                }
                
            </div>
            <ul className={`
                    ${open ? 'top-12' : '-top-60'}
                md:flex gap-10 items-center duration-1000 justify-center absolute max-md:bg-pink-300 rounded-md p-3`}>
                {
                    userData.map((userData, index) =>
                        <LInk key={userData.id} userData={userData}></LInk>
                    )
                }
            </ul>
        </nav>
    );
};

Navbar.propTypes = {

};

export default Navbar;