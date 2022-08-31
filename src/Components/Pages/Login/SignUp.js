import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SocialLogin from "./SocialLogin";

// import { getAuth, sendEmailVerification } from "firebase/auth";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading";
import useToken from "../../utilites/useToken";

const SignUp = () => {
  const [createUserWithEmailAndPassword, CUser, CULoading, uCError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, uPError] = useUpdateProfile(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [user, loading] = useAuthState(auth);
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [token] = useToken(user || CUser);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  //

  if (user && token) {
    navigate(from, { replace: true });
  }

  if (CULoading || updating || sending || loading) {
    return <Loading></Loading>;
  }

  const onSubmit = async (data) => {
    const displayName = data.name;
    const email = data.email;
    const password = data.new_password;
    const confirmPassword = data.confirm_password;
    // const user = { displayName, email };
    // console.log(data);

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
      if (uCError) {
        await setError("Already have an account");
      } else {
        await updateProfile({ displayName });
        await sendEmailVerification();
        await toast.success("Email verification send");
        setError("");
      }
      // await console.log();
    } else {
      setError("NewPassword & confirmPassword not matched.");
    }
  };

  return (
    <div className="card mx-auto my-5 p-5 card-compact w-96 bg-base-100 shadow-2xl">
      <h1 className="text-center text-2xl font-bold">
        Please <span className=" text-success">SignUp</span>
      </h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label class="label">
              <span class="label-text text-xl font-bold">Name:</span>
            </label>
            <input
              {...register("name", { required: true })}
              className="input input-bordered my-2 input-primary w-full "
            />
            <label class="label">
              <span class="label-text-alt text-base font-semibold text-red-600">
                {errors.name?.type === "required" && "Name is required"}
              </span>
            </label>
          </div>

          <div>
            <label class="label">
              <span class="label-text text-xl font-bold">Email:</span>
            </label>
            <input
              {...register("email", { required: true })}
              className="input input-bordered my-2 input-primary w-full "
            />
            <label class="label">
              <span class="label-text-alt text-base font-semibold text-red-600">
                {errors.email?.type === "required" && "Email is required"}
              </span>
            </label>
          </div>

          <div>
            <label class="label">
              <span class="label-text text-xl font-bold">New Password:</span>
            </label>
            <input
              type="password"
              {...register("new_password", { required: true })}
              className="input input-bordered my-2 input-primary w-full "
            />
            <label class="label">
              <span class="label-text-alt text-base font-semibold text-red-600">
                {errors.new_password?.type === "required" &&
                  "New Password is required"}
              </span>
            </label>
          </div>

          <div>
            <label class="label">
              <span class="label-text text-xl font-bold">
                Confirm Password:
              </span>
            </label>
            <input
              type="password"
              {...register("confirm_password", { required: true })}
              className="input input-bordered my-2 input-primary w-full "
            />
            <label class="label">
              <span class="label-text-alt text-base font-semibold text-red-600">
                {errors.confirm_password?.type === "required" &&
                  "confirm Password is required"}
              </span>
            </label>
          </div>

          <div className=" flex items-center gap-2">
            <input
              onClick={() => setAgree(!agree)}
              type="checkbox"
              name=""
              id="tramsCondition"
            />
            <label htmlFor="tramsCondition">
              Accept our all
              <span className=" mx-2 cursor-pointer text-[16px] font-semibold hover:text-green-500">
                trams & condition
              </span>
            </label>
          </div>
          <div>
            <p className="ext-base text-left ml-5 font-semibold text-red-600">
              {error}
            </p>
          </div>
          <div>
            <input
              disabled={!agree}
              type="submit"
              value="SignUp"
              className="btn w-full my-2 btn-success "
            />
          </div>
        </form>
        <div>
          <p className=" text-center font-medium">
            Already have an account?
            <Link
              to="/login"
              className="text-lg mx-1 font-semibold text-green-600"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <div class="divider">OR</div>
      <div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;
