const Tour = ({ tour: { image, info, name, price } }) => {
  //   const { image, info, name, price } = tour;
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />

      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
        <div className="info-btn text">Read More</div>
        <button className="btn btn-block delete-btn">Not interested</button>
      </div>
    </article>
  );
};
export default Tour;
