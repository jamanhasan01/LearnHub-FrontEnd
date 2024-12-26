import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  let { loginWithGoogle, setuser, setLoading, createUser, updateUserProfile } =
    useContext(authContext);
  let navigate = useNavigate();

  let handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        setuser(res.user);
        setLoading(false);
        toast.success("Sign-Up successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);  // Use error.message for better readability
      });
  };

  let handleRegister = (e) => {
    e.preventDefault();
    let form = new FormData(e.target);
    let name = form.get("name");
    let email = form.get("email");
    let photoUrl = form.get("photoUrl");
    let password = form.get("password");

    createUser(email, password)
      .then((res) => {
        let user = res.user;

        setuser(user);
        updateUserProfile({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setLoading(false);
            toast.success("Sign-Up successfully");
            navigate('/');
          })
          .catch((error) => {
            toast.error(error.message); // Use error.message
            setLoading(false);
          });
      })
      .catch((error) => {
        toast.warn(error.message);  // Use error.message for better readability
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="mx-auto w-full max-w-sm shadow-2xl my-20 p-5 space-y-4">
        <h1 className="text-4xl font-bold text-center">Register now!</h1>
        <form onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="url"
              name="photoUrl"
              placeholder="Photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <span
              className="absolute right-3 top-12 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-black text-white hover:bg-black/80">
              Register
            </button>
          </div>
        </form>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="btn w-full bg-black text-white hover:bg-black/80"
        >
          Login With Google
        </button>
        <div className="text-center">
          Already have an account?
          <Link className="font-semibold" to="/signin">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
