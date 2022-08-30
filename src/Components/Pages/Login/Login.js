import React, { useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useUpdatePassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";
import ResetPass from "./ResetPass";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, logUser, CULoading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [user, loading] = useAuthState(auth);

  // const [email, setEmail] = useState(user?.email);
  const [resetEmail, setResetEmail] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  if (CULoading || loading) {
    return <Loading></Loading>;
  }

  if (resetEmail) {
    return <ResetPass setResetEmail={setResetEmail}></ResetPass>;
  }

  const onSubmit = (data) => {
    // console.log(data);
    const email = data.email;
    const password = data.password;
    // console.log(data, error);
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="card mx-auto my-5 p-8 sm:p-3 card-compact sm:w-96 bg-base-100 shadow-2xl">
      <h1 className="text-center text-2xl font-bold">Please Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label class="label">
          <span class="label-text text-xl font-bold">Email:</span>
        </label>
        <input
          {...register("email", { required: true })}
          className="input input-bordered my-1 input-primary focus:outline-none w-full "
        />
        <label class="label">
          <span class="label-text-alt text-base font-semibold text-red-600">
            {errors.email?.type === "required" && "Email is required"}
          </span>
        </label>
        <label class="label">
          <span class="label-text text-xl font-bold">Password:</span>
        </label>
        <div>
          <input
            type="password"
            {...register("password", { required: true })}
            className="input input-bordered my- input-primary focus:outline-none w-full "
          />
          <label class="label">
            <span class="label-text-alt text-base font-semibold text-red-600">
              {errors.password?.type === "required" && "Password is required"}
            </span>
          </label>
        </div>

        <span class="label-text-alt text-base font-semibold text-red-600">
          {error && " Email or Password is n't correct"}
        </span>

        <div>
          <input
            type="submit"
            value="LogIn"
            className="btn w-full my-2 btn-success "
          />
        </div>
      </form>

      <div className=" flex justify-between text-right my-2">
        <div className=" flex items-center gap-2">
          <input onClick={""} type="checkbox" name="" id="tramsCondition" />
          <label htmlFor="tramsCondition">
            <span className=" mx-1 cursor-pointer text-[16px] font-semibold">
              Remember me
            </span>
          </label>
        </div>
        <button
          onClick={() => setResetEmail(true)}
          className=" cursor-pointer text-[18px] font-semibold text-green-500 hover:text-green-600"
        >
          Reset Password
        </button>
      </div>

      <div class="divider"></div>
      <div>
        <p className=" font-medium">
          Don't have an account?
          <Link
            to="/signup"
            className="text-[16px] mx-1 font-semibold text-green-600"
          >
            Sign Up Now
          </Link>
        </p>
      </div>
      <div class="divider">OR</div>
      <div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
