import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { FormData, User } from '../types';
import { Alert, Button, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { updateFailure, updateStart, updateSuccess } from '../redux/user/userSlice';



const DashProfile = () => {
    const currentUser = useSelector<RootState, User | null>((state) => state.user.currentUser);
    const [formData, setFormData] = useState<FormData>({ username: '', email: '', password: '' });
    const [updateUserSuccess, setUpdateUserSuccess] = useState<string | null>(null);
    const [updateUserError, setUpdateUserError] = useState<string | null>(null);
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(formData).every(value => value.trim() === '')) {
            setUpdateUserError('No changes made');
            return;
        }
        try {
            dispatch(updateStart());
            const res = await fetch(`/api/user/update/${currentUser?._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (data.error) {
                dispatch(updateFailure(data.message));
                setUpdateUserError(data.message);
            }
            else {
                dispatch(updateSuccess(data));
                setUpdateUserError('');
                setUpdateUserSuccess('User profile updated succcessfully');
            }
        } catch (error) {
            dispatch(updateFailure(error));
            if (error instanceof Error) {
                setUpdateUserError(error.message);
            } else {
                setUpdateUserError('An unknown error occurred');
            }
        }
    };

    console.log(formData);

    return (
        <div className='max-w-lg mx-auto p-3 w-full'>
            <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
                    <img src={currentUser?.profilePicture} className='rounded-full w-full h-full border-8 border-[lightgray] object-cover ' />
                </div>

                <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser?.username} onChange={handleChange} />
                <TextInput type='text' id='email' placeholder='email' defaultValue={currentUser?.email} onChange={handleChange} />
                <TextInput type='text' id='password' placeholder='**********' onChange={handleChange} />
                <Button type='submit' gradientDuoTone='purpleToBlue' outline>
                    Submit
                </Button>
            </form>

            <div className='text-red-500 flex justify-between mt-5'>
                <span className='cursor-pointer'>Delete Account</span>
                <span className='cursor-pointer'>Logout</span>
            </div>
            {updateUserSuccess && (
                <Alert color='success' className='mt-5'>
                    {updateUserSuccess}
                </Alert>
            )}

            {updateUserError && (
                <Alert color='failure' className='mt-5'>
                    {updateUserError}
                </Alert>
            )}
        </div>
    );
};

export default DashProfile;