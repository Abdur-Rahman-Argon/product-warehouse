import React, { useState } from "react";
import { useForm } from "react-hook-form";
import pic from "./../../../images/image.png";
// import pic from "./../../../images/image2.jpg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";

const AddNewProduct = () => {
  const [user] = useAuthState(auth);

  const [imgUrl, setImgUrl] = useState(pic);
  const [imageUrl, setImageUrl] = useState();
  const [imageData, setImageData] = useState();
  const [loading, setLoading] = useState(false);

  const imageStorageKey = "2380d2dfbb3a1a216d57453cbd4c3837";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImgUrl(URL.createObjectURL(file));
    const image = file;
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    setImageData(formData);
  };

  if (loading) {
    return <Loading></Loading>;
  }

  const onSubmit = async (data) => {
    setLoading(true);
    const itemsInformation = {
      userName: user.displayName,
      UserEmail: user.email,
      image: imageUrl,
      itemsName: data.itemsName,
      supplierName: data.supplierName,
      price: data.price,
      quantity: data.quantity,
      stock: data.quantity,
      delivery: 0,
      description: data.description,
    };

    // --- image post on data-base
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: imageData,
    })
      .then((res) => res.json())
      .then((result) => {
        setImageUrl(result.data.display_url);
      });

    //--- items data post on data-base
    const url2 = `${process.env.REACT_APP_PRO_URL}/AllItems`;
    await fetch(url2, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(itemsInformation),
    }).then((res) =>
      res.json().then((result) => {
        toast.success("Your Information Update Successful!");
        navigate("/");
        setLoading(false);
      })
    );
  };

  return (
    <div className=" w-full heading lg:w-[800px] p-5 my-20 mx-auto border-[1px] shadow-2xl rounded-lg">
      <div>
        <h1 className="font-bold text-4xl mb-5">
          Please Add <span className=" text-success">New Items</span>
        </h1>
      </div>
      <div class="  mx-auto border-[2px] rounded-md border-gray-200 p-2">
        <div class="avatar w-52  mx-auto ">
          <img src={imgUrl} className="w-full" alt="" />
        </div>

        <div className=" flex gap-6 items-center">
          <label class="label w-44">
            <span class=" text-[16px] font-semibold"> Image Select : </span>
          </label>
          <input type="file" onChange={onImageChange} className=" " required />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/*  */}
        <div className="my-2">
          <label class="label">
            <span class="label-text font-semibold"> Title Name : </span>
          </label>
          <input
            type="text"
            {...register("itemsName")}
            placeholder="items title"
            className=" font-medium text-sm py-2 px-5 focus:outline-none border-[1px] border-gray-300 rounded-lg w-full"
          />
        </div>

        {/*  */}
        <div className="my-2">
          <label class="label">
            <span class="label-text font-semibold"> Supplier Name : </span>
          </label>
          <input
            type="text"
            {...register("supplierName")}
            placeholder="Supplier Name"
            className=" font-medium text-sm py-2 px-5 focus:outline-none border-[1px] border-gray-300 rounded-lg w-full"
          />
        </div>

        {/*  */}
        <div className="my-2">
          <label class="label">
            <span class="label-text font-semibold"> Price : </span>
          </label>
          <input
            type="number"
            {...register("price")}
            placeholder="price"
            className=" font-medium text-sm py-2 px-5 focus:outline-none border-[1px] border-gray-300 rounded-lg w-full"
          />
        </div>

        {/*  */}
        <div className="my-2">
          <label class="label">
            <span class="label-text font-semibold"> Total quantity : </span>
          </label>
          <input
            type="number"
            {...register("quantity")}
            placeholder=" total quantity"
            className=" font-medium text-sm py-2 px-5 focus:outline-none border-[1px] border-gray-300 rounded-lg w-full"
          />
        </div>

        {/*  */}
        <div className="my-2">
          <label class="label">
            <span class="label-text font-semibold"> Description : </span>
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="4"
            type="text"
            {...register("description")}
            placeholder="items short description write here"
            className=" font-medium text-base py-2 px-5 focus:outline-none border-[1px] border-gray-300 rounded-lg w-full"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="text-lg font-semibold rounded-lg w-full p-[9px] my-5 mx-0 bg-success border-[1px] border-gray-200"
          >
            {" "}
            Add Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewProduct;
