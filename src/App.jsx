import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Tour from "./Tour";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    console.log(newTours);
    setTours(newTours);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // fetchData();

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length < 1) {
    return (
      <main>
        <div className="title">
          <h2>There are no more tours</h2>
          <button
            type="button"
            className="btn"
            onClick={fetchData}
            style={{ marginTop: "2rem" }}
          >
            Reload
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
