import React from "react";

const About = () => {
  return (
    <div className=" px-10">
      <div className=" my-10 heading font-bold text-4xl px-10">
        <h1>
          About <span className=" text-success">Us</span>
        </h1>
      </div>
      <div className=" flex flex-col md:flex-row gap-20 my-10">
        <div className="flex-1">
          <img
            src="https://pngroyale.com/wp-content/uploads/2022/02/office-workers-desk-nael-graphicriver-.png"
            alt=""
          />
        </div>
        <div className=" flex-1 text-left text-[18px] my-2  font-medium">
          <p>
            <span className=" font-bold heading text-success">
              P-Store House
            </span>{" "}
            is Store product and sell customer Whole sell. We give 1 year
            warranty and Lifetime service warranty. On the other hand We give
            special product in replacement garenty
          </p>
          <br />
          <p>
            Teamwork is not only for the teams. For example, you can see
            evidence of the joint work of the committee, which is not
            necessarily regarded as a team. In this context, teamwork can be a
            random co-operation to work effectively together for periods of
            time. But not always!
          </p>
          <br />
          <p>
            In order to determine the work of the team that, you may want to
            clarify that there is, and think about the difference between the
            teams and teamwork. In our opinion, there is one team where
            individual strengths and skills combined with teamwork in the
            pursuit of the general direction of, or cause to produce meaningful
            results for the members of the team and the organization. The team
            combines a strong personality with overall responsibility for the
            implementation, it is not just about getting fit together.
          </p>
          <br />

          {/* <p>
            Teamwork is absolutely fundamental for the team to work effectively.
            Only when the skills and strengths of the individual members of the
            team joined in a common purpose, and emphasis on collective
            performance will begin to see the advantages of the team at work.
            Teamwork implies that people are working in an atmosphere of mutual
            support and trust, working together united with the good relations
            between the two groups. It should also encourage the increased
            maturity of the relationship, where people are free to disagree
            constructively, and where support and challenge are part of a team
            work assistance.
          </p> */}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-center my-10">
        <div className=" w-96 shadow-2xl px-7 py-12 rounded-lg">
          <div className=" text-center my-3 heading font-bold text-3xl ">
            <h1 className=" uppercase mb-5">
              Contact <span className=" text-success">Information</span>
            </h1>
          </div>
          <div className=" text-left heading">
            <ul>
              <li className=" text-[18px] flex items-center gap-2 my-2 font-[400]">
                <span className=" text-3xl text-gray-600">
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                <span className="mx-3">
                  4578 Marmora Road, <br /> Glasgow D04 89GR
                </span>
              </li>
              <li className=" text-[18px] flex items-center gap-2 my-2 font-[400]">
                <span className=" text-2xl text-gray-600">
                  <i class="fa-solid fa-phone"></i>
                </span>
                <span className="mx-3">18002345678</span>
              </li>
              <li className=" text-[18px] flex items-center gap-2 my-2 font-[400]">
                <span className=" text-2xl text-gray-600">
                  <i class="fa-solid fa-at"></i>
                </span>
                <span className="mx-3">info@demolink.org</span>
              </li>
              <li className=" text-[18px] flex items-center gap-2 my-2 font-[400]">
                <span className=" text-2xl text-gray-600">
                  <i class="fa-solid fa-clock"></i>
                </span>
                <span className="mx-3">
                  Opening Hours: <br />
                  Mon-Sat 8:00 am to 8:00 pm
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className=" w-96 shadow-2xl px-7 py-2 rounded-lg">
          <div className=" text-center my-3 heading font-bold text-3xl ">
            <h1 className=" uppercase">
              Get in <span className=" text-success">Touch</span>
            </h1>
          </div>
          <div>
            <form>
              <div>
                <input
                  placeholder="Name"
                  //   {...register("email", { required: true })}
                  className="input input-bordered my-1 input- focus:outline-none w-full "
                />
              </div>
              <div>
                <input
                  placeholder="Email"
                  //   {...register("email", { required: true })}
                  className="input input-bordered my-1 input- focus:outline-none w-full "
                />
              </div>
              <div>
                <input
                  placeholder="Phone"
                  //   {...register("email", { required: true })}
                  className="input input-bordered my-1 input- focus:outline-none w-full "
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  //   {...register("email", { required: true })}
                  className="input input-bordered my-1  h-16 focus:outline-none w-full "
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <div className=" w-32">
                <button className=" btn btn-success w-full">
                  Send <i class="fa-solid fa-paper-plane ml-2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
