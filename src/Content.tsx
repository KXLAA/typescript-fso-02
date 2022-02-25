import React from "react";

type ContentType = {
  name: string;
  exerciseCount: number;
};

type ContentProps = {
  content: ContentType[];
};

const Content = ({ content }: ContentProps) => {
  return (
    <div>
      {content.map(({ name, exerciseCount }) => (
        <p key={name}>
          {name} {exerciseCount}
        </p>
      ))}
    </div>
  );
};

export default Content;
