import { Sidebar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { HiArrowSmRight, HiUser } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';


type Props = {}

const DashSidebar = (props: Props) => {

    const location = useLocation();
    const [tab, setTab] = useState<string>('');
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        console.log(tabFromUrl);
        if (tabFromUrl) {
            setTab(tabFromUrl);
        }
    }, [location]);

    return (
        <Sidebar className='w-full md:w-56'>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Link to='/dashboard?tab=profile'>
                        <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={'User'} labelColor='dark' as='div'>
                            Profile
                        </Sidebar.Item>
                    </Link>
                    <Sidebar.Item icon={HiArrowSmRight} >
                        Sign Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};

export default DashSidebar;