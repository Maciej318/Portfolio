import React from "react";
import FeedbackCards from "./FeedbackCards";

export const FeedbackSection = () => {
  return (
    <div id="whyme" className="w-full h-auto p-4 pt-20 md:px-20 mt-10">
      <h1 className="text-2xl md:text-3xl tracking-tighter mb-4 md:mb-6">
        What My Clients Say?
      </h1>
      <p className="tracking-tighter w-full md:w-2/3 lg:w-1/2 mb-6 md:mb-10 ">
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using Content here.
      </p>
      <FeedbackCards/>
    </div>
  );
};
