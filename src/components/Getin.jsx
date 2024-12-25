import React from "react";

// get in touch form used on the contact us page of the design
function Getin({ heading, phoneNumber = true, className }) {
  return (
    <div className={` p-4 md:p-20 lg:px-40 flex flex-col w-full gap-16 ${className} `}>
      <div className="w-fit">
        <h2 className="w-fit font-bold text-4xl text-primary  font-mono ">
          {heading}
        </h2>
        <p className="  ">
          Feel free to reach out to us with any questions, feedback or
          inquiries. We are here to assist you every step of the way.
        </p>
      </div>
      <form className="flex flex-col gap-8 justify-start items-end" action="">
        <div className="flex flex-col w-full gap-3">
          <label className=" text-base text-black  " htmlFor="name">
            Name*
          </label>
          <input
            className=" p-3 border rounded-xl border-gray-400 "
            type="text"
            name="name"
            placeholder="Enter your first and last name"
          />
          <p></p>
        </div>
        <div className="flex flex-col w-full gap-3 ">
          <label className=" text-base text-black " htmlFor="email">
            Email address*
          </label>
          <input
            className=" p-3 border rounded-xl border-gray-400 "
            type="email"
            name="email"
            placeholder="Enter your email address"
          />
          <p></p>
        </div>

        {phoneNumber && (
          <div className="flex flex-col w-full gap-3 ">
            <label className=" text-base text-black  " htmlFor="phone">
              Phone number*
            </label>
            <input
              className=" p-3 border rounded-xl border-gray-400 "
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
            />
            <p></p>
          </div>
        )}

        <div className="flex flex-col w-full gap-3 ">
          <label className=" text-base text-black  " htmlFor="message">
            Message*
          </label>
          <textarea
            className=" resize-none p-3 border rounded-xl border-gray-400 "
            name="message"
            id="message"
            placeholder="Enter your message"
            rows={6}
          ></textarea>
          <p></p>
        </div>
        <button
          type="submit"
          className=" rounded-full text-white bg-primary py-4 px-8 "
        >
          Send message
        </button>
      </form>
    </div>
  );
}

export default Getin;
