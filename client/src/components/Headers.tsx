import { Avatar, Button, Dropdown, DropdownDivider, Navbar, TextInput } from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { User } from '../types';
import { toggleTheme } from '../redux/theme/themeSlice';




type Props = {}
const Headers = (props: Props) => {
    const dispatch = useDispatch();
    const path = useLocation().pathname;
    const currentUser = useSelector<RootState, User | null>(state => state.user.currentUser);
    const { theme }: any = useSelector<RootState>(state => state.theme);

    return (
        <Navbar className='border-b-2'>
            <Link to={'/'} className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Gad's</span>
                {' '}Blog
            </Link>

            <form>
                <TextInput
                    type='text'
                    placeholder='Search'
                    rightIcon={AiOutlineSearch}
                    className='hidden lg:inline'
                />
            </form>

            <Button className='w-12 h-10 lg:hidden' color='gray' pill>
                <AiOutlineSearch />
            </Button>

            <div className='flex items-center gap-2 md:order-2'>
                <Button
                    className='w-12 h-10 hidden lg:inline'
                    color='gray'
                    pill
                    onClick={() => dispatch(toggleTheme())}
                >
                    {
                        theme === 'light' ? <FaSun /> : <FaMoon />
                    }

                </Button>

                {currentUser ? (
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar
                                alt='user'
                                img={currentUser.profilePicture}
                                rounded
                            />
                        }
                    >
                        <Dropdown.Header>
                            <span className='block text-sm'>@{currentUser.username}</span>
                            {/* <span className='block text-sm font-medium truncate'>{currentUser.email}</span> */}
                        </Dropdown.Header>

                        <Link to={'/dashboard?tab=profile'}>
                            <Dropdown.Item>
                                Profile
                            </Dropdown.Item>
                        </Link>

                        <Dropdown.Divider />

                        <Dropdown.Item>
                            Sign Out
                        </Dropdown.Item>
                    </Dropdown>
                ) :
                    (<Link to={'/sign-in'}>
                        <Button gradientDuoTone='purpleToBlue' outline >
                            Sign In
                        </Button>
                    </Link>)
                }
                <Navbar.Toggle />
            </div >

            <Navbar.Collapse>
                <Navbar.Link active={path === '/'} as={'div'}>
                    <Link to={'/'} className={path === '/' ? 'text-purple-500' : 'text-gray-400'}>
                        Home
                    </Link>
                </Navbar.Link>

                <Navbar.Link active={path === '/about'} as={'div'}>
                    <Link to={'/about'} className={path === '/about' ? 'text-purple-500' : 'text-gray-400'}>
                        About
                    </Link>
                </Navbar.Link>

                <Navbar.Link active={path === '/projects'} as={'div'}>
                    <Link to={'/projects'} className={path === '/projects' ? 'text-purple-500' : 'text-gray-400'}>
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default Headers;