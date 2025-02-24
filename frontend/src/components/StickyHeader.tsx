import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { RootState } from '../redux/store'; // Assuming you have a RootState type

const StickyHeader = () => {
    const { currentUser } = useSelector((state: any) => state.user);
    const navigate = useNavigate()

    console.log("Current User:", currentUser); // Debugging line to check the user object

    return (
        <div className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    ShopLah
                </Link>
                <form className="flex items-center gap-4 border border-gray-300 rounded-md p-2">
                    <input type="text" placeholder="Search" className='outline-none' />
                    <button type="submit" >
                        <FaSearch />
                    </button>
                </form>
                <div className="flex items-center gap-4">
                    <FaShoppingCart />
                    
                    <Link to="/profile">
                        {currentUser ? (
                            currentUser.avatar !== "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" ? (
                                <img
                                    src={currentUser.avatar}
                                    alt="profile"
                                    className="rounded-full h-7 w-7 object-cover"
                                    onError={(e) => { e.currentTarget.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"; }}
                                />
                            ) : (
                                <FaUser  />
                            )
                        ) : (
                            <button onClick={() => navigate('/signin')} className="bg-blue-500 text-white p-2 rounded-md">
                                <p className="text-black hover:opacity-70">Sign In</p>
                            </button>
                        )}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default StickyHeader