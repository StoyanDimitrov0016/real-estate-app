import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import "leaflet/dist/leaflet.css";

import { Link } from "react-router-dom";

const Pin = ({ item }) => {
  const { latitude, longitude, img, title, id, bedroom, price } = item;

  return (
    <Marker position={[latitude, longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={img} alt="offer image" />
          <div className="textContainer">
            <Link to={`/${id}`}>{title}</Link>
            <span>{bedroom} bedroom</span>
            <b>$ {price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
