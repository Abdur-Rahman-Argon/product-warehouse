import React, { useEffect } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate, useLocation } from "react-router-dom";
import useToken from "../../utilites/useToken";
import Loading from "../../Shared/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, gUser, SLoading, error] = useSignInWithGoogle(auth);

  const [user, loading] = useAuthState(auth);
  const [token] = useToken(gUser);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  if ((gUser || user) && token) {
    navigate(from, { replace: true });
  }

  // if (SLoading || loading) {
  //   return <Loading></Loading>;
  // }

  const handleGoogleSignUp = async () => {
    signInWithGoogle();

    // const displayName = await gUser.user.displayName;
    // const email = await gUser.user.email;
    // const photoURL = await gUser.user.photoURL;

    // const user = await {
    //   displayName,
    //   email,
    //   photoURL,
    // };
    // await console.log(gUser, user);
    // fetch(`${process.env.REACT_APP_PRO_URL}/user`, {
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
        className="btn btn-outline w-full my-2 flex items-center justify-center gap-3 "
      >
        <i class="fa-brands fa-google text-red-600 text-xl"></i> SignUp with
        GooGle
      </button>
      <button className="btn btn-outline w-full my-2 flex items-center justify-center gap-3">
        <i class="fa-brands fa-facebook-square text-blue-600 text-2xl"></i>
        SignUp with Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
