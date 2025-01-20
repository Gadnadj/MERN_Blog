import { useSelector, UseSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { User } from '../types';
import { Button, TextInput } from 'flowbite-react';
import { useState } from 'react';

type Props = {}

const DashProfile = (props: Props) => {
    const currentUser = useSelector<RootState, User | null>((state) => state.user.currentUser);
    const [imageFile, setImageFile] = useState<string | null>(null);
    const [imageFileUrl, setImageFileUrl] = useState<string | null>(null);
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(URL.createObjectURL(e.target.files[0]));
            setImageFileUrl(URL.createObjectURL(e.target.files[0]));
        }
    };

    console.log(imageFile);
    console.log(imageFileUrl);

    return (
        <div className='max-w-lg mx-auto p-3 w-full'>
            <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
            <form className='flex flex-col gap-4'>
                <input type="file" accept='image/*' onChange={handleImageChange} />
                <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
                    <img src={imageFileUrl || currentUser?.profilePicture} className='rounded-full w-full h-full border-8 border-[lightgray] object-cover ' />
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