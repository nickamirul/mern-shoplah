import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const {loading, error} = useSelector((state: any) => state.user);
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
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        // dispatch(signInFailure(data.message));
        dispatch(signInFailure("Invalid email or password"));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error: any) {
      dispatch(signInFailure(error.message));
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
          <Button
            disabled={loading}
            className='bg-black text-white p-6 text-lg rounded-lg uppercase hover:bg-black/80 disabled:opacity-80'
          >
            {loading ? 'Loading...' : 'Sign In'}
          </Button>
          <p className="text-sm text-center">or sign in with</p>
          <OAuth />
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
