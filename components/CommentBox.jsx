import React from "react";

const CommentBox = ({ title, content1, content2, content3 }) => {
  return <div className="bg-gray-200 w-[300px] self-start h-auto p-3 shadow-lg rounded-lg">

      <h1 className="font-bold text-lg">{ title }</h1>
      <p className="font-light indent-8 underline underline-offset-1 decoration-red-400 decoration-4"> {content1}</p>
      <p className="font-light">{content2}</p>
      <br />
      <p className="font-light underline underline-offset-1 decoration-blue-400 decoration-4">{content3}</p>

  </div>;
};

export default CommentBox;
