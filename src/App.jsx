import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Tour from "./Tour";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

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

  return (
    <>
      <main>
        <h2 className="title">Our tours</h2>
        <h2 className="title-underline"></h2>
        <div className="tours">
          {tours ? (
            tours.map((tour) => {
              // const { id, image, info, name, price } = ;
              return <Tour key={tour.id} tour={tour} />;
            })
          ) : (
            <Loading />
          )}
        </div>
      </main>
    </>
  );
};
export default App;
