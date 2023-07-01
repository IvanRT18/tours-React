import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="title-underline"></div>
      </div>

      <div className="tours">
        {tours.map((tour) => {
          // const { id, image, info, name, price } = ;
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
