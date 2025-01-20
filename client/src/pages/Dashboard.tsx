import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
type Props = {}

const Dashboard = (props: Props) => {
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
        <div className='h-screen flex flex-col md:flex-row'>
            {/* Sidebar */}
            <div className='md:w-56'>
                <DashSidebar />
            </div>

            {/* Profile... */}
            {tab === 'profile' && <DashProfile />}
        </div>
    );
};

export default Dashboard;