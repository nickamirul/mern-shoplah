import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
// import { Button } from "@/components/ui/button";

interface FormData {
  email: string;
  password: string;
}

interface UserState {
  loading: boolean;
  error: string | null;
}

const SignIn = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const { loading, error } = useSelector((state: { user: UserState }) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // console.log(formData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/v1/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to sign in');
      }

      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure((error as Error).message));
    }
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <div className='bg-white shadow-md rounded-lg p-6'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold">Email</p>
            <input
              type='email'
              placeholder='email'
              className='border p-3 rounded-lg bg-white'
              id='email'
              onChange={handleChange}
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold">Password</p>
            <input
              type='password'
              placeholder='password'
              className='border p-3 rounded-lg bg-white'
              id='password'
              onChange={handleChange}
            />
          </div>
          <button
            disabled={loading}
            className='bg-blue-500 text-white p-3 rounded-lg uppercase hover:bg-blue-600 disabled:opacity-80'
          >
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </form>
        <div className='flex gap-2 mt-3'>
          <p>Don't have an account?</p>
          <Link to='/signup'>
            <span className="text-blue-500">Sign Up</span>
          </Link>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SignIn;
