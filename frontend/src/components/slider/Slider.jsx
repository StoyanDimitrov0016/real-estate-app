import "./slider.scss";

const Slider = ({ images }) => {
  const [mainImage, ...restOfImages] = images;
  return (
    <div className="slider">
      <div className="bigImage">
        <img src={mainImage} alt="Main Image" />
      </div>
      <div className="smallImages">
        {restOfImages.map((image, index) => (
          <img src={image} alt="Secondary image" key={index} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
