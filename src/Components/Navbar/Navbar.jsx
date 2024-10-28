import PropTypes from 'prop-types';
import LInk from '../Link/LInk';
import { HiMenuAlt1 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';
import Link2 from '../Link2/Link2';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const userData = [
        { id: 1, path: "/users/alice", name: "Home" },
        { id: 2, path: "/users/bob", name: "About" },
        { id: 3, path: "/users/charlie", name: "Service" },
        { id: 4, path: "/users/diana", name: "Contract" },
        { id: 5, path: "/users/edward", name: "Projects" }
    ];

    return (
        <nav>
            <div className='md:hidden text-3xl cursor-pointer pt-6' onClick={() => setOpen(!open)}>
                {
                    open ? <IoCloseSharp /> : <HiMenuAlt1 />
                }
            </div>
            <ul className='flex flex-row items-center py-6 gap-8 justify-center max-md:hidden'>
                {
                    userData.map((data, index)=> <Link2 key={index} data={data}></Link2>)
                }
            </ul>
            <ul className={` 
                    ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'} 
                    md:flex gap-10 transition-all duration-300  absolute max-sm:bg-pink-300 rounded-xl p-3
                    ${open ? 'visible' : 'invisible'}
                `}>
                {
                    userData.map((userData) =>
                        <LInk key={userData.id} userData={userData} />
                    )
                }
            </ul>
        </nav>
    );
};

Navbar.propTypes = {};

export default Navbar;
