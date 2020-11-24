import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      <main className="App-main">
        <article className="Card">
          <h2 className="Card-title">Haircut</h2>
          <h2 className="Card-metric">
            <span>6 </span>days
          </h2>
        </article>
      </main>
      <footer className="App-footer">
        <button>New</button>
        <button>Edit</button>
        <button>Delete</button>
      </footer>
    </div>
  );
}

export default App;
