import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useUpdatePassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { async } from "@firebase/util";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading";

const ResetPass = ({ setResetEmail }) => {
  //   const [updatePassword, updating, UPerror] = useUpdatePassword(auth);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (sending || loading) {
    return <Loading></Loading>;
  }

  const onSubmit = async (data) => {
    setLoading(true);
    const email = data.email;
    //  console.log(data);
    // await updatePassword(email);
    await sendPasswordResetEmail(email);
    if (error) {
      //   await console.log(error);
      await toast.error("Cannot Find Any Account, Please Correct Email");
    } else {
      await toast.success(
        "Resent Password send Your Email, Please check Your Email"
      );
      await setResetEmail(false);
      await setLoading(false);
    }
  };

  return (
    <div className="card mx-auto my-5 p-8 sm:p-3 card-compact sm:w-96 bg-base-100 shadow-2xl">
      <h1 className="text-center text-2xl font-bold"> Reset Password</h1>
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

        {error && (
          <span class="label-text-alt text-base font-semibold text-red-600">
            Email is n't correct
          </span>
        )}
        <div>
          <input
            type="submit"
            value="Reset Password"
            className="btn w-full my-2 btn-success "
          />
        </div>
      </form>
      <div>
        <button
          onClick={() => setResetEmail(false)}
          className=" cursor-pointer text-[18px] font-semibold text-green-500 hover:text-green-600"
        >
          Go Login
        </button>
      </div>
    </div>
  );
};

export default ResetPass;
