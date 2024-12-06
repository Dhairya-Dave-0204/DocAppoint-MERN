import React from "react";

function Contact() {
  return (
    <>
      <div className="bg-[url('./laptop_work.png')] w-full bg-cover bg-no-repeat h-[50vh] flex flex-col items-center justify-center text-white">
        <h2 className="md:text-5xl p-3 text-4xl font-medium md:-mt-16 md:mb-2">
          Conatct Us
        </h2>
        <p className="text-center px-3 text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          modi molestias
          <br /> et sapiente praesentium quaerat?
        </p>
      </div>

      <div className="text-white flex items-center p-3 mt-10 justify-center relative mb-10 md:mb-80">
        <form
          method="POST"
          autoComplete="off"
          action="#"
          className="bg-gray-800 p-8 rounded-2xl max-w-lg md:max-w-5xl w-full md:absolute md:-top-52"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-300 mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Bonnie"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white outline-none border-none focus:outline-primary"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-300 mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Green"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white outline-none border-none focus:outline-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@flowbite.com"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white outline-none border-none focus:outline-primary"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                placeholder="+12 345 6789"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white outline-none border-none focus:outline-primary"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Leave a comment..."
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white outline-none border-none focus:outline-primary"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="bg-primary hover:scale-105 text-white py-2 px-4 rounded-md transition-all duration-500"
            >
              Send message
            </button>
          </div>
        </form>
      </div>

      <div className="px-12 xl:px-60 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-center p-10">
          <i className="ri-mail-line text-4xl text-white rounded-xl mb-3 bg-primary p-4"></i>
          <h3 className="text-2xl font-medium mb-2">Email us:</h3>
          <p className="text-center mb-2">Email us for general queries, including marketing <br /> and partnership opportunities.</p>
          <p className="hover:underline cursor-pointer hover:text-primary">hello@docappoint.com</p>
        </div>
        
        <div className="flex flex-col items-center justify-center p-10">
          <i className="ri-phone-line text-4xl text-white rounded-xl mb-3 bg-primary p-4"></i>
          <h3 className="text-2xl font-medium mb-2">Call us:</h3>
          <p className="text-center mb-2">Call us to speak to a member of our team. We <br /> are always happy to help.</p>
          <p className="hover:underline cursor-pointer hover:text-primary">+91 1234567890</p>
        </div>
        
        <div className="flex flex-col items-center justify-center p-10">
          <i class="ri-map-pin-line text-4xl text-white rounded-xl mb-3 bg-primary p-4"></i>
          <h3 className="text-2xl font-medium mb-2">Location</h3>
          <p className="text-center mb-2">Loacte us on the map globally so that you can <br /> solve your issues physically.</p>
          <p className="hover:underline cursor-pointer hover:text-primary">loaction link</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
