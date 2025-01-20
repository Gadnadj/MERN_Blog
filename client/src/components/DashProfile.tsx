import { useSelector, UseSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { User } from '../types';
import { Button, TextInput } from 'flowbite-react';

type Props = {}

const DashProfile = (props: Props) => {
    const currentUser = useSelector<RootState, User | null>((state) => state.user.currentUser);
    return (
        <div className='max-w-lg mx-auto p-3 w-full'>
            <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
            <form className='flex flex-col gap-4'>
                <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
                    <img src={currentUser?.profilePicture} className='rounded-full w-full h-full border-8 border-[lightgray] object-cover ' />
                </div>

                <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser?.username} />
                <TextInput type='text' id='email' placeholder='email' defaultValue={currentUser?.email} />
                <TextInput type='text' id='password' placeholder='**********' />
                <Button type='submit' gradientDuoTone='purpleToBlue' outline>
                    Submit
                </Button>
            </form>

            <div className='text-red-500 flex justify-between mt-5'>
                <span className='cursoir-pointer'>Delete Account</span>
                <span className='cursoir-pointer'>Logout</span>
            </div>
        </div>
    );
};

export default DashProfile;