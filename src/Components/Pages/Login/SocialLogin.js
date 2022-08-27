import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate, useLocation } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, gUser, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  if (gUser) {
    navigate(from, { replace: true });
  }

  const handleGoogleSignUp = async () => {
    signInWithGoogle();

    const displayName = await gUser.user.displayName;
    const email = await gUser.user.email;
    const photoURL = await gUser.user.photoURL;

    const user = await {
      displayName,
      email,
      photoURL,
    };
    // await console.log(gUser, user);
    // fetch("https://frozen-retreat-64301.herokuapp.com/user", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(user),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //   });
    // console.log(user);
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignUp}
        className="btn w-full my-2 flex items-center justify-center gap-3 bg-indigo-600 text-white"
      >
        <i class="fa-brands fa-google"></i> SignUp with GooGle
      </button>
      <button className="btn w-full my-2 flex items-center justify-center gap-3 bg-indigo-600 text-white">
        <i class="fa-brands fa-facebook-square text-2xl"></i> SignUp with
        Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
