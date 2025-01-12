import {FaSignOutAlt, FaVolleyballBall} from 'react-icons/fa'
import {Link, NavLink} from "react-router";

const Header = () => {
    const isAuth=true;
    return (
        <header className="flex items-center px-10 py-4 bg-slate-800 shadow-sm backdrop-blur-sm">
            <Link to="/">
                <FaVolleyballBall size={40} />
            </Link>


            {/*Menu*/}
            {isAuth && (
                    <nav className='ml-auto mr-10 '>
                        <ul className='flex items-center gap-5'>
                            <li>
                                <NavLink to={'/'} className={({isActive}) =>
                                isActive?'text-white':'text-white/50'
                                }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/journal'}  className={({isActive}) =>
                                    isActive?'text-white':'text-white/50'
                                }
                                >
                                    Journal
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/catalog'} className={({isActive}) =>
                                    isActive?'text-white':'text-white/50'
                                }
                                >
                                    Catalog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/more'} className={({isActive}) =>
                                    isActive?'text-white':'text-white/50'
                                }
                                >
                                    More
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                )}

            {isAuth ? (
                <button
                    className="btn btn-red w-30 h-8">
                    <span>Log Out</span>
                    <FaSignOutAlt/>
                </button>
            ) : (
                <Link className='py-2 text-white/50 hover:text-white ml-auto' to={'auth'}>
                    Log In / Sign In
                </Link>
            )}

        </header>
    );
};


export default Header;
