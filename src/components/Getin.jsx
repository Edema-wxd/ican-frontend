import React from "react";

function Getin() {
  return (
    <div className="px-40 py-20 flex flex-col w-full gap-16">
      <div>
        <h2 className="w-fit font-bold text-4xl text-primary  font-mono ">
          GET IN TOUCH
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
