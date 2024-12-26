import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";

const SignIn = () => {
  let { loginWithGoogle, setuser, setLoading, signInUser ,user} =
    useContext(authContext);

  let navigate = useNavigate();

  let handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        setuser(res.user);
        setLoading(false);
        toast.success("Sign-In successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let handleSignIn = (e) => {
    e.preventDefault();

    let form = new FormData(e.target);
    let email = form.get("email");
    let password = form.get("password");

    signInUser(email, password)
      .then((res) => {
        let user = res.user;
        setuser(user);
        setLoading(false);
        toast.success("Sign-In successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.warn(
          error.code == "auth/missing-email"
            ? "This email already user With google login"
            : error.code
        );
      });
  };

  return (
    <div>
      <div className=" mx-auto w-full max-w-sm  shadow-2xl my-20 p-5">
        <h1 className="text-4xl font-bold text-center">Login now!</h1>
        <form onSubmit={handleSignIn} className="">
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-black text-white hover:bg-black/80">
              Login
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
          don't you have any account?
          <Link className=" font-semibold" to="/signup">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
