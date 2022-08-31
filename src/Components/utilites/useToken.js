import React, { useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState();

  const email = user?.user?.email;

  if (email) {
    fetch(`https://thawing-crag-90386.herokuapp.com/login/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("accessToken", data.accessToken);
          setToken(data.accessToken);
        }
        console.log(data);
      });
  }

  return [token];
};

export default useToken;
