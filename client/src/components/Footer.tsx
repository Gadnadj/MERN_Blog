import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';


type Props = {}

const FooterComponent = (props: Props) => {
    return (
        <Footer container className='border-t-8 border-teal-500'>
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid justify-between sm:flex md:grid-cols-1">
                    <div className="mt-5">
                        <Link to={'/'} className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                            <span className='px-2 py-1 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Gad's</span>
                            {' '}Blog
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title='About' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://www.gad-nadjar.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    100 JS PROJECTS
                                </Footer.Link>
                                <Footer.Link
                                    href='/about'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Gad's Blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>

                        <div>
                            <Footer.Title title='Follow Us' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://www.github.com/Gadnadj'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    GitHub
                                </Footer.Link>
                                <Footer.Link
                                    href='https://www.linkedin.com/in/gad-nadjar'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    LinkedIn
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>

                        <div>
                            <Footer.Title title='Follow Us' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='#'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Privicy Policy
                                </Footer.Link>
                                <Footer.Link
                                    href='#'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Terms &amp; Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>

                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href='#' by='Gad blog' year={new Date().getFullYear()} />
                    <div className="flex gap-6 sm:mt-2 mt-4 md:justify-center">
                        <Footer.Icon
                            className='hover:text-blue-500'
                            href='https://www.linkedin.com/in/gad-nadjar' icon={BsLinkedin} />
                        <Footer.Icon
                            className='hover:text-black'
                            href='https://github.com/Gadnadj' icon={BsGithub} />
                        <Footer.Icon
                            className='hover:text-pink-700'
                            href='https://www.instagram.com/gadnadj/' icon={BsInstagram} />
                        <Footer.Icon
                            className='hover:text-blue-500'
                            href='https://www.facebook.com/gad.nadjar' icon={BsFacebook} />
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default FooterComponent;