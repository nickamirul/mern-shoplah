import SignIn from '@/pages/SignIn'
import React from 'react'
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const StickyHeader = () => {
    return (
        <div className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    ShopLah
                </Link>
                <form className="flex items-center gap-4 border border-gray-300 rounded-md p-2">
                    <input type="text" placeholder="Search"  className='outline-none'/>
                    <button type="submit" >
                        <FaSearch />
                    </button>
                </form>
                <div className="flex items-center gap-4">
                    <FaShoppingCart />
                    <FaUser />
                    <Link to="/signin">
                        <SignIn />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default StickyHeader