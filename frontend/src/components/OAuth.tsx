import { useDispatch } from "react-redux";
import { app } from "../firebase";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const OAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleClick = async () => {
        try {
            console.log("handleGoogleClick");
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            console.log("auth", auth);
            const result = await signInWithPopup(auth, provider);
            const res = await fetch("/v1/auth/google",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                    firstName: result.user.firstName,
                    lastName: result.user.lastName,
                }),
            });
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate("/");
        } catch (error) {
            console.log('error in google auth', error);
        }
    }
    return (
        <button
            onClick={handleGoogleClick}
            type="button"
            className="bg-white text-black p-3 border border-gray-300 rounded-lg uppercase hover:bg-gray-50 flex items-center justify-center gap-2"
        >
            <img src="/src/assets/GoogleIcon.png" alt="google" className="w-6" />
            Continue with Google
        </button>)
}

export default OAuth;