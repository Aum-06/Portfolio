import React from "react";

const Contact = ({ id }) => {
  return (
    <div
      id={id}
      className="flex-grow flex w-full max-w-7xl mx-auto px-4 py-12"
    >
      <div className="w-full max-w-6xl">
        <h1 className="text-6xl font-bold mb-4 text-gray-800">
          <span className="text-blue-600">Contact</span>
        </h1>
        <form action="" className="w-full">
          <div className="mb-4 w-full">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2 dark:text-white">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full p-2 rounded-md outline-none border border-gray-300 focus:border-blue-500 bg-none dark:bg-inherit "
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2 dark:text-white">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full p-2 rounded-md outline-none border border-gray-300 focus:border-blue-500 dark:bg-inherit"
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2 dark:text-white">Message</label>
            <textarea
              id="message"
              placeholder="Message"
              className="w-full p-2 rounded-md outline-none border h-40 resize-none border-gray-300 focus:border-blue-500 dark:bg-inherit"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 duration-200 transform hover:scale-110 transition-transform"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
