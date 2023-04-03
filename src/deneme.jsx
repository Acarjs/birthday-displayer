const App = () => {
  const [people, setPeople] = useState(data);
  const [showAll, setShowAll] = useState(false);

  const showAllHandler = () => setShowAll(true);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List
          people={showAll ? people : people.filter((person) => person.birthday)}
        />
        {showAll ? (
          <button
            type="button"
            className="btn btn-block"
            onClick={() => setShowAll(false)}
          >
            Clear All
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-block"
            onClick={showAllHandler}
          >
            Show All
          </button>
        )}
      </section>
    </main>
  );
};

export default App;
