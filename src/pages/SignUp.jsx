import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const SignUp = () => {
  let { loginWithGoogle, setuser, setloader, createUser } =
    useContext(authContext);
  let handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        setuser(res.user);
        setloader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  let handleRegister = (e) => {
    e.preventDefault();
    let form = new FormData(e.target)
    let name=form.get("name")
    let email=form.get("email")
    let photoUrl=form.get("photoUrl") 
    let password=form.get("password") 
   
    console.log(email,password,photoUrl,name);

    createUser(email,password)
    .then((res) => {
      let user = res.user;
      // update user default property
      user.photoURL=photoUrl
      user.displayName=name
      setuser(user)
    }).catch(error=>console.log(error)
    )
    
  };
  return (
    <div>
      <div className=" mx-auto w-full max-w-sm  shadow-2xl my-20 p-5 space-y-4">
        <h1 className="text-4xl font-bold text-center">Register now!</h1>
        <form className="" onSubmit={handleRegister}>
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
          all ready have an account
          <Link className=" font-semibold" to="/signin">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
