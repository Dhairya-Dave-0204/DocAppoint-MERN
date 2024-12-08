import React from "react";
import { FaqAccordian } from "../../components/component_index";

function FAQ() {
  return (
    <>
      <h1 className="mt-10 mb-20 text-6xl font-semibold text-center underline underline-offset-8 decoration-primary">
        FAQ's
      </h1>

      <div className="flex flex-col py-6 mb-24 xl:px-60 lg:flex-row gap-x-14 gap-y-8">
        <div className="p-5 rounded-lg md:px-10 lg:shadow-lg basis-1/2">
          <form action="#" method="POST" className="w-full">
            <h4 className="text-lg font-medium text-primary">FAQ's</h4>
            <h3 className="mb-5 text-5xl">
              All Your Questions Have Answers Here!
            </h3>

            <div className="flex flex-col gap-3 mb-5">
              <label htmlFor="fullname">Name</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="h-10 border border-gray-500 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-3 mb-5">
              <label htmlFor="mail">Email</label>
              <input
                type="email"
                name="mail"
                id="mail"
                className="h-10 border border-gray-500 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-3 mb-5">
              <label htmlFor="question">Question</label>
              <textarea
                name="question"
                id="question"
                className="h-32 border border-gray-500 rounded-md"
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
