import React from "react";

const Extra = () => {
  return (
    <div className="flex flex-col  lg:flex-row-reverse gap-10 bg-slate-300 heading ">
      <div className=" flex-1">
        <img
          src="https://htmldemo.net/tm/oswan/oswan/assets/img/banner/banner-1.png"
          alt=""
          className=" w-[400px]"
        />
      </div>
      <div className=" flex-1 py-8">
        <h1 className=" text-4xl font-bold">
          <span className="text-success">P-Store House</span> WORLD MOST
        </h1>
        <h2 className="my-2 text-2xl font-bold">LATGEST MOTORCYCLE STORE</h2>
        <p className=" w-10/12 mx-auto text-base font-medium">
          <span className="text-success">P-Store House</span> the most latgest
          bike store in the wold can serve you latest qulity of motorcycle also
          you can sell here your motorcycle it quo minus iduod maxie placeat
          facere possimus, omnis voluptas assumenda est, omnis dolor llendus.
          Temporibus autem quibusdam
        </p>
      </div>
    </div>
  );
};

export default Extra;
