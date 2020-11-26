import React from "react";
export const Component = ({ name }: { name?: string }) => {
  return (
    <header className="hi">
      <h1>Activity tracker</h1>
      <section>
        <button>Login</button>
      </section>
      <section>
        <h2>another set of deadlifts</h2>
        <p>
          Goal is to complete each set every 3 days. Current set is around 8x
          with 30lbs. Note that I can...
        </p>
        <div>
          <button>Just did it!</button>
          <button>Postpone</button>
        </div>
      </section>
    </header>
  );
};
