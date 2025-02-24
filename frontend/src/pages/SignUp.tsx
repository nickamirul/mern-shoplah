import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import OAuth from "@/components/OAuth";
import { Button } from "@/components/ui/button";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/signin');
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  };
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
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold">Username</p>
            <input
              type='text'
              placeholder='username'
              className='border p-3 rounded-lg bg-white'
              id='username'
              onChange={handleChange}
            />
          </div>  
          <div className="flex flex-col gap-2 relative">
            <p className="text-sm font-semibold">Password</p>
            <input
              type={showPassword ? "text" : "password"}
              placeholder='password'
              className='border p-3 rounded-lg bg-white'
              id='password'
              onChange={handleChange}
            />
             <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-[50px] transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          <Button
            onClick={handleSubmit}
            className='bg-black text-white p-6 text-lg rounded-lg uppercase hover:bg-black/80 disabled:opacity-80'
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </Button>
          <p className="text-sm text-center">or sign up with</p>
          <OAuth />
        </form>
        <div className='flex gap-2 mt-3'>
          <p>Have an account?</p>
          <Link to='/signin'>
            <span className="text-blue-500">Sign In</span>
          </Link>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SignUp;
