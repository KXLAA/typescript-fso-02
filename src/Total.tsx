import React from "react";

type TotalProps = {
  total: number;
};

const Total = ({ total }: TotalProps) => {
  return <div> Number of exercises {total}</div>;
};

export default Total;
