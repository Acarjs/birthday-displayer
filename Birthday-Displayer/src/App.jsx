import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [showAll, setShowAll] = useState(true);

  const buttonHandler = () => setShowAll(!showAll);

  return (
    <main>
      <section className="container">
        {showAll ? (
          <>
            <h3>{data.length} birthdays today</h3>
            <List people={data} />
            <button
              type="button"
              className="btn btn-block"
              onClick={buttonHandler}
            >
              Hide All
            </button>
          </>
        ) : (
          <>
            <h3>No birthday to show</h3>
            <button
              type="button"
              className="btn btn-block"
              onClick={buttonHandler}
            >
              Show All
            </button>
          </>
        )}
      </section>
    </main>
  );
};

export default App;
