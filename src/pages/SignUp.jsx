import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className=" mx-auto w-full max-w-sm  shadow-2xl my-20 p-5 space-y-4">
      <h1 className="text-4xl font-bold text-center">Register now!</h1>
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
        <button className="btn w-full bg-black text-white hover:bg-black/80">Login With Google</button>
        <div className="text-center">all ready have an account<Link className=" font-semibold" to="/signin">Login</Link></div>
      </div>
    </div>
  );
};

export default SignUp;
