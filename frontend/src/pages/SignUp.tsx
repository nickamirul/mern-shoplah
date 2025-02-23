import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <div className='bg-white shadow-md rounded-lg p-6'>
        <form className='flex flex-col gap-4'>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold">Email</p>
            <input
              type='email'
              placeholder='email'
              className='border p-3 rounded-lg bg-white'
              id='email'
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold">Username</p>
            <input
              type='text'
              placeholder='username'
              className='border p-3 rounded-lg bg-white'
              id='username'
            />
          </div>  
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold">Password</p>
            <input
              type='password'
              placeholder='password'
            className='border p-3 rounded-lg bg-white'
            id='password'
            />
          </div>
          <button
            className='bg-blue-500 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
          >
            Sign Up
          </button>
        </form>
        <div className='flex gap-2 mt-3'>
          <p>Have an account?</p>
          <Link to='signin'>
            <span className="text-blue-500">Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
