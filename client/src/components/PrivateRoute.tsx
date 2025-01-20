import { useSelector } from 'react-redux';
import { User } from '../types';
import { RootState } from '../redux/store';
import { Outlet, Navigate } from 'react-router-dom';

type Props = {}

const PrivateRoute = (props: Props) => {
    const currentUser = useSelector<RootState, User | null>((state) => state.user.currentUser);
    console.log(currentUser);

    return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
};

export default PrivateRoute;