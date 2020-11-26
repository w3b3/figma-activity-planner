import React from "react";
export const Component = ({ a }: { a?: string }) => {
  return (
    <article className="Card">
      <h2 className="Card-title">Haircut</h2>
      <h2 className="Card-metric">
        <span>6 </span>days
      </h2>
    </article>
  );
};
