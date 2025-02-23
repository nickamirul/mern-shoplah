import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const StickyHeader = () => {
    const navigate = useNavigate()
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
                    <button onClick={() => navigate('/signin') } className='bg-blue-500 text-white p-2 rounded-md'>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default StickyHeader