import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const SignIn = () => {
  let {loginWithGoogle,setuser,setloader}=useContext(authContext)
  let handleGoogleLogin=()=>{
    loginWithGoogle()
    .then(res=>{
      setuser(res.user)
      setloader(false)
    })
    .catch((error)=>{
      console.log(error);
      
    })
  }
  return (
    <div>
      <div className=" mx-auto w-full max-w-sm  shadow-2xl my-20 p-5">
      <h1 className="text-4xl font-bold text-center">Login now!</h1>
        <form className="">
        
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
          <button className="btn bg-black text-white hover:bg-black/80">Login</button>
          </div>
        </form>
        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className="btn w-full bg-black text-white hover:bg-black/80">Login With Google</button>
        <div className="text-center">don't you have any account?<Link className=" font-semibold" to="/signup">Register</Link></div>
      </div>
    </div>
  );
};

export default SignIn;
