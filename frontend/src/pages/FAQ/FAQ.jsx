import React from "react";
import { FaqAccordian } from "../../components/component_index";

function FAQ() {
  return (
    <>
      <h1 className="mt-10 mb-20 text-center text-6xl font-semibold underline underline-offset-8 decoration-primary">
        FAQ's
      </h1>

      <div className="xl:px-60 py-6 flex lg:flex-row flex-col gap-x-14 gap-y-8 mb-24">
        <div className="p-5 md:px-10 rounded-lg lg:shadow-lg basis-1/2">
          <form action="#" method="POST" className="w-full">
            <h4 className="text-primary text-lg font-medium">FAQ's</h4>
            <h3 className="text-5xl mb-5">
              All Your Questions Have Answers Here!
            </h3>

            <div className="flex flex-col gap-3 mb-5">
              <label htmlFor="fullname">Name</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="border border-gray-500 rounded-md h-10"
              />
            </div>

            <div className="flex flex-col gap-3 mb-5">
              <label htmlFor="mail">Email</label>
              <input
                type="email"
                name="mail"
                id="mail"
                className="border border-gray-500 rounded-md h-10"
              />
            </div>

            <div className="flex flex-col gap-3 mb-5">
              <label htmlFor="question">Question</label>
              <textarea
                name="question"
                id="question"
                className="border border-gray-500 rounded-md h-32"
              />
            </div>
          </form>
        </div>

        <hr className="hidden lg:block w-[2px] h-[560px] bg-primary"/>

        <div className="basis">
          <FaqAccordian />
        </div>
      </div>
    </>
  );
}

export default FAQ;
