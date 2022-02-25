import React from "react";
import { courseParts } from "./types";

courseParts.forEach((part) => {
  switch (part.name) {
    case "Fundamentals":
      break;
    case "Advanced":
      break;
    case "Using props to pass data":
      break;
    case "Deeper type usage":
      break;
    case "Backend development":
      break;
    default:
      break;
  }
});

const Part = () => {
  return <div>Part</div>;
};

export default Part;
